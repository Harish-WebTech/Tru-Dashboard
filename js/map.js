async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("map"), {
    center: { lat: 20.5937, lng: 78.9629 },
    zoom: 4,
    mapId: "4504f8b37365c3d0",
  });
  const marker01 = new AdvancedMarkerElement({
    map,
    position: { lat: 28.6139, lng: 77.2090 },
    title: "New Delhi",
  });
  const marker02 = new AdvancedMarkerElement({
    map,
    position: { lat: 22.9676, lng: 76.0534 },
    title: "M.P",
  });
  const marker03 = new AdvancedMarkerElement({
    map,
    position: { lat: 12.9716, lng: 77.5946 },
    title: "Bangalore",
  });

}

initMap();