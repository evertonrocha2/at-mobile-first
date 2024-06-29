import { Alert as AlertMaterial } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function Alert(props) {
  return (
    <AlertMaterial
      icon={<CheckIcon fontSize="inherit" />}
      severity={props.severity || "success"}
      sx={{ width: "100%" }}
    >
      {props.children}
    </AlertMaterial>
  );
}
