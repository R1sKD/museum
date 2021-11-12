mapboxgl.accessToken = 'pk.eyJ1IjoicjFza2QiLCJhIjoiY2t1Y3Q2M2R6MTNwYzJxbDlvNWZnYjI0OSJ9.UyV9JxKKG6PVkB5MMzqovg';

const geojson = {
  'type': 'FeatureCollection',
  'features': [{
      'type': 'Feature',
      'properties': {
        'iconSize': [25, 33]
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [2.3333, 48.8602]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'iconSize': [25, 33]
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [2.3397, 48.8607]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'iconSize': [25, 33]
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [2.3330, 48.8619]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'iconSize': [25, 33]
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [2.3365, 48.8625]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'iconSize': [25, 33]
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [2.3364, 48.86091]
      }
    }
  ]
};

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/r1skd/ckued17lj1abc17nvr534w45u/draft",
  center: [2.3364, 48.86091],
  zoom: 16
})

for (const marker of geojson.features) {
  const el = document.createElement('div');
  const width = marker.properties.iconSize[0];
  const height = marker.properties.iconSize[1];
  el.className = 'marker';
  if (marker === geojson.features[geojson.features.length - 1]) {
    el.style.backgroundImage = `url('./assets/svg/map-marker-main.svg')`;
  } else {
    el.style.backgroundImage = `url('./assets/svg/map-marker.svg')`;
  }
  el.style.width = `${width}px`;
  el.style.height = `${height}px`;
  el.style.backgroundSize = '100%';

  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
}

const nav = new mapboxgl.NavigationControl()
map.addControl(nav)