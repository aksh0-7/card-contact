import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import ContactSearch from "./components/ContactSearch";

import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch contacts from the JSON server
  useEffect(() => {
    axios
      .get("http://localhost:5000/contacts")
      .then((response) => setContacts(response.data))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []);

  // Add a new contact
  const addContact = (newContact) => {
    axios
      .post("http://localhost:5000/contacts", newContact)
      .then((response) => setContacts([...contacts, response.data]))
      .catch((error) => console.error("Error adding contact:", error));
  };

  // Update a contact
  const updateContact = (id, updatedContact) => {
    axios
      .put(`http://localhost:5000/contacts/${id}`, updatedContact)
      .then(() =>
        setContacts(
          contacts.map((contact) =>
            contact.id === id ? { ...contact, ...updatedContact } : contact
          )
        )
      )
      .catch((error) => console.error("Error updating contact:", error));
  };

  // Delete a contact
  const deleteContact = (id) => {
    axios
      .delete(`http://localhost:5000/contacts/${id}`)
      .then(() => setContacts(contacts.filter((contact) => contact.id !== id)))
      .catch((error) => console.error("Error deleting contact:", error));
  };

  // Filter contacts by search term
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm)
  );

  return (
    <>
      <h1>Contact Book</h1>
      <ContactSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container">
        <div className="addcontact">
          <ContactForm addContact={addContact} />
        </div>
        <div className="details">
          <ContactList
            contacts={filteredContacts}
            updateContact={updateContact}
            deleteContact={deleteContact}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
