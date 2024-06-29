import { Alert as AlertMaterial } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

export default function Alert() {
    return (<AlertMaterial icon={<CheckIcon fontSize="inherit" />} severity="success" sx={{ width: '100%' }}>
        Here is a gentle confirmation that your action was successful.
    </AlertMaterial>
    )
}
