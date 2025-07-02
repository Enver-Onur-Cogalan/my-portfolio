import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

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
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>
                💼 Projelerim
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