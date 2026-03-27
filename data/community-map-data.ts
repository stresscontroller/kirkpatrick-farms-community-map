import type { CommunityMapData, MapLocation, Trail, CommunityBoundary } from "@/types/map";

// Center coordinates aligned to client-provided Kirkpatrick Farms references
const CENTER: [number, number] = [38.9128, -77.5558];

const locations: MapLocation[] = [
  // Cemetery (1)
  {
    id: "cemetery",
    name: "Foley Family Cemetery",
    category: "cemetery",
    coordinates: [38.914840, -77.561602],
    description: "Small preserved 19th-century burial site in a wooded area, with a few original gravestones, quietly reflecting the land’s early history.",
    address: "Historic District",
    images: [
      "/images/locations/cemetery.jpeg",
    ],
    tags: ["cemetery", "foley family", "historic"],
  },

  // Clubhouse (1)
  {
    id: "main-clubhouse",
    name: "Clubhouse",
    category: "clubhouse",
    coordinates: [38.91179899240765, -77.55827891478674],
    description: "Community clubhouse with pool, fitness center, and event space, serving as a central hub for residents’ recreation, gatherings, and activities.",
    address: "25520 Summerall Dr, Aldie, VA 20105",
    images: [
      "/images/locations/clubhouse.jpg",
      "/images/locations/gym.jpg",
    ],
    tags: ["gym", "fitness center", "pool", "events"],
  },

  // Pollinator Garden (1)
  {
    id: "pollinator-garden",
    name: "Pollinator Garden",
    category: "pollinator-garden",
    coordinates: [38.915379, -77.556794],
    description: "Native plant area with natural vegetation supporting bees and butterflies, offering a quiet green space that promotes local wildlife and ecosystem health.",
    address: "Near North Pond",
    images: [
      "/images/locations/pollinator-garden_2.jpg",
    ],
    tags: ["pollinator garden", "native plants", "bees", "butterflies"],
  },

  // Ponds (3)
  {
    id: "pond-1",
    name: "Bright Court Pond",
    category: "pond",
    coordinates: [38.913757, -77.559260],
    description: "Neighborhood pond bordered by homes and open green space, offering calm water views and a quiet setting that supports local wildlife and outdoor relaxation.",
    address: "Near Bright Ct, Kirkpatrick Farms, Aldie, VA",
    images: [
      "/images/locations/pond-1_1.jpg",
    ],
    tags: ["bright court", "deck", "gazebo", "playground", "chess/checker", "cornhole", "byobags"],
  },
  {
    id: "pond-2",
    name: "Mindful Court Pond",
    category: "pond",
    coordinates: [38.912226, -77.557422],
    description: "Neighborhood pond surrounded by homes and landscaped green space, providing peaceful water views and a quiet environment that supports local wildlife.",
    address: "Near Mindful Ct, Kirkpatrick Farms, Aldie, VA",
    images: [
      "/images/locations/pond-2_1.png",
    ],
    tags: ["mindful court", "deck", "gazebo", "cornhole", "byobags"],
  },
  {
    id: "pond-3",
    name: "Diligence Court Pond",
    category: "pond",
    coordinates: [38.916524, -77.551444],
    description: "Larger community pond with open water and surrounding green space, offering scenic views and access to nearby paved paths for walking and outdoor activity.",
    address: "Near Diligence Ct, Kirkpatrick Farms, Aldie, VA",
    images: [
      "/images/locations/pond-3_1.jpg",
    ],
    tags: ["diligence court", "deck", "gazebo", "cornhole", "byobags"],
  },

  // Pool (1)
  {
    id: "pool",
    name: "Pool",
    category: "pool",
    coordinates: [38.911456, -77.558325],
    description: "Community swimming pool with lounge seating and open deck space, offering a refreshing place for residents to relax, swim, and enjoy seasonal outdoor recreation.",
    address: "25520 Summerall Dr, Aldie, VA 20105",
    images: [
      "/images/locations/pool_1.jpg",
      "/images/locations/pool_2.jpg",
      "/images/locations/pool_3.jpg",
    ],
    tags: ["pool", "lounge seating", "open deck", "seasonal"],
  },

  // Tennis Court (2)
  {
    id: "clubhouse-tennis-court",
    name: "Clubhouse Tennis Court",
    category: "tennis-court",
    coordinates: [38.911155, -77.558544],
    description: "Community tennis court near the clubhouse, offering a dedicated space for recreational matches, practice, and everyday play.",
    address: "25520 Summerall Dr, Aldie, VA 20105",
    images: [
      "/images/locations/cherish-ct-tennis-bball.jpg",
    ],
    tags: ["tennis", "clubhouse", "summerall dr"],
  },
  {
    id: "cherish-ct-tennis-court",
    name: "Cherish Court Tennis Court",
    category: "tennis-court",
    coordinates: [38.914611, -77.550114],
    description: "Neighborhood tennis court providing additional space for casual games, practice sessions, and outdoor recreation within the community.",
    address: "Near Cherish Court, Aldie, VA",
    images: [
      "/images/locations/cherish-ct-tennis-bball.jpg",
    ],
    tags: ["tennis", "cherish ct"],
  },

  // Basketball Court (2)
  {
    id: "clubhouse-basketball-court",
    name: "Clubhouse Basketball Court",
    category: "basketball-court",
    coordinates: [38.911055, -77.558297],
    description: "Community basketball court near the clubhouse, providing a convenient space for pickup games, shooting practice, and active recreation.",
    address: "25520 Summerall Dr, Aldie, VA 20105",
    images: [
      "/images/locations/cherish-ct-tennis-bball.jpg",
    ],
    tags: ["basketball", "clubhouse", "summerall dr"],
  },
  {
    id: "cherish-ct-basketball-court",
    name: "Cherish Court Basketball Court",
    category: "basketball-court",
    coordinates: [38.914578, -77.549819],
    description: "Neighborhood basketball court offering extra space for casual play, practice, and everyday outdoor activity in the community.",
    address: "Near Cherish Court, Aldie, VA",
    images: [
      "/images/locations/cherish-ct-tennis-bball.jpg",
    ],
    tags: ["basketball", "cherish ct"],
  },

  // Tot Lots (7)
  {
    id: "tot-lot-1",
    name: "Tot Lot - Bostonian Place",
    category: "tot-lot",
    coordinates: [38.916775, -77.566059],
    description: "Neighborhood tot lot with dedicated play space for children, offering a convenient outdoor area for everyday recreation and family use.",
    address: "Bostonian Place, Aldie, VA",
    images: [
      "/images/locations/tot-lot-1_1.jpg",
      "/images/locations/tot-lot-1_2.jpg",
    ],
    tags: ["multi-age", "large", "separate areas"],
  },
  {
    id: "tot-lot-2",
    name: "Tot Lot - Eloquence Terrace",
    category: "tot-lot",
    coordinates: [38.917878, -77.558873],
    description: "Community playground with children’s play equipment, providing a convenient outdoor stop for families within the neighborhood.",
    address: "Near Eloquence Terrace, Aldie, VA",
    images: [
      "/images/locations/tot-lot-2_1.jpg",
      "/images/locations/tot-lot-2_2.jpg",
    ],
    tags: ["playground", "slides", "shaded", "climbing"],
  },
  {
    id: "tot-lot-3",
    name: "Tot Lot - Bright Court",
    category: "tot-lot",
    coordinates: [38.915027, -77.560135],
    description: "Neighborhood tot lot with a compact play area for children, offering a quiet space for outdoor play within the community.",
    address: "Near Bright Court, Aldie, VA",
    images: [
      "/images/locations/tot-lot-3_1.jpg",
      "/images/locations/tot-lot-3_2.jpg",
      "/images/locations/tot-lot-3_3.jpg",
    ],
    tags: ["nature-themed", "wooden", "sensory play"],
  },
  {
    id: "tot-lot-4",
    name: "Tot Lot - Balint Park Court",
    category: "tot-lot",
    coordinates: [38.909181, -77.557115],
    description: "Small community playground with children’s play features, designed as a convenient recreation spot for nearby residents and families.",
    address: "Near Balint Park Court, Aldie, VA",
    images: [
      "/images/locations/tot-lot-4_1.jpg",
      "/images/locations/tot-lot-4_2.jpg",
    ],
    tags: ["toddler-friendly", "rubber surfacing", "compact"],
  },
  {
    id: "tot-lot-5",
    name: "Tot Lot - Destiny Drive/Opportunity Drive",
    category: "tot-lot",
    coordinates: [38.919387, -77.555953],
    description: "Neighborhood tot lot with children’s play equipment, providing an accessible outdoor space for families and casual daily play.",
    address: "Near Destiny Drive & Opportunity Drive, Aldie, VA",
    images: [
      "/images/locations/tot-lot-5_1.jpg",
      "/images/locations/tot-lot-5_2.jpg",
    ],
    tags: ["playground", "swings", "sandbox", "ages 2-5"],
  },
  {
    id: "tot-lot-6",
    name: "Tot Lot - Destination Square/Creation Terrace",
    category: "tot-lot",
    coordinates: [38.921371, -77.558320],
    description: "Community tot lot with a dedicated play area for children, offering a convenient neighborhood space for outdoor activity and family use.",
    address: "Near Destination Square & Creation Terrace, Aldie, VA",
    images: [
      "/images/locations/tot-lot-6_1.jpg",
    ],
    tags: ["playground", "swings", "sandbox", "ages 2-5"],
  },
  {
    id: "tot-lot-7",
    name: "Tot Lot - Little Krepps Court",
    category: "tot-lot",
    coordinates: [38.908310, -77.560701],
    description: "Neighborhood playground with children’s play equipment, serving as a small outdoor recreation area for families in the community.",
    address: "Near Little Krepps Court, Aldie, VA",
    images: [
      "/images/locations/tot-lot-7_1.jpg",
    ],
    tags: ["playground", "swings", "sandbox", "ages 2-5"],
  },
];

