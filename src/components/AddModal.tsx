import { memo, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InputMemo from "./Input";
import SelectMuiMemo from "./SelectMui";
import RadioMuiMemo from "./RadioMui";
import TextFieldMuiMemo from "./TextFieldMui";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",

  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};

const initialFormData = {
  // Initial form data
  id: uuidv4(),
  name: "",
  city: "",
  date: "",
  radioUdruga: true,
  udruga: "",
  description: "",
};

 const AddModal = (props) => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [disabledUdruga, setDisabledUdruga] = useState(true);
  const initialDate = new Date(); // Get today's date
  const formattedDate = formatDate(initialDate);
  const [formData, setFormData] = useState(initialFormData);

  // Function to format date to dd/mm/yyyy
  function formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function parseDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    console.log(formData);
    // Get the current date
    const currentDate = formattedDate;
    // Add the current date to the form data
    const formDataWithDate = {
      ...formData,
      createdAt: currentDate,
      volonteri: []
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/aktivnosti",
        formDataWithDate
      );
      props.fetchAktivnosti();
      // Reset form data after successful submission
      setFormData(initialFormData);
      handleClose();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="text-3xl text-blue-500 border border-gray-300 rounded-[10px] px-4 py-2"
        onClick={handleOpen}
      >
        +
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <InputMemo
            id="name"
            value={formData.name}
            setFormData={setFormData}
            label="Naziv"
            disabled={false}
          />
          <SelectMuiMemo
            id="city"
            value={formData.city}
            setFormData={setFormData}
          />

          <div className="flex flex-col mt-4 p-[8px]">
            <label className="text-gray-500" htmlFor="datum">
              Datum:
            </label>
            <input
              id="date"
              // value={formData.date} // Convert to yyyy-mm-dd format
              onChange={(event) => {
                console.log(event.target.value);
                const formattedDateString = parseDate(event.target.value); // Convert the Date object back to string
                setFormData((prevData) => ({
                  ...prevData,
                  date: formattedDateString, // Set the date as a string
                }));
              }}
              className="border-2  focus:border-blue-500 outline-none rounded-md px-3 py-2 mt-1"
              type="date"
            />
          </div>
          <RadioMuiMemo
            id="radioUdruga"
            value={formData.radioUdruga}
            setFormData={setFormData}
            disabled={disabled}
            setDisabled={setDisabled}
          />
          <InputMemo
            id="udruga"
            value={formData.udruga}
            setFormData={setFormData}
            label="Udruga"
            disabled={disabled}
          />
          <TextFieldMuiMemo
            id="description"
            value={formData.description}
            setFormData={setFormData}
          />
          <div className="flex justify-center mt-4">
            <Button variant="outlined" onClick={handleSubmit}>
              Dodaj
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

const AddModalMemo = memo(AddModal)
export default AddModalMemo;