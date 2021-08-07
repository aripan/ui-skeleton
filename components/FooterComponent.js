import styles from "../styles/Layout.module.css"

const FooterComponent = () => {
    return (
       <div> 
            <div className="w-7/12 h-20 mx-auto mt-6 bg-white">
            <img className={` ${styles["profile-img"]} transform -translate-y-14 z-50 mx-auto    border-solid border-2 border-black`}
                    src="/images/avatar.png" 
                    height={80} 
                    width={80} 
                    alt="Your Name"
            />
            </div>
          </div>
       
        
    )
}

export default FooterComponent

