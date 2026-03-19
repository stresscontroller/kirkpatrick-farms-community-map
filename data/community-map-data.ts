import type { CommunityMapData, MapLocation, Trail, CommunityBoundary } from "@/types/map";

// Center coordinates aligned to client-provided Kirkpatrick Farms references
const CENTER: [number, number] = [38.9128, -77.5558];

const locations: MapLocation[] = [
  // Ponds (3)
  {
    id: "north-pond",
    name: "Bright Ct Pond",
    category: "pond",
    coordinates: [38.913757, -77.559260],
    description: "Pond area near Bright Court with adjacent amenity space for neighborhood gatherings and outdoor games.",
    address: "Near Bright Ct, Kirkpatrick Farms, Aldie, VA",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop",
    ],
    tags: ["bright ct", "deck", "gazebo", "playground", "chess/checker"],
  },
  {
    id: "south-pond",
    name: "Diligence Ct Pond",
    category: "pond",
    coordinates: [38.912226, -77.557422],
    description: "Pond feature near Diligence Court with deck and gazebo amenities identified on client-provided reference imagery.",
    address: "Near Diligence Ct, Kirkpatrick Farms, Aldie, VA",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop",
    ],
    tags: ["diligence ct", "deck", "gazebo", "cornhole", "byobags"],
  },
  {
    id: "east-pond",
    name: "Mindful Ct Pond",
    category: "pond",
    coordinates: [38.916524, -77.551444],
    description: "Pond feature along Mindful Court, shown in client satellite references as one of the core neighborhood water features.",
    address: "Near Mindful Ct, Kirkpatrick Farms, Aldie, VA",
    images: [
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop",
    ],
    tags: ["mindful ct", "pond", "walking routes"],
  },

  // Pools (2)
  {
    id: "community-pool",
    name: "Community Pool",
    category: "pool",
    coordinates: [38.911456, -77.558325],
    description: "Primary community pool area used for seasonal recreation, including general swim and family-friendly amenities.",
    address: "25520 Summerall Dr, Aldie, VA 20105",
    images: [
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&auto=format&fit=crop",
    ],
    tags: ["lap lanes", "diving board", "splash area", "seasonal"],
  },
  // {
  //   id: "west-pool",
  //   name: "West Pool",
  //   category: "pool",
  //   coordinates: [38.9098, -77.5600],
  //   description: "Secondary neighborhood pool with a family-oriented layout and convenient access for nearby homes.",
  //   address: "Near Kirkpatrick Farms west section, Aldie, VA",
  //   images: [
  //     "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&auto=format&fit=crop",
  //   ],
  //   tags: ["zero-entry", "water slide", "family-friendly"],
  // },

  // Tennis Court (2)
  {
    id: "clubhouse-tennis-court",
    name: "Clubhouse Tennis Court",
    category: "tennis-court",
    coordinates: [38.911155, -77.558544],
    description: "Primary tennis court at the clubhouse complex, based on the client-provided clubhouse satellite image.",
    address: "25520 Summerall Dr, Aldie, VA 20105",
    images: [
      "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&auto=format&fit=crop",
    ],
    tags: ["tennis", "clubhouse", "summerall dr"],
  },
  {
    id: "cherish-ct-tennis-court",
    name: "Cherish Ct Tennis Court",
    category: "tennis-court",
    coordinates: [38.914611, -77.550114],
    description: "Second tennis court location near Cherish Court and Destiny Drive from client reference imagery.",
    address: "Near Cherish Ct & Destiny Dr, Aldie, VA",
    images: [
      "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&auto=format&fit=crop",
    ],
    tags: ["tennis", "cherish ct", "destiny dr"],
  },

  // Basketball Court (2)
  {
    id: "clubhouse-basketball-court",
    name: "Clubhouse Basketball Court",
    category: "basketball-court",
    coordinates: [38.911055, -77.558297],
    description: "Primary basketball court at the clubhouse complex, split from tennis for independent filtering.",
    address: "25520 Summerall Dr, Aldie, VA 20105",
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop",
    ],
    tags: ["basketball", "clubhouse", "summerall dr"],
  },
  {
    id: "cherish-ct-basketball-court",
    name: "Cherish Ct Basketball Court",
    category: "basketball-court",
    coordinates: [38.914578, -77.549819],
    description: "Second basketball court location near Cherish Court and Destiny Drive from client reference imagery.",
    address: "Near Cherish Ct & Destiny Dr, Aldie, VA",
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop",
    ],
    tags: ["basketball", "cherish ct", "destiny dr"],
  },

  // Tot Lots (9)
  {
    id: "tot-lot-a",
    name: "Tot Lot A - Kirkpatrick Farms Playground",
    category: "tot-lot",
    coordinates: [38.915011, -77.560144],
    description: "Neighborhood tot lot with colorful play features, including swings and climbers, designed for younger children and quick family visits.",
    address: "Near 100 Maple Grove Lane",
    images: [
      "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564429238980-16e228c97683?w=800&auto=format&fit=crop",
    ],
    tags: ["playground", "swings", "sandbox", "ages 2-5"],
  },
  {
    id: "tot-lot-b",
    name: "Tot Lot B - Kirkpatrick Farms Park",
    category: "tot-lot",
    coordinates: [38.91640044330455, -77.55133459699549],
    description: "Shaded playground with modern slides and climbing elements, offering a comfortable stop during warm-weather walks.",
    address: "Near 200 Oak Park Drive",
    images: [
      "https://images.unsplash.com/photo-1566454825481-f0e7e9fd3dbc?w=800&auto=format&fit=crop",
    ],
    tags: ["playground", "slides", "shaded", "climbing"],
  },
  {
    id: "tot-lot-c",
    name: "Tot Lot C - Kirkpatrick Farms Playground",
    category: "tot-lot",
    coordinates: [38.917928247118105, -77.55883700926496],
    description: "Nature-inspired tot lot with wood-style structures and sensory play features that blend with the surrounding landscape.",
    address: "Near 150 Willow Way",
    images: [
      "https://images.unsplash.com/photo-1596461010909-53a19d0f8f0a?w=800&auto=format&fit=crop",
    ],
    tags: ["nature-themed", "wooden", "sensory play"],
  },
  {
    id: "tot-lot-d",
    name: "Tot Lot D - Kirkpatrick Farms Playground",
    category: "tot-lot",
    coordinates: [38.90916696748479, -77.55703693809983],
    description: "Compact toddler-friendly play area with soft surfacing and age-appropriate equipment for safe, everyday use.",
    address: "Near 75 Birch Circle",
    images: [
      "https://images.unsplash.com/photo-1576439663945-9e20a6c4b8f5?w=800&auto=format&fit=crop",
    ],
    tags: ["toddler-friendly", "rubber surfacing", "compact"],
  },
  {
    id: "tot-lot-e",
    name: "Tot Lot E - Kirkpatrick Farms Playground",
    category: "tot-lot",
    coordinates: [38.916810177814384, -77.56600920251728],
    description: "Larger neighborhood tot lot with separate activity zones to support play for different age groups.",
    address: "Near 300 Cedar Court",
    images: [
      "https://images.unsplash.com/photo-1680458841800-f74b1e5f4e47?w=800&auto=format&fit=crop",
    ],
    tags: ["multi-age", "large", "separate areas"],
  },
  {
    id: "tot-lot-f",
    name: "Tot Lot F - Kirkpatrick West Neighborhood Park",
    category: "tot-lot",
    coordinates: [38.912968, -77.571796],
    description: "Hillside playground featuring tunnel and bridge-style elements that add variety to the community play experience.",
    address: "Near 420 Pine Ridge Road",
    images: [
      "https://images.unsplash.com/photo-1587691592099-24045a3a9f29?w=800&auto=format&fit=crop",
    ],
    tags: ["tunnels", "bridges", "hillside"],
  },
  {
    id: "tot-lot-g",
    name: "Tot Lot G",
    category: "tot-lot",
    coordinates: [38.916366, -77.557040],
    description: "Interactive play space with music-themed elements that encourages movement, creativity, and group play.",
    address: "Near 180 Spruce Lane",
    images: [
      "https://images.unsplash.com/photo-1577896851905-dc99e1f8b4b9?w=800&auto=format&fit=crop",
    ],
    tags: ["musical", "interactive", "instruments"],
  },
  {
    id: "tot-lot-h",
    name: "Tot Lot H",
    category: "tot-lot",
    coordinates: [38.908311, -77.560725],
    description: "Adventure-style tot lot with balance and climbing features for active play in a neighborhood setting.",
    address: "Near 250 Elm Street",
    images: [
      "https://images.unsplash.com/photo-1560015534-cee980c1d42a?w=800&auto=format&fit=crop",
    ],
    tags: ["adventure", "rope course", "balance"],
  },
  // {
  //   id: "tot-lot-i",
  //   name: "Tot Lot I - Ash Avenue",
  //   category: "tot-lot",
  //   coordinates: [38.91068342670836, -77.54987601563097],
  //   description: "Classic-style playground with familiar play equipment that serves as a convenient gathering point for nearby families.",
  //   address: "Near 90 Ash Avenue",
  //   images: [
  //     "https://images.unsplash.com/photo-1571425046056-cfc17c664e7e?w=800&auto=format&fit=crop",
  //   ],
  //   tags: ["classic", "merry-go-round", "see-saw"],
  // },

  // Clubhouse (1)
  {
    id: "main-clubhouse",
    name: "Clubhouse",
    category: "clubhouse",
    coordinates: [38.91179899240765, -77.55827891478674],
    description: "Main clubhouse building with gym, party room, deck, and management office based on client-provided location details.",
    address: "25520 Summerall Dr, Aldie, VA 20105",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop",
    ],
    tags: ["events", "fitness center", "meeting rooms", "rentals"],
  },

  // Cemetery (1)
  {
    id: "historic-cemetery",
    name: "Historic Cemetery",
    category: "cemetery",
    coordinates: [38.9104, -77.5513],
    description: "Historic cemetery area preserved as a respectful memorial site within the Kirkpatrick Farms community.",
    address: "Historic District",
    images: [
      "https://images.unsplash.com/photo-1509128841709-6c13b25058a3?w=800&auto=format&fit=crop",
    ],
    tags: ["historic", "memorial", "preserved"],
  },
  // Pollinator Garden (1)
  {
    id: "pollinator-garden",
    name: "Pollinator Garden",
    category: "pollinator-garden",
    coordinates: [38.9138, -77.5572],
    description: "Pollinator garden featuring native plantings that support butterflies, bees, and other beneficial wildlife.",
    address: "Near North Pond",
    images: [
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1462275646964-a0e3571f4f93?w=800&auto=format&fit=crop",
    ],
    tags: ["native plants", "butterflies", "educational", "bees"],
  },
];

