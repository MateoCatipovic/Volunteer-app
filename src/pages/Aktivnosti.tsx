import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "../components/List";
import AddModal from "../components/AddModal";

const apiAktivnosti = "http://localhost:3001/aktivnosti";

const Aktivnosti = () => {
  const [aktivnosti, setAktivnosti] = useState([]);
  const [sortOrder, setSortOrder] = useState("createdAt"); // Default sort order
  const [cityFilter, setCityFilter] = useState("")

  useEffect(() => {
    fetchAktivnosti2();
  }, [sortOrder, cityFilter]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCityFilter(e.target.value);
  };

  const fetchAktivnosti = async () => {
    try {
      const response = await axios.get(`${apiAktivnosti}?_sort=${sortOrder}`);
      setAktivnosti(response.data);
      console.log(aktivnosti);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const fetchAktivnosti2 = async () => {
    try {
      let url = `${apiAktivnosti}?`;
      if (cityFilter) {
        url += `city=${encodeURIComponent(cityFilter)}&`;
      }
      if (sortOrder) {
        url += `_sort=${encodeURIComponent(sortOrder)}&`;
      }
      const response = await axios.get(url);
      setAktivnosti(response.data);
    } catch (error) {
      console.error("Error fetching aktivnosti:", error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-[120px] ">
      <h2 className="font-semibold text-3xl">Aktivnosti</h2>
      <div className="flex  w-[850px] justify-end mb-4 mt-8">
        <label htmlFor="sortOrder">Sort Order:</label>
        <select
          id="sortOrder"
          className="w-100 h-25 rounded-6 ml-2"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="-createdAt">Date Descending</option>
          <option value="createdAt">Date Ascending</option>
        </select>

        <label className="ml-4" htmlFor="cityFilter">Filter by city:</label>
        <select
          id="cityFilter"
          className="w-100 h-25 rounded-6 ml-2"
          value={cityFilter}
          onChange={handleFilterChange}
        >
          <option value="">Svi gradovi</option>
          <option value="Split">Split</option>
          <option value="Solin">Solin</option>
          <option value="Makarska">Makarska</option>
          <option value="Sinj">Sinj</option>
          <option value="Trogir">Trogir</option>
          <option value="Trilj">Trilj</option>
          <option value="Imotski">Imotski</option>
          <option value="Kaštela">Kaštela</option>
        </select>
      </div>
      <List aktivnosti={aktivnosti} fetchAktivnosti={fetchAktivnosti} />
      <div className="flex justify-end w-[850px]">
        <AddModal fetchAktivnosti={fetchAktivnosti} />
      </div>
    </div>
  );
};

export default Aktivnosti;
