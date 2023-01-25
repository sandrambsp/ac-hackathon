// The following example creates five accessible and
// focusable markers.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 36.114647, lng: -115.172813 },
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    [{ lat: 36.126492, lng: -115.165741 }, "Aliados"],
    [{ lat: 36.112625, lng: -115.176704 }, "Airport Mesa"],
    [{ lat: 36.10165792, lng: -115.11232116 }, "Porto"],
    [{ lat: 36.132692, lng: -115.084768 }, "Chapel of the Holy Cross"],

    [{ lat: 36.183887627, lng: -115.139250755 }, "Red Rock Crossing"],
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
