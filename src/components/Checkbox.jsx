import { Checkbox as CheckboxMaterial, FormControlLabel } from "@mui/material";

export default function Checkbox({ checked, onChange, name, label }) {
  return (
    <FormControlLabel
      control={
        <CheckboxMaterial checked={checked} onChange={onChange} name={name} />
      }
      label={label}
    />
  );
}
