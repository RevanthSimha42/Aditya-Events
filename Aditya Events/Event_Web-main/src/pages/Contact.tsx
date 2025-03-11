import { useState, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send,
} from 'lucide-react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
			"service_urebtfa",
			"template_ad6d9uf",
			{
				user_name: formData.name,
				user_email: formData.email,
				user_phone: formData.phone,
				event_type: formData.eventType,
				event_date: formData.date,
				message: formData.message,
			},
			"KFgE3_yPs6YcwoT9s"
		)
		.then(() => {
			console.log("SUCCESS!");
			setFormSubmitted(true);


          // Reset form after submission
          setTimeout(() => {
            setFormData({
              name: '',
              email: '',
              phone: '',
              eventType: '',
              date: '',
              message: '',
            });
            setFormSubmitted(false);
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 bg-gradient-amber-pink text-white"
      >
        <div className="container text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you! Reach out to discuss your event needs or to schedule a consultation.
          </p>
        </div>
      </motion.section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <div className="bg-gradient-amber-pink text-white rounded-xl p-8 h-full">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Our Location</h3>
                      <p className="text-white opacity-80">
                        Bharat Nagar, Kukatpally, Hyderabad, Telangana, India – 500018
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Phone Number</h3>
                      <p className="text-white opacity-80">+91 77022 51024</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Email Address</h3>
                      <p className="text-white opacity-80">
                      adityaevents47@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                    <p className="font-medium">Thank you for contacting us!</p>
                    <p>We've received your message and will get back to you shortly.</p>
                  </div>
                ) : null}

                <form ref={formRef} onSubmit={sendEmail}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label>Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label>Event Type *</label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Select Event Type</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Corporate">Corporate Event</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label>Event Date *</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label>Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="form-input"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
