"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { EventContentArg } from "@fullcalendar/core/index.js";

import "./calendar.styles.css";

const events = [
  {
    title: "Prova de Filosofia",
    start: new Date(2024, new Date().getMonth(), 1),
  }, // 1 de Maio
  {
    title: "Prova de Matemática",
    start: new Date(2024, new Date().getMonth(), 2),
  }, // 2 de Maio
  {
    title: "Entrega de Trabalho de História",
    start: new Date(2024, new Date().getMonth(), 5),
  }, // 5 de Maio
  {
    title: "Seminário de Ciências",
    start: new Date(2024, new Date().getMonth(), 7),
  }, // 7 de Maio
  {
    title: "Prova de Geografia",
    start: new Date(2024, new Date().getMonth(), 9),
  }, // 9 de Maio
  {
    title: "Reunião de Pais e Mestres",
    start: new Date(2024, new Date().getMonth(), 12),
  }, // 12 de Maio
  {
    title: "Festival de Teatro",
    start: new Date(2024, new Date().getMonth(), 15),
  }, // 15 de Maio
  {
    title: "Prova de Inglês",
    start: new Date(2024, new Date().getMonth(), 17),
  }, // 17 de Maio
  {
    title: "Dia de Estudo Dirigido",
    start: new Date(2024, new Date().getMonth(), 20),
  }, // 20 de Maio
  {
    title: "Prova de Química",
    start: new Date(2024, new Date().getMonth(), 22),
  }, // 22 de Maio
  {
    title: "Palestra sobre Saúde",
    start: new Date(2024, new Date().getMonth(), 24),
  }, // 24 de Maio
  {
    title: "Excursão Cultural",
    start: new Date(2024, new Date().getMonth(), 27),
  }, // 27 de Maio
  {
    title: "Atividade de Encerramento do Mês",
    start: new Date(2024, new Date().getMonth(), 31),
  }, // 31 de Maio
];

function renderEventContent(eventInfo: EventContentArg) {
  return (
    <div className="w-full px-1">
      <div className="whitespace-nowrap overflow-hidden text-ellipsis bg-accent p-2 rounded-md">
        <i>{eventInfo.event.title}</i>
      </div>
    </div>
  );
}

export function Calendar() {
  return (
    <div className="w-full h-full">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={renderEventContent}
        locale="pt-br"
        headerToolbar={{ start: "", center: "", end: "" }}
        height="100%"
        expandRows
      />
    </div>
  );
}
