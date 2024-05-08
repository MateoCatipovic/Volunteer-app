import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InputMemo from "./Input";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import {memo, useEffect, useState } from "react";
import { GoTrash } from "react-icons/go";
import { CiEdit } from "react-icons/ci";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 850,
  bgcolor: "background.paper",
  border: "1px solid #000",

  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};
const noviVolonterForm = {
  id: uuidv4(),
  name: "",
  age: "",
  gender: "",
};
const apiAktivnosti = "http://localhost:3001/aktivnosti";

const List = (props) => {
  const [open, setOpen] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [id, setId] = useState(""); // State to store the id of the item to be deleted
  const [activityName, setActivityName] = useState("");
  const [activityData, setActivityData] = useState({
    name: "",
    description: "",
    udruga: "",
    city: "",
    date: "",
  });

  const [noviVolonter, setNoviVolonter] = useState(noviVolonterForm);

  const aktivnosti = props.aktivnosti;

  const handleOpenDeleteModal = (id, name) => {
    setOpen(true);
    setId(id);
    setActivityName(name);
  };

  const handleCloseDeleteModal = () => {
    setOpen(false);
    setId("");
    props.fetchAktivnosti();
  };

  const handleOpenViewModal = (aktivnost) => {
    setOpenView(true);
    setId(aktivnost.id);
    setActivityData((prevData) => ({
      ...prevData,
      name: aktivnost.name,
      description: aktivnost.description,
      udruga: aktivnost.udruga,
      city: aktivnost.city,
      date: aktivnost.date,
    }));

    console.log(activityData);

    // setActivityName(aktivnost.name);
    // setDescription(aktivnost.description);
    // setUdruga(aktivnost.udruga);
    // setCity(aktivnost.city);
    // setDate(aktivnost.date)
  };

  const handleCloseViewModal = () => {
    setOpenView(false);
    setId("");
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${apiAktivnosti}/${id}`);
      handleCloseDeleteModal(); // Close the modal after deletion
      setId("");
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleNewVolonterSubmit = async () => {
    //Filtering aktivnost by id to update it
    const updatedAktivnost = aktivnosti.find(
      (aktivnost) => aktivnost.id === id
    );

    // Clone the updatedAktivnost object to avoid mutating the original object
    const updatedAktivnostClone = { ...updatedAktivnost };

    // Generate a new id for the new volunteer
    const newVolonterId = uuidv4();

    // Clone the noviVolonter object and set the new id
    const noviVolonterNoviId = { ...noviVolonter, id: newVolonterId };

    // Push the noviVolonter object into the volonteri array of the updatedAktivnost object
    updatedAktivnostClone.volonteri.push(noviVolonterNoviId);

    try {
      await axios.patch(`${apiAktivnosti}/${id}`, updatedAktivnost);
      console.log("Aktivnost updated successfully!");
      //Clear all data for new Volonter after upload
      setNoviVolonter(noviVolonterForm);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleDeleteVolonter = async (volonterId) => {
    //Filtering aktivnost by id to update it
    const updatedAktivnost = aktivnosti.find(
      (aktivnost) => aktivnost.id === id
    );

    // Clone the updatedAktivnost object to avoid mutating the original object
    const updatedAktivnostClone = { ...updatedAktivnost };

    // Filtering through volonteri array of objects to find and putting every volonter that does not match volonterId to new array(deleting volonter that matches volonterId)
    const updatedVolonteri = updatedAktivnostClone.volonteri.filter(
      (volonter) => volonter.id !== volonterId
    );

    // Update the volonteri attribute of updatedAktivnostClone
    updatedAktivnostClone.volonteri = updatedVolonteri;

    try {
      await axios.patch(`${apiAktivnosti}/${id}`, {
        volonteri: updatedVolonteri,
      });
      props.fetchAktivnosti(); // Refresh the data
      //setId("");
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <>
      <ul
        role="list"
        className="divide-y divide-gray-200  w-[850px] first-letter:"
      >
        {aktivnosti.map((aktivnost) => (
          <li
            key={aktivnost.id}
            onClick={() => handleOpenViewModal(aktivnost)}
            className="flex justify-between hover:shadow-2xl cursor-pointer gap-x-6 py-5 px-5"
          >
            <div className="flex flex-col min-w-0 gap-x-4 ">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={aktivnost.imageUrl} alt="" /> */}
              <div className="min-w-0 flex-auto text-left ">
                <p className="text-lg font-semibold leading-6 text-gray-900">
                  {aktivnost.name}
                </p>
                <p className="mt-5 truncate text-xs leading-5 text-gray-500">
                  {aktivnost.city}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <div className="flex ">
                {/* <button className="text-blue-600">Edit</button> */}
                {/* <button
                  className="text-red-600 ml-4"
                  onClick={() =>
                    handleOpenDeleteModal(aktivnost.id, aktivnost.name)
                  }
                >
                  Delete
                </button> */}
                <CiEdit
                  style={{
                    color: "blue",
                    padding: "8px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  // onClick={() => handleShow(todo)}
                  cursor="pointer"
                  size={40}
                />
                <GoTrash
                  style={{
                    color: "red",
                    padding: "8px",
                    border: "none",
                    cursor: "pointer",
                    marginLeft: "8px",
                  }}
                  onClick={(e) =>{
                    e.stopPropagation(); // Prevent the click event from propagating to the <li> element
                    handleOpenDeleteModal(aktivnost.id, aktivnost.name)
                  }}
                  cursor="pointer"
                  size={40}
                />
              </div>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                {aktivnost.createdAt}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal for opening details for activity */}
      <Modal
        open={openView}
        onClose={handleCloseViewModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-end">
            <Button
              variant="outlined"
              color="error"
              onClick={handleCloseViewModal}
            >
              x
            </Button>
          </div>
          <div className="flex">
            <div className="w-[33%] p-4">
              <div className="flex flex-col mb-2">
                <label className="font-semibold">Aktivnost:</label>
                <span>{activityData.name}</span>
              </div>
              <div className="flex flex-col mb-2">
                <label className="font-semibold">Datum:</label>
                <span>{activityData.date}</span>
              </div>
              <div className="flex flex-col mb-2">
                <label className="font-semibold">Grad:</label>
                <span>{activityData.city}</span>
              </div>
              <div className="flex flex-col mb-2">
                <label className="font-semibold">Opis:</label>
                <span>{activityData.description}</span>
              </div>
              <div className="flex flex-col mb-2">
                <label className="font-semibold">Udruga:</label>
                <span>{activityData.udruga}</span>
              </div>
            </div>
            <div className="flex flex-col  p-4 w-[33%]">
              <label className="font-semibold">Popis volontera:</label>
              <ul
                role="list"
                className="divide-y divide-gray-200 first-letter:"
              >
                {aktivnosti
                  .filter((aktivnost) => aktivnost.id === id) // Filter aktivnosti to find the one with the matching id
                  .map((aktivnost) =>
                    aktivnost.volonteri.map((volonter) => (
                      <li key={volonter.id}>
                        <div className="flex items-center justify-between">
                          <p>
                            {volonter.name}, {volonter.age}, {volonter.gender}
                          </p>
                          <GoTrash
                            style={{
                              color: "red",
                              padding: "8px",
                              border: "none",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              handleDeleteVolonter(volonter.id);
                            }}
                            cursor="pointer"
                            size={40}
                          />
                        </div>
                      </li>
                    ))
                  )}
              </ul>
            </div>
            {/* Input div for volonteri modal */}
            <div className="flex flex-col p-4 ">
              <h2 className="font-semibold text-xl">Prijavi se!</h2>
              <form>
                <InputMemo
                  id="name"
                  value={noviVolonter.name}
                  setFormData={setNoviVolonter}
                  label="Ime i prezime"
                  disabled={false}
                />
                <InputMemo
                  id="age"
                  value={noviVolonter.age}
                  setFormData={setNoviVolonter}
                  label="Godine"
                  disabled={false}
                />
                <InputMemo
                  id="gender"
                  value={noviVolonter.gender}
                  setFormData={setNoviVolonter}
                  label="Spol"
                  disabled={false}
                />
                <Button
                  style={{ marginLeft: "7px", marginTop: "4px" }}
                  variant="outlined"
                  onClick={handleNewVolonterSubmit}
                >
                  Prijavi se
                </Button>
              </form>
            </div>
          </div>
        </Box>
      </Modal>

      {/* Modal for deleting activity */}
      <Modal
        open={open}
        onClose={handleCloseDeleteModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p>Izbriši {activityName} ?</p>
          <div className="flex mt-4">
            <Button
              style={{ marginRight: "10px" }}
              color="error"
              variant="outlined"
              onClick={handleDelete}
            >
              Izbriši
            </Button>
            <Button variant="outlined" onClick={handleCloseDeleteModal}>
              Odustani
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

const ListMemo = memo(List);
export default ListMemo;
