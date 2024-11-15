"use client";

import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';

type EventDetails = {
  eventId: number;
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

interface EventFormProps {
  onSave: (eventDetails: EventDetails) => void;
}

const EventForm: React.FC<EventFormProps> = ({ onSave }) => {
  const [formData, setFormData] = useState<EventDetails>({
    eventId: 0,
    eventName: '',
    eventDate: '',
    bookingDate: '',
    venue: '',
    hostName: '',
    chiefGuest: '',
    activity: '',
    numGuests: 0,
    specialRequirements: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: name === 'numGuests' ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.eventName || !formData.eventDate || !formData.venue || !formData.hostName) {
      alert('Please fill in all required fields.');
      return;
    }

    onSave({ ...formData, eventId: Date.now() });

    setFormData({
      eventId: 0,
      eventName: '',
      eventDate: '',
      bookingDate: '',
      venue: '',
      hostName: '',
      chiefGuest: '',
      activity: '',
      numGuests: 0,
      specialRequirements: '',
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    if (typeof window !== "undefined") {
      const element = document.getElementById('event-details');
      if (element) {
        // Temporarily make the event-details div visible
        element.classList.remove('hidden');
        
        html2pdf()
          .from(element)
          .set({
            margin: [20, 20, 20, 20], // top, right, bottom, left margin
            filename: `Event_Details_${formData.eventId}.pdf`,
            html2canvas: { 
              scale: 4, // Increase scale for better image quality
              logging: true, 
            },
            jsPDF: {
              orientation: 'landscape',
              unit: 'mm',
              format: 'a4',
              compress: true, // compress to reduce file size
            },
          })
          .save()
          .then(() => {
            // Hide the div again after the PDF is generated
            element.classList.add('hidden');
          });
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="text-blue-500 font-sans font-semibold hover:text-red-500">Event ID Number:
          <input
            type="number"
            name="eventId"
            value={formData.eventId}
            onChange={handleChange}
            className="border p-2 w-full text-black font-semibold rounded-lg"
            placeholder="Type Event ID Number"
          />
        </label>
        <label className="text-blue-500 font-sans font-semibold hover:text-red-500">Event Purpose:
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            className="border p-2 w-full text-black font-mono rounded-lg"
            placeholder="Type Event Purpose"
          />
        </label>
        <label className="text-blue-500 font-sans font-semibold hover:text-red-500">Event Date:
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="border p-2 w-full text-black font-semibold rounded-lg"
            placeholder="Event Date"
          />
        </label>
        <label className="text-blue-500 font-sans font-semibold hover:text-red-500">Venue:
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            className="border p-2 w-full text-black font-mono rounded-lg"
            placeholder="Type Venue"
          />
        </label>
        <label className="text-blue-500 font-sans font-semibold hover:text-red-500">Number of Guests:
          <input
            type="number"
            name="numGuests"
            value={formData.numGuests}
            onChange={handleChange}
            className="border p-2 w-full text-black font-semibold rounded-lg"
            placeholder="Type Number of Guests"
          />
        </label>
        <label className="text-blue-500 font-sans font-semibold hover:text-red-500">Host of Name:
          <input
            type="text"
            name="hostName"
            value={formData.hostName}
            onChange={handleChange}
            className="border p-2 w-full text-black font-mono rounded-lg"
            placeholder="Type Name of Host"
          />
        </label>
        <label className="text-blue-500 font-sans font-semibold hover:text-red-500">Name of Chief Guest:
          <input
            type="text"
            name="chiefGuest"
            value={formData.chiefGuest}
            onChange={handleChange}
            className="border p-2 w-full text-black font-mono rounded-lg"
            placeholder="Type Name of Chief Guest"
          />
        </label>
        <label className="text-blue-500 font-sans font-semibold hover:text-red-500">Activity Instructions:
          <input
            type="text"
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            className="border p-2 w-full text-black font-mono rounded-lg"
            placeholder="Type Activity Instructions"
          />
        </label>
        <label className="text-blue-500 font-sans font-semibold hover:text-red-500">Special Requirements:
          <input
            type="text"
            name="specialRequirements"
            value={formData.specialRequirements}
            onChange={handleChange}
            className="border p-2 w-full text-black font-mono rounded-lg"
            placeholder="Type Special Requirements"
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
            1- Signed By Booking Party : ________________________ <br /><br />
            2- Signed By Event Organizer : _______________________
          </p>
        </div>
        <div className="footer">
          <span>Designed By: </span> Azmat Ali
        </div>
      </div>

      <h6 className="text-[5px] lg:text-base text-left mt-0 text-black font-serif space-y-4 font-bold">
        <span>1- Signed By Booking Party: ________________________</span> <br />
        <span>2- Signed By Event Organizer: ______________________</span>
      </h6>
    </>
  );
};

export default EventForm;
