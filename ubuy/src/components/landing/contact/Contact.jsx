import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-form">
        <div className="contact-title">Contact Us</div>
        <div className="contact-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="input-area"
            name="name"
            placeholder="Ivan Ivanov"
          />
        </div>
        <div className="contact-field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="input-area"
            name="email"
            placeholder="ivan_ivanov@gmail.com"
          />
        </div>
        <div className="contact-field long">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            className="input-area"
            name="subject"
            placeholder="Problem with product listing"
          />
        </div>
        <div className="contact-field long">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            cols={30}
            rows={10}
            className="input-area"
            placeholder="I have the following problem......"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
