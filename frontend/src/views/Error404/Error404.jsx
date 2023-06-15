import styles from './Error404.module.css'

export default function Error404 () {
    return (
        <div className={styles.error}>
            <div className={styles.txt}>
                <strong>Error 404</strong>
                <span className={styles.txt2}><strong>Page not found!</strong></span>
            </div> 
        </div>
    )
}