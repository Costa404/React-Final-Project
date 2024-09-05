import React, { useState } from "react";
import style from "./form.module.css";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    alert("Formulário enviado com sucesso!");
  };

  const formFields = [
    { id: "name", name: "name", placeholder: "Name:", type: "text" },
    { id: "email", name: "email", placeholder: "Email:", type: "email" },
    {
      id: "subject",
      name: "subject",
      placeholder: "Your Subject:",
      type: "text",
    },
    {
      id: "message",
      name: "message",
      placeholder: "Your Message:",
      type: "text",
    },
  ];

  return (
    <form onSubmit={handleSubmit} className={style.input}>
      {formFields.map((field, index) => (
        <div key={index} className={style.inputCustom}>
          <input
            type={field.type}
            name={field.name}
            id={field.id}
            placeholder={field.placeholder}
            value={formData[field.name as keyof typeof formData]}
          />
        </div>
      ))}
      <div className={style.inputCustom}>
        <button className={style.inputCustom} type="submit">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
// localStorage.clear();
