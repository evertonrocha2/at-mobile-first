import { TextField as TextFieldMaterial } from "@mui/material"

export default function TextField(props) {
    return (
        <TextFieldMaterial
            label={props.label}
            variant={props.variant || 'outlined'}
            fullWidth
            margin="normal"
            {...props}
        />
    )
}