/* eslint-disable react/react-in-jsx-scope */
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'
import styles from './Home.module.css'

export default function Home() {
    
    return (
        <div >
            <Hero />
            <div className={styles.features}>
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
            </div>
        </div>      
    )
}