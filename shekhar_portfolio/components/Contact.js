function Contact() {
    try {
        const contacts = [
            {
                icon: "fa-phone",
                text: "+977 9818593721",
               link: "tel:+9779818593721" 
            },
            {
                icon: "fa-envelope",
                text: "shekharmandal146@email.com",
                link: "mailto:shekharmandal146@email.com"
            },
            {
                icon: "fa-linkedin",
                text: "LinkedIn",
                link: "https://www.linkedin.com/in/shekhar-mandal-aa02542b2/"
            },
            {
                icon: "fa-instagram",
                text: "Instagram",
                link: "https://instagram.com/shekhar_mandal_8"
            }
        ];

        return (
            <section data-name="contact-section" className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 data-name="contact-title" className="text-2xl font-bold text-center mb-8">Contact</h2>
                    <div data-name="contact-grid" className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {contacts.map((contact, index) => (
                            <a
                                key={index}
                                href={contact.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-name={`contact-item-${index}`}
                                className="group"
                            >
                                <i className={`fas ${contact.icon} contact-icon text-2xl mb-2`}></i>
                                <p className="text-sm text-gray-600">{contact.text}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
        return null;
    }
}
