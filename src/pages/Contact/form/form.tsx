import React, { useState, useEffect } from "react";
import style from "./form.module.css";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("contactForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Carregar usuários existentes do localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // Adicionar o novo usuário à lista existente
    existingUsers.push(formData);

    // Salvar a lista atualizada de usuários no localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Limpar o formulário
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    alert("Formulário enviado com sucesso!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
            onChange={handleChange}
            value={formData[field.name as keyof typeof formData]} // Para manter os dados persistidos
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
localStorage.clear();
