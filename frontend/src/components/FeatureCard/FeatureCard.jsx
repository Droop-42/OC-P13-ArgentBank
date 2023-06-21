import styles from './FeatureCard.module.css'

export default function Hero (props) {
    const link = "../../assets/img/"+props.logo+".png"
    return (
        <div className={styles.feature_item} >
          <img src={link} alt="Chat Icon" className={styles.feature_icon}/>
          <h3 className={styles.feature_item_title}>{props.title}</h3>
          {props.children}
        </div>
    )
}