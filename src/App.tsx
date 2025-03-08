import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";

interface Article {
    title: string;
    content: string;
}

interface TimelineItem {
    year: string;
    title: string;
    description: string;
}

function App() {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const timelineRef = useRef<HTMLDivElement>(null);
    const managementRef = useRef<HTMLDivElement>(null);
    const divisionsRef = useRef<HTMLDivElement>(null);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        document.dir = lng === 'he' ? 'rtl' : 'ltr';
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveDropdown(null);
    };

    const toggleDropdown = (dropdown: string) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            setShowBackToTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.fade-up');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const timeline: TimelineItem[] = t('history.timeline', { returnObjects: true }) as TimelineItem[];

    return (
        <div className="App" dir={i18n.language === 'he' ? 'rtl' : 'ltr'}>
            {/* Header */}
            <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="logo">
                    <img src="/moldawsky-landing/images/logo.png" alt={t('welcome')} />
                </div>
                <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    ☰
                </button>
                <nav className={`main-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#overview" onClick={() => setIsMobileMenuOpen(false)}>{t('overview')}</a></li>
                        <li><a href="#management" onClick={() => setIsMobileMenuOpen(false)}>{t('management.title')}</a></li>
                        <li className={`dropdown ${activeDropdown === 'divisions' ? 'active' : ''}`}>
                            <button className="dropbtn" onClick={() => toggleDropdown('divisions')}>{t('divisions.title')}</button>
                            <div className="dropdown-content">
                                <a href="#diamonds" onClick={() => setIsMobileMenuOpen(false)}>{t('divisions.diamonds.title')}</a>
                                <a href="#real-estate" onClick={() => setIsMobileMenuOpen(false)}>{t('divisions.realEstate.title')}</a>
                                <a href="#technology" onClick={() => setIsMobileMenuOpen(false)}>{t('divisions.technology.title')}</a>
                                <a href="#community" onClick={() => setIsMobileMenuOpen(false)}>{t('divisions.community.title')}</a>
                            </div>
                        </li>
                        <li><a href="#news" onClick={() => setIsMobileMenuOpen(false)}>{t('news.title')}</a></li>
                        <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>{t('contact.title')}</a></li>
                    </ul>
                    <div className="header-language-switch">
                        <button onClick={() => changeLanguage('en')}>{t('footer.language.en')}</button>
                        <button onClick={() => changeLanguage('he')}>{t('footer.language.he')}</button>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>{t('welcome')}</h1>
                    <p>{t('heroSubtitle')}</p>
                    <a href="#overview" className="cta-button">
                        {t('learnMore')}
                    </a>
                    <div className="hero-stats">
                        <div className="stat-item fade-up">
                            <div className="stat-number">{t('stats.years')}</div>
                            <div className="stat-desc">{t('stats.yearsDesc')}</div>
                        </div>
                        <div className="stat-item fade-up">
                            <div className="stat-number">{t('stats.continents')}</div>
                            <div className="stat-desc">{t('stats.continentsDesc')}</div>
                        </div>
                        <div className="stat-item fade-up">
                            <div className="stat-number">{t('stats.divisions')}</div>
                            <div className="stat-desc">{t('stats.divisionsDesc')}</div>
                        </div>
                        <div className="stat-item fade-up">
                            <div className="stat-number">{t('stats.innovation')}</div>
                            <div className="stat-desc">{t('stats.innovationDesc')}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="content-section fade-up" id="overview">
                <h2>{t('overview')}</h2>
                <p>{t('overviewContent.p1')}</p>
                <p>{t('overviewContent.p2')}</p>
            </section>

            {/* Timeline */}
            <section className="timeline-section" ref={timelineRef}>
                <h2>{t('history.title')}</h2>
                <div className="timeline">
                    {timeline.map((item, index) => (
                        <div key={index} className="timeline-item fade-up">
                            <div className="timeline-year">{item.year}</div>
                            <div className="timeline-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Management */}
            <section className="management-section" ref={managementRef} id="management">
                <h2>{t('management.title')}</h2>
                <p>{t('management.description')}</p>
                <div className="management-grid">
                    <div className="management-card fade-up">
                        <img src="/moldawsky-landing/images/management/boaz.jpg" alt={t('management.team.boaz.name')} className="management-image" />
                        <div className="management-info">
                            <h3 className="management-name">{t('management.team.boaz.name')}</h3>
                            <div className="management-role">{t('management.team.boaz.role')}</div>
                            <p className="management-bio">{t('management.team.boaz.bio')}</p>
                        </div>
                    </div>
                    <div className="management-card fade-up">
                        <img src="/moldawsky-landing/images/management/yossi.jpg" alt={t('management.team.yossi.name')} className="management-image" />
                        <div className="management-info">
                            <h3 className="management-name">{t('management.team.yossi.name')}</h3>
                            <div className="management-role">{t('management.team.yossi.role')}</div>
                            <p className="management-bio">{t('management.team.yossi.bio')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divisions */}
            <section className="content-section" ref={divisionsRef}>
                <h2>Divisions</h2>
                <div className="divisions-grid">
                    <div className="division-card fade-up" id="diamonds">
                        <div className="division-icon" aria-label="Diamond Division Icon"></div>
                        <h3>{t('divisions.diamonds.title')}</h3>
                        <p>{t('divisions.diamonds.p1')}</p>
                        <p>{t('divisions.diamonds.p2')}</p>
                    </div>
                    <div className="division-card fade-up" id="real-estate">
                        <div className="division-icon" aria-label="Real Estate Division Icon"></div>
                        <h3>{t('divisions.realEstate.title')}</h3>
                        <p>{t('divisions.realEstate.p1')}</p>
                        <ul>
                            {(t('divisions.realEstate.activities', { returnObjects: true }) as string[]).map((activity: string, index: number) => (
                                <li key={index}>{activity}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="division-card fade-up" id="technology">
                        <div className="division-icon" aria-label="Technology Division Icon"></div>
                        <h3>{t('divisions.technology.title')}</h3>
                        <p>{t('divisions.technology.p1')}</p>
                    </div>
                    <div className="division-card fade-up" id="community">
                        <div className="division-icon" aria-label="Community Division Icon"></div>
                        <h3>{t('divisions.community.title')}</h3>
                        <p>{t('divisions.community.p1')}</p>
                        <p>{t('divisions.community.p2')}</p>
                    </div>
                </div>
            </section>

            {/* News */}
            <section className="content-section" id="news">
                <h2>{t('news.title')}</h2>
                <div className="news-items">
                    {(t('news.articles', { returnObjects: true }) as Article[]).map((article: Article, index: number) => (
                        <article key={index} className="news-item fade-up">
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                            <a href="#0">{t('news.readMore')}</a>
                        </article>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section className="contact-section" id="contact">
                <div className="contact-info">
                    <h2 className="section-title">{t('contact.title')}</h2>
                    <p className="section-description">{t('contact.intro')}</p>
                    
                    <div className="contact-method">
                        <img src="/moldawsky-landing/images/icons/location.svg" alt="Location" />
                        <div className="contact-details">
                            <h3>{t('contact.locations.israel.title')}</h3>
                            <p>{t('contact.locations.israel.address')}</p>
                            <p>{t('contact.locations.israel.building')}</p>
                            <p>{t('contact.locations.israel.city')}</p>
                            
                            <p className="contact-label">{t('contact.locations.israel.phone')}</p>
                            <p><a href="tel:+97235751410">+972 {t('contact.locations.israel.phoneValue')}</a></p>
                            
                            <p className="contact-label">{t('contact.locations.israel.fax')}</p>
                            <p>{t('contact.locations.israel.faxValue')}</p>
                            
                            <p className="contact-label">{t('contact.locations.israel.email')}</p>
                            <p><a href="mailto:info@moldawsky.com">{t('contact.locations.israel.emailValue')}</a></p>
                            
                            <p className="contact-label">{t('contact.locations.israel.hours')}</p>
                            <p>{t('contact.locations.israel.hoursValue')}</p>
                        </div>
                    </div>
                </div>
                <form className="contact-form fade-up">
                    <label htmlFor="name">{t('contact.form.name')}</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder={t('contact.form.namePlaceholder')}
                        required
                    />

                    <label htmlFor="email">{t('contact.form.email')}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder={t('contact.form.emailPlaceholder')}
                        required
                    />

                    <label htmlFor="message">{t('contact.form.message')}</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder={t('contact.form.messagePlaceholder')}
                        rows={5}
                        required
                    ></textarea>

                    <button type="submit">{t('contact.form.submit')}</button>
                </form>
            </section>

            {/* Footer */}
            <footer className="site-footer">
                <div>
                    <p>{t('footer.copyright')}</p>
                </div>
            </footer>

            {/* Back to Top Button */}
            <button 
                className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Back to top"
            >
                ↑
            </button>
        </div>
    );
}

export default App;

