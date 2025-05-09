function Courses() {
    try {
        const courses = [
            {
                title: "Data Analysis with Python",
                provider: "Sipalayan Info Tech",
                date: "2025"
            },
            {
                title: "SQL for Data Science",
                provider: "Simplilearn",
                date: "2024"
            },
            {
                title: "Python,Microsoft Word, Powertpoint,EXcel",
                provider: "Padmashree College",
                date: "2024"
            }
        ];

        return (
            <section data-name="courses-section" className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 data-name="courses-title" className="text-2xl font-bold text-center mb-8">Courses</h2>
                    <div data-name="courses-list" className="space-y-4">
                        {courses.map((course, index) => (
                            <div
                                key={index}
                                data-name={`course-item-${index}`}
                                className="bg-white p-4 rounded-lg shadow-sm"
                            >
                                <h3 className="font-semibold">{course.title}</h3>
                                <p className="text-gray-600">{course.provider} • {course.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Courses component error:', error);
        reportError(error);
        return null;
    }
}
