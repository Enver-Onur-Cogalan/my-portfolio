import { motion } from 'framer-motion'

const Home = () => {
    return (
        <section
            id='Home'
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 20px',
                backgroundColor: 'var(--bg)',
                color: 'var(--text)',
                textAlign: 'center',
            }}
        >
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ fontSize: '3rem', marginBottom: '1rem' }}
            >
                Merhaba, ben Onur
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                style={{ fontSize: '1.25rem', maxWidth: 600 }}
            >
                React Native Developer • Tutkulu Geliştirici
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    delay: 1,
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                }}
                style={{ marginTop: '3rem', fontSize: '2rem' }}
            >
                ↓
            </motion.div>
        </section>
    );
};

export default Home;