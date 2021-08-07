import styles from "../styles/Layout.module.css"

const MainComponent = ({data1, data2}) => {
    console.log(data1, data2)
    return (
        <div className={styles.main}>
            <div className={styles["main-top"]}></div>
            <div className={styles["main-left"]}></div>
            <div className={styles["main-right"]}>

                {/* here I have shown the fetched data */}

                {/* <div className="p-6">
                        <h3>Score of Christian and Drosten is &rarr; {data1.score}</h3>
                        <p>resource &rarr;  {data1.resource}</p>
                        <h3>Score of Harald and Lesch is &rarr; {data2.score}</h3>
                        <p>resource &rarr; {data2.resource}</p>
                    </div>                */}
            </div>
            <div className={styles["main-bottom"]}></div>
            
        </div>
    )
}

export default MainComponent
