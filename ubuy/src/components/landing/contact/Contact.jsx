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
            placeholder="I have the following problem..."
          ></textarea>
        </div>
        <button className="submit-contact">Send Message</button>
      </div>
      <div className="contact-splitter">
        <span>OR</span>
      </div>
      <div className="findus-wrapper">
        <div className="contact-title">Find Us At</div>
        <div className="findus-blocks">
          <div className="findus-block">
            <div className="icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="title">Email</div>
            <div className="desc">ubuy@ubuy.com</div>
          </div>
          <div className="findus-block">
            <div className="icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="title">Location</div>
            <div className="desc">Petrich, Bulgaria</div>
          </div>
          <div className="findus-block">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="title">Phone</div>
            <div className="desc">+359 87 123 4567</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
