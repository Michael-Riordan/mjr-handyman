 export default function ProjectSection() {
    return (
        <section className="bg-gray-50 py-10 px-4 space-y-12">
            <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-center text-blue-900 text-lg font-semibold">
                <ol className="list-disc list-inside space-y-2">
                    <li>Custom Decorative Moldings</li>
                    <li>Smart Lock Installations</li>
                    <li>Mirror Hanging</li>
                    <li>Shelf Installation</li>
                    <li>Gate Repair</li>
                    <li>Picture Hanging</li>
                    <li>Outlet Replacement</li>
                </ol>
                <ol className="list-disc list-inside space-y-2">
                    <li>Sink Replacement/Repair</li>
                    <li>Toilet Replacement/Repair</li>
                    <li>TV Mounting</li>
                    <li>Shower/Bath Repair</li>
                    <li>Garbage Disposal Installation/Repair</li>
                    <li>Light Fixture/Fan Replacement</li>
                </ol>
            </div>
            <p className="text-center text-blue-900 text-xl font-semibold">and more...</p>
        </section>
    );
 }