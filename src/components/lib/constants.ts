import type Font from "@arcgis/core/symbols/Font";
import type IconSymbol3DLayer from "@arcgis/core/symbols/IconSymbol3DLayer";
import type LineStyleMarker3D from "@arcgis/core/symbols/LineStyleMarker3D";
import type LineSymbol3DLayer from "@arcgis/core/symbols/LineSymbol3DLayer";
import type LineSymbolMarker from "@arcgis/core/symbols/LineSymbolMarker";
import type ObjectSymbol3DLayer from "@arcgis/core/symbols/ObjectSymbol3DLayer";
import type PathSymbol3DLayer from "@arcgis/core/symbols/PathSymbol3DLayer";
import type SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import type SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import type SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import type TextSymbol from "@arcgis/core/symbols/TextSymbol";
import type TextSymbol3DLayer from "@arcgis/core/symbols/TextSymbol3DLayer";
import type WaterSymbol3DLayer from "@arcgis/core/symbols/WaterSymbol3DLayer";
import type LineStylePattern3D from "@arcgis/core/symbols/patterns/LineStylePattern3D";
import type StylePattern3D from "@arcgis/core/symbols/patterns/StylePattern3D";
import fontData from "./esri-labeling-page-data.json";

export const CAP_OPTIONS: InstanceType<typeof SimpleLineSymbol>["cap"][] = ["round", "butt", "square"];

export const CAP_3D_OPTIONS: InstanceType<typeof PathSymbol3DLayer>["cap"][] = ["butt", "square", "round", "none"];

export const COLOR_MIX_MODE_OPTIONS = ["multiply", "tint", "replace"];

export const ESRI_2D_POINT_SYMBOLS_STYLE_NAME_OPTIONS = [
  "extent-hollow-gray",
  "extent-hollow-square",
  "extent-hollow-square-yellow",
  "extent-square",
  "extent-square-gray",
  "extent-square-yellow",
  "extent-star",
  "extent-star-gray",
  "extent-star-yellow",
  "accessibility",
  "aerial-tram",
  "airport",
  "amusement-park",
  "aquarium",
  "atm",
  "bar",
  "beach",
  "border-crossing",
  "box-pin",
  "bus-station",
  "campground",
  "car-rental",
  "casino",
  "cemetery",
  "city-hall",
  "coffee-shop",
  "court-house",
  "embassy",
  "esri-pin-1",
  "esri-pin-2",
  "ferry",
  "fire-station",
  "flag",
  "gas-station",
  "golf-course",
  "grocery-store",
  "hospital",
  "hotel",
  "house",
  "industrial-complex",
  "information",
  "landmark",
  "library",
  "live-music-venue",
  "military-base",
  "mountain",
  "museum",
  "native-reservation",
  "park",
  "parking",
  "pharmacy",
  "place-of-worship",
  "playground",
  "police-station",
  "post-office",
  "push-pin-1",
  "push-pin-2",
  "radio-tower",
  "restaurant",
  "restroom",
  "school",
  "shopping-center",
  "sports-complex",
  "star",
  "subway-station",
  "tear-pin-1",
  "tear-pin-2",
  "theatre",
  "trail",
  "train-station",
  "university",
  "vineyard",
  "zoo",
  "circle-1",
  "circle-2",
  "circle-3",
  "circle-4",
  "circle-5",
  "circle-6",
  "cross-1",
  "cross-2",
  "cross-3",
  "cross-4",
  "diamond-1",
  "diamond-2",
  "diamond-3",
  "hexagon-1",
  "hexagon-2",
  "hexagon-3",
  "pentagon-1",
  "pentagon-2",
  "pentagon-3",
  "square-1",
  "square-2",
  "square-3",
  "square-4",
  "square-5",
  "square-6",
  "star-1",
  "star-2",
  "star-3",
  "triangle-1",
  "triangle-2",
  "triangle-3",
  "triangle-4",
  "triangle-5",
  "triangle-6",
  "shield-1",
  "shield-1-wide",
  "shield-2",
  "shield-3",
  "shield-4",
  "shield-5"
];

