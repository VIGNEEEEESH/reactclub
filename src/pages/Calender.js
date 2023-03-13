import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EventCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleAddEvent = () => {
    const newEvent = {
      date: date,
      title: prompt('Enter event title'),
      description: prompt('Enter event description'),
    };
    setEvents([...events, newEvent]);
  };

  const handleEditEvent = (index) => {
    const eventToEdit = events[index];
    const editedEvent = {
      ...eventToEdit,
      title: prompt('Enter new event title', eventToEdit.title),
      description: prompt(
        'Enter new event description',
        eventToEdit.description
      ),
    };
    const newEvents = [...events];
    newEvents[index] = editedEvent;
    setEvents(newEvents);
  };

  const handleDeleteEvent = (index) => {
    const newEvents = [...events];
    newEvents.splice(index, 1);
    setEvents(newEvents);
  };

  const eventList = events.map((event, index) => (
    <div key={index}>
      <div>{event.title}</div>
      <div>{event.description}</div>
      <button onClick={() => handleEditEvent(index)}>Edit</button>
      <button onClick={() => handleDeleteEvent(index)}>Delete</button>
    </div>
  ));

  return (
    <div>
      <Calendar value={date} onChange={handleDateChange} />
      <DatePicker selected={date} onChange={handleDateChange} />
      <button onClick={handleAddEvent}>Add Event</button>
      {eventList}
    </div>
  );
};

export default EventCalendar;
