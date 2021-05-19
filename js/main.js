"use strict";

{
  const year = 2021;
  const month = 4; // 5月

  function getCalendarHead() {
    const dates = [];
    // 前月の末日
    const d = new Date(year, month, 0).getDate();
    // 今月の1日の曜日
    const n = new Date(year, month, 1).getDay();

    console.log(d);
    console.log(n);

    for (let i = 0; i < n; i++) {
      dates.unshift({
        date: d - i,
        isTody: false,
        isDisable: true,
      });
    }

    console.log(dates);
  }

  function getCalendarBody() {
    const dates = [];
    // 翌月の0日目と引数に設定すると今月の末日を取得できる
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDate; i++) {
      dates.push({
        date: i,
        isTody: false,
        isDisable: false,
      });
    }

    console.log(dates);
  }

  function getCalendarTaile() {
    const dates = [];
    // 今月の末日の曜日の取得
    const lastDay = new Date(year, month + 1, 0).getDay();
    for (let i = 1; i < 7 - lastDay; i++) {
      dates.push({
        date: i,
        isTody: false,
        isDisable: true,
      });
    }

    console.log(dates);
  }

  getCalendarHead();
  //   getCalendarBody();
  getCalendarTaile();
}