const trails: Trail[] = [
  {
    id: "walking-trail-loop",
    name: "Walking Trail Loop",
    category: "trail",
    coordinates: [
      [38.9184619, -77.5525207],
      [38.9178985, -77.5524402],
      [38.9176272, -77.5524188],
      [38.9173559, -77.55229],
      [38.9171931, -77.5521935],
      [38.917047, -77.5521666],
      [38.9168843, -77.5520164],
      [38.9166756, -77.5519092],
      [38.9163625, -77.5517911],
      [38.9162916, -77.5517911],
      [38.9162707, -77.5519092],
      [38.9162582, -77.5519628],
      [38.9162123, -77.5519199],
      [38.9161079, -77.5517643],
      [38.9160119, -77.5516195],
      [38.9158742, -77.5513405],
      [38.9157865, -77.5511528],
      [38.9157531, -77.5509865],
      [38.915799, -77.5508577],
      [38.9160161, -77.5507773],
      [38.9162081, -77.5507129],
      [38.9163166, -77.550611],
      [38.9164293, -77.5505359],
      [38.9166505, -77.550509],
      [38.9167298, -77.5505037],
      [38.9168216, -77.550568],
      [38.9168634, -77.5506753],
      [38.9168425, -77.5508631],
      [38.9168467, -77.5509811],
      [38.9168634, -77.5510669],
      [38.9169176, -77.5511045],
      [38.9170178, -77.551142],
      [38.9171305, -77.551185],
      [38.9171931, -77.5512171],
      [38.9172808, -77.5514156],
      [38.9175813, -77.5518072],
      [38.9177399, -77.5519413],
      [38.91779, -77.5519467],
      [38.9178985, -77.5519038],
      [38.9181447, -77.5519252],
      [38.9185329, -77.5519682],
      [38.9185579, -77.5520218],
      [38.9185412, -77.5521881],
      [38.9184995, -77.552408],
      [38.9184619, -77.5525207],
    ],
    description:
      "Paved asphalt walking trail loop imported from the client-provided trails KMZ.",
    tags: ["walking trail", "paved", "scenic", "kmz"],
    length: "TBD",
  },
];

