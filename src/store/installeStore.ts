import { create } from "zustand";

type InstalledStore = {
    install: boolean
    setInstall: () => void
}


export const useInstallStore = create<InstalledStore>((set) => ({
    install: false,

    setInstall: () =>
        set((state) => ({
            install: !state.install
        }))
}))