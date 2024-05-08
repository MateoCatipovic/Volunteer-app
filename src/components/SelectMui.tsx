import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {memo} from "react"

const SelectMui = (props) => {
  const handleChange = (event: SelectChangeEvent) => {
    props.setFormData((prevData) => ({
      ...prevData,
      [props.id]: event.target.value,
    }));
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Grad</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={props.value}
          onChange={handleChange}
          label="Grad"
        >
          <MenuItem value="Split">Split</MenuItem>
          <MenuItem value="Solin">Solin</MenuItem>
          <MenuItem value="Makarska">Makarska</MenuItem>
          <MenuItem value="Sinj">Sinj</MenuItem>
          <MenuItem value="Trogir">Trogir</MenuItem>
          <MenuItem value="Trilj">Trilj</MenuItem>
          <MenuItem value="Imotski">Imotski</MenuItem>
          <MenuItem value="Kaštela">Kaštela</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

const SelectMuiMemo = memo(SelectMui);
export default SelectMuiMemo