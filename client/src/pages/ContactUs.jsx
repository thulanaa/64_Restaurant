import React from "react";

const ContactUs = () => {
  return (    
    <div className="bg-gray-50 p-10 min-h-screen">
      <section className="py-16  bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-cursive font-bold mb-8">Contact Us</h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            We’d love to hear from you! Whether you have questions, feedback, or just want to say hi, feel free to reach out.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="text-left px-32">
              <h3 className="text-2xl font-bold mb-4">Our Location</h3>
              <p className="text-gray-700 mb-4">
                <strong>Address:</strong> 123 Food Street, Flavor Town, FT 56789
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="text-gray-700 mb-8">
                <strong>Email:</strong> contact@restaurant.com
              </p>

              <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
              <ul className="text-gray-700">
                <li className="mb-2">Monday - Friday: 10:00 AM - 10:00 PM</li>
                <li className="mb-2">Saturday: 12:00 PM - 11:00 PM</li>
                <li className="mb-2">Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
