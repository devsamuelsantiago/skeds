'use client';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventContentArg } from '@fullcalendar/core/index.js';
import { assigns } from '@/test_api/assigns';
import './calendar.styles.css';

function renderEventContent(eventInfo: EventContentArg) {
  return (
    <div className="w-full px-1">
      <div className="whitespace-nowrap overflow-hidden text-ellipsis bg-accent p-2 rounded-md transition-transform hover:scale-105">
        <i>{eventInfo.event.title}</i>
      </div>
    </div>
  );
}

export function Calendar() {
  const events = assigns.map((assign) => {
    if ('endDate' in assign) {
      return {
        title: assign.title,
        start: assign.dueDate,
        end: assign.endDate,
      };
    }

    return {
      title: assign.title,
      start: assign.dueDate,
    };
  });

  return (
    <div className="w-full h-full">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={renderEventContent}
        locale="pt-br"
        headerToolbar={{ start: '', center: '', end: '' }}
        height="100%"
        expandRows
      />
    </div>
  );
}
