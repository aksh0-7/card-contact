import React from "react";
import "./ContactSearch.css";

const ContactSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        className="
              input
              "
        type="text"
        placeholder="Search by name or phone"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default ContactSearch;