export const ESRI_ICONS_STYLE_NAME_OPTIONS = [
  "Accessibility",
  "Aerial Tram",
  "Airport",
  "Amusement Park",
  "Aquarium",
  "Bank",
  "Bar",
  "Beach",
  "Border Crossing",
  "Bus",
  "Campground",
  "Car Rental",
  "Casino",
  "Cemetery",
  "Centered Circle",
  "Centered Diamond",
  "Centered Diamond Wide",
  "Centered Hexagon",
  "Centered Octagon",
  "Centered Rounded Square",
  "Centered Square",
  "Centered Star",
  "Centered Triangle",
  "City Hall",
  "Coffee",
  "Court House",
  "Embassy",
  "Ferry",
  "Fire",
  "Flag",
  "Fuel",
  "Golf Course",
  "Grocery Store",
  "Hiking",
  "Hospital",
  "Hotel",
  "House",
  "Industrial Complex",
  "Information",
  "Landmark",
  "Library",
  "Live Music Venue",
  "Military Base",
  "Mountain",
  "Museum",
  "Native Reservation",
  "Park",
  "Parking",
  "Pharmacy",
  "Place of Worship",
  "Playground",
  "Police",
  "Post Office",
  "Pushpin 1",
  "Pushpin 2",
  "Pushpin 3",
  "Pushpin 4",
  "Pushpin 5",
  "Restaurant",
  "Restroom",
  "School",
  "Shopping",
  "Sports Complex",
  "Standing Circle",
  "Standing Diamond",
  "Standing Diamond Wide",
  "Standing Hexagon",
  "Standing Octagon",
  "Standing Rounded Square",
  "Standing Square",
  "Standing Star",
  "Standing Triangle",
  "Telecom",
  "Theatre",
  "Train",
  "University",
  "Vineyard",
  "Zoo"
];

export const ESRI_INFRASTRUCTURE_STYLE_NAME_OPTIONS = [
  "Cell_Phone_Antenna",
  "Electricity_Box",
  "Electricity_Meter",
  "Powerline_Pole",
  "Radio_Antenna",
  "Wind_Turbine"
];

export const ESRI_REALISTIC_SIGNS_AND_SIGNALS_STYLE_NAME_OPTIONS = [
  "Campfire",
  "Camping",
  "Crossroads",
  "Dead_End",
  "Do_Not_Enter",
  "Gas",
  "Left_T-junction",
  "Medical",
  "Motel",
  "No_Outlet",
  "No_Thru_Traffic",
  "Opposing_Traffic",
  "Pedestrian_Crossing",
  "Picnic_Area",
  "Railway_Crossing",
  "Restaurant",
  "Right_T-junction",
  "School_Crossing",
  "Speed_Limit_-_15_mph",
  "Speed_Limit_-_20_mph",
  "Speed_Limit_-_25_mph",
  "Speed_Limit_-_30_mph",
  "Speed_Limit_-_35_mph",
  "Speed_Limit_-_40_mph",
  "Speed_Limit_-_45_mph",
  "Speed_Limit_-_50_mph",
  "Speed_Limit_-_55_mph",
  "Speed_Limit_-_60_mph",
  "Speed_Limit_-_65_mph",
  "Speed_Limit_-_70_mph",
  "Stop",
  "Stop_Ahead",
  "T-Junction",
  "Telephone",
  "Traffic_Light",
  "Traffic_Light_1",
  "Traffic_Light_2",
  "Traffic_Light_3",
  "Traffic_Light_4",
  "Turn_Left_Arrow",
  "Turn_Right_Arrow",
  "Yield"
];

