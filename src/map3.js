// The following example creates five accessible and
// focusable markers.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 52.36555, lng: 4.89707 },
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    [{ lat: 52.375, lng: 4.883 }, "Aliados"],
    [{ lat: 52.3718604, lng: 4.895861 }, "Airport Mesa"],
    [{ lat: 52.3639836978, lng: 4.8833197169 }, "Chapel of the Holy Cross"],
    [{ lat: 52.363586, lng: 4.902396 }, "Red Rock Crossing"],
    [{ lat: 52.35897, lng: 4.92093 }, "Porto"],
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}

window.initMap = initMap;
