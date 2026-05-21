
import { IoIosMore } from "react-icons/io"
import styles from "./aside.module.css"
import { MdLabel } from "react-icons/md"
import { PiSquaresFourFill } from "react-icons/pi"
import { FaTools, FaUserAlt } from "react-icons/fa"
import { SiUnrealengine } from "react-icons/si"
import { HiUserGroup } from "react-icons/hi"



export default function Aside() {



    return (
        <aside className={styles.aside}>
            <section className={styles.topAside}>
                <h1>EPIC</h1>
                <IoIosMore size={30} strokeWidth={10} />
            </section>
            <section className={styles.functions}>
                <ul>
                    <li><span><MdLabel size={25} /></span>Store</li>
                    <li className={styles.library}><span><PiSquaresFourFill size={25} /></span>Library</li>
                    <li><span><FaTools size={25} /></span>Factory</li>
                    <li><span><SiUnrealengine size={25} /></span>Unreal Engine</li>
                    <li><span><HiUserGroup size={25} /></span>Community</li>
                    <li><span><FaUserAlt size={25} /></span>DeanEncoded</li>
                </ul>
            </section>
            <section className={styles.games}>
                <h3>Quick launch</h3>
            </section>


        </aside>
    )
}