import { useState } from "react";
import axios from "axios";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");

    try {
      const response = await axios.post("/contact", { name, email, message });
      console.log("Contact form submitted successfully");
      console.log("Server response:", response.data);

      // Clear form fields after successful submission
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  };

  console.log("Contact form component rendered");

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Submitfdsafds
      </button>
    </form>
  );
};

export default ContactForm;
