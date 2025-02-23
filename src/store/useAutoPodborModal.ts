import { create } from "zustand";
interface useAutoPodborModalState {
  autoPodborOpen: boolean;
  togggleAutoPodborModal: (value: boolean) => void;
}
export const useAutoPodborModalStore = create<useAutoPodborModalState>(
  (set) => ({
    autoPodborOpen: false,
    togggleAutoPodborModal: (value) => set({ autoPodborOpen: value }),
  })
);
