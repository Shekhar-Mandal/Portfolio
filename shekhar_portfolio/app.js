function App() {
    try {
        return (
            <div data-name="app-container" className="min-h-screen">
                <main data-name="main-content">
                    <Profile />
                    <Skills />
                    <Courses />
                    <Contact />
                </main>
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
