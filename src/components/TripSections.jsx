import { colorForDay } from "../lib/trip";

export function OverviewSection({ trip }) {
  return (
    <section className="duo-grid">
      <article className="card section">
        <h2 className="section-title">行程总览</h2>
        <p className="section-subtitle">{trip.summary.statement}</p>
        <div className="overview-grid">
          {trip.overview.map((item) => (
            <article className="overview-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </article>
      <article className="card section">
        <h2 className="section-title">{trip.stayStrategy.title}</h2>
        <p className="section-subtitle">{trip.stayStrategy.subtitle}</p>
        <ul className="bullet-list">
          {trip.stayStrategy.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export function StorySection({ trip }) {
  return (
    <section className="card section">
      <h2 className="section-title">设计化呈现</h2>
      <p className="section-subtitle">这不是简单信息堆叠，而是把“去哪里、为什么这样走、什么地方最值得留体力”讲成一页能直接发给家人朋友的旅行 deck。</p>
      <div className="story-grid">
        {trip.storyBlocks.map((item) => (
          <article className="story-card" key={item.title}>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function TimelineSection({ trip }) {
  return (
    <section className="card section">
      <h2 className="section-title">每日时间轴</h2>
      <p className="section-subtitle">把每天拆成“什么时候出发、什么时间段适合做什么”，更接近真实出门时会用到的节奏表。</p>
      <div className="timeline-grid">
        {trip.days.map((day) => (
          <article className="timeline-card" key={day.id}>
            <div className="timeline-header">
              <span className="day-pill" style={{ background: colorForDay(day) }}>
                {day.label}
              </span>
              <strong>{day.date}</strong>
            </div>
            <h3>{day.route}</h3>
            <div className="timeline-items">
              {day.timeline.map((item) => (
                <div className="timeline-item" key={`${day.id}-${item.time}`}>
                  <span>{item.time}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ItineraryTable({ trip }) {
  return (
    <section className="card section">
      <h2 className="section-title">每日行程表</h2>
      <p className="section-subtitle">适合快速扫一眼全局安排。移动端支持横向滚动，信息与地图、住宿、复制文本完全联动。</p>
      <div className="table-shell">
        <table>
          <thead>
            <tr>
              <th>日期</th>
              <th>路线</th>
              <th>车程</th>
              <th>玩法</th>
              <th>住宿</th>
              <th>备注</th>
            </tr>
          </thead>
          <tbody>
            {trip.days.map((day) => (
              <tr key={day.id}>
                <td>
                  <span className="day-pill" style={{ background: colorForDay(day) }}>
                    {day.label}
                  </span>
                  <div>{day.date}</div>
                </td>
                <td>{day.route}</td>
                <td>{day.drive}</td>
                <td>{day.play}</td>
                <td>{day.lodging}</td>
                <td>{day.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function LodgingSection({ trip }) {
  return (
    <section className="card section">
      <h2 className="section-title">住宿安排</h2>
      <p className="section-subtitle">住宿不是附属信息，而是路线设计的一部分。这里会和地图里的酒店点位、次日衔接说明保持一致。</p>
      <div className="lodging-grid">
        {trip.days.map((day) => {
          const hotelPoint = day.points.find((point) => point.type === "hotel");
          return (
            <article className="lodging-card" key={day.id}>
              <div className="section-head">
                <div>
                  <span className="muted-small">
                    {day.label} · {day.date}
                  </span>
                  <h3>{day.lodgingInfo.location}</h3>
                </div>
                <span className="chip">{day.id === "day5" ? "返程日" : "住宿点"}</span>
              </div>
              <p>
                <strong>酒店/区域：</strong>
                {day.lodgingInfo.hotel}
              </p>
              {day.lodgingInfo.address ? (
                <p>
                  <strong>地址：</strong>
                  {day.lodgingInfo.address}
                </p>
              ) : null}
              <p>
                <strong>为什么住这里：</strong>
                {day.lodgingInfo.reason}
              </p>
              <p>
                <strong>第二天路线衔接：</strong>
                {day.lodgingInfo.next}
              </p>
              {hotelPoint ? (
                <a className="tiny-link" href={hotelPoint.gaode} target="_blank" rel="noreferrer">
                  高德导航到住宿点
                </a>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function MealsSection({ trip }) {
  return (
    <section className="card section">
      <h2 className="section-title">用餐建议</h2>
      <p className="section-subtitle">路线再好，吃饭没安排好也会直接拉低体验。这里按这次五一自驾的真实节奏给出每一天的餐食策略。</p>
      <div className="meal-grid">
        {trip.meals.map((mealDay) => (
          <article className="meal-card" key={mealDay.dayId}>
            <div className="meal-head">
              <strong>{mealDay.label}</strong>
              <span>{mealDay.theme}</span>
            </div>
            <ul className="bullet-list">
              <li>
                <strong>早餐：</strong>
                {mealDay.breakfast}
              </li>
              <li>
                <strong>午餐：</strong>
                {mealDay.lunch}
              </li>
              <li>
                <strong>晚餐：</strong>
                {mealDay.dinner}
              </li>
              <li>
                <strong>补给建议：</strong>
                {mealDay.supplies}
              </li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PackingSection({ trip }) {
  return (
    <section className="card section">
      <h2 className="section-title">打包清单</h2>
      <p className="section-subtitle">按出门前实际分工拆成几类，不做空泛“记得带好东西”。</p>
      <div className="packing-grid">
        {trip.packing.map((group) => (
          <article className="packing-card" key={group.title}>
            <strong>{group.title}</strong>
            <ul className="bullet-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function RemindersSection({ trip }) {
  return (
    <section className="card section">
      <h2 className="section-title">重点提醒</h2>
      <div className="reminder-grid">
        {trip.reminders.map((item) => (
          <article className="reminder-card" key={item.title}>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function BudgetSection({ trip }) {
  return (
    <section className="card section">
      <h2 className="section-title">预算参考</h2>
      <div className="budget-grid">
        {trip.budget.map((item) => (
          <article className={`budget-card ${item.total ? "is-total" : ""}`} key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
