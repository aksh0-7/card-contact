import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = ({ addContact }) => {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name && contact.phone) {
      addContact(contact);
      setContact({ name: "", phone: "", email: "", address: "" });
    }
  };

  return (
    <div className="contactCard">
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={contact.name}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <input
          name="phone"
          placeholder="Phone"
          value={contact.phone}
          onChange={handleChange}
          required
        /><br />
        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
        /><br />
        <input
          name="address"
          placeholder="Address"
          value={contact.address}
          onChange={handleChange}
        /><br />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
