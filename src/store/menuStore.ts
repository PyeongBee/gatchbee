import { create } from "zustand";

interface MenuState {
  activeMenu: string;
  isCollapsed: boolean;
  setActiveMenu: (menu: string) => void;
  toggleSidebar: () => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  activeMenu: "about",
  isCollapsed: false,
  setActiveMenu: (menu: string) => set({ activeMenu: menu }),
  toggleSidebar: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
}));
