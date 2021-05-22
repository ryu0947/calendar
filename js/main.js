"use strict";

{
  let year = 2021;
  let month = 4; // 5月
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  // カレンダーの先頭の前月の日数を取得
  function getCalendarHead() {
    const dates = [];
    // 前月の末日
    const d = new Date(year, month, 0).getDate();
    // 今月の1日の曜日
    const n = new Date(year, month, 1).getDay();

    for (let i = 0; i < n; i++) {
      dates.unshift({
        date: d - i,
        isToday: false,
        isDisabled: true,
      });
    }

    return dates;
  }

  // 今月のカレンダーの日数の取得
  function getCalendarBody() {
    const dates = [];
    // 翌月の0日目と引数に設定すると今月の末日を取得できる
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDate; i++) {
      dates.push({
        date: i,
        isToday: false,
        isDisabled: false,
      });
    }

    return dates;
  }

  // カレンダーの末尾の翌月の日数の取得
  function getCalendarTaile() {
    const dates = [];
    // 今月の末日の曜日の取得
    const lastDay = new Date(year, month + 1, 0).getDay();
    for (let i = 1; i < 7 - lastDay; i++) {
      dates.push({
        date: i,
        isToday: false,
        isDisabled: true,
      });
    }

    return dates;
  }

  function cerateCalender() {
    const tbody = document.querySelector("tbody");
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }

    const title = document.getElementById("title");
    title.textContent = `${year}/${month + 1}`;

    const dates = [
      ...getCalendarHead(),
      ...getCalendarBody(),
      ...getCalendarTaile(),
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

        td.textContent = date.date;
        if (date.isDisabled) {
          td.classList.add("disabled");
        }
        if (date.isToday) {
          td.classList.add("today");
        }

        tr.appendChild(td);
      });
      document.querySelector("tbody").appendChild(tr);
    });
  }

  prev.addEventListener("click", () => {
    month--;
    if (month < 0) {
      year--;
      month = 11;
    }
    cerateCalender();
  });

  next.addEventListener("click", () => {
    month++;
    if (month > 11) {
      year++;
      month = 0;
    }
    cerateCalender();
  });

  cerateCalender();
}
