import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { memo } from "react";

const RadioMui = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setFormData((prevData) => ({
      ...prevData,
      [props.id]: event.target.value,
    }));
    props.setDisabled(event.target.value === "Da" ? false : true);
  };

  return (
    <FormControl style={{ marginLeft: "5px", marginTop: "10px" }}>
      <FormLabel id="demo-controlled-radio-buttons-group">Udruga:</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={props.value}
        onChange={handleChange}
      >
        <div className="flex">
          <FormControlLabel value="Da" control={<Radio />} label="Da" />
          <FormControlLabel value="Ne" control={<Radio />} label="Ne" />
        </div>
      </RadioGroup>
    </FormControl>
  );
};

const RadioMuiMemo = memo(RadioMui);
export default RadioMuiMemo;
