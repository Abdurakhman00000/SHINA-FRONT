import { create } from "zustand";
interface useLoacalStorageDataTypes {
  favoritesData: Tyres[];
  comparesData: Tyres[];
  setFavoriteTyres: (data: Tyres[]) => void;
  setCompareTyres: (data: Tyres[]) => void;
}
export const useLoacalStorageData = create<useLoacalStorageDataTypes>(
  (set) => ({
    favoritesData: [],
    comparesData: [],
    setFavoriteTyres: (data) => set({ favoritesData: data }),
    setCompareTyres: (data) => set({ comparesData: data }),
  })
);
