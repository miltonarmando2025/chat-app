import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "light", // Default to "light"
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    document.documentElement.setAttribute("data-theme", theme); // Ensure it's applied globally
 
    set({ theme });
  },
}));
document.documentElement.setAttribute("data-theme", localStorage.getItem("chat-theme") || "light");