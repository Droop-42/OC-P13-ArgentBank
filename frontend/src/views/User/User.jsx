/* eslint-disable react/react-in-jsx-scope */
import styles from './User.module.css'
import { useState, useEffect } from 'react'
import TransactionCard from '../../components/TransactionCard'
import { useGetProfileQuery } from '../../features/getProfile/getProfileApiEndpoints'
import { useDispatch, useSelector } from 'react-redux'
import { setUserName, selectCurrentFirstName, selectCurrentLastName } from '../../features/getProfile/getProfileSlice'
import { useEditProfileMutation } from '../../features/editProfile/editProfileEndpoints'

export default function User() {
    console.log('render')
    const { data, isLoading, isSuccess } = useGetProfileQuery()
    const [edit] = useEditProfileMutation()
    const dispatch = useDispatch()

    const fName = useSelector(selectCurrentFirstName)
    const lName = useSelector(selectCurrentLastName)
    
    const [isEditing, setIsEditing] = useState(false)
    const [firstName, setFirstName] = useState(fName ? fName : '')
    const [lastName, setLastName] = useState(lName ? lName : '')
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await edit({ firstName:firstName, lastName:lastName }).unwrap() 
            dispatch(setUserName({ userFirstName:firstName, userLastName:lastName }))
            setIsEditing(false)
            console.log('ok')
        } catch (err) {
            if (!err.status) {
               console.log('submit error') 
            }
        } 
    }

    useEffect( () => {
                function checkFlag() {
                    if(!isSuccess) {
                       console.log('waiting')
                    } else {
                        const profileData = {...data}
                        dispatch(setUserName({ userFirstName:profileData.body.firstName, userLastName:profileData.body.lastName }))
                        setFirstName(profileData.body.firstName)
                        setLastName(profileData.body.lastName)
                        console.log('name set')
                    }
                }
                checkFlag();
    }, [isSuccess])
  
    
    const handleEditBtn = (e) => setIsEditing(isEditing ? false : true)
    const handleCancelBtn = (e) => {
        setIsEditing(isEditing ? false : true)
        setFirstName(fName)
        setLastName(lName)
    }
    const handleFirstNameInput = (e) => { setFirstName(e.target.value) }
    const handleLastNameInput = (e) => { setLastName(e.target.value) }
        
    const content = isLoading ? <h1 className={styles.bg_dark}>Loading...</h1> : !isSuccess ? <h1 className={styles.bg_dark}>Something went wrong!</h1> : (
            <div >
                <main className={styles.bg_dark}>
                    <div className={styles.header}>
                        <h1>Welcome back</h1>
                        <h1 className={!isEditing ? styles.edit_active  : styles.edit_off }>{firstName} {lastName}!</h1>
                        <button className={!isEditing ? styles.edit_button : styles.edit_off } onClick={handleEditBtn}>Edit Name</button>

                        <form onSubmit={handleSubmit} className={isEditing ? styles.edit_active : styles.edit_off}>
                            <div className={styles.input_wrapper_left}>
                                <input
                                    id='id1'
                                    type="text"
                                    value={firstName}
                                    onChange={handleFirstNameInput}
                                    required 
                                />
                                <button type='submit' className={styles.ed_button} >Save</button>
                            </div>
                            <div className={styles.input_wrapper_right}>
                                <input
                                    id='id2'
                                    type="text"
                                    onChange={handleLastNameInput}
                                    value={lastName}
                                    required
                                />
                                <button type="reset" className={styles.ed_button} onClick={handleCancelBtn}>Cancel</button> 
                            </div>
       
                        </form>
                    </div>
                    <TransactionCard />
                </main>
            </div>      
        )
    return content
}
