import { motion } from 'framer-motion';

export default function MovingLines() {
    const isDark = document.documentElement.classList.contains('dark');
    const color = isDark ? '#ffffff' : '#000000';

    const sharedStyle = {
        position: 'absolute',
        backgroundColor: color,
        borderRadius: 2,
        zIndex: 2,
    };

    return (
        <>
            {/* Üst kenarda kayan çizgiler */}
            {[0, 0.3, 0.6].map((delay, index) => (
                <motion.div
                    key={`top-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        x: [-40, 300],
                        opacity: [0, 1, 0],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay,
                    }}
                    style={{
                        ...sharedStyle,
                        top: 0,
                        left: 0,
                        width: 40,
                        height: 2,
                    }}
                />
            ))}

            {/* Sağ kenarda kayan çizgiler */}
            {[0.1, 0.4, 0.7].map((delay, index) => (
                <motion.div
                    key={`right-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        y: [-40, 250],
                        opacity: [0, 1, 0],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay,
                    }}
                    style={{
                        ...sharedStyle,
                        top: 0,
                        right: 0,
                        width: 2,
                        height: 40,
                    }}
                />
            ))}

            {/* Alt kenarda kayan çizgiler */}
            {[0.2, 0.5, 0.8].map((delay, index) => (
                <motion.div
                    key={`bottom-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        x: [300, -40],
                        opacity: [0, 1, 0],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay,
                    }}
                    style={{
                        ...sharedStyle,
                        bottom: 0,
                        left: 0,
                        width: 40,
                        height: 2,
                    }}
                />
            ))}

            {/* Sol kenarda kayan çizgiler */}
            {[0.3, 0.6, 0.9].map((delay, index) => (
                <motion.div
                    key={`left-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        y: [250, -40],
                        opacity: [0, 1, 0],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay,
                    }}
                    style={{
                        ...sharedStyle,
                        bottom: 0,
                        left: 0,
                        width: 2,
                        height: 40,
                    }}
                />
            ))}
        </>
    );
}
