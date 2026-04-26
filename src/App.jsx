import { startTransition, useState } from "react";
import HeroSection from "./components/HeroSection";
import {
  OverviewSection,
  StorySection,
  ItineraryTable,
  TimelineSection,
  LodgingSection,
  MealsSection,
  RemindersSection,
  BudgetSection,
  PackingSection
} from "./components/TripSections";
import MapSection from "./components/MapSection";
import { trip } from "./data/trips";
import { buildCopyText, createVisibleDaysState } from "./lib/trip";

export default function App() {
  const [visibleDays, setVisibleDays] = useState(() => createVisibleDaysState(trip.days));

  async function handleCopy() {
    const content = buildCopyText(trip);
    try {
      await navigator.clipboard.writeText(content);
      window.alert("当前路线的每日行程已复制到剪贴板");
    } catch (error) {
      window.alert("复制失败，请手动复制页面内容");
    }
  }

  function handlePrint() {
    window.print();
  }

  function handleToggleDay(dayId) {
    startTransition(() => {
      setVisibleDays((current) => ({
        ...current,
        [dayId]: !current[dayId]
      }));
    });
  }

  function handleShowAll() {
    startTransition(() => {
      setVisibleDays(createVisibleDaysState(trip.days));
    });
  }

  return (
    <div className="app-shell">
      <HeroSection trip={trip} onCopy={handleCopy} onPrint={handlePrint} />
      <main className="container page-stack">
        <OverviewSection trip={trip} />
        <StorySection trip={trip} />
        <TimelineSection trip={trip} />
        <ItineraryTable trip={trip} />
        <LodgingSection trip={trip} />
        <section className="card section">
          <div className="section-head">
            <div>
              <h2 className="section-title">路线地图与导航架构</h2>
              <p className="section-subtitle">
                当前实现使用 Leaflet。地图层已经按 provider 接口抽象，后续接入高德地图时可新增 `amap`
                provider，不需要重写页面业务层。
              </p>
            </div>
            <span className="provider-pill">当前 Provider：Leaflet · 预留 AMap</span>
          </div>
          <MapSection
            trip={trip}
            visibleDays={visibleDays}
            onToggleDay={handleToggleDay}
            onShowAll={handleShowAll}
          />
        </section>
        <MealsSection trip={trip} />
        <PackingSection trip={trip} />
        <RemindersSection trip={trip} />
        <BudgetSection trip={trip} />
      </main>
      <footer className="container footer-note">
        <p>地图坐标为近似值，适合路线可视化和行程理解；出发当天仍请以实时导航、路况和景区开放信息为准。</p>
        <p>当前页面仅保留本次五一行程内容，用于单路线分享和 GitHub Pages 部署。</p>
      </footer>
    </div>
  );
}
