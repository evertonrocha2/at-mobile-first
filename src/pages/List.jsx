import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { fakeList } from "../utils/list";
import Typography from "../components/Typography";
import Fab from "../components/Fab";

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
      <TableContainer
        component={Paper}
        sx={{
          width: "80%",
          margin: "0 auto",
          marginTop: "20px",
          "@media (max-width: 600px)": { width: "90%" },
        }}
      >
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Descrição</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Fab />

    </>
  );
}
