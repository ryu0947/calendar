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
  }

  getCalenderHead();
  getcalenderBody();
  getcalenderTaile();


  function createCalender() {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
  }
}
