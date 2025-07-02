import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
    return (
        <motion.div
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
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
            <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>{project.description}</p>
            <div>
                <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ marginRight: '1rem', color: '#007bff' }}
                >
                    GitHub
                </a>
                {project.demo && (
                    <a
                        href={project.demo}
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ color: '#28a745' }}
                    >
                        Demo
                    </a>
                )}
            </div>
        </motion.div>
    );
}