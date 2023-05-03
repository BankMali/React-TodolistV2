import { TextField } from "@mui/material"

export function Input(props) {
  return (
    <TextField 
    fullWidth
    label={<h1>{props.label}</h1>}
    variant={props.variant || "outlined"}
    placeholder={props.placeholder}
    name={props.name}
    type={props.type || "text"}
    error={props.error}
    {...props}
    ></TextField>
  )
}

