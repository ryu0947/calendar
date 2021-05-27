"use strict";

{
  const date = new Date();
  const year = date.getUTCFullYear();
  const month = date.getMonth();

  function getCalenderHead() {
    const dates = [];
    const lastDay = new Date(year, month, 0).getDate();
    const day = new Date(year, month, 1).getDay();

    for (let i = 0; i < day; i++) {
      dates.unshift({
        date: lastDay - i,
        today: false,
        disable: true,
      });
    }

    return dates;
  }

  function getcalenderBody() {
    const dates = [];
    const lastDay = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i < lastDay + 1; i++) {
      dates.push({
        date: i,
        today: false,
        disable: false,
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
        disable: true,
      });
    }

    return dates;
  }

  function createCalender() {
    const dates = [
      ...getCalenderHead(),
      ...getcalenderBody(),
      ...getcalenderTaile(),
    ];

    const tr = document.createElement("tr");
    const td = document.createElement("td");

    const weeks = [];
    const weeksCount = dates.length / 7;

    for (let i = 0; i < weeksCount; i++) {
      weeks.push(dates.splice(0, 7));
    }

    console.log(weeks);
  }

  createCalender();
}