export const ESRI_REALISTIC_STREET_SCENE_STYLE_NAME_OPTIONS = [
  "ATM",
  "Bike_Rack",
  "Bus_Stop_1",
  "Bus_Stop_2",
  "Dumpster",
  "Fire_Hydrant",
  "Fountain_1",
  "Fountain_2",
  "Fountain_3",
  "Fountain_4",
  "Jersey_Barrier",
  "Light_On_Post_-_Light_off",
  "Light_On_Post_-_Light_on",
  "Mailbox",
  "Newspaper_Vending_Machine",
  "Overhanging_Sidewalk_-_Light_off",
  "Overhanging_Sidewalk_-_Light_on",
  "Overhanging_Street_-_Light_off",
  "Overhanging_Street_-_Light_on",
  "Overhanging_Street_and_Sidewalk_-_Light_off",
  "Overhanging_Street_and_Sidewalk_-_Light_on",
  "Park_Bench_1",
  "Park_Bench_2",
  "Park_Bench_3",
  "Park_Bench_4",
  "Payphone",
  "Picnic_Table",
  "Planter_Circular",
  "Planter_Square",
  "Planter_Tapered",
  "Rock_1",
  "Rock_2",
  "Rock_3",
  "Rock_4",
  "Sewer_Grate",
  "Storm_Drain",
  "Traffic_Barrier_1",
  "Traffic_Barrier_2",
  "Traffic_Cone",
  "Traffic_Pylon",
  "Trash_Bin_1",
  "Trash_Bin_2",
  "Trash_Bin_3",
  "Trash_Can_1",
  "Trash_Can_2",
  "US_Mailbox"
];

export const ESRI_REALISTIC_TRANSPORTATION_STYLE_NAME_OPTIONS = [
  "Airplane_Large_Passenger",
  "Airplane_Large_Passenger_With_Wheels",
  "Airplane_Private",
  "Airplane_Private_With_Wheels",
  "Airplane_Propeller",
  "Airplane_Propeller_With_Wheels",
  "Airplane_Small_Passenger",
  "Airplane_Small_Passenger_With_Wheels",
  "Ambulance",
  "Audi_A6",
  "BMW_3-Series",
  "Backhoe",
  "Bobcat",
  "Bus",
  "Cargo_Box",
  "Cargo_Ship_Empty",
  "Cargo_Ship_Full",
  "City_Bike",
  "Crane",
  "Delivery_Truck",
  "Dumptruck",
  "Eurocopter_AS-365",
  "Eurocopter_AS-365_-_Flying",
  "Eurocopter_H125",
  "Eurocopter_H125_-_Flying",
  "Firetruck",
  "Ford_Edge",
  "Ford_Expedition",
  "Ford_F-150",
  "Ford_Fiesta",
  "Ford_Focus_Hatchback",
  "Ford_Fusion",
  "Ford_Mustang",
  "Ford_Taurus",
  "Ford_Transit_Commercial_Van",
  "Ford_Transit_Connect",
  "High_Speed_Train",
  "Mercedes_S-Class",
  "Motorboat",
  "Motorcycle",
  "Mountain_Bike",
  "Pickup_Truck_Ford_F250",
  "Pickup_Truck_Toyota_Hilux",
  "Police",
  "Porsche_Boxter",
  "Porsche_Carrera",
  "Road_Bike",
  "Sailboat",
  "Sailboat_-_Sails_Up",
  "Semi_Trailer_Truck",
  "Taxi",
  "Tesla_P7",
  "Tower_Crane",
  "Toyota_Prius",
  "Tractor",
  "Tractor_And_Trailer",
  "Trailer",
  "Train_Europe",
  "Train_Europe_With_Carriages",
  "Train_US",
  "Tram",
  "Tricycle",
  "Truck_With_Trailer",
  "Van_Taxi",
  "Volkswagen_Jetta_Wagon"
];

