import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        Get in <span>Touch</span>
      </motion.h2>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Let's talk about everything!</h3>
          <p>Don't like forms? Send me an email ✌️</p>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>mihirdodeja2004@gmail.com</span>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <span>+91 9879805427</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>Ahmedabad, Gujarat  </span>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}
        >
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
