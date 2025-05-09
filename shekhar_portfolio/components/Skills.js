function Skills() {
    try {
        const skills = [
            "Data Analysis",
            "Python",
            "SQL",
            "Pandas",
            "NumpY",
            "Matplotlib",
            "EXcel",
            "Web Scaping"
        ];

        return (
            <section data-name="skills-section" className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 data-name="skills-title" className="text-2xl font-bold text-center mb-8">Skills</h2>
                    <div data-name="skills-grid" className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                data-name={`skill-item-${index}`}
                                className="skill-item bg-gray-50 p-4 rounded-lg text-center shadow-sm"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Skills component error:', error);
        reportError(error);
        return null;
    }
}