export const ESRI_REALISTIC_TREES_STYLE_NAME_OPTIONS = [
  "Frangula",
  "Echinodorus",
  "Castanea",
  "Platanus",
  "Prunus",
  "Casuarina",
  "Taxodium",
  "Abies",
  "Phyllostachys",
  "Musa",
  "Tilia",
  "Laurus",
  "Robinia",
  "Eucalyptus",
  "Buxus",
  "Phlebodium",
  "Umbellularia",
  "Calocedrus",
  "Washingtonia",
  "Sequoia",
  "Juglans",
  "Cocos",
  "Crataegus",
  "Sorbus",
  "Aesculus",
  "Phoenix",
  "Chilopsis",
  "Pseudotsuga",
  "Fagus",
  "Larix",
  "Ficus",
  "Ulmus",
  "Fremontodendron",
  "Cornus",
  "GenericDead",
  "Stump",
  "Unknown",
  "Sequoiadendron",
  "Agave",
  "Aralia",
  "Philodendron",
  "Cupressus",
  "Convallaria",
  "Pinus",
  "Rhamnus",
  "Sabal",
  "Cercocarpus",
  "Quercus Rubra",
  "Acer",
  "Picea",
  "Citrus",
  "Bulbophyllum",
  "Other",
  "Ligustrum",
  "Cordyline",
  "Parkinsonia",
  "Betula",
  "Chamaedorea",
  "Opuntia",
  "Alnus",
  "Carya",
  "Rhododendron",
  "Rosa",
  "Aiphanes",
  "Carnegiea",
  "Sassafras",
  "Pinus Sylvestris",
  "Yucca",
  "Amelanchier",
  "Sansevieria",
  "Magnolia",
  "Spartium",
  "Arbutus",
  "Acer Saccharum",
  "Helianthus",
  "Liquidambar",
  "Acacia",
  "Juniperus",
  "Fraxinus",
  "Quercus",
  "Populus",
  "Salix",
  "Hamamelis"
];

export const ESRI_RECREATION_STYLE_NAME_OPTIONS = [
  "American_Football_Goal",
  "Basketball_Hoop",
  "Jungle_Gym",
  "Slide",
  "Soccer_Goal",
  "Swing",
  "Teeter_Totter"
];

export const ESRI_THEMATIC_SHAPES_STYLE_NAME_OPTIONS = [
  "Centered Cube",
  "Centered Diamond",
  "Centered Sphere",
  "Standing Cone",
  "Standing Cube",
  "Standing Cylinder",
  "Standing Diamond",
  "Standing Inverted Cone",
  "Standing Sphere",
  "Standing Tetrahedron"
];

export const ESRI_THEMATIC_TREES_STYLE_NAME_OPTIONS = [
  "Frangula",
  "Echinodorus",
  "Castanea",
  "Platanus",
  "Prunus",
  "Casuarina",
  "Taxodium",
  "Abies",
  "Phyllostachys",
  "Musa",
  "Tilia",
  "Laurus",
  "Robinia",
  "Eucalyptus",
  "Buxus",
  "Phlebodium",
  "Umbellularia",
  "Calocedrus",
  "Washingtonia",
  "Sequoia",
  "Juglans",
  "Cocos",
  "Crataegus",
  "Sorbus",
  "Aesculus",
  "Phoenix",
  "Chilopsis",
  "Pseudotsuga",
  "Fagus",
  "Larix",
  "Ficus",
  "Ulmus",
  "Fremontodendron",
  "Cornus",
  "GenericDead",
  "Stump",
  "Unknown",
  "Sequoiadendron",
  "Agave",
  "Aralia",
  "Philodendron",
  "Cupressus",
  "Convallaria",
  "Pinus",
  "Rhamnus",
  "Sabal",
  "Cercocarpus",
  "Quercus Rubra",
  "Acer",
  "Picea",
  "Citrus",
  "Bulbophyllum",
  "Other",
  "Ligustrum",
  "Cordyline",
  "Parkinsonia",
  "Betula",
  "Chamaedorea",
  "Opuntia",
  "Alnus",
  "Carya",
  "Rhododendron",
  "Rosa",
  "Aiphanes",
  "Carnegiea",
  "Sassafras",
  "Pinus Sylvestris",
  "Yucca",
  "Amelanchier",
  "Sansevieria",
  "Magnolia",
  "Spartium",
  "Arbutus",
  "Acer Saccharum",
  "Helianthus",
  "Liquidambar",
  "Acacia",
  "Juniperus",
  "Fraxinus",
  "Quercus",
  "Populus",
  "Salix",
  "Hamamelis"
];

