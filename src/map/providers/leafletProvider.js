import L from "leaflet";

function buildIcon(type) {
  const className =
    type === "hotel" ? "marker-pin marker-hotel" : type === "city" ? "marker-pin marker-city" : "marker-pin marker-sight";

  return L.divIcon({
    className: "",
    html: `<div class="${className}"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -22]
  });
}

export function createLeafletProvider() {
  return {
    createMap(container) {
      const map = L.map(container, { zoomControl: true });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
      return map;
    },

    destroyMap(map) {
      map.remove();
    },

    createBounds() {
      return L.latLngBounds([]);
    },

    extendBounds(bounds, latlng) {
      bounds.extend(latlng);
    },

    fitBounds(map, bounds) {
      map.fitBounds(bounds.pad(0.22));
    },

    createLayerGroup() {
      return L.layerGroup();
    },

    mountLayer(map, layer) {
      if (!map.hasLayer(layer)) {
        layer.addTo(map);
      }
    },

    unmountLayer(map, layer) {
      if (map.hasLayer(layer)) {
        map.removeLayer(layer);
      }
    },

    addPolyline(group, segment, color) {
      L.polyline(segment, {
        color,
        weight: 5,
        opacity: 0.88,
        lineCap: "round",
        lineJoin: "round"
      }).addTo(group);
    },

    addMarker(group, point, popupHtml) {
      L.marker(point.latlng, { icon: buildIcon(point.type) }).bindPopup(popupHtml).addTo(group);
    }
  };
}
