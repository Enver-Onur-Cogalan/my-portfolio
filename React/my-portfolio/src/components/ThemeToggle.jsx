import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode])

    return (
        <button
            onClick={() => setDarkMode(prev => !prev)}
            style={{
                position: 'fixed',
                top: 20,
                right: 20,
                padding: '8px 12px',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer',
                backgroundColor: darkMode ? '#fff' : '#111',
                color: darkMode ? '#111' : '#fff',
                transition: 'all 0.3s ease',
            }}
        >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
    );
}