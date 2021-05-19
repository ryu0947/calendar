"use strict";

{
  const year = 2021;
  const month = 4; // 5月

  function getCalendarBody() {
    const dates = [];
    // 翌月の0日目と引数に設定すると今月の末日を取得できる
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDate; i++) {
      dates.push({
          date: i,
          isTody: false,
          isDisable: false
      });
    }

    console.log(dates);
  }

  getCalendarBody();
}
