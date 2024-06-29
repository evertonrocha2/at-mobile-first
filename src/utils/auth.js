import { signInWithEmailAndPassword, signOut } from "firebase/auth";

//Usuário e Senha pro senhor testar: tiagomobilefirst@gmail.com
//senha tiagomobile

const isLoggedIn = (navigate) => {
  const user = window.localStorage.getItem("user");
  const route = window.location.pathname;
  if (user) {
    if (route === "/login") {
      navigate("/");
    } else {
      return;
    }
  } else {
    navigate("/login");
  }
};

const authLogin = async (auth, email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = response.user;
    if (user) {
      window.localStorage.setItem("user", JSON.stringify(user));
      return "";
    }
  } catch (e) {
    console.error(e);
    return e.message;
  }
};

const authLogout = (auth) => {
  signOut(auth);
  window.localStorage.removeItem("user");
  window.location.reload();
};

export { isLoggedIn, authLogin, authLogout };
