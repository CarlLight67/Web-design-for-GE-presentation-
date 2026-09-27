import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import { Building } from '../types/architecture';

interface MapViewProps {
  buildings: Building[];
  selectedBuildingId?: string | null;
  onSelectBuilding?: (building: Building) => void;
  heightClassName?: string;
  singleBuildingMode?: boolean;
}

export const MapView: React.FC<MapViewProps> = ({
  buildings,
  selectedBuildingId,
  onSelectBuilding,
  heightClassName = 'h-[520px] sm:h-[600px]',
  singleBuildingMode = false,
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const initialLat =
        singleBuildingMode && buildings[0]?.location.latitude
          ? buildings[0].location.latitude
          : 12.8797;
      const initialLng =
        singleBuildingMode && buildings[0]?.location.longitude
          ? buildings[0].location.longitude
          : 121.774;
      const initialZoom = singleBuildingMode ? 15 : 6;

      const map = L.map(mapContainerRef.current, {
        center: [initialLat, initialLng],
        zoom: initialZoom,
        scrollWheelZoom: false,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      markersLayerRef.current = L.layerGroup().addTo(map);
      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const map = mapInstanceRef.current;
    const layerGroup = markersLayerRef.current;
    if (!map || !layerGroup) return;

    layerGroup.clearLayers();

    const validBuildings = buildings.filter(
      (b) =>
        typeof b.location.latitude === 'number' &&
        typeof b.location.longitude === 'number'
    );

    const bounds: L.LatLngTuple[] = [];

    validBuildings.forEach((b) => {
      const lat = b.location.latitude as number;
      const lng = b.location.longitude as number;
      bounds.push([lat, lng]);

      const isSelected = selectedBuildingId === b.id;

      const customIcon = L.divIcon({
        className: 'archi-ph-custom-marker',
        html: `<div style="
          width: ${isSelected ? '32px' : '26px'};
          height: ${isSelected ? '32px' : '26px'};
          background-color: ${isSelected ? '#16794b' : '#111c16'};
          border: 2px solid #eef5f1;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-family: 'Silkscreen', 'Minecraft', 'Pixelify Sans', monospace;
          font-size: 9px;
          font-weight: 600;
          transform: translate(-50%, -50%);
        ">${b.archiveNumber.replace('ARCH-PH-0', '')}</div>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13],
      });

      const marker = L.marker([lat, lng], { icon: customIcon });

      const popupContainer = document.createElement('div');
      popupContainer.className = 'p-4 bg-[var(--surface-card)] text-[var(--ink)] space-y-2.5';
      popupContainer.innerHTML = `
        <div class="font-mono-tech text-[10px] text-[var(--accent)] uppercase tracking-wider">${b.archiveNumber} · ${b.location.region}</div>
        <div class="font-editorial font-bold text-base leading-tight text-[var(--ink)]">${b.name}</div>
        <div class="text-xs text-[var(--muted)] space-y-0.5 pt-1.5 border-t border-[var(--line)]">
          <div><strong class="text-[var(--ink)]">City:</strong> ${b.location.city}, ${b.location.province}</div>
          <div><strong class="text-[var(--ink)]">Architect:</strong> ${b.architect.name}</div>
          <div><strong class="text-[var(--ink)]">Style:</strong> ${b.architecturalStyle}</div>
        </div>
        <button type="button" class="view-bldg-btn btn-arch-primary mt-2 w-full px-3 py-2 text-xs font-mono-tech uppercase tracking-wider flex items-center justify-between">
          <span>View Building</span>
          <span class="btn-arrow">-&gt;</span>
        </button>
      `;

      const btn = popupContainer.querySelector('.view-bldg-btn');
      if (btn) {
        btn.addEventListener('click', () => {
          navigate(`/buildings/${b.slug}`);
        });
      }

      marker.bindPopup(popupContainer);

      marker.on('click', () => {
        if (onSelectBuilding) {
          onSelectBuilding(b);
        }
      });

      marker.addTo(layerGroup);

      if (isSelected) {
        marker.openPopup();
      }
    });

    if (singleBuildingMode && bounds.length === 1) {
      map.setView(bounds[0], 15);
    } else if (selectedBuildingId) {
      const selected = validBuildings.find((b) => b.id === selectedBuildingId);
      if (selected && selected.location.latitude && selected.location.longitude) {
        map.setView([selected.location.latitude, selected.location.longitude], 13, {
          animate: true,
        });
      }
    } else if (bounds.length > 1) {
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 12 });
    } else if (bounds.length === 1) {
      map.setView(bounds[0], 12);
    }
  }, [buildings, selectedBuildingId, singleBuildingMode, navigate, onSelectBuilding]);

  return (
    <div className={`relative w-full ${heightClassName} rounded-2xl overflow-hidden border-2 border-[var(--border-strong)] bg-[var(--paper-subtle)]`}>
      <div ref={mapContainerRef} className="w-full h-full z-10" />
      <div className="absolute bottom-3 left-3 z-20 pointer-events-none rounded-xl bg-[var(--surface-card)]/95 border-2 border-[var(--border-strong)] px-3.5 py-1.5 text-[11px] font-mono-tech text-[var(--ink)]">
        {buildings.length} MAPPED ARCHIVE RECORD{buildings.length === 1 ? '' : 'S'} · PHILIPPINES
      </div>
    </div>
  );
};
