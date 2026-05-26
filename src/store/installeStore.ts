import { create } from 'zustand';

type InstallStore = {
  install: boolean;
  search: string;
  setInstall: () => void;
  setSearch: (value: string) => void;
};

export const useInstallStore = create<InstallStore>((set) => ({
  install: false,
  search: '',

  setInstall: () =>
    set((state) => ({
      install: !state.install,
    })),

  setSearch: (value) =>
    set({
      search: value,
    }),
}));
