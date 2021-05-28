"use strict";

{
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();

  function getCalenderHead() {
    const dates = [];
    const lastDay = new Date(year, month, 0).getDate();
    const day = new Date(year, month, 1).getDay();

    for (let i = 0; i < day; i++) {
      dates.unshift({
        date: lastDay - i,
        today: false,
        disabled: true,
      });
    }

    return dates;
  }

  function getcalenderBody() {
    const dates = [];
    const lastDay = new Date(year, month + 1, 0).getDate();
    const title = document.getElementById("title");
    title.textContent = `${year}/${month + 1}`;

    for (let i = 1; i < lastDay + 1; i++) {
      dates.push({
        date: i,
        today: false,
        disabled: false,
      });
    }

    if (year === date.getFullYear() && month === date.getMonth()) {
      dates[date.getDate() - 1].today = true;
    }

    return dates;
  }

  function getcalenderTaile() {
    const dates = [];
    const lastDay = new Date(year, month + 1, 0).getDay();

    for (let i = 1; i < 7 - lastDay; i++) {
      dates.push({
        date: i,
        today: false,
        disabled: true,
      });
    }

    return dates;
  }

  function createCalender() {
    const tbody = document.querySelector("tbody");
    const tr = document.querySelectorAll("tr");

    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }

    const dates = [
      ...getCalenderHead(),
      ...getcalenderBody(),
      ...getcalenderTaile(),
    ];

    const weeks = [];
    const weeksCount = dates.length / 7;

    for (let i = 0; i < weeksCount; i++) {
      weeks.push(dates.splice(0, 7));
    }

    weeks.forEach((week) => {
      const tr = document.createElement("tr");
      week.forEach((date) => {
        const td = document.createElement("td");

        if (date.today) {
          td.classList.add("today");
        }

        if (date.disabled) {
          td.classList.add("disabled");
        }

        td.textContent = date.date;

        tr.appendChild(td);
        document.querySelector("tbody").appendChild(tr);
      });
    });
  }

  createCalender();

  document.getElementById("prev").addEventListener("click", () => {
    month--;
    if (month < 0) {
      year--;
      month = 11;
    }
    createCalender();
  });

  document.getElementById("next").addEventListener("click", () => {
    month++;
    if (month > 11) {
      year++;
      month = 0;
    }
    createCalender();
  });
}
