import { create } from "zustand";


interface State {
  ids: string[];
  activeId?: string;
}

interface Actions {
  setId: (id: string) => void;
  setIds: (ids: string[]) => void;
  reset: () => void;
}

interface PlayerStore extends State, Actions { }

const usePlayer = create<PlayerStore>(set => ({
  ids: [],
  activeId: undefined,
  setId: (id: string) => set({ activeId: id }),
  setIds: (ids: string[]) => set({ ids }),
  reset: () => set({ ids: [], activeId: undefined })
}));

export default usePlayer;