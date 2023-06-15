import styles from './Header.module.css'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux"
import { selectCurrentToken, selectCurrentUser } from "../../features/login/loginSlice"
import { setUserName, selectCurrentFirstName } from '../../features/getProfile/getProfileSlice'
import { logOut } from '../../features/login/loginSlice'


export default function Header () {
    const token = useSelector(selectCurrentToken)
    const user = useSelector(selectCurrentFirstName)
    const dispatch = useDispatch()
    const [isLogged, setIsLogged] = useState()

    //let user = ''
    //if (email != null) { user = email.split('@')[0]}

    useEffect(() => {
        setIsLogged((token != null) ? true : false);
      }, []);

    const logout = () => {
        dispatch(setUserName({ firstName:null, lastName:null}))
        return (token != null) ? dispatch(logOut()) : {} }

    return (
        <div>
            <nav className={styles.main_nav}>
            <Link  to="/" className={styles.main_nav_logo}>
                    <img
                    className={styles.main_nav_logo_image}
                    src="../../assets/img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                    />
                </Link>
                <div className={styles.signIn}>
                    <Link  to="/user" className={styles.main_nav_item}>
                        <img
                            className={styles.iconUser}
                            src="../../assets/img/user.svg"
                            alt="Argent Bank Logo"
                        />
                        <span>{user}</span>
                    </Link>
                    <Link to="/login" onClick={() => {logout()}} >
                        <span>{(token == null) ? 'Sign In' : 'Sign out'}</span>
                    </Link >
                </div>
            </nav>
        </div>
    )
}