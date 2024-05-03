import React, { useState, useEffect } from "react";
import axios from "axios";

const api = "http://localhost:3001/aktivnosti";

const Aktivnosti = () => {
  const [aktivnosti, setAktivnosti] = useState([]);
  const [sortOrder, setSortOrder] = useState("id"); // Default sort order

  useEffect(() => {
    fetchAktivnosti();
  }, [sortOrder]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const fetchAktivnosti = async () => {
    try {
      const response = await axios.get(`${api}?_sort=${sortOrder}`);
      setAktivnosti(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  return (
    <div className="mt-[86px]">
      <h2>Aktivnosti</h2>
      {aktivnosti.map((aktivnost) => (
        <p key={aktivnost.id}>
          {aktivnost.name} - {aktivnost.description}
        </p>
      ))}
    </div>
  );
};

export default Aktivnosti;
