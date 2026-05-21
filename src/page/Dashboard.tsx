import Aside from "../components/Aside/Aside"
import Cards from "../components/Cards/Cards"
import Header from "../components/Header/Header"
import styles from "./dashboard.module.css"

export default function Dashboard () {



    return (
        <main className={styles.dashboard}>
            <section>
                <Aside />
            </section>
            <section className={styles.mainDashboard}>
                <Header />
                <Cards />
            </section>



        </main>
    )
}