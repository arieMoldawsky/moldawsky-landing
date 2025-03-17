import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            welcome: "Welcome to Moldawsky Group",
            overview: "Overview",
            groupStructure: "Group Structure",
            management: "Management",
            news: "News",
            contact: "Contact",
            diamonds: "Diamonds",
            realEstate: "Real Estate",
            technology: "Technology",
            community: "Community",
            learnMore: "Learn More",
            heroSubtitle: "Building on a legacy of diamonds, real estate, and technology.",
            overviewContent: {
                p1: "Moldawsky Group is an intergenerational family business whose roots trace back to the founding of our diamond operations. Over the decades, we've expanded into real estate, technology, and community-focused initiatives.",
                p2: "Our Group's philosophy is built on conducting business with integrity and mutual respect. Our decision-making processes are quick and efficient, characterized by a team effort and open communications."
            },
            managementContent: {
                p1: "The Group is jointly managed by Boaz Moldawsky and Yossi Moldawsky, second-generation members of the family who are following in the founders' footsteps. Boaz and Yossi are responsible for the strategic development of the Group and for steering the policies of its different divisions.",
                p2: "Backed by an experienced management team, which is responsible for carrying out and supervising the investments made by the Group's various divisions, and by a dedicated team of employees, Boaz and Yossi are determined to maintain a momentum of high growth."
            },
            divisions: {
                title: "Divisions",
                diamonds: {
                    title: "Diamonds",
                    p1: "The Moldawsky family's legacy is deeply rooted in the diamond industry. Our longstanding expertise and partnerships have made us pioneers in sourcing, cutting, and distributing diamonds worldwide.",
                    p2: "We pride ourselves on maintaining the highest quality control standards and upholding ethical sourcing practices. Over the years, our diamond division has built a strong global presence and continues to innovate to meet modern market demands."
                },
                realEstate: {
                    title: "Real Estate",
                    p1: "With decades of experience in Real Estate activity, the Real Estate Division has established a truly superior record of performance, in Israel and abroad.",
                    p2: "Our activities focus on several areas:",
                    activities: [
                        "Development of properties for commercial & residential use",
                        "Trading in land",
                        "Acquisition of yielding assets",
                        "Management of assets"
                    ],
                    p3: "We strive to maintain our high standard of excellence and competitive edge."
                },
                technology: {
                    title: "Technology",
                    p1: "The Technology Division invests in innovative ventures across various sectors, from early-stage startups to more mature companies seeking strategic guidance. Our goal is to identify and nurture groundbreaking solutions that can reshape industries and deliver exceptional returns for all stakeholders."
                },
                community: {
                    title: "Community",
                    p1: "Recognizing the importance of giving back, Moldawsky Group actively participates in community-building efforts. We focus on education, healthcare, and grassroots initiatives designed to make a lasting positive impact on society.",
                    p2: "Our philanthropic outlook is inspired by our family values, reinforcing the notion that success is best measured by the good we bring to others."
                }
            },
            news: {
                title: "News",
                readMore: "Read More",
                articles: [
                    {
                        title: "New Real Estate Project Announced",
                        content: "The Group reveals a major commercial and residential development in the heart of Tel Aviv, reinforcing our commitment to pioneering real estate ventures."
                    },
                    {
                        title: "Technology Investment Round",
                        content: "Moldawsky Group has led a new funding round for an AI startup, bolstering our portfolio of cutting-edge technology enterprises."
                    }
                ]
            },
            contact: {
                title: "Contact Us",
                intro: "We invite you to contact us with any questions or inquiries",
                form: {
                    name: "Full Name",
                    email: "Email",
                    message: "Message Content",
                    namePlaceholder: "Enter your name...",
                    emailPlaceholder: "Enter your email address...",
                    messagePlaceholder: "Enter your message content...",
                    submit: "Send"
                },
                locations: {
                    title: "Our Offices",
                    israel: {
                        title: "Main Office - Israel",
                        address: "Israel Diamond Exchange",
                        building: "Maccabi Building, Room 454",
                        city: "Ramat Gan 5252447, Israel",
                        hours: "Business Hours",
                        hoursValue: "Sunday - Thursday: 09:30-18:30",
                        phone: "Phone",
                        phoneValue: "03-575-1410",
                        fax: "Fax",
                        faxValue: "03-575-1411",
                        email: "Email",
                        emailValue: "info@moldawsky.com"
                    }
                }
            },
            footer: {
                copyright: "© 2025 Moldawsky Group. All rights reserved.",
                language: {
                    en: "English",
                    he: "עברית"
                }
            },
            stats: {
                title: "Our Impact",
                years: "75+ Years",
                yearsDesc: "Of Excellence Since 1948",
                continents: "4 Continents",
                continentsDesc: "Global Presence",
                divisions: "4 Divisions",
                divisionsDesc: "Integrated Business Units",
                innovation: "Innovation",
                innovationDesc: "Driving Future Growth"
            },
            history: {
                title: "Our Journey",
                timeline: [
                    {
                        year: "1948",
                        title: "Foundation",
                        description: "Establishment of diamond operations in Israel"
                    },
                    {
                        year: "1960",
                        title: "Global Expansion",
                        description: "Opening of international diamond trading offices"
                    },
                    {
                        year: "1980",
                        title: "Real Estate Development",
                        description: "Launch of real estate division with first major commercial project"
                    },
                    {
                        year: "2000",
                        title: "Technology Ventures",
                        description: "Establishment of technology investment division"
                    },
                    {
                        year: "2010",
                        title: "Community Initiatives",
                        description: "Launch of community-focused philanthropic programs"
                    },
                    {
                        year: "2021",
                        title: "Leadership",
                        description: "Boaz Moldawsky appointed as President of the Israel Diamond Exchange"
                    }
                ]
            },
            management: {
                title: "Leadership",
                description: "Led by second-generation leadership, combining tradition with innovation",
                team: {
                    boaz: {
                        name: "Boaz Moldawsky",
                        role: "Co-Managing Director",
                        bio: "President of the Israel Diamond Exchange since 2021, Board member of the World Federation of Diamond Bourses, and the World Diamond Council. Leading the group's strategic development with focus on global expansion. Heads both the Diamond and Real Estate divisions, driving growth and innovation across both sectors."
                    },
                    yossi: {
                        name: "Yossi Moldawsky",
                        role: "Co-Managing Director",
                        bio: "Leading the group's technological innovation and real estate development strategies. Spearheads investments in cutting-edge technology startups and oversees major real estate projects across Israel. Focuses on identifying transformative opportunities in AI, fintech, and sustainable development, while driving the group's digital transformation initiatives."
                    }
                }
            }
        }
    },
    he: {
        translation: {
            welcome: "ברוכים הבאים לקבוצת מולדבסקי",
            overview: "סקירה כללית",
            groupStructure: "מבנה הקבוצה",
            management: "הנהלה",
            news: "חדשות",
            contact: "צור קשר",
            diamonds: "יהלומים",
            realEstate: "נדל״ן",
            technology: "טכנולוגיה",
            community: "קהילה",
            learnMore: "למידע נוסף",
            heroSubtitle: "בונים על מורשת של יהלומים, נדל״ן וטכנולוגיה.",
            overviewContent: {
                p1: "קבוצת מולדבסקי היא עסק משפחתי רב-דורי ששורשיו נטועים בייסוד פעילות היהלומים שלנו. לאורך העשורים, התרחבנו לתחומי הנדל״ן, הטכנולוגיה ויוזמות קהילתיות.",
                p2: "הפילוסופיה של הקבוצה שלנו מבוססת על ניהול עסקים ביושרה וכבוד הדדי. תהליכי קבלת ההחלטות שלנו מהירים ויעילים, ומאופיינים בעבודת צוות ותקשורת פתוחה."
            },
            managementContent: {
                p1: "הקבוצה מנוהלת במשותף על ידי בועז מולדבסקי ויוסי מולדבסקי, בני הדור השני במשפחה הממשיכים בדרכם של המייסדים. בועז ויוסי אחראים על הפיתוח האסטרטגי של הקבוצה והכוונת המדיניות של חטיבותיה השונות.",
                p2: "בגיבוי צוות ניהולי מנוסה, האחראי על ביצוע ופיקוח על ההשקעות של חטיבות הקבוצה השונות, ובתמיכת צוות עובדים מסור, בועז ויוסי נחושים לשמור על תנופת צמיחה גבוהה."
            },
            divisions: {
                title: "חטיבות",
                diamonds: {
                    title: "יהלומים",
                    p1: "מורשת משפחת מולדבסקי נטועה עמוק בתעשיית היהלומים. המומחיות והשותפויות ארוכות השנים שלנו הפכו אותנו לחלוצים בתחום הרכש, הליטוש והפצת היהלומים ברחבי העולם.",
                    p2: "אנו גאים בשמירה על סטנדרטים גבוהים של בקרת איכות ועל נהלי רכש אתיים. לאורך השנים, חטיבת היהלומים שלנו בנתה נוכחות גלובלית חזקה וממשיכה לחדש כדי לענות על דרישות השוק המודרני."
                },
                realEstate: {
                    title: "נדל״ן",
                    p1: "עם עשרות שנות ניסיון בפעילות נדל״ן, חטיבת הנדל״ן הוכיחה רקורד מצוין של ביצועים, בישראל ובחו״ל.",
                    p2: "הפעילות שלנו מתמקדת במספר תחומים:",
                    activities: [
                        "פיתוח נכסים למגורים ומסחר",
                        "מסחר בקרקעות",
                        "רכישת נכסים מניבים",
                        "ניהול נכסים"
                    ],
                    p3: "אנו שואפים לשמור על רמת המצוינות הגבוהה והיתרון התחרותי שלנו."
                },
                technology: {
                    title: "טכנולוגיה",
                    p1: "חטיבת הטכנולוגיה משקיעה במיזמים חדשניים במגוון סקטורים, מסטארט-אפים בשלבים מוקדמים ועד חברות בוגרות המחפשות הכוונה אסטרטגית. מטרתנו היא לזהות ולטפח פתרונות פורצי דרך שיכולים לעצב מחדש תעשיות ולהניב תשואות יוצאות דופן לכל בעלי העניין."
                },
                community: {
                    title: "קהילה",
                    p1: "מתוך הכרה בחשיבות של נתינה לקהילה, קבוצת מולדבסקי משתתפת באופן פעיל במאמצי בניית קהילה. אנו מתמקדים בחינוך, בריאות ויוזמות שורשיות המיועדות ליצור השפעה חיובית מתמשכת על החברה.",
                    p2: "התפיסה הפילנתרופית שלנו מושפעת מערכי המשפחה שלנו, המחזקים את הרעיון שהצלחה נמדדת בטוב שאנו מביאים לאחרים."
                }
            },
            news: {
                title: "חדשות",
                readMore: "קרא עוד",
                articles: [
                    {
                        title: "פרויקט נדל״ן חדש הוכרז",
                        content: "הקבוצה חושפת פיתוח מסחרי ומגורים משמעותי בלב תל אביב, המחזק את מחויבותנו ליזמות נדל״ן חלוצית."
                    },
                    {
                        title: "סבב השקעות בטכנולוגיה",
                        content: "קבוצת מולדבסקי הובילה סבב מימון חדש לסטארט-אפ בתחום הבינה המלאכותית, מחזקת את תיק ההשקעות שלנו בחברות טכנולוגיה חדשניות."
                    }
                ]
            },
            contact: {
                title: "צור קשר",
                intro: "אנו מזמינים אתכם ליצור עמנו קשר בכל שאלה או עניין",
                form: {
                    name: "שם מלא",
                    email: "דואר אלקטרוני",
                    message: "תוכן ההודעה",
                    namePlaceholder: "הכנס את שמך...",
                    emailPlaceholder: "הכנס את כתובת הדואר האלקטרוני שלך...",
                    messagePlaceholder: "הכנס את תוכן ההודעה...",
                    submit: "שלח"
                },
                locations: {
                    title: "המשרדים שלנו",
                    israel: {
                        title: "משרד ראשי - ישראל",
                        address: "בורסת היהלומים הישראלית",
                        building: "בניין מכבי, חדר 454",
                        city: "רמת גן 5252447, ישראל",
                        hours: "שעות פעילות",
                        hoursValue: "ימים א'-ה': 09:30-18:30",
                        phone: "טלפון",
                        phoneValue: "03-575-1410",
                        fax: "פקס",
                        faxValue: "03-575-1411",
                        email: "דואר אלקטרוני",
                        emailValue: "info@moldawsky.com"
                    }
                }
            },
            footer: {
                copyright: "© 2025 קבוצת מולדבסקי. כל הזכויות שמורות.",
                language: {
                    en: "English",
                    he: "עברית"
                }
            },
            stats: {
                title: "ההשפעה שלנו",
                years: "75+ שנים",
                yearsDesc: "של מצוינות מאז 1948",
                continents: "4 יבשות",
                continentsDesc: "נוכחות גלובלית",
                divisions: "4 חטיבות",
                divisionsDesc: "יחידות עסקיות משולבות",
                innovation: "חדשנות",
                innovationDesc: "מובילים את הצמיחה העתידית"
            },
            history: {
                title: "המסע שלנו",
                timeline: [
                    {
                        year: "1948",
                        title: "ייסוד",
                        description: "הקמת פעילות היהלומים בישראל"
                    },
                    {
                        year: "1960",
                        title: "התרחבות גלובלית",
                        description: "פתיחת משרדים בינלאומיים למסחר ביהלומים"
                    },
                    {
                        year: "1980",
                        title: "פיתוח נדל״ן",
                        description: "השקת חטיבת הנדל״ן עם פרויקט מסחרי ראשון"
                    },
                    {
                        year: "2000",
                        title: "מיזמי טכנולוגיה",
                        description: "הקמת חטיבת השקעות בטכנולוגיה"
                    },
                    {
                        year: "2010",
                        title: "יוזמות קהילתיות",
                        description: "השקת תוכניות פילנתרופיות ממוקדות קהילה"
                    },
                    {
                        year: "2021",
                        title: "מנהיגות",
                        description: "בועז מולדבסקי מתמנה לנשיא בורסת היהלומים"
                    }
                ]
            },
            management: {
                title: "הנהלה",
                description: "בהובלת הדור השני, משלבים מסורת עם חדשנות",
                team: {
                    boaz: {
                        name: "בועז מולדבסקי",
                        role: "מנהל משותף",
                        bio: "נשיא בורסת היהלומים הישראלית משנת 2021, חבר הנהלת הפדרציה העולמית של בורסות היהלומים ומועצת היהלומים העולמית. מוביל את הפיתוח האסטרטגי של הקבוצה עם דגש על התרחבות גלובלית. עומד בראש חטיבות היהלומים והנדל״ן, מוביל צמיחה וחדשנות בשני הסקטורים."
                    },
                    yossi: {
                        name: "יוסי מולדבסקי",
                        role: "מנהל משותף",
                        bio: "מוביל את אסטרטגיות החדשנות הטכנולוגית ופיתוח הנדל״ן של הקבוצה. מוביל השקעות בסטארט-אפים טכנולוגיים מתקדמים ומפקח על פרויקטי נדל״ן מרכזיים בישראל. מתמקד בזיהוי הזדמנויות פורצות דרך בתחומי בינה מלאכותית, פינטק ופיתוח בר-קיימא, תוך הנעת יוזמות הטרנספורמציה הדיגיטלית של הקבוצה."
                    }
                }
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: { escapeValue: false }
    });

export default i18n;
