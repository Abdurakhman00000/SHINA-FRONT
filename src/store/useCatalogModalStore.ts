import { create } from "zustand";
interface useCatalogModalState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
export const useCatalogModalStore = create<useCatalogModalState>((set) => ({
  isOpen: false,
  setIsOpen: (value: boolean) => set({ isOpen: value }),
}));
