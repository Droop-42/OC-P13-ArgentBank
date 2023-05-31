import styles from './FeatureCard.module.css'

export default function Hero () {
    return (
        <div className={styles.feature_item} >
          <img src="../../assets/img/icon-chat.png" alt="Chat Icon" className={styles.feature_icon}/>
          <h3 className={styles.feature_item_title}>You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
    )
}