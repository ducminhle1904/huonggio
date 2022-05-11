import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";

export default function Home() {
    return (
        <>
            <Banner />
            <div className={styles.container}></div>
        </>
    );
}
