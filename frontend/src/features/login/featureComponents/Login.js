import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from '../loginSlice'
import { useLoginMutation } from '../loginApiEndpoints'


import styles from './Login.module.css'

const Login = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [email, setUser] = useState('')
    const [password, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    const [login, { isLoading }] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const userData = await login({ email, password }).unwrap()
            const ud = {...userData}
            const token = ud.body.token
            dispatch(setCredentials({ token:token, user:email }))
            
            setUser('')
            setPwd('')
            navigate('/user') 
        } catch (err) {
            if (!err.status) {
                // isLoading: true until timeout occurs
                setErrMsg('No Server Response');
            } else if (err.data) {
                setErrMsg(err.data.message);
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
             
        }
    }

    const handleUserInput = (e) => setUser(e.target.value)
    const handlePwdInput = (e) => setPwd(e.target.value)

    const content = isLoading ? <h1 className={styles.bg_dark}>Loading...</h1> : (
        <main className={styles.bg_dark}>
            <section className={styles.sign_in_content}>
            <p ref={errRef} className={errMsg ? styles.errorActive : styles.error} aria-live="assertive">{errMsg}</p>
                <img
                    className={styles.iconUser}
                    src="../../assets/img/user.svg"
                    alt="Argent Bank Logo"
                />
                <h1>Sign In</h1>

                <form onSubmit={handleSubmit}>
                    <div className={styles.input_wrapper}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            value={email}
                            onChange={handleUserInput}
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className={styles.input_wrapper}>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={handlePwdInput}
                            value={password}
                            required
                        />
                    </div>
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
    )

    return content
}
export default Login