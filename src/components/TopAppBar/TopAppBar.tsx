import { MdOutlineSquare } from "react-icons/md";
import styles from "./topappbar.module.css";
import { IoMdClose } from "react-icons/io";
import { VscChromeMinimize } from "react-icons/vsc";
import { getCurrentWindow } from "@tauri-apps/api/window";

export default function TopAppBar() {
  const appWindow = getCurrentWindow();

  return (
    <header className={styles.topbar}>
      <div
        className={styles.dragArea}
        data-tauri-drag-region
      />

      <button onClick={() => appWindow.minimize()}>
        <VscChromeMinimize size={25} />
      </button>

      <button onClick={() => appWindow.toggleMaximize()}>
        <MdOutlineSquare size={20} />
      </button>

      <button
        className={styles.closeButton}
        onClick={() => appWindow.close()}
      >
        <IoMdClose size={25} />
      </button>
    </header>
  );
}