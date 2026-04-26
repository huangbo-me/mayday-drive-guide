import { useEffect, useRef } from "react";
import { createProvider } from "./providers";
import { colorForDay, buildPopupHtml } from "../lib/trip";

export default function LeafletRouteMap({ trip, visibleDays }) {
  const mapRootRef = useRef(null);
  const instanceRef = useRef(null);
  const providerRef = useRef(null);
  const layersRef = useRef({});

  useEffect(() => {
    const provider = createProvider("leaflet");
    providerRef.current = provider;

    if (!mapRootRef.current || instanceRef.current) {
      return undefined;
    }

    const map = provider.createMap(mapRootRef.current);
    instanceRef.current = map;
    const bounds = provider.createBounds();
    const layerRegistry = {};

    trip.days.forEach((day) => {
      const routeLayer = provider.createLayerGroup();
      const pointLayer = provider.createLayerGroup();

      day.segments.forEach((segment) => {
        provider.addPolyline(routeLayer, segment, colorForDay(day));
        segment.forEach((latlng) => provider.extendBounds(bounds, latlng));
      });

      day.points.forEach((point) => {
        provider.addMarker(pointLayer, point, buildPopupHtml(point, day));
        provider.extendBounds(bounds, point.latlng);
      });

      provider.mountLayer(map, routeLayer);
      provider.mountLayer(map, pointLayer);
      layerRegistry[day.id] = { routeLayer, pointLayer };
    });

    layersRef.current = layerRegistry;
    provider.fitBounds(map, bounds);

    return () => {
      provider.destroyMap(map);
      instanceRef.current = null;
    };
  }, [trip]);

  useEffect(() => {
    const provider = providerRef.current;
    const map = instanceRef.current;
    if (!provider || !map) {
      return;
    }

    trip.days.forEach((day) => {
      const groups = layersRef.current[day.id];
      if (!groups) {
        return;
      }

      if (visibleDays[day.id]) {
        provider.mountLayer(map, groups.routeLayer);
        provider.mountLayer(map, groups.pointLayer);
      } else {
        provider.unmountLayer(map, groups.routeLayer);
        provider.unmountLayer(map, groups.pointLayer);
      }
    });
  }, [trip, visibleDays]);

  return <div id="trip-map" ref={mapRootRef} aria-label="路线地图" />;
}
