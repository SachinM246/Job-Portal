import React from 'react'
import Navbar from '../components_lite/Navbar'
import Sachin from './Creator.jpg';

const Creator = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
          {/* Image Section */}
          <div className="flex justify-center">
            <img src={Sachin} alt="Sachin Mathur" className="h-80 object-cover rounded-lg shadow-md" />
          </div>
          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Sachin Mathur</h2>
            <p className="text-gray-600 mb-2">Sachin Mathur completed his <strong>B.Tech in Metallurgical and Materials Engineering</strong> from <strong>Indian Institute of Technology, Roorkee</strong>, in <strong>2020</strong> with a CGPA of 6.0.</p>
            <p className="text-gray-600 mb-2">During his undergraduate studies, he served as <strong>Deputy Secretary of Himalayan Explorers Club</strong>, <strong>Unit Manager at Empower Bharat</strong>, and <strong>Coordinator at Cognizance</strong>. He also earned a <strong>Blue Belt and Silver Medal in Taekwondo</strong>.</p>
            <p className="text-gray-600 mb-2">He then pursued his <strong>M.Tech in Corrosion Engineering</strong> from <strong>Indian Institute of Technology, Roorkee</strong>, completing in <strong>2023</strong> with a CGPA of 6.5. During this time, he served as a <strong>Teaching Assistant for Introduction to Machine Learning</strong> and won <strong>Gold in Snatak Football</strong>.</p>
            <p className="text-gray-600">With <strong>2+ years of professional experience</strong>, he has worked as a <strong>Senior Software Engineer at Uniconnect Intelligent Tech</strong> and <strong>Backend Developer at TechAAG</strong>, specializing in full-stack development with technologies including <strong>React, Node.js, Express.js, MongoDB, PostgreSQL</strong>, and modern web technologies.</p>
          </div>
        </div>
      </div>
      <hr className="w-full border-gray-300 my-6" />
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Developers and Designers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Developer 1 */}
          <a href="#" className="block text-center">
            <img
              src="https://placehold.co/600x400/png"
              alt="Developer"
              className="mx-auto rounded-lg shadow-md w-full max-w-xs"
            />
            <h3 className="text-lg font-semibold text-gray-700 mt-2">Developer Name</h3>
            <p className="text-gray-600 text-sm">Full Stack Developer</p>
          </a>
          {/* Developer 2 */}
          <a href="#" className="block text-center">
            <img
              src="https://placehold.co/600x400/png"
              alt="Designer"
              className="mx-auto rounded-lg shadow-md w-full max-w-xs"
            />
            <h3 className="text-lg font-semibold text-gray-700 mt-2">Designer Name</h3>
            <p className="text-gray-600 text-sm">UI/UX Designer</p>
          </a>
          {/* Developer 3 */}
          <a href="#" className="block text-center">
            <img
              src="https://placehold.co/600x400/png"
              alt="Developer"
              className="mx-auto rounded-lg shadow-md w-full max-w-xs"
            />
            <h3 className="text-lg font-semibold text-gray-700 mt-2">Developer Name</h3>
            <p className="text-gray-600 text-sm">Full Stack Developer</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Creator