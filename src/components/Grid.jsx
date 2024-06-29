import { Grid as GridMaterial } from "@mui/material";

export default function Grid(props) {
    // eslint-disable-next-line react/prop-types
    return <GridMaterial {...props}>{props.children}</GridMaterial>;
}


