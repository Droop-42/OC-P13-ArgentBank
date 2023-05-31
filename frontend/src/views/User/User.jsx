/* eslint-disable react/react-in-jsx-scope */
import styles from './User.module.css'
import TransactionCard from '../../components/TransactionCard'

export default function Home() {
    
    return (
        <div >
            <main className={styles.bg_dark}>
                <div className={styles.header}>
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button className={styles.edit_button}>Edit Name</button>
                </div>
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
            </main>
        </div>      
    )
}