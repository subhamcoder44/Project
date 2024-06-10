import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
            <form className="bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-lg mb-2">Feel free to reach out to me via email or connect with me on social media.</p>
            <p className="text-lg mb-2"><strong>Email:</strong> <a href="mailto:subham7320@gmail.com" className="text-blue-500 hover:underline">subham3720@gmail.com</a></p>
            <p className="text-lg mb-2"><strong>LinkedIn:</strong> <a href="linkedin.com/in/subham roy" className="text-blue-500 hover:underline">subham Roy</a></p>
            <p className="text-lg mb-2"><strong>GitHub:</strong> <a href="https://github.com/subhamcoder44" className="text-blue-500 hover:underline">Subham roy</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
