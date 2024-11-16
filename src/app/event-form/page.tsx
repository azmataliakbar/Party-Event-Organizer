"use client";

/* import React from "react";
import EventForm from "@/app/components/EventForm"; // Import EventForm
import { EventDetails } from "@/app/types"; // Import the shared type

const NewEventPage = () => {
  const handleSave = (eventDetails: Omit<EventDetails, "id">) => {
    const eventWithId = { ...eventDetails, id: Date.now() }; // Add id here
    console.log("Event Details:", eventWithId);

    const existingEvents = JSON.parse(localStorage.getItem("events") || "[]");
    const updatedEvents = [...existingEvents, eventWithId];

    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  return (
    <div>
      <p className="mb-1 text-red-500 hover:text-blue-500 hover:scale-105 font-bold">
        Organize and manage your events effectively.
      </p>
      <h2 className="text-3xl mb-1 font-bold hover:text-blue-600 hover:scale-y-125">New Event</h2>
      <EventForm onSave={handleSave} />
    </div>
  );
};

export default NewEventPage; */



// src/app/event-form/page.tsx

import React from "react";
import EventForm from "@/app/components/EventForm"; // Import the EventForm component

const EventFormPage = () => {
  return (
    <div className="p-4 flex flex-col">
  {/* New Event Title */}
  <h1 className="text-3xl font-bold text-blue-500 font-sans hover:text-red-500 hover:scale-y-150 md:text-4xl sm:text-2xl">
    New Event
  </h1>
  
  {/* Booking Date */}
  <h1 className="text-[14px] text-left my-4 lg:text-right font-bold text-black font-sans hover:text-red-500 md:text-lg sm:text-sm">
    Booking Date: ___ / ___ / ________
  </h1>
  
  {/* Event Form */}
  <EventForm />
</div>
  );
};

export default EventFormPage;










