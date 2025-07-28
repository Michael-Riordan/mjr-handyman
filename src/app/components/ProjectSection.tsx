import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
    return (
        <section className="bg-gray-50 py-10 px-4 justify-center gap-6">

            <div className="p-6 flex flex-col justify-self-center md:flex-row md:gap-6">
                <ProjectCard 
                    title="Gate Repair"
                    images={[
                        "/ProjectCardImages/before-fence.jpeg",
                        "/ProjectCardImages/after-fence.jpg"
                    ]}
                    description={`Replaced rotted slats with treated wood to restore strength and appearance.`}
                />

                <ProjectCard
                    title="LED Mirror Installation"
                    images={[
                        "/ProjectCardImages/before-mirror.jpg",
                        "/ProjectCardImages/after-mirror.jpg",
                    ]}
                    description={`Installation of two LED mirrors with clean wiring for modern bathroom lighting.`}
                />

                <ProjectCard
                    title="Decorative Moldings"
                    images={[
                        "/ProjectCardImages/living-room-before.jpg",
                        "/ProjectCardImages/upstairs-before-moldings.jpg",
                        "/ProjectCardImages/living-room-in-prog.jpg",
                        "/ProjectCardImages/living-room-entire.jpeg",
                        "/ProjectCardImages/living-room-moldings.jpeg",
                        "/ProjectCardImages/upstairs-after-moldings.jpg"
                    ]}
                    description={`Addition of decorative molding to enhance home character and finish.`}
                />

            </div>
        </section>
    )
}