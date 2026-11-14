import Header from './components/Header';
import Footer from './components/Footer';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import HowItWorksSection from './sections/HowItWorksSection';
import ScreensSection from './sections/ScreenSection';

function App() {
    return (
        <>
        <Header />

        <main>
            <HeroSection />
            <AboutSection />
            <HowItWorksSection />
            <ScreensSection />
        </main>

        <Footer />
        </>
    );
}

export default App;