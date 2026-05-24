import { useEffect, useState } from "react";
import styles from "./card.module.css";
import { IoIosMore, IoMdSettings } from "react-icons/io";
import Popup from "../PopUp/PopUp";
import { useInstallStore } from "../../store/installeStore";
import Modal from "../ModalGame/modal";
import { FaHeart, FaPlay } from "react-icons/fa";
import { MdLabel } from "react-icons/md";

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

  useEffect(() => {
    fetch("https://api-games-pearl.vercel.app/games")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

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
          .map((item, i) => (
            <div className={styles.cards} key={i}>
              <div className={styles.imageContainer}>
                <img
                  src={`https://api-games-pearl.vercel.app/${item.img}`}
                  alt={item.title}
                />

                <div className={styles.overlay}>
                  <button onClick={handlePopup}>
                    Play
                  </button>
                </div>
              </div>

              <div className={styles.cardInfo}>
                <div className={styles.cardTexts}>
                  <h1>{item.title}</h1>
                </div>

                <button onClick={() => setModal(modal === i ? null : i)}>
                  <IoIosMore size={18} />
                </button>
                {modal === i && (
                  <section className={styles.modal}>
                    <ul>
                      <li onClick={handlePopup}><span><FaPlay /></span>Launch</li>
                      <li onClick={handlePopup}><span><MdLabel /></span>Go to store page</li>
                      <li onClick={handlePopup}><span><FaHeart /></span>Add to favorites</li>
                      <li onClick={handlePopup}><span></span>Add to collection</li>
                      <li onClick={handlePopup}><span><IoMdSettings /></span>Manage</li>
                    </ul>
                  </section>
                )}
              </div>
            </div>
          ))}
      </section>
    </>
  );
}