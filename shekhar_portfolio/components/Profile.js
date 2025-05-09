function Profile() {
    try {
        return (
            <div data-name="profile-section" className="profile-container py-16 text-center">
                <img 
                    data-name="profile-image"
                    src="WhatsApp Image 2025-03-29 at 19.05.48_0c061800.jpg"
                    alt="Shekhar Mandal"
                    className="profile-image w-48 h-48 mx-auto mb-6"
                />
                <h1 data-name="profile-name" className="text-3xl font-bold mb-2">Shekhar Mandal</h1>
                <h2 data-name="profile-title" className="text-xl text-gray-600 mb-4">Data Analyst</h2>
                <p data-name="profile-bio" className="text-gray-700 max-w-2xl mx-auto px-4">
                    
                </p>
            </div>
        );
    } catch (error) {
        console.error('Profile component error:', error);
        reportError(error);
        return null;
    }
}
