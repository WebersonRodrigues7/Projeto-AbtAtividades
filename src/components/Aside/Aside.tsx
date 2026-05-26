import { IoIosMore } from "react-icons/io";
import styles from "./aside.module.css";
import { MdLabel } from "react-icons/md";
import { PiSquaresFourFill } from "react-icons/pi";
import { FaTools, FaUserAlt } from "react-icons/fa";
import { SiUnrealengine } from "react-icons/si";
import { HiUserGroup } from "react-icons/hi";
import MiniCard from "../MiniCards/MiniCards";
import { CgSoftwareDownload } from "react-icons/cg";
import { useState } from "react";
import Popup from "../PopUp/PopUp";

export default function Aside() {

  const [popup, setPopup] = useState(false)

  function handlePopup() {
    setPopup(true)

    setTimeout(() => {
      setPopup(false)
    }, 3000);
  }
  return (
    <>
      {popup && <Popup />}

      <aside className={styles.aside}>
        <header className={styles.topAside}>
          <h1>GRAND</h1>

          <button onClick={handlePopup} className={styles.moreButton} aria-label="Mais opções">
            <IoIosMore size={24} />
          </button>
        </header>

        <nav className={styles.functions}>
          <ul>
            <li onClick={handlePopup}>
              <span><MdLabel size={22} /></span>
              Store
            </li>

            <li className={styles.library}>
              <span><PiSquaresFourFill size={22} /></span>
              Library
            </li>

            <li onClick={handlePopup}>
              <span><FaTools size={22} /></span>
              Factory
            </li>

            <li onClick={handlePopup}>
              <span><SiUnrealengine size={22} /></span>
              Unreal Engine
            </li>

            <li onClick={handlePopup}>
              <span><HiUserGroup size={22} /></span>
              Community
            </li>

            <li onClick={handlePopup}>
              <span><FaUserAlt size={22} /></span>
              Buss1st
            </li>
          </ul>
        </nav>

        <section className={styles.games}>
          <h3>Quick launch</h3>

          <div className={styles.gamesList}>
            <MiniCard handlePopup={handlePopup} />
          </div>
        </section>

        <section className={styles.secDownloads}>
          <article className={styles.downloads}>
            <div className={styles.topSecDownloads}>
              <div className={styles.downloadIcon}>
                <CgSoftwareDownload size={26} />
              </div>

              <div className={styles.tag}>
                <h3>Downloads</h3>
                <p>1 out of 2</p>
              </div>
            </div>

            <div className={styles.progressBar}>
              <div></div>
            </div>
          </article>
        </section>
      </aside>
    </>
  );
}