export const FILL_OPTIONS:
  | InstanceType<typeof SimpleFillSymbol>["style"][]
  | InstanceType<typeof StylePattern3D>["style"][] = [
  "solid",
  "backward-diagonal",
  "cross",
  "diagonal-cross",
  "forward-diagonal",
  "horizontal",
  "none",
  "vertical"
];

export const FONT_DECORATION_OPTIONS: InstanceType<typeof Font>["decoration"][] = ["none", "underline", "line-through"];

export const FONTS = fontData;

export const FONT_FAMILY_OPTIONS = [
  "Abril Fatface",
  "Alegreya",
  "Amarante",
  "Arial",
  "Atomic Age",
  "Audiowide",
  "Avenir Next LT Pro",
  "BellTopo Sans",
  "Belleza",
  "Black Ops One",
  "Cabin Sketch",
  "Coming Soon",
  "FGDC GeoAge",
  "Homemade Apple",
  "IM FELL DW Pica PRO",
  "Josefin Sans",
  "Just Another Hand",
  "Kranky",
  "Life Savers",
  "Loved by the King",
  "Merriweather",
  "Montserrat",
  "Noto Sans",
  "Noto Serif",
  "Old Standard TT",
  "Orbitron",
  "Oregano",
  "Oswald",
  "Pacifico",
  "Palatino Linotype",
  "Playfair Display",
  "Redressed",
  "Risque",
  "Roboto Condensed",
  "Rye",
  "Special Elite",
  "Syncopate Bold",
  "Syncopate",
  "Tangerine",
  "Ubuntu",
  "Ubuntu Mono",
  "UnifrakturCook",
  "Vast Shadow",
  "Walter Turncoat"
];

export const FONT_STYLE_OPTIONS: InstanceType<typeof Font>["style"][] = ["normal", "italic", "oblique"];

export const FONT_WEIGHT_OPTIONS: InstanceType<typeof Font>["weight"][] = ["normal", "bold", "bolder", "lighter"];

export const HORIZONTAL_ALIGNMENT_OPTIONS:
  | InstanceType<typeof TextSymbol>["horizontalAlignment"][]
  | InstanceType<typeof TextSymbol3DLayer>["horizontalAlignment"][] = ["center", "right", "left"];

export const ICON_SYMBOL_3D_LAYER_ANCHOR_OPTIONS: InstanceType<typeof IconSymbol3DLayer>["anchor"][] = [
  "center",
  "left",
  "right",
  "top",
  "bottom",
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "relative"
];

export const ICON_SYMBOL_3D_LAYER_RESOURCE_PRIMITIVE_OPTIONS: InstanceType<
  typeof IconSymbol3DLayer
>["resource"]["primitive"][] = ["circle", "square", "cross", "x", "kite", "triangle"];

export const JOIN_OPTIONS:
  | InstanceType<typeof SimpleLineSymbol>["join"][]
  | InstanceType<typeof PathSymbol3DLayer>["join"][]
  | InstanceType<typeof LineSymbol3DLayer>["join"][] = ["miter", "round", "bevel"];

export const LINE_STYLE_MARKER_3D_STYLE_OPTIONS: InstanceType<typeof LineStyleMarker3D>["style"][] = [
  "arrow",
  "circle",
  "square",
  "diamond",
  "cross",
  "x"
];

