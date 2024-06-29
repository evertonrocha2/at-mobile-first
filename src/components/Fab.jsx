import { Fab as FabMaterial } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";

export default function Fab() {
  return (
    <>
      <FabMaterial
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <FaWhatsapp />
      </FabMaterial>
    </>
  );
}
