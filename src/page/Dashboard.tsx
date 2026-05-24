import { useEffect, useState } from "react"
import Aside from "../components/Aside/Aside"
import Cards from "../components/Cards/Cards"
import Header from "../components/Header/Header"
import TopAppBar from "../components/TopAppBar/TopAppBar"
import styles from "./dashboard.module.css"
import Loading from "../components/Loading/Loading"


export default function Dashboard () {
 const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return <Loading />;
  }


    return (
        <main className={styles.dashboard}>
            <section>
                <Aside />
                
            </section>
            <section className={styles.mainDashboard}>
                <TopAppBar />
                <Header />
                <Cards />
            </section>



        </main>
    )
}