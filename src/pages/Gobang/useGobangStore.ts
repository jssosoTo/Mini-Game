import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useGobangStore = create(immer((set: any, get: any) => ({})));
