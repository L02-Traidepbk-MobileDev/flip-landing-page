import Header from './components/Header';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';

function App() {
    return (
        <>
        <Header />

        <main>
            <HeroSection />
            <AboutSection />
        </main>
        </>
    );
}

export default App;