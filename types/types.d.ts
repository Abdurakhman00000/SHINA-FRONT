interface Product {
  count: number;
  next: string | null;
  previous: string | null;
  results: Tyres[];
}

interface Tyres {
  id: number;
  season: string;
  brand: string;
  product_name: string;
  price: string;
  speed_index: string;
  load_index: string;
  width: string;
  height: string;
  diameter: string;
  availability: string;
  images: string[] | string;
  spikes: string;
  url: string;
  site_name: string;
}

interface Params {
  brand: string[] | undefined;
  diameter_gte: string | undefined;
  diameter_lte: string | undefined;
  height_gte: string | undefined;
  height_lte: string | undefined;
  load_index: string | undefined;
  price_gte: string | undefined;
  price_lte: string | undefined;
  season: string[] | undefined;
  speed_index: string[] | undefined;
  width_gte: string | undefined;
  width_lte: string | undefined;
  spikes: string[] | undefined;
  page: number;
}

interface SearchParams {
  name?: string;
  search_brand?: string;
}
