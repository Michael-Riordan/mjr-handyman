import ProfileCard from "../components/ProfileCard";

export default function WhoWeAre() {
    return (
        <main>
            <h1 className="text-5xl text-blue-900 font-bold text-center mt-10">
                Who We Are
            </h1>
            <section className="flex p-6 flex-col md:flex-row md:gap-10 sm:justify-self-center">
                <ProfileCard 
                    name="Michael Riordan Jr."
                    image="/ProfileCardImages/profile-photo-me.jpg"
                    description={`Using his knowledge and experience in different facets, Michael Jr. has built everything from custom cabinets to an off-grid solar-powered camper van. He's worked as a cabinetmaker, and previously served as the on-call handyman for two residential buildings in New York City. He brings a problem-solving mindset, quality craftsmanship, and a deep respect for your home.`}
                />
                <ProfileCard
                    name="Michael Riordan Sr."
                    image="/ProfileCardImages/dad-profile-photo.jpg"
                    description={`With over 30 years of experience as an operating engineer in NYC, Michael Sr. has overseen the mechanical and cosmetic upkeep of major commercial buildings as the chief operating engineer for high end tenants, such as Red Bull and X (formerly Twitter). From HVAC systems and electrical infrastructure to drywall repairs and finishing work, he’s done it all. His deep expertise ensures every job is handled with precision, safety, and lasting quality.`}
                />
            </section>
        </main>
    );
}