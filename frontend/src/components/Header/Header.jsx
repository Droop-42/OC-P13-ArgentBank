import styles from './Header.module.css'

export default function Header () {
    return (
        <div>
            <nav className={styles.main_nav}>
                <a className={styles.main_nav_logo} href="./home">
                    <img
                    className={styles.main_nav_logo_image}
                    src="../../assets/img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                    />
                </a>
                <div>
                    <a className={styles.main_nav_item} href="./sign-in">
                    <i className={styles.fa_user_circle}></i>
                    <img
                    className={styles.iconUser}
                    src="../../assets/img/user.svg"
                    alt="Argent Bank Logo"
                    />
                    Sign In
                    </a>
                </div>
            </nav>
        </div>
    )
}