import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection'; 
import FeaturesSection from './sections/FeaturesSection';
import HowItWorksSection from './sections/HowItWorksSection';
import ScreensSection from './sections/ScreenSection';
import FAQSection from './sections/FAQSection';
import DownloadSection from './sections/DownloadSection';

function App() {
    return (
        <>
        <Header />

        <main>
            <HeroSection />
            <AboutSection />
            <FeaturesSection />
            <HowItWorksSection />
            <ScreensSection />
            <FAQSection />
            <DownloadSection />
        </main>

        <Footer />
        <BackToTop />
        </>
    );
}

export default App;