import { useEffect, useState } from "react";
import { fakeList } from "../utils/list";
import Typography from "../components/Typography";
import Fab from "../components/Fab";
import TableList from "../components/TableList";

export default function List() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fakeList().then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <>
      <Typography variant="h2" sx={{ textAlign: "center", margin: "20px" }}>
        Nossa lista!
      </Typography>
      <TableList items={items} />
      <Fab />
    </>
  );
}
