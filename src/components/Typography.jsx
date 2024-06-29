import { Typography as TypographyMaterial } from "@mui/material";

export default function Typography(props) {
    return (<>
        <TypographyMaterial variant={props.variant} component="div" {...props} gutterBottom>{props.children}</TypographyMaterial>
    </>)
}