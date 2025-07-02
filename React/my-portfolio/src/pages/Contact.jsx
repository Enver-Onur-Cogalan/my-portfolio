import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaEnvelopeOpenText } from 'react-icons/fa';

const iconStyle = {
    fontSize: '2rem',
    margin: '0 1rem',
    color: 'var(--text)',
    transition: 'transform 0.3s ease',
};

const MotionEnvelopeTitle = motion(FaEnvelopeOpenText);
const MotionIcon = motion.div;

export default function Contact() {
    return (
        <section
            id='contact'
            style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)', }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
                <MotionEnvelopeTitle
                    size={30}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                />
                Contact
            </h2>
            <p style={{ marginBottom: '2rem' }}>
                You can reach me below
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {[
                    {
                        icon: <FaGithub />,
                        href: 'https://github.com/Enver-Onur-Cogalan',
                    },
                    {
                        icon: <FaLinkedin />,
                        href: 'https://www.linkedin.com/in/onurcogalan/',
                    },
                    {
                        icon: <FaEnvelope />,
                        href: 'mailto:eonurcogalan@gmail.com',
                    },
                ].map((item, i) => (
                    <motion.a
                        key={i}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={iconStyle}
                        animate={{
                            rotate: [-35, 35, -15, 15, 0],
                            scale: [1, 1.8, 0.90, 1.05, 1],
                            y: [0, -4, 4, -4, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatDelay: 3,
                            duration: 0.8,
                            ease: 'easeInOut',
                            delay: i * 0.2,
                        }}
                    >
                        {item.icon}
                    </motion.a>
                ))}
            </div>
        </section>
    )
}