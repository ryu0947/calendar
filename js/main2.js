"use strict";

{
  const date = new Date();
  const year = date.getUTCFullYear();
  const month = date.getMonth();

  function calenderBody() {
    const dates = [];
    const lastDay = new Date(year, month - 1, 0).getDate();

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

  calenderBody();
}
