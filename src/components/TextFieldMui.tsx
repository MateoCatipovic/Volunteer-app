import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextFieldMui(props) {
  const handleChange = (event) => {
    props.setFormData((prevData) => ({
      ...prevData,
      [props.id]: event.target.value,
    }));
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-multiline-static"
          value={props.value}
          onChange={handleChange}
          label="Opis"
          multiline
          rows={4}
          variant="filled"
          style={{ width: "100%", marginTop: "6px" }}
        />
      </div>
    </Box>
  );
}