export const LINE_STYLE_OPTIONS:
  | InstanceType<typeof SimpleLineSymbol>["style"][]
  | InstanceType<typeof LineStylePattern3D>["style"][] = [
  "solid",
  "dash",
  "dash-dot",
  "dot",
  "long-dash",
  "long-dash-dot",
  "long-dash-dot-dot",
  "none",
  "short-dash",
  "short-dash-dot",
  "short-dash-dot-dot",
  "short-dot"
];

export const MARKER_PLACEMENT_OPTIONS:
  | InstanceType<typeof LineSymbolMarker>["placement"][]
  | InstanceType<typeof LineStyleMarker3D>["placement"][] = ["begin", "end", "begin-end"];

export const MARKER_STYLE_OPTIONS: InstanceType<typeof LineSymbolMarker>["style"][] = [
  "arrow",
  "circle",
  "square",
  "diamond",
  "cross",
  "x"
];

export const OBJECT_SYMBOL_3D_LAYER_ANCHOR_OPTIONS: InstanceType<typeof ObjectSymbol3DLayer>["anchor"][] = [
  "center",
  "top",
  "bottom",
  "origin",
  "relative"
];

export const OBJECT_SYMBOL_3D_LAYER_RESOURCE_PRIMITIVE_OPTIONS: InstanceType<
  typeof ObjectSymbol3DLayer
>["resource"]["primitive"][] = ["sphere", "cylinder", "cube", "cone", "inverted-cone", "diamond", "tetrahedron"];

export const PATH_SYMBOL_3D_LAYER_ANCHOR_OPTIONS: InstanceType<typeof PathSymbol3DLayer>["anchor"][] = [
  "center",
  "bottom",
  "top"
];

export const PROFILE_OPTIONS: InstanceType<typeof PathSymbol3DLayer>["profile"][] = ["quad", "circle"];

export const ROTATION_OPTIONS: InstanceType<typeof PathSymbol3DLayer>["profileRotation"][] = ["all", "heading"];

export const SIMPLE_MARKER_SYMBOL_STYLE_OPTIONS: InstanceType<typeof SimpleMarkerSymbol>["style"][] = [
  "circle",
  "square",
  "cross",
  "x",
  "diamond",
  "triangle",
  "path"
];

