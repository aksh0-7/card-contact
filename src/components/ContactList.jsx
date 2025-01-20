import React, { useState } from "react";
import "./ContactList.css";

const ContactList = ({ contacts, updateContact, deleteContact }) => {
  const [editingContactId, setEditingContactId] = useState(null);
  const [editedContact, setEditedContact] = useState({});

  const handleEditClick = (contact) => {
    setEditingContactId(contact.id);
    setEditedContact(contact); // Pre-fill the form with the existing contact details
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedContact({ ...editedContact, [name]: value });
  };

  const handleSave = () => {
    updateContact(editingContactId, editedContact);
    setEditingContactId(null); // Exit edit mode
  };

  const handleCancel = () => {
    setEditingContactId(null); // Exit edit mode without saving
  };

  return (
    <ul>
      {contacts.map((contact) => (
        <li style={{ listStyle: "none" }} key={contact.id}>
          {editingContactId === contact.id ? (
            // Inline edit form
            <div className="edit">
              <input
                type="text"
                name="name"
                value={editedContact.name}
                onChange={handleInputChange}
                placeholder="Name"
              />
              <input
                type="text"
                name="phone"
                value={editedContact.phone}
                onChange={handleInputChange}
                placeholder="Phone"
              />
              <input
                type="email"
                name="email"
                value={editedContact.email}
                onChange={handleInputChange}
                placeholder="Email"
              />
              <input
                type="text"
                name="address"
                value={editedContact.address}
                onChange={handleInputChange}
                placeholder="Address"
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            // Display contact details
            <div className="contact-display">
              <strong>{contact.name}</strong> -- {contact.phone} --
              {contact.email} -- {contact.address}
              <div className="buttons">
                <button onClick={() => handleEditClick(contact)}>Edit</button>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
