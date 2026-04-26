export function colorForDay(day) {
  return day.color;
}

export function createVisibleDaysState(days) {
  return days.reduce((accumulator, day) => {
    accumulator[day.id] = true;
    return accumulator;
  }, {});
}

export function buildCopyText(trip) {
  const lines = [
    trip.hero.title,
    `副标题：${trip.hero.subtitle}`,
    "",
    `住宿策略：${trip.overview.find((item) => item.label === "住宿策略")?.value || ""}`,
    ""
  ];

  trip.days.forEach((day) => {
    lines.push(`${day.label} ${day.date}`);
    lines.push(`路线：${day.route}`);
    lines.push(`车程：${day.drive}`);
    lines.push(`玩法：${day.play}`);
    lines.push(`住宿：${day.lodging}`);
    lines.push(`备注：${day.note}`);
    lines.push("");
  });

  lines.push("重点提醒：");
  trip.reminders.forEach((item) => lines.push(`- ${item.text}`));
  lines.push("");
  lines.push("原始住宿订单/行程链接：");
  lines.push(trip.actions.rawLodgingUrl);
  return lines.join("\n");
}

export function buildPopupHtml(point, day) {
  if (point.type === "hotel") {
    return `
      <h3 class="popup-title">${point.hotelName || point.name}</h3>
      <p class="popup-text"><strong>入住日期：</strong>${point.checkIn || day.date}</p>
      <p class="popup-text"><strong>酒店/区域名称：</strong>${point.hotelName || point.name}</p>
      ${point.address ? `<p class="popup-text"><strong>地址：</strong>${point.address}</p>` : ""}
      <p class="popup-text"><strong>为什么住这里：</strong>${point.reason}</p>
      <p class="popup-text"><strong>第二天路线衔接：</strong>${point.nextLink}</p>
      <a class="popup-link" href="${point.gaode}" target="_blank" rel="noopener noreferrer">打开高德导航</a>
    `;
  }

  return `
    <h3 class="popup-title">${point.name}</h3>
    <p class="popup-text"><strong>所属日程：</strong>${day.label} · ${day.date}</p>
    <p class="popup-text">${point.desc}</p>
    <a class="popup-link" href="${point.gaode}" target="_blank" rel="noopener noreferrer">打开高德导航</a>
  `;
}
