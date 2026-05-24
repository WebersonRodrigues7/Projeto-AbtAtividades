import { FaBell, FaUser } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import styles from "./header.module.css";
import { IoIosAdd } from "react-icons/io";
import { Settings2 } from "lucide-react";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Popup from "../PopUp/PopUp";
import { useInstallStore } from "../../store/installeStore";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState(false)
  const { install, setInstall } = useInstallStore()
  function handlePopup() {

    setPopup(true)

    setTimeout(() => {
      setPopup(false)
    }, 3000)
  }

  return (
    <section className={styles.header}>
      {popup && <Popup />}
      {open && (
        <div className={styles.topIconsMenu}>
          <button onClick={handlePopup} >
            <FaBell size={15} />
          </button>

          <button onClick={handlePopup}>
            <HiUsers size={24} />
            <span>22</span>
          </button>

          <button onClick={handlePopup}>
            <FaUser size={15} />
          </button>
        </div>
      )}

      <section className={styles.topHeader}>
        <div className={styles.leftHeader}>
          <h1>Library</h1>

          <button className={styles.searchButton}>Search</button>
        </div>

        <div className={styles.rightHeader}>
          <button className={styles.menu} onClick={() => setOpen(!open)}>
            <IoMenu className={styles.menuIcon} size={38} />
          </button>

          <div className={styles.topIcons}>
            <button onClick={handlePopup}>
              <FaBell size={15} />
            </button>

            <button onClick={handlePopup} className={styles.friendsButton}>
              <HiUsers size={24} />
              <span>22</span>
            </button>

            <button onClick={handlePopup}>
              <FaUser size={15} />
            </button>
          </div>
        </div>
      </section>

      <section className={styles.bottomHeader}>
        <div className={styles.list}>
          <ul>
            <li className={styles.dashed}>All games</li>
            <li onClick={handlePopup}>Favorites</li>
            <li onClick={handlePopup}>Play Next</li>
            <li onClick={handlePopup}>Go to's</li>
            <li onClick={handlePopup}>Multiplayer</li>
          </ul>

          <button onClick={handlePopup} className={styles.addButton}>
            <IoIosAdd size={22} />
          </button>
        </div>

        <div className={styles.filters}>
          <button onClick={setInstall}  className={styles.installed}>
            {install ? "Installed" : "All Games"} 
          </button>

          <button onClick={handlePopup} className={styles.settings}>
            <Settings2 size={20} />
          </button>
        </div>
      </section>
    </section>
  );
}