const boundary: CommunityBoundary = {
  id: "kirkpatrick-farms-boundary",
  name: "Kirkpatrick Farms Community Boundary",
  coordinates: [
    // Exact boundary imported from docs/map area.kmz (KRK Map)
    [38.9198145, -77.5655892],
    [38.9165173, -77.5682715],
    [38.9149395, -77.5694624],
    [38.9146056, -77.5695375],
    [38.9143886, -77.5693551],
    [38.9133033, -77.5677457],
    [38.9128191, -77.5669733],
    [38.9125353, -77.5664154],
    [38.9122181, -77.5657073],
    [38.9117422, -77.565203],
    [38.9113582, -77.5648704],
    [38.9101477, -77.5630572],
    [38.9098304, -77.562671],
    [38.9062655, -77.563583],
    [38.9066746, -77.5624457],
    [38.9068082, -77.5622204],
    [38.9068834, -77.5620273],
    [38.9072173, -77.5609651],
    [38.9074511, -77.5603965],
    [38.9076431, -77.5597528],
    [38.9077934, -77.5588408],
    [38.9078936, -77.5572851],
    [38.9079687, -77.5567701],
    [38.9079771, -77.5559333],
    [38.9080438, -77.5551715],
    [38.9112163, -77.555075],
    [38.9113916, -77.5553754],
    [38.9113916, -77.5557294],
    [38.9113832, -77.5560191],
    [38.9114751, -77.5562981],
    [38.9116253, -77.5565663],
    [38.9118174, -77.5567916],
    [38.9122765, -77.5569525],
    [38.9128275, -77.5570813],
    [38.912911, -77.557092],
    [38.9133284, -77.5575212],
    [38.9134285, -77.5577679],
    [38.9152317, -77.556341],
    [38.9138626, -77.5534549],
    [38.9139127, -77.552382],
    [38.9139461, -77.5519529],
    [38.9142884, -77.5506225],
    [38.9143635, -77.5498715],
    [38.9148143, -77.5462452],
    [38.9150314, -77.5459769],
    [38.9156157, -77.5460306],
    [38.915791, -77.5460306],
    [38.9158828, -77.5461701],
    [38.915983, -77.5463524],
    [38.9158411, -77.5477901],
    [38.9156741, -77.5490668],
    [38.9157409, -77.5492385],
    [38.9171433, -77.5491634],
    [38.9173019, -77.5492492],
    [38.9173771, -77.5494209],
    [38.9178111, -77.550129],
    [38.9188212, -77.5521353],
    [38.9202402, -77.5551394],
    [38.9209164, -77.5566521],
    [38.9216008, -77.5580683],
    [38.9221434, -77.55927],
    [38.9222185, -77.5597098],
    [38.9219598, -77.559903],
    [38.9199982, -77.5605467],
    [38.9196643, -77.5606969],
    [38.9186626, -77.5610724],
    [38.9182953, -77.5611797],
    [38.918145, -77.5612441],
    [38.9180031, -77.561287],
    [38.9199064, -77.5651172],
    [38.9199314, -77.5652888],
    [38.9199064, -77.5655034],
    [38.9198145, -77.5655892],
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
