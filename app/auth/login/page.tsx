import { Stack, Typography } from "@mui/material";
import Login from "../../modules/login/components/Login";


export default function LoginPage() {
    return (
        <Stack spacing={2} className="w-full max-w-xs">
            <Typography variant="h1" color="text.primary">
                Login
            </Typography>
            <Login />
        </Stack>
    );
}