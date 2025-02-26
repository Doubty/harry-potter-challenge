import { create } from "zustand";
import { HouseState } from "../types/types";

export const useHouseStore = create<HouseState>((set) => ({
    house: "Gryffindor",
    setHouse: (house) => set({ house }),
}));
