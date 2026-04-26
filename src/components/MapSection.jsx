import LeafletRouteMap from "../map/LeafletRouteMap";
import { colorForDay } from "../lib/trip";

export default function MapSection({ trip, visibleDays, onToggleDay, onShowAll }) {
  return (
    <div className="map-layout">
      <aside className="map-sidebar">
        <article className="map-panel">
          <h3>路线显示切换</h3>
          <div className="route-controls">
            <button className="route-btn route-btn-all" type="button" onClick={onShowAll}>
              全部显示
            </button>
            {trip.days.map((day) => {
              const active = visibleDays[day.id];
              const color = colorForDay(day);
              return (
                <button
                  key={day.id}
                  className={`route-btn ${active ? "is-active" : ""}`}
                  type="button"
                  onClick={() => onToggleDay(day.id)}
                  style={{
                    background: active ? color : "#ffffff",
                    borderColor: active ? color : "rgba(30, 52, 46, 0.12)"
                  }}
                >
                  {day.label} {day.date}
                </button>
              );
            })}
          </div>
        </article>
        <article className="map-panel">
          <h3>路线颜色</h3>
          <div className="legend-list">
            {trip.days.map((day) => (
              <div className="legend-item" key={day.id}>
                <span className="legend-line" style={{ borderColor: colorForDay(day) }} />
                <span>{day.route}</span>
              </div>
            ))}
          </div>
        </article>
        <article className="map-panel">
          <h3>地图说明</h3>
          <ul className="bullet-list">
            <li>当前页面只展示本次五一行程的分天路线和酒店点位。</li>
            <li>酒店弹窗已换成截图里的真实酒店名称和地址。</li>
            <li>导航链接优先按酒店名搜索，减少落到泛化区域点位。</li>
          </ul>
        </article>
      </aside>
      <LeafletRouteMap trip={trip} visibleDays={visibleDays} />
    </div>
  );
}
