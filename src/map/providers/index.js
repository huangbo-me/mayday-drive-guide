import { createLeafletProvider } from "./leafletProvider";

export function createProvider(name) {
  if (name === "leaflet") {
    return createLeafletProvider();
  }

  if (name === "amap") {
    throw new Error("AMap provider is planned but not implemented in this version.");
  }

  throw new Error(`Unknown map provider: ${name}`);
}
