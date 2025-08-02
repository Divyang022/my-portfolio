"use client";

export default function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const response = await fetch("https://formspree.io/f/xldllwja", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setTimeout(() => {
        window.location.href = "/contact";
      }, 500);
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <label>
        Your Name
        <input
          type="text"
          name="name"
          required
          placeholder="Insert your name here..."
          className="custom-input"
        />
      </label>

      <label>
        Email Address
        <input
          type="email"
          name="email"
          required
          placeholder="What's your email address?"
          className="custom-input"
        />
      </label>

      <label>
        Your Message
        <textarea
          name="message"
          required
          placeholder="What you want to say...?"
          rows="5"
          className="custom-input"
        />
      </label>

      <button
        type="submit"
        style={{
          padding: "0.7rem 1.5rem",
          backgroundColor: "#09010cff",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          marginTop: "1rem",
          borderRadius: "5px",
        }}
      >
        Send
      </button>
    </form>
  );
}
