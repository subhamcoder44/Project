import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'JavaScript',  },
    { name: 'HTML & CSS',  },
    { name: 'Tailwind CSS',  },
    { name: 'React',  },
    { name: 'Node.js',},
    {name: 'Express'},
    {name:'Mongo DB',},
    { name: 'Git & GitHub', },
    // Add more skills as needed
  ];

  return (
    <section id="skills" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">What I Know</h2>
        <div className="flex flex-wrap justify-center items-center">
          {skills.map((skill, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-black shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default SkillsSection;

