import "./Contact.css";

export const Contact = () => {
  return (
    <section className="contact-page page">
      <h1>Contact Us</h1>
      <form>
        <input placeholder="email" />
        <input placeholder="subject" />
        <textarea placeholder="content" />
        <button type="submit">SEND EMAIL</button>
      </form>
    </section>
  );
};
