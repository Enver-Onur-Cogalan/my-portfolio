import { motion } from 'framer-motion';
import { FaNodeJs, FaDatabase, FaDocker, FaLaptopCode, FaFileDownload } from 'react-icons/fa';

const About = () => {
    return (
        <section
            id='about'
            style={{
                padding: '4rem 2rem',
                backgroundColor: 'var(--bg)',
                color: 'var(--text)',
                textAlign: 'center',
            }}
        >
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
            >
                About
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{
                    maxWidth: 700,
                    margin: '0 auto',
                    fontSize: '1.2rem',
                    lineHeight: 1.7,
                }}
            >
                Hello! I'm Onur Çoğalan. I came to the software world from a different department, but my interest in this field was so strong that I quickly found myself completely immersed in codes. I have a great passion for mobile application development, and I shape this passion with React Native.
                <br /><br />
                Not only did I work with the interface, I also stepped into the backend. I started to understand the server side with Node.js and Express; I am improving myself in topics such as database management, API design and Docker.
                <br /><br />
                Writing clean code, producing user-centered designs and learning new technologies is not only a goal for me, but also a great pleasure.
            </motion.p>

            <div
                style={{
                    marginTop: '3rem',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap',
                }}
            >
                <Feature icon={<FaNodeJs size={28} />} label='Node.js & Express' />
                <Feature icon={<FaDatabase size={28} />} label='Database Management' />
                <Feature icon={<FaDocker size={28} />} label='Docker' />
                <Feature icon={<FaLaptopCode size={28} />} label='Clean Code / API' />
            </div>

            {/* CV Kartı */}
            <motion.a
                href='/Enver-Onur-Cogalan-CV.pdf'
                download
                whileHover={{ scale: 1.05 }}
                style={{
                    marginTop: '4rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    backgroundColor: '#0077ff',
                    color: '#fff',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease',
                }}
            >
                <FaFileDownload size={20} />
                Download My CV
            </motion.a>
        </section >
    );
};

function Feature({ icon, label }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text)' }}>
            {icon}
            <span style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>{label}</span>
        </div>
    );
}

export default About;