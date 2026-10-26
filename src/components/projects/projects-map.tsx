"use client";

import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef, useState } from "react";
import type { Map as MapLibreMap } from "maplibre-gl";

export interface MapPin {
  id: string;
  name: string;
  href: string;
  location: string;
  image: string;
  lat: number;
  lng: number;
}

const MAP_STYLE = "https://tiles.openfreemap.org/styles/positron";
const PAKISTAN_CENTER: [number, number] = [69.3451, 30.3753];

function element<K extends keyof HTMLElementTagNameMap>(tag: K, className: string, text?: string) {
  const node = document.createElement(tag);
  node.className = className;
  if (text) node.textContent = text;
  return node;
}

function popupContent(pin: MapPin) {
  const link = element("a", "block w-56 overflow-hidden rounded-xl bg-white text-ink-900");
  link.href = pin.href;
  const image = element("img", "h-28 w-full object-cover");
  image.src = pin.image;
  image.alt = "";
  const body = element("div", "p-3");
  body.append(
    element("p", "text-sm font-semibold leading-snug", pin.name),
    element("p", "mt-0.5 text-xs text-ink-500", pin.location),
  );
  link.append(image, body);
  return link;
}

export function ProjectsMap({ pins }: { pins: MapPin[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let map: MapLibreMap | undefined;
    let cancelled = false;

    import("maplibre-gl")
      .then(({ default: maplibregl }) => {
        if (cancelled) return;
        map = new maplibregl.Map({
          container,
          style: MAP_STYLE,
          center: PAKISTAN_CENTER,
          zoom: 4.5,
          attributionControl: { compact: true },
          cooperativeGestures: true,
        });
        map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

        const bounds = new maplibregl.LngLatBounds();
        for (const pin of pins) {
          const marker = element(
            "button",
            "size-4 rounded-full border-[3px] border-white bg-brand-500 shadow-md transition-colors hover:bg-ink-950 focus-visible:outline-2 focus-visible:outline-brand-500",
          );
          marker.type = "button";
          marker.setAttribute("aria-label", pin.name);
          const popup = new maplibregl.Popup({ offset: 18, closeButton: false, maxWidth: "none" }).setDOMContent(popupContent(pin));
          new maplibregl.Marker({ element: marker }).setLngLat([pin.lng, pin.lat]).setPopup(popup).addTo(map);
          bounds.extend([pin.lng, pin.lat]);
        }
        if (!bounds.isEmpty()) map.fitBounds(bounds, { padding: 64, maxZoom: 13, duration: 0 });
      })
      .catch((error: unknown) => {
        console.error("Map failed to load", error);
        setFailed(true);
      });

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [pins]);

  return (
    <div className="relative size-full overflow-hidden rounded-2xl bg-ink-100">
      <div ref={containerRef} className="size-full" role="region" aria-label="Map of projects" />
      {failed && (
        <p className="absolute inset-0 grid place-items-center p-6 text-center text-sm text-ink-500">
          The map could not be loaded. The project list still shows every result.
        </p>
      )}
    </div>
  );
}
