import { useEffect, useState } from "react";
import styles from "./card.module.css";

import { IoIosMore, IoMdSettings } from "react-icons/io";
import { FaHeart, FaPlay } from "react-icons/fa";
import { MdLabel } from "react-icons/md";

import gsap from "gsap";

import Popup from "../PopUp/PopUp";
import { useInstallStore } from "../../store/installeStore";

interface CardsProps {
  title: string;
  img: string;
  installed?: boolean;
}

export default function Cards() {
  const [data, setData] = useState<CardsProps[]>([]);
  const [popup, setPopup] = useState(false);
  const [modal, setModal] = useState<number | null>(null);

  const installed = useInstallStore((state) => state.install);
  const search = useInstallStore((state) => state.search);

  useEffect(() => {
    fetch("https://api-games-pearl.vercel.app/games")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      `.${styles.cards}`,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
      }
    );
  }, [data]);

  function handlePopup() {
    setPopup(true);

    setTimeout(() => {
      setPopup(false);
    }, 3000);
  }

  return (
    <>
      {popup && <Popup />}

      <section className={styles.secCards}>
        {data
          .filter((item) => {
            if (!installed) return true;
            return item.installed;
          })
          .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((item, i) => (
            <div
              className={`${styles.cards} ${
                modal === i ? styles.active : ""
              }`}
              key={i}
            >
              <div className={styles.imageContainer}>
                <img
                  src={`https://api-games-pearl.vercel.app/${item.img}`}
                  alt={item.title}
                />

                <div className={styles.overlay}>
                  <button onClick={handlePopup}>Play</button>
                </div>
              </div>

              <div className={styles.cardInfo}>
                <div className={styles.cardTexts}>
                  <h1>{item.title}</h1>
                </div>

                <button
                  onClick={() =>
                    setModal(modal === i ? null : i)
                  }
                >
                  <IoIosMore size={18} />
                </button>
              </div>

              {modal === i && (
                <section className={styles.modal}>
                  <ul>
                    <li onClick={handlePopup}>
                      <span>
                        <FaPlay />
                      </span>
                      Launch
                    </li>

                    <li onClick={handlePopup}>
                      <span>
                        <MdLabel />
                      </span>
                      Go to store page
                    </li>

                    <li onClick={handlePopup}>
                      <span>
                        <FaHeart />
                      </span>
                      Add to favorites
                    </li>

                    <li onClick={handlePopup}>
                      <span>
                        <MdLabel />
                      </span>
                      Add to collection
                    </li>

                    <li onClick={handlePopup}>
                      <span>
                        <IoMdSettings />
                      </span>
                      Manage
                    </li>
                  </ul>
                </section>
              )}
            </div>
          ))}
      </section>
    </>
  );
}