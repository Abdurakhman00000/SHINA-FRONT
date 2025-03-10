export namespace DATA_TYPES {
    export type GetDatasResponse = {
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
      images: string;
      url: string;
    }[];
  
    export type GetDatasRequest = void;
  }
  