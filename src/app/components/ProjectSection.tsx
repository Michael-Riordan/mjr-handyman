import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
    return ( 
        <>
                <section className="bg-gray-50 py-10 px-4 space-y-12">
            {/* Section 1 */}
            <div>
                <h2 className="text-xl font-semibold mb-4 px-2 text-blue-900">Shelf Installation</h2>
                <div className="flex gap-6 overflow-x-auto px-2 scroll-smooth snap-x snap-mandatory">
                    <div className="snap-center shrink-0 w-[90vw] max-w-xs px-2">
                        <ProjectCard
                            images={[
                                "/ProjectCardImages/bathroom-shelf-before.jpg",
                                "/ProjectCardImages/bathroom-shelf-after.jpg"
                            ]}
                            description={`Elegant corner shelf added for clean, space-saving storage.`}
                        />
                    </div>

                    <div className="snap-center shrink-0 w-[90vw] max-w-xs px-2">
                        <ProjectCard
                            images={[
                                "/ProjectCardImages/room-1-before.jpg",
                                "/ProjectCardImages/room-2-after.jpg"
                            ]}
                            description={`Mounted a fun, kid-friendly shelf for books and toys.`}
                        />
                    </div>

                    <div className="snap-center shrink-0 w-[90vw] max-w-xs px-2">
                        <ProjectCard
                            images={[
                                "/ProjectCardImages/shelf-room2-before.jpg",
                                "/ProjectCardImages/shelf-room2-after.jpg"
                            ]}
                            description={`Mounted a fun, kid-friendly shelf for books and toys.`}
                        />
                    </div>
                </div>

                
            </div>

            {/* Section 2 */}
            <div>
                <h2 className="text-xl font-semibold mb-4 px-2 text-blue-900">Gate Repair</h2>
                <div className="flex gap-6 overflow-x-auto px-2 scroll-smooth snap-x snap-mandatory">
                    <div className="snap-center shrink-0 w-[90vw] max-w-xs px-2">
                        <ProjectCard
                            images={[
                                "/ProjectCardImages/before-fence.jpeg",
                                "/ProjectCardImages/after-fence.jpg"
                            ]}
                            description={`Replaced rotted slats with treated wood to restore strength and appearance.`}
                        />
                    </div>
                </div>
            </div>

            {/* Section 3 */}
            <div>
                <h2 className="text-xl font-semibold mb-4 px-2">Other Projects</h2>
                <div className="flex gap-6 overflow-x-auto px-2 scroll-smooth snap-x snap-mandatory">
                    <div className="snap-center shrink-0 w-[90vw] max-w-xs px-2">
                        <ProjectCard
                            title="LED Mirror Installation"
                            images={[
                                "/ProjectCardImages/before-mirror.jpg",
                                "/ProjectCardImages/after-mirror.jpg"
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
                                "/ProjectCardImages/ceiling-fan.jpeg"
                            ]}
                            description={`Replacement of remote controlled ceiling fan on 10 foot ceiling.`}
                        />
                    </div>

                    <div className="snap-center shrink-0 w-[90vw] max-w-xs px-2">
                        <ProjectCard
                            title="Custom Furniture Refurbishing"
                            images={[
                                "/ProjectCardImages/dresser-before.jpeg",
                                "/ProjectCardImages/better-dresser-after.jpeg"
                            ]}
                            description={`Sanding and painting of both front and sides, with a stain and poly finish on top. All done with customer's design in mind.`}
                        />
                    </div>
                </div>
            </div>
        </section>
        </>
        /*
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
        */
    )
}