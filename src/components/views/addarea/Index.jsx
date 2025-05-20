import React, { useState } from "react";
import "./Area.css"

const Addarea = () => {
  const [areas, setAreas] = useState([]);
  const [search, setSearch] = useState("");
  const [newArea, setNewArea] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const areasPerPage = 5;

  const handleAddArea = () => {
    if (newArea.trim()) {
      setAreas([...areas, newArea.trim()]);
      setNewArea("");
    }
  };

  const filteredAreas = areas.filter((area) =>
    area.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAreas.length / areasPerPage);
  const indexOfLast = currentPage * areasPerPage;
  const indexOfFirst = indexOfLast - areasPerPage;
  const currentAreas = filteredAreas.slice(indexOfFirst, indexOfLast);

  return (
    <div className="addarea-container">
      {/* Left - Add Area */}
      <div className="addarea-left">
        <h2>Add Area</h2>
        <input
          type="text"
          value={newArea}
          onChange={(e) => setNewArea(e.target.value)}
          placeholder="Enter area name"
        />
        <button onClick={handleAddArea}>Add</button>
      </div>

      {/* Right - Show/Search Areas */}
      <div className="addarea-right">
        <h2>Area List</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search areas"
        />

        <ul className="area-list">
          {currentAreas.length > 0 ? (
            currentAreas.map((area, idx) => (
              <li key={idx} className="area-item">
                {area}
              </li>
            ))
          ) : (
            <p>No areas found.</p>
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

export default Addarea;
