import { FaReact, FaNodeJs, FaDatabase, FaAngular, FaVuejs } from 'react-icons/fa'; // Example tech stack icons
import SkillCard from '../common/SkillCard';

export default function Services () {
    return (
    <div className="h-screen">
        <h1 className='text-3xl text-center pt-14'>My Expertise</h1>
        <div className="flex space-x-4 p-10 w-3/4 mx-auto">
      <SkillCard 
        icon={<FaReact />} 
        title="Front-end Development" 
        description="Building modern and dynamic user interfaces using React."
      />
      <SkillCard 
        icon={<FaNodeJs />} 
        title="Backend Development" 
        description="Building server-side applications using Node.js and Express."
      />
      <SkillCard 
        icon={<FaDatabase />} 
        title="System Analysis" 
        description="Managing and optimizing databases for web applications."
      />
    </div>
    <div className="w-full overflow-hidden">
      <div className="flex animate-spin-slow space-x-8">
        <div className="text-4xl text-blue-500">
          <FaReact />
        </div>
        <div className="text-4xl text-green-500">
          <FaNodeJs />
        </div>
        <div className="text-4xl text-yellow-500">
          <FaDatabase />
        </div>
        <div className="text-4xl text-red-500">
          <FaAngular />
        </div>
        <div className="text-4xl text-green-300">
          <FaVuejs />
        </div>
        <div className="text-4xl text-blue-500">
          <FaReact />
        </div>
        <div className="text-4xl text-green-500">
          <FaNodeJs />
        </div>
        <div className="text-4xl text-yellow-500">
          <FaDatabase />
        </div>
        <div className="text-4xl text-red-500">
          <FaAngular />
        </div>
        <div className="text-4xl text-green-300">
          <FaVuejs />
        </div>
        <div className="text-4xl text-blue-500">
          <FaReact />
        </div>
        <div className="text-4xl text-green-500">
          <FaNodeJs />
        </div>
        <div className="text-4xl text-yellow-500">
          <FaDatabase />
        </div>
        <div className="text-4xl text-red-500">
          <FaAngular />
        </div>
        <div className="text-4xl text-green-300">
          <FaVuejs />
        </div>
        <div className="text-4xl text-blue-500">
          <FaReact />
        </div>
        <div className="text-4xl text-green-500">
          <FaNodeJs />
        </div>
        <div className="text-4xl text-yellow-500">
          <FaDatabase />
        </div>
        <div className="text-4xl text-red-500">
          <FaAngular />
        </div>
        <div className="text-4xl text-green-300">
          <FaVuejs />
        </div>
        <div className="text-4xl text-blue-500">
          <FaReact />
        </div>
        <div className="text-4xl text-green-500">
          <FaNodeJs />
        </div>
        <div className="text-4xl text-yellow-500">
          <FaDatabase />
        </div>
        <div className="text-4xl text-red-500">
          <FaAngular />
        </div>
        <div className="text-4xl text-green-300">
          <FaVuejs />
        </div>
        <div className="text-4xl text-blue-500">
          <FaReact />
        </div>
        <div className="text-4xl text-green-500">
          <FaNodeJs />
        </div>
        <div className="text-4xl text-yellow-500">
          <FaDatabase />
        </div>
        <div className="text-4xl text-red-500">
          <FaAngular />
        </div>
        <div className="text-4xl text-green-300">
          <FaVuejs />
        </div>
      </div>
    </div>
    </div>)
}