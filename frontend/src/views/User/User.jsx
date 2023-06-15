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
    const [firstName, setFirstName] = useState(fName ? fName : '...')
    const [lastName, setLastName] = useState(lName ? lName : '...')
    const [newFirstName, setNewFirstName] = useState(fName ? fName : '')//-----------to remove
    const [newLastName, setNewLastName] = useState(lName ? lName : '')//-----------to remove
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await edit({ firstName:newFirstName, lastName:newLastName }).unwrap()
            dispatch(setUserName({ userFirstName:newFirstName, userLastName:newLastName })) 
            setFirstName(newFirstName)
            setLastName(newLastName)
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
    }, [isSuccess]) //---------=>state!?
  
    
    const handleEditBtn = (e) => setIsEditing(isEditing ? false : true)
    const handleFirstNameInput = (e) => { setNewFirstName(e.target.value) }
    const handleLastNameInput = (e) => { setNewLastName(e.target.value) }
        
    const content = isLoading ? <h1 className={styles.bg_dark}>Loading...</h1> : !isSuccess ? <h1 className={styles.bg_dark}>Something went wrong!</h1> : (
            <div >
                <main className={styles.bg_dark}>
                    <div className={styles.header}>
                        <h1>Welcome back<br />{firstName} {lastName}!</h1>
                        <button className={styles.edit_button} onClick={handleEditBtn}>Edit Name</button>

                        <form onSubmit={handleSubmit} className={isEditing ? styles.edit_active : styles.edit_off}>
                            <div className={styles.input_wrapper}>
                                <input
                                    type="text"
                                    value={newFirstName}
                                    onChange={handleFirstNameInput}
                                    required 
                                />
                                <input
                                    type="text"
                                    onChange={handleLastNameInput}
                                    value={newLastName}
                                    required
                                />
                            </div>
                                <button type='submit' className={styles.sign_in_button} >Save</button>
                                <button type="reset" className={styles.sign_in_button} onClick={handleEditBtn}>Cancel</button>       
                        </form>
                    </div>
                    <TransactionCard />
                    <TransactionCard />
                    <TransactionCard />
                </main>
            </div>      
        )
    return content
}
