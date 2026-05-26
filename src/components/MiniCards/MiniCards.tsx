import { useEffect, useState } from "react";
import styles from "./minicard.module.css";
import gsap from "gsap";

interface MiniCardProps {
    title: string;
    img: string;
}

interface MiniCardComponentProps {
    handlePopup: () => void;
}

export default function MiniCard({ handlePopup }: MiniCardComponentProps) {
    const [data, setData] = useState<MiniCardProps[]>([]);

    useEffect(() => {
        fetch("https://api-games-pearl.vercel.app/games")
            .then((res) => res.json())
            .then((data) => {
                setData(data.slice(0, 5));
            });
    }, []);

    useEffect(() => {
        gsap.fromTo(
            `.${styles.minicard}`,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 3,
                stagger: 0.15,
            }
        );
    }, [data]);

    return (
        <section className={styles.secMiniCard}>
            {data.map((item, i) => (
                <div onClick={handlePopup} className={styles.minicard} key={i}>
                    <div className={styles.imageContainer}>
                        <img
                            src={`https://api-games-pearl.vercel.app/${item.img}`}
                            alt={item.title}
                        />
                        <div className={styles.status}></div>
                    </div>

                    <h3>{item.title}</h3>
                </div>
            ))}
        </section>
    );
}