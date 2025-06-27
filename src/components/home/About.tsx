import Image from 'next/image';

export default function About() {
  return (
    <div id="about" className="h-screen flex flex-col justify-center items-center p-4">
      <div className="flex flex-col items-center mb-4">
        {/* Image */}
        <div className="relative md:w-64 md:h-64 w-48 h-48 rounded-full overflow-hidden mb-4">
          <Image
            src="/images/profile.jpeg" // Replace with your image path
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Title */}
        <div className="text-center">
          <h2 className="md:text-5xl text-3xl font-bold mb-2">About Me</h2>
          <p className="text-lg w-3/4 mx-auto">
            A brief introduction about who I am and what I do.
            Hello from the other side I am thinking of making this visible only on large screens 
          </p>

        </div>
      </div>

      {/* Paragraph Blocks */}
      <div className="max-w-2xl text-center">
        <p className="mb-4 lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          More information about my skills, experience, and passions.
        </p>
      </div>
    </div>
  );
}
// import Image from 'next/image';

// export default function About() {
//   return (
//     <div className="h-screen bg-yellow-500 flex flex-col justify-center items-center p-4">
//       <div className="flex flex-col md:flex-row items-center mb-4 md:mb-8">
//         {/* Image */}
//         <div className="relative md:w-64 md:h-64 w-48 h-48 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-8">
//           <Image
//             src="/images/profile.jpeg" // Replace with your image path
//             alt="Profile Picture"
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>

//         {/* Title */}
//         <div className="text-center md:text-left">
//           <h2 className="md:text-5xl text-3xl font-bold mb-2">About Me</h2>
//           <p className="text-lg">
//             A brief introduction about who I am and what I do.
//           </p>
//           <p className="text-lg">
//             Hello from the other side I am thinking of making this visible only on large screens 
//           </p>
//         </div>
//       </div>

//       {/* Paragraph Blocks */}
//       <div className="max-w-2xl text-center">
//         <p className="mb-4 lg:text-lg">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//           ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat.
//         </p>
//         {/* <p className="mb-4">
//           Duis aute irure dolor in reprehenderit in voluptate velit esse
//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//           cupidatat non proident, sunt in culpa qui officia deserunt mollit
//           anim id est laborum.
//         </p> */}
//         <p>
//           More information about my skills, experience, and passions.
//         </p>
//       </div>
//     </div>
//   );
// }