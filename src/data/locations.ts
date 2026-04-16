export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
  description?: string;
  responseTime?: string;
}

export const PRIMARY_LOCATION: Location = {
  slug: "basingstoke",
  name: "Basingstoke",
  countyOrRegion: "Hampshire",
  latitude: 51.2746,
  longitude: -1.0857,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "tadley",
    name: "Tadley",
    countyOrRegion: "Hampshire",
    latitude: 51.3506,
    longitude: -1.1270,
  },
  {
    slug: "whitchurch",
    name: "Whitchurch",
    countyOrRegion: "Hampshire",
    latitude: 51.2371,
    longitude: -1.3414,
  },
  {
    slug: "overton",
    name: "Overton",
    countyOrRegion: "Hampshire",
    latitude: 51.2463,
    longitude: -1.2568,
  },
  {
    slug: "hook",
    name: "Hook",
    countyOrRegion: "Hampshire",
    latitude: 51.2821,
    longitude: -0.9603,
  },
  {
    slug: "kingsclere",
    name: "Kingsclere",
    countyOrRegion: "Hampshire",
    latitude: 51.3185,
    longitude: -1.2423,
  },
  {
    slug: "bramley",
    name: "Bramley",
    countyOrRegion: "Hampshire",
    latitude: 51.3290,
    longitude: -1.0620,
  },
  {
    slug: "sherborne-st-john",
    name: "Sherborne St John",
    countyOrRegion: "Hampshire",
    latitude: 51.2939,
    longitude: -1.0960,
  },
  {
    slug: "old-basing",
    name: "Old Basing",
    countyOrRegion: "Hampshire",
    latitude: 51.2663,
    longitude: -1.0460,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
