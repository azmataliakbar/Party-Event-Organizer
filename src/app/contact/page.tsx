import Link from 'next/link';

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center px-2 py-8 space-y-8 bg-black lg:w-full w-[280px]  rounded-lg  overflow-hidden">

      {/* Header */}
      <h1 className="text-3xl sm:text-5xl font-bold text-white animate-slideIn hover:text-red-500 hover:scale-125 text-center">
        Contact Me
      </h1>
      
      {/* Description */}
      <p className="text-base sm:text-lg text-white text-center hover:text-green-500 hover:scale-105 px-4">
        Feel free to reach out to experience event planning that you will remember for years to come.
      </p>

      {/* General Information */}
      <div className="bg-green-100 shadow-md rounded-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md glowing-border-2">
        <h2 className="text-lg sm:text-2xl mb-4 text-gray-700 hover:text-blue-500 hover:scale-110 font-bold">
          Contact Information
        </h2>
        <ul className="space-y-2 text-sm sm:text-base text-gray-600 font-sans">
          <li className="hover:text-red-600 hover:scale-110">
            <strong>Company:</strong> Happy Event Organizer
          </li>
          <li className="hover:text-red-600 hover:scale-110">
            <strong>Name:</strong> Azmat Ali
          </li>
          <li className="hover:text-red-600 hover:scale-110">
            <strong>Email:</strong> azmat36@yahoo.com
          </li>
          <li className="hover:text-red-600 hover:scale-110">
            <strong>Email:</strong> azmat136@hotmail.com
          </li>
          <li className="hover:text-red-600 hover:scale-110">
            <strong>Email:</strong> azmataliakbar@gmail.com
          </li>
          <li className="hover:text-red-600 hover:scale-110">
            <strong>Phone:</strong> 00-92-333-2236799
          </li>
          <li className="hover:text-red-600 hover:scale-110">
            <strong>WhatsApp:</strong> 00-92-333-2236799
          </li>
          <li className="hover:text-red-600 hover:scale-110">
            <strong>LinkedIn:</strong>
            <Link
              href="https://www.linkedin.com/in/azmat-ali-akbar-3246282b"
              target="_blank"
              className="text-blue-500 underline break-words hover:text-red-500"
            >
              www.linkedin.com/in/azmat-ali-akbar-3246282b
            </Link>
          </li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        <Link href="/">
          <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded transition hover:bg-blue-300 hover:text-black font-bold">
            Home
          </button>
        </Link>
        <Link href="/event-form">
          <button className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded transition hover:bg-green-300 hover:text-black font-bold">
            Fill Form
          </button>
        </Link>
      </div>

      {/* Footer */}
      <h4 className="text-xs sm:text-sm text-gray-500">Author: Azmat Ali</h4>
    </main>
  );
}
