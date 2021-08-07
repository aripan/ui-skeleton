import styles from "../styles/Layout.module.css"

const MainComponent = () => {
    return (
        <div className={styles.main}>
            <div className={styles["main-top"]}></div>
            <div className={styles["main-left"]}></div>
            <div className={styles["main-right"]}></div>
            <div className={styles["main-bottom"]}></div>
            
        </div>
    )
}

export default MainComponent
