import { IconButton as IconButtonMaterial } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function IconButton(props) {
    return (
        <IconButtonMaterial >
            {props.children}
        </IconButtonMaterial>
    )
}