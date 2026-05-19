import { FaBell, FaUser } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import styles from "./header.module.css"
import { IoIosAdd } from "react-icons/io";
import { Settings2 } from "lucide-react";
export default function Header () {


    return (
        <header className={styles.header}>
            <section className={styles.topHeader}>
                <div className={styles.leftHeader}>
                    <h1>Library</h1>
                    <button>Search</button>
                </div>
                <div className={styles.rightHeader}>
                    <h2>
                        <FaBell size={20} color="white" />
                    </h2>
                    <h2>
                        <HiUsers color="grey" size={30}/><span>22</span>
                    </h2>
                    <h2>
                        <FaUser color="grey" size={20}/>
                    </h2>
                </div>
            </section>
            <section className={styles.bottomHeader}>
                <div className={styles.test}>
                    <ul>
                        <li className={styles.dashed}>All games</li>
                        <li>Favorites</li>
                        <li>Play Next</li>
                        <li>Go to's</li>
                        <li>Multiplayer</li>
                    </ul>
                    <h2><IoIosAdd color="grey"/></h2>
                </div>
                <div className={styles.filters}>
                    <button className={styles.installed}>Installed <span>All</span></button>
                    <button className={styles.settings}><Settings2 color="white"/></button>
                </div>
            </section>

        
        
        </header>
    )
}