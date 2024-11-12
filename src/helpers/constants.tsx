export const routeDictionary: { [key: string]: string } = {
    "1": "1",
    "3": "22",
    "4": "36",
    "5": "49",
    "5n": "153",
    "6": "53",
    "7": "54",
    "9": "58",
    "14": "120",
    "19": "6",
    "21": "8",
    "23": "10",
    "24b": "13",
    "25": "14",
    "25n": "15",
    "27": "18",
    "28b": "20",
    "29s": "116",
    "30": "23",
    "31": "24",
    "32": "25",
    "32b": "26",
    "33": "27",
    "34": "28",
    "35": "29",
    "36b": "30",
    "36l": "31",
    "39l": "35",
    "43": "41",
    "43b": "42",
    "43p": "43",
    "44": "114",
    "45": "113",
    "46b": "45",
    "46l": "44",
    "47": "46",
    "48": "47",
    "48l": "48",
    "50": "50",
    "52": "63",
    "54n": "152",
    "101": "3",
    "102": "4",
};

export const mapDarkMode = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  }
]


export const hiddenElementsMapStyle = [
  ...mapDarkMode,
  {
    featureType: 'poi', // Points of interest
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'transit', // Transit stations and lines
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'road', // Road labels
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'administrative', // Administrative labels (city, region names)
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'landscape', // Natural landscape labels
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  },
];