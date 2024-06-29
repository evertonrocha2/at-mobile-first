import { Suspense, lazy, useEffect, useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import { authLogout } from "./utils/auth";
import Fab from "./components/Fab";

const firebaseConfig = {
  apiKey: "AIzaSyDmyMClHzBN47G-nluLzD4O-WAiMJcEmr8",
  authDomain: "react-2024-4e47b.firebaseapp.com",
  databaseURL: "https://react-2024-4e47b-default-rtdb.firebaseio.com",
  projectId: "react-2024-4e47b",
  storageBucket: "react-2024-4e47b.appspot.com",
  messagingSenderId: "191906785124",
  appId: "1:191906785124:web:e349464c68fa68663cbc71",
};

const LoginPage = lazy(() => import("./pages/Login"));
const HomePage = lazy(() => import("./pages/Home"));
const ListPage = lazy(() => import("./pages/List"));
const FormPage = lazy(() => import("./pages/Form"));

function App() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);
  return (
    <>
      <Router>
        {user ? <Navbar logout={() => authLogout(auth)} /> : null}
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/"
              element={
                user ? <Navigate to="/home" /> : <Navigate to="/login" />
              }
            />
            <Route path="/" element={<LoginPage auth={auth} />} />
            <Route path="/login" element={<LoginPage auth={auth} />} />
            <Route path="/home" element={<HomePage auth={auth} />} />
            <Route path="/listas" element={<ListPage auth={auth} />} />
            <Route path="/formulario" element={<FormPage auth={auth} />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