const trails: Trail[] = [
  // {
  //   id: "trail-loop-1",
  //   name: "Trail Loop 1 - Main Loop",
  //   category: "trail",
  //   coordinates: [
  //     [38.9166, -77.5609],
  //     [38.9160, -77.5594],
  //     [38.9155, -77.5578],
  //     [38.9146, -77.5566],
  //     [38.9133, -77.5552],
  //     [38.9120, -77.5542],
  //     [38.9108, -77.5537],
  //     [38.9097, -77.5546],
  //     [38.9093, -77.5564],
  //     [38.9099, -77.5586],
  //     [38.9110, -77.5602],
  //     [38.9129, -77.5608],
  //     [38.9148, -77.5609],
  //     [38.9166, -77.5609],
  //   ],
  //   description: "Primary perimeter walking route that connects major sections of the community with a steady, easy path.",
  //   tags: ["paved", "loop", "2.5 miles", "easy"],
  //   length: "2.5 miles",
  // },
  {
    id: "trail-connector-1",
    name: "Trail Connector - North Section",
    category: "trail",
    coordinates: [
      [38.906676, -77.562521],
      [38.914473, -77.560471],
      // [38.9155, -77.5578],
      // [38.9148, -77.5579],
      // [38.9139, -77.5582],
      // [38.9129, -77.5580],
    ],
    description: "Short connector segment linking northern neighborhood routes with central community amenities.",
    tags: ["connector", "paved", "short"],
    length: "0.3 miles",
  },
  // {
  //   id: "trail-connector-2",
  //   name: "Trail Connector - South Section",
  //   category: "trail",
  //   coordinates: [
  //     [38.9104, -77.5550],
  //     [38.9110, -77.5546],
  //     [38.9117, -77.5542],
  //     [38.9124, -77.5539],
  //   ],
  //   description: "South-side connector segment that improves walkability between nearby homes and main trail routes.",
  //   tags: ["connector", "paved", "scenic"],
  //   length: "0.25 miles",
  // },

];

