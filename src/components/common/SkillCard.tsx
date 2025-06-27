import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <div className="w-64 h-64 p-8 rounded-lg shadow-lg border border-blue-500 transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="flex items-center space-x-4">
        <div className="text-4xl text-blue-500">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{description}</p>
    </div>
  );
};

export default SkillCard;
