import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { FaFolderOpen } from "react-icons/fa";
import { motion } from "framer-motion";


const MotionIcon = motion(FaFolderOpen);

export default function Projects() {
    return (
        <section
            id="projects"
            style={{
                padding: '80px 20px',
                backgroundColor: 'var(--bg)',
                color: 'var(--text)',
            }}
        >
            <h2 style={{
                textAlign: 'center',
                fontSize: '2.5rem',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
            }}>
                <MotionIcon
                    size={30}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                />
                My Projects
            </h2>

            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                {projects.map((proj) => (
                    <ProjectCard key={proj.id} project={proj} />
                ))}
            </div>
        </section>
    );
}