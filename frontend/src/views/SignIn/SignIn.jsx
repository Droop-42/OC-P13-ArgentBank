/* eslint-disable react/react-in-jsx-scope */
import styles from './SignIn.module.css'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { postSignIn, getUserProfile } from '../../API/RESTRequests'

export default function Home() {
    let [userEmail, setUserEmail] = useState('tony@stark.com') // tony@stark.com
    let [userPass, setUserPass] = useState('password123') // password123
    const [errorMessage, setErrorMessage] = useState(false)
    const navigate= useNavigate()

    function submit (e) {
        e.preventDefault(); 
        postSignIn( userEmail, userPass ).then((response) => response).then(({ data }) => {
            if (data.status === 200) {
                window.localStorage.setItem("userToken", data.body.token)
                console.log( 'local storage:', window.localStorage.getItem("userToken"))
                const profile = getUserProfile()
                console.log('profile:', profile)
                return navigate("/user")
            }
            else { setErrorMessage(true) }
        })
    }

    return (
        <div >
            <main className={styles.bg_dark}>
                <section className={styles.sign_in_content}>
                    <img
                    className={styles.iconUser}
                    src="../../assets/img/user.svg"
                    alt="Argent Bank Logo"
                    />
                    <h1>Sign In</h1>
                    <form onSubmit={(e) => {submit(e)}}>
                        <div className={styles.input_wrapper}>
                            <label htmlFor="username">Username</label
                            ><input type="text" id="username" onChange={(e) => {setUserEmail(e.target.value)} }/>
                        </div>
                        <div className={styles.input_wrapper}>
                            <label htmlFor="password">Password</label
                            ><input type="password" id="password" onChange={(e) => {setUserPass(e.target.value)} }/>
                        </div>
                        <span className={errorMessage === true ? styles.errorActive : styles.error}>Bad username or password!</span>
                        <div className={styles.input_remember}>
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">
                                Remember me
                            </label>
                        </div>
                        <button type='submit' className={styles.sign_in_button} >Sign In</button>
                        
                    </form>
                </section>
            </main>
        </div>      
    )
}