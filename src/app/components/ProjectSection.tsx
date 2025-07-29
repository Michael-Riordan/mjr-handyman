import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
    return (
        <section className="bg-gray-50 py-10 px-4">
            
            <div className="flex gap-6 overflow-x-auto px-2 scroll-smooth snap-x snap-mandatory">
                <div className="flex flex-nowrap gap-6">
                    <div className="snap-center shrink-0 w-[90vw] max-w-xs px-2">
                        <ProjectCard 
                        title="Gate Repair"
                        images={[
                            "/ProjectCardImages/before-fence.jpeg",
                            "/ProjectCardImages/after-fence.jpg"
                        ]}
                        description={`Replaced rotted slats with treated wood to restore strength and appearance.`}
                        />
                    </div>

                    <div className="snap-center shrink-0 w-[90vw] max-w-xs px-2">
                        <ProjectCard
                        title="LED Mirror Installation"
                        images={[
                            "/ProjectCardImages/before-mirror.jpg",
                            "/ProjectCardImages/after-mirror.jpg",
                        ]}
                        description={`Installation of two LED mirrors with clean wiring for modern bathroom lighting.`}
                        />
                    </div>

                    <div className="snap-center shrink-0 w-[90vw] max-w-xs px-2">
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
                        description={`Addition of decorative molding to enhance the character and finish of the home.`}
                        />
                    </div>

                    <div className="snap-center shrink-0 w-[90vw] max-w-xs px-2">
                        <ProjectCard
                            title="Ceiling Fan Replacement"
                            images={[
                                "/ProjectCardImages/living-room-before.jpg",
                                "/ProjectCardImages/ceiling-fan.jpeg",
                            ]}
                            description={`Replacement of remote controlled ceiling fan on 10 foot ceiling.`}
                        />
                    </div>

                    <div className="snap-center shrink-0 w-[90vw] max-w-xs px-2">
                        <ProjectCard
                            title="Custom Furniture Refurbishing"
                            images={[
                                "/ProjectCardImages/dresser-before.jpeg",
                                "/ProjectCardImages/better-dresser-after.jpeg",
                            ]}
                            description={`Sanding and painting of both front and sides, with a stain and poly finish on top. All done with customers design in mind.`}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}