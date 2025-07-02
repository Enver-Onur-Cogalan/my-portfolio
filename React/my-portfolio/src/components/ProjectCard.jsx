import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ProjectCard({ project }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{
                backgroundColor: 'var(--bg)',
                color: 'var(--text)',
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '20px',
                margin: '10px',
                maxWidth: '300px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                cursor: 'pointer',
            }}
        >
            <motion.h3 layout style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</motion.h3>

            <motion.p layout style={{ fontSize: '1rem' }}>
                {project.short}
            </motion.p>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden', marginTop: '1rem' }}
                    >
                        <p style={{ fontSize: '0.95rem' }}>{project.long}</p>
                        <div style={{ marginTop: '0.8rem' }}>
                            <a
                                href={project.github}
                                target='_blank'
                                rel='noopener noreferrer'
                                style={{ color: '#007bff', marginRight: '1rem' }}
                            >
                                GitHub
                            </a>

                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#28a745' }}
                                >
                                    Demo
                                </a>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}