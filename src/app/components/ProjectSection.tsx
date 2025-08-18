import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
    return ( 
        <section className="bg-gray-50 py-10 px-4 space-y-12">
            {/* Misc Projects Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-6 px-2 text-blue-900 underline text-center">Misc Projects</h2>
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
                            title="Custom Furniture Refurbishing"
                            images={[
                                "/ProjectCardImages/dresser-before.jpeg",
                                "/ProjectCardImages/better-dresser-after.jpeg"
                            ]}
                            description={`Sanding and painting of both front and sides, with a stain and poly finish on top. All done with customer's design in mind.`}
                        />
                    </div>
                </div>

            {/* Decorative Moldings Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 px-2 text-blue-900 underline">Decorative Moldings</h2>
                <div className="flex gap-6 overflow-x-auto px-2 scroll-smooth snap-x snap-mandatory">
                    <div className="snap-center shrink-0 w-[90vw] max-w-xs px-2">
                        <ProjectCard
                            images={[
                                "/ProjectCardImages/living-room-before.jpg",
                                "/ProjectCardImages/living-room-in-prog.jpg",
                                "/ProjectCardImages/living-room-entire.jpeg",
                                "/ProjectCardImages/living-room-moldings.jpeg"

                            ]}
                            description={`Addition of decorative moldings on living room walls, giving the room a more spacious and elegant feel.`}
                        />
                    </div>

                    <div className="snap-center shrink-0 w-[90vw] max-w-xs px-2">
                        <ProjectCard
                            images={[
                                "/ProjectCardImages/upstairs-before-moldings.jpg",
                                "/ProjectCardImages/upstairs-after-moldings.jpg"
                            ]}
                            description={`Addition of decorative moldings on bedroom walls, giving the room a more spacious and elegant feel.`}
                        />
                    </div>
                </div>
            </div>
            
            {/* Section 1 */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 px-2 text-blue-900 underline">Shelf Installation</h2>
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
                                "/ProjectCardImages/shelf-room2-before.JPG",
                                "/ProjectCardImages/shelf-room2-after.JPG"
                            ]}
                            description={`Mounted a fun, kid-friendly shelf for books and toys.`}
                        />
                    </div>
                </div>

                
            </div>

            </div>
        </section>
    )
}