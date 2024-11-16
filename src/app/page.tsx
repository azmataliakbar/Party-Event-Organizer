// app/page.tsx
"use client";
import React from 'react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="bg-wallpaper rounded-lg text-center">
      <h2 className="text-3xl font-bold mb-4 hover:text-green-500 hover:scale-105">Welcome to Happy Event Organizer Page</h2>
      <p className="mb-4 text-red-500 hover:text-blue-500 hover:scale-105 font-bold">Organize and manage your events effectively.</p>
      <a href="/event-form" className="text-blue-500 underline hover:text-red-500 ">Fill Event Form</a>
      <div className='flex flex-col lg:flex-row mt-20 justify-center gap-8'>
      <Image
      src="/ev1.png"
      alt="Event Form"
      width={250}
      height={200}
      className='rounded-lg  lg:h-72 lg:w-72 object-cover ml-5 sm:ml-7 lg:ml-0'
      />
      <Image
      src="/ev2.png"
      alt="Event Form"
      width={250}
      height={200}
      className='rounded-lg lg:h-72 lg:w-72 object-cover ml-5 lg:ml-0'
      />
      <Image
      src="/ev3.png"
      alt="Event Form"
      width={250}
      height={200}
      className='rounded-lg lg:h-72 lg:w-72 object-cover ml-5 lg:ml-0'
      />
      <Image
      src="/ev4.png"
      alt="Event Form"
      width={250}
      height={200}
      className='rounded-lg mb-4 lg:h-72 lg:w-72 object-cover ml-5 lg:ml-0'
      />

      </div>
    </div>
  );
}