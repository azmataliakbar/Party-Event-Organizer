"use client";

import React, { useState } from 'react';

type EventDetails = {
  eventId: number;
  eventName: string;
  eventDate: string;
  venue: string;
  hostName: string;
  chiefGuest: string;
  activity: string;
  numGuests: number;
  specialRequirements: string;
};

type EventFormProps = {
  onSave: (eventDetails: Omit<EventDetails, "id">) => void;
};

const EventForm: React.FC<EventFormProps> = ({ onSave }) => {
  const [formData, setFormData] = useState<Omit<EventDetails, "id">>({
    eventId: 0, // Initially set eventId to 0
    eventName: '',
    eventDate: '',
    venue: '',
    hostName: '',
    chiefGuest: '',
    activity: '',
    numGuests: 0,
    specialRequirements: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "numGuests" ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.eventName || !formData.eventDate || !formData.venue || !formData.hostName) {
      alert("Please fill in all required fields.");
      return;
    }


    
    onSave(formData);

    setFormData({
      eventId: 0,
      eventName: '',
      eventDate: '',
      venue: '',
      hostName: '',
      chiefGuest: '',
      activity: '',
      numGuests: 0,
      specialRequirements: '',
    });
  };

  const handleDownloadPDF = () => {
    if (typeof window === "undefined") return;

    const element = document.getElementById('event-details');
    if (element) {
      element.classList.remove('hidden');

      import('html2pdf.js').then(html2pdf => {
        html2pdf.default()
          .from(element)
          .set({
            margin: [20, 20, 20, 20],
            filename: `Event_Details_${formData.eventId}.pdf`,
            html2canvas: {
              scale: 4,
              logging: true,
            },
            jsPDF: {
              orientation: 'landscape',
              unit: 'mm',
              format: 'a4',
              compress: true,
            },
          })
          .save()
          .then(() => {
            element.classList.add('hidden');
          });
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="text-blue-500 font-sans font-semibold hover:text-red-500 block mb-4">Event ID Number:
          <input
            type="number"
            name="eventId"
            value={formData.eventId}
            onChange={handleChange}
            className="border p-2 w-full text-black font-semibold rounded-lg"
            placeholder="Type Event ID Number"
          />
        </label>

        <label className="text-blue-500 font-sans font-semibold hover:text-red-500 block mb-4">Event Purpose:
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            className="border p-2 w-full text-black font-mono rounded-lg"
            placeholder="Type Event Purpose"
          />
        </label>

        <label className="text-blue-500 font-sans font-semibold hover:text-red-500 block mb-4">Event Date:
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="border p-2 w-full text-black font-semibold rounded-lg"
            placeholder="Event Date"
          />
        </label>

        <label className="text-blue-500 font-sans font-semibold hover:text-red-500 block mb-4">Venue:
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            className="border p-2 w-full text-black font-mono rounded-lg"
            placeholder="Type Venue"
          />
        </label>

        <label className="text-blue-500 font-sans font-semibold hover:text-red-500 block mb-4">Number of Guests:
          <input
            type="number"
            name="numGuests"
            value={formData.numGuests}
            onChange={handleChange}
            className="border p-2 w-full text-black font-semibold rounded-lg"
            placeholder="Type Number of Guests"
          />
        </label>

        <label className="text-blue-500 font-sans font-semibold hover:text-red-500 block mb-4">Host of Name:
          <input
            type="text"
            name="hostName"
            value={formData.hostName}
            onChange={handleChange}
            className="border p-2 w-full text-black font-mono rounded-lg"
            placeholder="Type Name of Host"
          />
        </label>

        <label className="text-blue-500 font-sans font-semibold hover:text-red-500 block mb-4">Name of Chief Guest:
          <input
            type="text"
            name="chiefGuest"
            value={formData.chiefGuest}
            onChange={handleChange}
            className="border p-2 w-full text-black font-mono rounded-lg"
            placeholder="Type Name of Guest"
          />
        </label>

        <label className="text-blue-500 font-sans font-semibold hover:text-red-500 block mb-4">Activity Instructions:
          <input
            type="text"
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            className="border p-2 w-full text-black font-mono rounded-lg"
            placeholder="Type Instructions"
          />
        </label>

        <label className="text-blue-500 font-sans font-semibold hover:text-red-500 block mb-4">Special Requirements:
          <input
            type="text"
            name="specialRequirements"
            value={formData.specialRequirements}
            onChange={handleChange}
            className="border p-2 w-full text-black font-mono rounded-lg"
            placeholder="Type Requirements"
          />
        </label>

        <div className="flex mt-2">
          <button type="button" onClick={handleDownloadPDF} className="bg-blue-500 text-white px-2 py-1 lg:px-4 lg:py-2 mr-2 no-print rounded-lg font-bold hover:bg-blue-300 hover:text-black mb-4">
            Download PDF
          </button>
          <button type="button" onClick={handlePrint} className="bg-green-500 text-white  px-3 py-1 lg:px-4 lg:py-2 ml-2 no-print rounded-lg font-bold hover:bg-green-300 hover:text-black mb-4">
            Print
          </button>
        </div>
      </form>

      <div id="event-details" className="hidden">
        <h2>Event Details</h2>
        <p><strong>Event ID:</strong> {formData.eventId}</p>
        <p><strong>Event Purpose:</strong> {formData.eventName}</p>
        <p><strong>Event Date:</strong> {formData.eventDate}</p>
        <p><strong>Venue:</strong> {formData.venue}</p>
        <p><strong>Host Name:</strong> {formData.hostName}</p>
        <p><strong>Chief Guest:</strong> {formData.chiefGuest}</p>
        <p><strong>Activity Instructions:</strong> {formData.activity}</p>
        <p><strong>Number of Guests:</strong> {formData.numGuests}</p>
        <p><strong>Special Requirements:</strong> {formData.specialRequirements}</p>
        <div>
          <p className="text-left mt-10 text-black font-serif">
            1- Signed By Booking Party : ________________________  Date________
          </p>
        </div>
      </div>
    </>
  );
};

export default EventForm;
