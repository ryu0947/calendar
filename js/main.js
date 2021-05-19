"use strict";

{
  const year = 2021;
  const month = 4; // 5月

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
        isTody: false,
        isDisable: true,
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
        isTody: false,
        isDisable: false,
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
        isTody: false,
        isDisable: true,
      });
    }

    return dates;
  }

  function cerateCalender() {
    const dates = [
      ...getCalendarHead(),
      ...getCalendarBody(),
      ...getCalendarTaile(),
    ];
    console.log(...dates);
  }

  cerateCalender();
}
