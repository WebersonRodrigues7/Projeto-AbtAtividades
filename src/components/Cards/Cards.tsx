import { useEffect, useState } from "react"
import styles from "./card.module.css"
import { IoIosMore } from "react-icons/io"
interface CardsProps {
  title: string,
  img: string
}



export default function Cards() {
  const [data, setData] = useState<CardsProps[]>([])
  useEffect(() => {
    fetch('https://api-games-pearl.vercel.app/games')
      .then(
        res => res.json()
      ).then(
        data => {
          console.log(data)
          setData(data)
        }

      )
  }, [])

  return (
    <section className={styles.secCards}>
      {
        data.map((item, i) => (
          <div className={styles.cards} key={i}>
            <img src={`https://api-games-pearl.vercel.app/${item?.img}`} alt="a" />
            <h1>{item?.title} <span><IoIosMore size={15}  strokeWidth={10} /></span></h1>
          </div>
        ))
      }


    </section>
  )
}