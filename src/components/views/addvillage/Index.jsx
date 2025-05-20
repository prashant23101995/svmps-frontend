import React, { useState } from "react";
import "../addarea/Area.css";

const Addvillage = () => {
  const [villages, setVillages] = useState([]);
  const [search, setSearch] = useState("");
  const [newVillage, setNewVillage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const villagesPerPage = 5;

  const handleAddVillage = () => {
    if (newVillage.trim()) {
      setVillages([...villages, newVillage.trim()]);
      setNewVillage("");
    }
  };

  const filteredVillages = villages.filter((village) =>
    village.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredVillages.length / villagesPerPage);
  const indexOfLast = currentPage * villagesPerPage;
  const indexOfFirst = indexOfLast - villagesPerPage;
  const currentVillages = filteredVillages.slice(indexOfFirst, indexOfLast);

  return (
    <div className="addarea-container">
      {/* Left - Add Village */}
      <div className="addarea-left">
        <h2>Add Village</h2>
        <input
          type="text"
          value={newVillage}
          onChange={(e) => setNewVillage(e.target.value)}
          placeholder="Enter village name"
        />
        <button onClick={handleAddVillage}>Add</button>
      </div>

      {/* Right - Show/Search Villages */}
      <div className="addarea-right">
        <h2>Village List</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search villages"
        />

        <ul className="area-list">
          {currentVillages.length > 0 ? (
            currentVillages.map((village, idx) => (
              <li key={idx} className="area-item">
                {village}
              </li>
            ))
          ) : (
            <p>No villages found.</p>
          )}
        </ul>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={currentPage === i + 1 ? "active" : ""}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Addvillage;
