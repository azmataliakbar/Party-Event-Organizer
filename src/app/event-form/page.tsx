"use client";

import React from 'react';
import EventForm from '@/app/components/EventForm';

// Define the type with 'id' for EventDetails
type EventDetails = {
  id: number;
  eventName: string;
  eventDate: string;
  bookingDate: string;
  venue: string;
  hostName: string;
  chiefGuest: string;
  activity: string;
  numGuests: number;
  specialRequirements: string;
};

const NewEventPage = () => {
  const handleSave = (eventDetails: Omit<EventDetails, 'id'>) => {
    const eventWithId = { ...eventDetails, id: Date.now() }; // Add id here
    console.log("Event Details:", eventWithId);

    const existingEvents = JSON.parse(localStorage.getItem('events') || '[]');
    const updatedEvents = [...existingEvents, eventWithId];

    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  return (
    <div>
      <p className="mb-1  text-red-500 hover:text-blue-500 hover:scale-105 font-bold">Organize and manage your events effectively.</p>
      <h2 className="text-3xl mb-1 font-bold hover:text-blue-600 hover:scale-y-125">New Event</h2>
      <EventForm onSave={handleSave} />
    </div>
  );
};

export default NewEventPage;


