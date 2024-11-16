"use client";

import React, { useState } from "react";


const EventForm = () => {
  const [formData, setFormData] = useState({
    eventId: 0,
    eventName: "",
    eventDate: "",
    venue: "",
    hostName: "",
    chiefGuest: "",
    activity: "",
    numGuests: 0,
    specialRequirements: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /* const handleDownloadPDF = () => {
    const element = document.getElementById("event-details");
    if (element) {
      import("html2pdf.js").then((html2pdf) => {
        html2pdf.default().from(element).set({
          margin: 10,
          filename: `Event_${formData.eventId}.pdf`,
          html2canvas: { scale: 2 },
          jsPDF: { orientation: "portrait" },
        }).save();
      });
    }
  }; */

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
    <div className="px-4 sm:px-6">
      <form className="space-y-4">
      <label className="text-blue-500 font-sans font-bold hover:text-red-500">
      Event ID:
      <input
      type="number"
      name="eventId"
      value={formData.eventId}
      onChange={handleChange}
      className="border p-2 w-full rounded text-black placeholder:text-base sm:placeholder:text-lg md:placeholder:text-xl"
      placeholder="Enter Event ID"
      />
      </label>

  
        <label className="text-blue-500 font-sans font-bold hover:text-red-500">
          Event Name:
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            className="border p-2 w-full rounded text-black"
          />
        </label>
  
        <label className="text-blue-500 font-sans font-bold hover:text-red-500">
          Event Date:
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="border p-2 w-full rounded text-black"
          />
        </label>
  
        <label className="text-blue-500 font-sans font-bold hover:text-red-500">
          Venue:
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            className="border p-2 w-full rounded text-black"
          />
        </label>
  
        <label className="text-blue-500 font-sans font-bold hover:text-red-500">
          Number of Guests:
          <input
            type="number"
            name="numGuests"
            value={formData.numGuests}
            onChange={handleChange}
            className="border p-2 w-full rounded text-black"
          />
        </label>
  
        <label className="text-blue-500 font-sans font-bold hover:text-red-500">
          Host Name:
          <input
            type="text"
            name="hostName"
            value={formData.hostName}
            onChange={handleChange}
            className="border p-2 w-full rounded text-black"
          />
        </label>
  
        <label className="text-blue-500 font-sans font-bold hover:text-red-500">
          Chief Guest:
          <input
            type="text"
            name="chiefGuest"
            value={formData.chiefGuest}
            onChange={handleChange}
            className="border p-2 w-full rounded text-black"
          />
        </label>
  
        <label className="text-blue-500 font-sans font-bold hover:text-red-500">
          Activity:
          <input
            type="text"
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            className="border p-2 w-full rounded text-black"
          />
        </label>
  
        <label className="text-blue-500 font-sans font-bold hover:text-red-500">
          Special Requirements:
          <input
            type="text"
            name="specialRequirements"
            value={formData.specialRequirements}
            onChange={handleChange}
            className="border p-2 w-full rounded text-black"
          />
        </label>
  
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            type="button"
            onClick={handleDownloadPDF}
            className="bg-blue-500 text-white px-4 py-2 rounded no-print w-full sm:w-auto"
          >
            Download PDF
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="bg-green-500 text-white px-4 py-2 rounded no-print w-full sm:w-auto"
          >
            Print
          </button>
        </div>
      </form>
  
      <div className="mt-4">
        <p className="text-left text-black font-sans font-bold hover:text-blue-500">
          1- Signed By Booking Party: __________________________
        </p>
        <p className="text-left mt-4 text-black font-sans font-bold hover:text-blue-500">
          2- Signed By Event Organizer: ________________________
        </p>
        <p className="mt-8 text-gray-300 text-right font-sans font-bold hover:text-blue-500">
          Designed By: Azmat Ali
        </p>
      </div>
  
      <div id="event-details" className="no-print mt-8">
        <h6>Booking Date: ___ / ___ / ________</h6>
        <h2><u>Event Details</u></h2>
        <p><strong>Event ID:</strong> {formData.eventId}</p>
        <p><strong>Event Name:</strong> {formData.eventName}</p>
        <p><strong>Event Date:</strong> {formData.eventDate}</p>
        <p><strong>Venue:</strong> {formData.venue}</p>
        <p><strong>Number of Guests:</strong> {formData.numGuests}</p>
        <p><strong>Host Name:</strong> {formData.hostName}</p>
        <p><strong>Chief Guest:</strong> {formData.chiefGuest}</p>
        <p><strong>Activity:</strong> {formData.activity}</p>
        <p><strong>Special Requirements:</strong> {formData.specialRequirements}</p>
  
        <div>
          <p className="text-left text-black font-serif">
            1- Signed By Booking Party: ______________________
          </p>
          <p className="text-left mt-4 text-black font-serif">
            2- Signed By Event Organizer: ______________________
          </p>
          <p className="mt-8 text-gray-300 font-semibold text-right">
            Designed By: Azmat Ali
          </p>
        </div>
      </div>
    </div>
  );
  
};

export default EventForm;
