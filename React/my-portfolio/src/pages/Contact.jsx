import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const iconStyle = {
    fontSize: '2rem',
    margin: '0 1rem',
    color: 'var(--text)',
    transition: 'transform 0.3s ease',
};

export default function Contact() {
    return (
        <section style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)', }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📬 İletişim</h2>
            <p style={{ marginBottom: '2rem' }}>
                Bana aşağıdan ulaşabilirsin
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <a
                    href='https://github.com/Enver-Onur-Cogalan'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ ...iconStyle }}
                >
                    <FaGithub />
                </a>
                <a
                    href='https://www.linkedin.com/in/onurcogalan/'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ ...iconStyle }}
                >
                    <FaLinkedin />
                </a>

                <a
                    href='mailto:eonurcogalan@gmail.com'
                    style={{ ...iconStyle }}
                >
                    <FaEnvelope />
                </a>
            </div>
        </section>
    )
}