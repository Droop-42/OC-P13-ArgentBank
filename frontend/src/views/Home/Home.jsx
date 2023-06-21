/* eslint-disable react/react-in-jsx-scope */
import Hero from '../../components/Hero'
import FeatureCard from '../../components/FeatureCard'
import styles from './Home.module.css'

export default function Home() {
    
    return (
        <div >
            <Hero />
            <div className={styles.features}>
                <FeatureCard title={'You are our #1 priority'} logo={'icon-chat'}>
                    <p>
                        Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes.
                    </p>
                </FeatureCard>
                <FeatureCard title={'More savings means higher rates'} logo={'icon-money'}>
                    <p>
                        The more you save with us, the higher your interest rate will be!
                    </p>
                </FeatureCard>
                <FeatureCard title={'Security you can trust'} logo={'icon-security'}>
                    <p>
                        We use top of the line encryption to make sure your data and money
                        is always safe.
                    </p>
                </FeatureCard>
            </div>
        </div>      
    )
}