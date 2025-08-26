import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 space-y-16">
      <div className="max-w-6xl mx-auto">
                {/* Decorative Moldings */}
                <div>
                  <h2 className="text-3xl font-bold text-center text-blue-900 mb-8 tracking-tight">
                    Decorative Moldings
                  </h2>
                  <div className="flex gap-6 overflow-x-auto px-2 scroll-smooth snap-x snap-mandatory hide-scrollbar">
                    {[
                      {
                        images: [
                          "/ProjectCardImages/living-room-before.jpg",
                          "/ProjectCardImages/living-room-in-prog.jpg",
                          "/ProjectCardImages/living-room-entire.jpeg",
                          "/ProjectCardImages/living-room-moldings.jpeg",
                        ],
                        description:
                          "Elegant moldings added to living room walls, giving the space a spacious and upscale feel.",
                      },
                      {
                        images: [
                          "/ProjectCardImages/upstairs-before-moldings.jpg",
                          "/ProjectCardImages/upstairs-after-moldings.jpg",
                        ],
                        description:
                          "Bedroom moldings installed to create depth and a refined aesthetic.",
                      },
                    ].map((project, idx) => (
                      <div
                        key={idx}
                        className="snap-center shrink-0 w-[90vw] max-w-xs px-2"
                      >
                        <ProjectCard {...project} />
                      </div>
                    ))}
                  </div>
                </div>
            {/* Shelf Installation */}
            <div>
              <h2 className="text-3xl font-bold text-center text-blue-900 mb-8 tracking-tight">
                Shelf Installations
              </h2>
              <div className="flex gap-6 overflow-x-auto px-2 scroll-smooth snap-x snap-mandatory hide-scrollbar">
                {[
                  {
                    images: [
                      "/ProjectCardImages/bathroom-shelf-before.jpg",
                      "/ProjectCardImages/bathroom-shelf-after.jpg",
                    ],
                    description:
                      "Elegant corner shelf added for clean, space-saving storage.",
                  },
                  {
                    images: [
                      "/ProjectCardImages/room-1-before.jpg",
                      "/ProjectCardImages/room-2-after.jpg",
                    ],
                    description:
                      "Mounted a playful, kid-friendly shelf for books and toys.",
                  },
                  {
                    images: [
                      "/ProjectCardImages/shelf-room2-before.JPG",
                      "/ProjectCardImages/shelf-room2-after.JPG",
                    ],
                    description:
                      "Custom shelving installed for practical and stylish storage.",
                  },
                ].map((project, idx) => (
                  <div
                    key={idx}
                    className="snap-center shrink-0 w-[90vw] max-w-xs px-2"
                  >
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>
            </div>
        {/* Misc Projects */}
        <div>
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8 tracking-tight">
            Miscellaneous Projects
          </h2>
          <div className="flex gap-6 overflow-x-auto px-2 scroll-smooth snap-x snap-mandatory hide-scrollbar">
            {[
              {
                title: "LED Mirror Installation",
                images: [
                  "/ProjectCardImages/before-mirror.jpg",
                  "/ProjectCardImages/after-mirror.jpg",
                ],
                description:
                  "Installation of two LED mirrors with clean wiring for modern bathroom lighting.",
              },
              {
                title: "Ceiling Fan Replacement",
                images: [
                  "/ProjectCardImages/living-room-before.jpg",
                  "/ProjectCardImages/ceiling-fan.jpeg",
                ],
                description:
                  "Replacement of remote-controlled ceiling fan on 10-foot ceiling.",
              },
              {
                title: "Gate Repair",
                images: [
                  "/ProjectCardImages/before-fence.jpeg",
                  "/ProjectCardImages/after-fence.jpg",
                ],
                description:
                  "Replaced rotted slats with treated wood to restore strength and appearance.",
              },
              {
                title: "Custom Furniture Refurbishing",
                images: [
                  "/ProjectCardImages/dresser-before.jpeg",
                  "/ProjectCardImages/better-dresser-after.jpeg",
                ],
                description:
                  "Sanding and painting with a stained and poly-finished top, designed to customer’s taste.",
              },
            ].map((project, idx, title) => (
              <div
                key={idx}
                className="snap-center shrink-0 w-[90vw] max-w-xs px-2"
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}