import { useState } from "react";


export default function Navbar({ toggleTheme, isDark }) {
    const [active, setActive] = useState('');

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setActive(id);
        }
    };

    return (
        <nav
            style={{
                position: 'sticky',
                top: 0,
                width: '100%',
                margin: '0 auto',
                zIndex: 999,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 2rem',
                backgroundColor: 'var(--bg)',
                color: 'var(--text)',
                borderBottom: '1px solid rgba(0,0,0,0.1)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                overflowX: 'hidden',
            }}
        >
            <div style={{ flex: 1, display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', }}>
                {['home', 'about', 'projects', 'contact'].map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollTo(section)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: active === section ? '#0070f3' : 'var(--text)',
                            fontWeight: active === section ? 'bold' : 'normal',
                            cursor: 'pointer',
                            fontSize: '1rem',
                        }}
                    >
                        {section === 'home'
                            ? 'Home Page'
                            : section === 'about'
                                ? 'About me'
                                : section === 'projects'
                                    ? 'Projects'
                                    : section === 'contact'
                                        ? 'Contact'
                                        : 'Home Page'}
                    </button>
                ))}

                <div style={{ marginLeft: 'auto' }}>
                    <button
                        onClick={toggleTheme}
                        style={{
                            background: isDark ? '#fff' : '#111',
                            color: isDark ? '#111' : '#fff',
                            border: 'none',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                        }}
                    >
                        {isDark ? '☀️ Light' : '🌙 Dark'}
                    </button>
                </div>
            </div>
        </nav>
    );
};