import { motion } from 'framer-motion';
import { FaReact, FaRocket, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';
import { BsChevronDoubleDown } from 'react-icons/bs';

export default function Home() {
    return (
        <section id="home" style={{ height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ fontSize: '2.5rem', fontWeight: 'bold' }}
            >
                Hello, I'm Onur
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{ marginTop: '1rem', fontSize: '1.2rem', color: 'gray' }}
            >
                React Native Developer • Passionate Developer
            </motion.p>

            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Feature icon={<FaReact size={28} />} label="React Native" />
                <Feature icon={<FaRocket size={28} />} label="Project Oriented" />
                <Feature icon={<FaPaintBrush size={28} />} label="UI/UX Obsessive" />
                <Feature icon={<FaMobileAlt size={28} />} label="Mobile Developer" />
            </div>

            {/* Scroll Down ikonu */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                style={{ marginTop: '3rem', color: 'gray' }}
            >
                <BsChevronDoubleDown size={24} />
            </motion.div>
        </section>
    );
}

function Feature({ icon, label }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text)', }}>
            {icon}
            <span style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>{label}</span>
        </div>
    );
}
