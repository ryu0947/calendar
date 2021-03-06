"use strict";

{
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();

  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const today = document.getElementById("today");

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

    // 今年の今月の今日の日を判定して太字にする
    if (year === date.getFullYear() && month === date.getMonth()) {
      dates[date.getDate() - 1].isToday = true;
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

  // カレンダーの内容をクリアする
  function clearCalender() {
    const tbody = document.querySelector("tbody");
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
  }

  // カレンダーの年月を表示する
  function renderHead() {
    const title = document.getElementById("title");
    title.textContent = `${year}/${month + 1}`;
  }

  // 週を描画する処理
  function renderWeek() {
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

  // カレンダーの描画処理
  function cerateCalender() {
    clearCalender();
    renderHead();
    renderWeek();
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

  today.addEventListener("click", () => {
    year = date.getFullYear();
    month = date.getMonth();

    cerateCalender();
  });

  cerateCalender();
}
