export const generateQueryParams = ({
  selectedBrand,
  selectedPrice,
  diametr,
  seasons,
  widthOfProfile,
  heigthOfProfile,
  indexOfSpeed,
  loadIndex,
  page,
  spikes,
}: {
  selectedBrand: string[];
  selectedPrice: string[];
  diametr: string[];
  seasons: string[];
  widthOfProfile: string[];
  heigthOfProfile: string[];
  indexOfSpeed: string[];
  loadIndex: string;
  page: number;
  spikes: string[];
}) => {
  const queryParams = {
    brand: selectedBrand?.length !== 0 ? selectedBrand : undefined,
    diameter_gte: diametr ? diametr[0] : undefined,
    diameter_lte: diametr ? diametr[1] : undefined,
    height_gte: heigthOfProfile ? heigthOfProfile[0] : undefined,
    height_lte: heigthOfProfile ? heigthOfProfile[1] : undefined,
    load_index: loadIndex?.length !== 0 ? loadIndex : undefined,
    price_gte: selectedPrice ? selectedPrice[0] : undefined,
    price_lte: selectedPrice ? selectedPrice[1] : undefined,
    season: seasons.length !== 0 ? seasons : undefined,
    speed_index: indexOfSpeed.length !== 0 ? indexOfSpeed : undefined,
    width_gte: widthOfProfile ? widthOfProfile[0] : undefined,
    width_lte: widthOfProfile ? widthOfProfile[1] : undefined,
    page: page > 1 ? page : 1,
    spikes: spikes?.length !== 0 ? spikes : undefined,
  };

  return queryParams;
};
