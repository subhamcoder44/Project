import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="text-white bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://scontent.fccu1-2.fna.fbcdn.net/v/t39.30808-6/437550647_1138469034043309_7677953139176422759_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WKpGc1VudmMQ7kNvgFdI3RR&_nc_ht=scontent.fccu1-2.fna&oh=00_AYA77G1qKYo-8WfdHdprE2TFBZ-q_SlL0WxDKfSEUF4mUA&oe=666A709B"
              alt="[Your Name]"
              className="w-64 h-64 rounded-full mx-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed mb-6">
            I am a passionate and skilled MERN stack developer with a strong foundation in building dynamic, responsive, and high-performing web applications. My expertise spans across the entire development process, from designing intuitive user interfaces with React and Tailwind CSS to creating robust back-end systems with Node.js, Express, and MongoDB. I thrive on solving complex problems and continuously seek opportunities to learn and grow in the ever-evolving field of web development.
            </p>
            <p className="text-lg leading-relaxed mb-6">
            My journey as a developer has equipped me with a deep understanding of full-stack development, enabling me to contribute effectively to every stage of a project. I am dedicated to leveraging my skills to build innovative solutions that meet the needs of users and businesses alike.
            </p>
            <p className="text-lg leading-relaxed mb-6">
             
            </p>
            <a
              href="#contact"
              className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-500 transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