export const SYMBOLS = [
  {
    description: "CIMSymbols are high quality, scalable, multi-layer vector symbols for features and graphics.",
    line: true,
    link: "/cim-symbol/",
    mapView: true,
    mesh: false,
    name: "CIMSymbol",
    point: true,
    polygon: true,
    sceneView: true,
    symbolLayers: true
  },
  {
    description: "LineSymbol3D is used to render features with Polyline geometry in a 3D SceneView.",
    line: true,
    link: "/line-symbol-3d/",
    mapView: false,
    mesh: false,
    name: "LineSymbol3D",
    point: false,
    polygon: false,
    sceneView: true,
    symbolLayers: true
  },
  {
    description: "MeshSymbol3D is used to render 3D mesh features in a SceneLayer in a 3D SceneView.",
    line: false,
    link: "/mesh-symbol-3d/",
    mapView: false,
    mesh: true,
    name: "MeshSymbol3D",
    point: false,
    polygon: false,
    sceneView: true,
    symbolLayers: true
  },
  {
    description:
      "PictureFillSymbol uses an image in a repeating pattern to symbolize polygon features in a 2D MapView.",
    line: false,
    link: "/picture-fill-symbol/",
    mapView: true,
    mesh: false,
    name: "PictureFillSymbol",
    point: false,
    polygon: true,
    sceneView: false,
    symbolLayers: false
  },
  {
    description: "PictureMarkerSymbol renders Point graphics in either a 2D MapView or 3D SceneView using an image.",
    line: false,
    link: "/picture-marker-symbol/",
    mapView: true,
    mesh: false,
    name: "PictureMarkerSymbol",
    point: true,
    polygon: false,
    sceneView: true,
    symbolLayers: false
  },
  {
    description: "PointSymbol3D is used to render features with Point geometry in a 3D SceneView.",
    line: false,
    link: "/point-symbol-3d/",
    mapView: false,
    mesh: false,
    name: "PointSymbol3D",
    point: true,
    polygon: false,
    sceneView: true,
    symbolLayers: true
  },
  {
    description: "PolygonSymbol3D is used to render features with Polygon geometry in a 3D SceneView.",
    line: false,
    link: "/polygon-symbol-3d/",
    mapView: false,
    mesh: false,
    name: "PolygonSymbol3D",
    point: false,
    polygon: true,
    sceneView: true,
    symbolLayers: true
  },
  {
    description: "SimpleFillSymbol is used for rendering 2D polygons in either a MapView or a SceneView.",
    line: false,
    link: "/simple-fill-symbol/",
    mapView: true,
    mesh: false,
    name: "SimpleFillSymbol",
    point: false,
    polygon: true,
    sceneView: true,
    symbolLayers: false
  },
  {
    description: "SimpleLineSymbol is used for rendering 2D polyline geometries in a 2D MapView.",
    line: true,
    link: "/simple-line-symbol/",
    mapView: true,
    mesh: false,
    name: "SimpleLineSymbol",
    point: false,
    polygon: false,
    sceneView: false,
    symbolLayers: false
  },
  {
    description:
      "SimpleMarkerSymbol is used for rendering 2D Point geometries with a simple shape and color in either a MapView or a SceneView.",
    line: false,
    link: "/simple-marker-symbol/",
    mapView: true,
    mesh: false,
    name: "SimpleMarkerSymbol",
    point: true,
    polygon: false,
    sceneView: true,
    symbolLayers: false
  },
  {
    description:
      "Text symbols are used to define the graphic for displaying labels on a FeatureLayer, CSVLayer, Sublayer, and StreamLayer in a 2D MapView.",
    line: false,
    link: "/text-symbol/",
    mapView: true,
    mesh: false,
    name: "TextSymbol",
    point: true,
    polygon: false,
    sceneView: false,
    symbolLayers: false
  },
  {
    description:
      "WebStyleSymbol is a class used to conveniently create vector 2D symbols and realistic and thematic 3D symbols.",
    line: false,
    link: "/web-style-symbol/",
    mapView: true,
    mesh: false,
    name: "WebStyleSymbol",
    point: true,
    polygon: false,
    sceneView: true,
    symbolLayers: false
  }
];

export const VERTICAL_ALIGNMENT_OPTIONS:
  | InstanceType<typeof TextSymbol>["verticalAlignment"][]
  | InstanceType<typeof TextSymbol3DLayer>["verticalAlignment"][] = ["baseline", "top", "middle", "bottom"];

export const WATERBODY_SIZE_OPTIONS: InstanceType<typeof WaterSymbol3DLayer>["waterbodySize"][] = [
  "small",
  "medium",
  "large"
];

export const WAVE_STRENGTH_OPTIONS: InstanceType<typeof WaterSymbol3DLayer>["waveStrength"][] = [
  "calm",
  "rippled",
  "slight",
  "moderate"
];

export const WEB_STYLE_SYMBOLS_2D_STYLE_OPTIONS = ["Esri2DPointSymbolsStyle"];

export const WEB_STYLE_SYMBOLS_3D_STYLE_OPTIONS = [
  "EsriIconsStyle",
  "EsriInfrastructureStyle",
  "EsriRealisticSignsandSignalsStyle",
  "EsriRealisticStreetSceneStyle",
  "EsriRealisticTransportationStyle",
  "EsriRealisticTreesStyle",
  "EsriRecreationStyle",
  "EsriThematicShapesStyle",
  "EsriThematicTreesStyle"
];
