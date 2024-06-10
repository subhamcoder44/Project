import React from 'react';

const MainSection = () => {
  return (
    <main className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hello, I'm subham Roy</h1>
            <p className="text-xl leading-relaxed mb-6">
            Hello!myself Subham roy,and I'm a fullstack web developer. I have knowledge of HTML, CSS, JavaScript,React, Express,  MongoDB . On my portfolio website, you can find examples of my work, including the projects I have completed and the technologies I have used. If you need help with a project or have any questions, please do not hesitate to reach out. I look forward to helping you bring your ideas to life!
            </p>
            <a href="/Contact" className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-500 transition duration-300">Get in Touch</a>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-right">
            <img src="https://scontent.fccu1-2.fna.fbcdn.net/v/t39.30808-6/437550647_1138469034043309_7677953139176422759_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WKpGc1VudmMQ7kNvgFdI3RR&_nc_ht=scontent.fccu1-2.fna&oh=00_AYA77G1qKYo-8WfdHdprE2TFBZ-q_SlL0WxDKfSEUF4mUA&oe=666A709B" alt="[Your Name]" className="w-64 h-64 rounded-full mx-auto md:ml-auto md:mr-0 mb-8 md:mb-0" />
          </div>
        </div>
        <div className="mt-12">
          
          <div className="flex flex-wrap justify-center items-center">
        
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
