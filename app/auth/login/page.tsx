import { Button, Link, Stack, TextField, Typography } from "@mui/material";

export default function LoginPage() {
    return (
        <Stack spacing={2} className="w-full max-w-xs">
            <Typography variant="h1" color="text.primary">
                Login
            </Typography>
            <TextField label="Email" variant="outlined" type="email" />
            <TextField label="Password" variant="outlined" type="password" />
            <Button variant="contained" color="primary">Login</Button>
            <Typography variant="body2" color="text.secondary">
                Don't have an account? <Link href="/auth/signup">Sign up</Link>
            </Typography>
        </Stack>
    );
}