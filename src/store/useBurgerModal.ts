import { create } from "zustand";
interface useBurgerModalState {
  isOpen: boolean;
  toggleModal: (value: boolean) => void;
}
export const useBurgerModal = create<useBurgerModalState>((set) => ({
  isOpen: false,
  toggleModal: (value: boolean) => set({ isOpen: value }),
}));
