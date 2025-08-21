"use client"
import React from 'react';

const TrainingPage = () => {
  const trainingSections = [
    {
      title: "Engineering Training",
      description: "Our Engineering Training program is designed for aspiring and current engineers who want to deepen their expertise in additive manufacturing. We cover advanced topics in 3D printing technology, materials science, and design for manufacturability (DfM). Participants gain hands-on experience with industry-standard equipment and software.",
    },
    {
      title: "Industry Exposure",
      description: "This program offers a comprehensive overview of the additive manufacturing landscape, tailored for professionals transitioning into the industry. We provide insights into market trends, key players, and the entire production workflow, from initial design to finished part. It’s ideal for managers, strategists, and technical sales teams.",
    },
    {
      title: "Workshop Training",
      description: "Our intensive workshops provide hands-on training in specific 3D printing technologies and applications. Led by industry experts, these sessions focus on practical skills and real-world problem-solving. Participants leave with the ability to operate equipment, prepare files, and troubleshoot common printing issues.",
    },
    {
      title: "Professional Development",
      description: "This track is designed for professionals seeking to advance their careers in the additive manufacturing industry. We focus on leadership, project management, and strategic planning within a high-tech environment. The curriculum is developed to build management skills tailored to the unique challenges of digital fabrication.",
    },
    {
      title: "Soft Skills",
      description: "Technical expertise is only half the equation. Our Soft Skills module hones communication, teamwork, and problem-solving abilities essential for success in a collaborative engineering environment. We equip professionals with the interpersonal skills needed to lead projects and drive innovation.",
    },
    {
      title: "Technical Fundamentals",
      description: "Perfect for beginners, this course covers the essential principles of 3D printing. We explore the core technologies, common materials, and foundational software used in the industry. This program builds a strong base for anyone new to additive manufacturing, from students to seasoned professionals.",
    },
    {
      title: "Interview & Internship Prep",
      description: "Gain a competitive edge in the job market with our specialized preparation course. We provide mock interviews, resume workshops, and portfolio reviews tailored to the additive manufacturing industry. Our goal is to equip candidates with the confidence and knowledge to secure top internships and full-time positions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-white text-black pt-24 pb-20 font-['NeueMontreal'] relative overflow-hidden">
      {/* Faint orange gradient at the top right */}
      <div className="pointer-events-none absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 via-orange-100/30 to-white rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-primary/20 via-orange-100/20 to-white rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 mb-16 animate-fade-in-up">
        <div className="inline-block mb-4">
          <div className="flex items-center space-x-2 bg-orange-100 rounded-full py-1 px-3 mb-4 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium font-['NeueMontreal'] text-black">Development</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-['MonumentExtended'] text-black tracking-tight leading-tight relative">
          Training <span className='text-primary'>Programs</span>
          <div className="absolute -bottom-3 left-0 w-20 h-1 bg-primary"></div>
        </h1>
        <p className="text-xl text-black max-w-3xl font-['NeueMontreal']">
          Empowering the next generation of additive manufacturing experts with industry-leading training.
        </p>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainingSections.map((section, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl border border-orange-100 hover:border-primary transition duration-300 h-full shadow-xl group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            <h2 className="text-2xl font-bold mb-4 font-['MonumentExtended'] text-primary">{section.title}</h2>
            <p className="text-black font-['NeueMontreal']">{section.description}</p>
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s both; }
      `}</style>
    </div>
  );
};

export default TrainingPage;