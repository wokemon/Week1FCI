import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";

export function Fetch() {
    const [data, setdata] = useState({
        name: "",
        age: 0,
        date: "",
        programming: "",
    });

    useEffect(() => {
        fetch("/data").then((res) =>
            res.json().then((data) => {
                setdata({
                    name: data.Name,
                    age: data.Age,
                    date: data.Date,
                    programming: data.programming,
                });
            }));
    }, []);

    return (
        <Stack direction={"column"} >
            <h1>React fetchs Flask data</h1>
            <p>{data.name}</p>
            <p>{data.age}</p>
            <p>{data.date}</p>
            <p>{data.programming}</p>
        </Stack>
    );
}