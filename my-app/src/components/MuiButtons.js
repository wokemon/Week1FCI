import { Button, Stack } from "@mui/material";

export const MyButton = () => {
    return (
        <Stack className="button" spacing={ 4 } direction={"row"} justifyContent={"center"} alignItems={"center"}>
            <Button variant="text" href="https://google.com" target="blank">Google</Button>
            <Button variant="contained" href="https://github.com" target="blank">Github</Button>
            <Button variant="outline" href="https://facebook.com" target="blank">Facebook</Button>
        </Stack>
    )
}