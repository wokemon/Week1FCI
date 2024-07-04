import { TextField, Stack } from "@mui/material"

export function MyTextfield() {
    return (
        <Stack
            className="textfield"
            component="form"
            autoComplete="off"
            noValidate
            direction={"column"}
        >
            <TextField label="Username" variant="outlined" />
            <TextField label="Password" variant="outlined" />
        </Stack>
    );
   
}