const boundary: CommunityBoundary = {
  id: "kirkpatrick-farms-boundary",
  name: "Kirkpatrick Farms Community Boundary",
  coordinates: [
    // Exact boundary imported from docs/map.kmz (Kirkpatrick Farms Boundary)
    [38.915257, -77.5692891],
    [38.9147061, -77.5692891],
    [38.914272, -77.5692247],
    [38.9128862, -77.5669717],
    [38.9120347, -77.565534],
    [38.9113001, -77.5648903],
    [38.9097473, -77.5628089],
    [38.9095469, -77.5624226],
    [38.9061907, -77.5630449],
    [38.9070423, -77.5615214],
    [38.9076601, -77.5596331],
    [38.907994, -77.558689],
    [38.9080608, -77.5577878],
    [38.9081109, -77.5561784],
    [38.9080441, -77.5552343],
    [38.9085284, -77.5551699],
    [38.9094968, -77.5552343],
    [38.9112834, -77.5553845],
    [38.9115505, -77.5560712],
    [38.9120848, -77.5568222],
    [38.9130198, -77.5572728],
    [38.9134205, -77.557938],
    [38.9153739, -77.5563716],
    [38.9140216, -77.5533246],
    [38.914873, -77.5460075],
    [38.915808, -77.5460075],
    [38.9160584, -77.546029],
    [38.9155743, -77.5492905],
    [38.9171436, -77.5492905],
    [38.9174108, -77.549312],
    [38.9216846, -77.5585173],
    [38.9170268, -77.559719],
    [38.9198482, -77.5656627],
    [38.915257, -77.5692891],
  ],
};

export const communityMapData: CommunityMapData = {
  locations,
  trails,
  boundary,
  center: CENTER,
  zoom: 15,
};

// Tracks which parts still need client-provided source data.
export const dataReadiness = {
  photosProvidedByClient: true,
  descriptionsProvidedByClient: true,
  boundariesConfirmedByClient: false,
  usesSampleData: true,
} as const;

export const getLocationById = (id: string): MapLocation | undefined => {
  return communityMapData.locations.find((loc) => loc.id === id);
};

export const getTrailById = (id: string): Trail | undefined => {
  return communityMapData.trails.find((trail) => trail.id === id);
};

export const getLocationsByCategory = (category: string): MapLocation[] => {
  return communityMapData.locations.filter((loc) => loc.category === category);
};

export const getCategoryCounts = () => {
  const counts: Record<string, number> = {};
  communityMapData.locations.forEach((loc) => {
    counts[loc.category] = (counts[loc.category] || 0) + 1;
  });
  counts["trail"] = communityMapData.trails.length;
  return counts;
};
