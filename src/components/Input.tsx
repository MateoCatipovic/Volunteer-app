import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Input(props: any) {
  const handleInputChange = (event) => {
      props.setFormData((prevData) => ({
        ...prevData,
        [props.id]: event.target.value
      }))
      
  }
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {!props.disabled ? (
        <TextField id={props.id} label={props.label} value={props.value} onChange={handleInputChange} variant="standard" />
      ) : (
        <TextField
          id={props.id}
          label={props.label}
          value={props.value}
          onChange={handleInputChange}
          variant="standard"
          disabled
        />
      )}
      {/* <TextField id={props.id} label={props.label} variant="standard" /> */}
      {/* <TextField id="date" label="Datum" variant="standard" /> */}
    </Box>
  );
}
