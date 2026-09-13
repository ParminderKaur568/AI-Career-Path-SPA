/* ==================================================
   AI CAREER PATH
   SINGLE PAGE APPLICATION
   VANILLA JAVASCRIPT
================================================== */


/* ==================================================
   DOM ELEMENTS
================================================== */

const app = document.getElementById("app");

const navbar = document.getElementById("navbar");

const menuToggle =
    document.getElementById("menuToggle");

const year =
    document.getElementById("year");


/* ==================================================
   CAREER DATA
================================================== */

const careers = [

    {
        icon: "🤖",
        title: "AI / ML Engineer",
        description:
            "Build intelligent systems using machine learning, deep learning and AI algorithms.",
        skills: [
            "Python",
            "Machine Learning",
            "Deep Learning",
            "TensorFlow"
        ]
    },

    {
        icon: "📊",
        title: "Data Scientist",
        description:
            "Analyze complex datasets and create predictive models that support business decisions.",
        skills: [
            "Python",
            "Statistics",
            "SQL",
            "Power BI"
        ]
    },

    {
        icon: "💬",
        title: "NLP Engineer",
        description:
            "Develop systems that understand, process and generate human language.",
        skills: [
            "Python",
            "NLP",
            "Transformers",
            "LLMs"
        ]
    },

    {
        icon: "👁️",
        title: "Computer Vision Engineer",
        description:
            "Create AI systems capable of analyzing and understanding images and videos.",
        skills: [
            "Python",
            "OpenCV",
            "CNN",
            "Deep Learning"
        ]
    },

    {
        icon: "✨",
        title: "Generative AI Engineer",
        description:
            "Build applications using large language models, generative AI and intelligent automation.",
        skills: [
            "Python",
            "LLMs",
            "Prompt Engineering",
            "APIs"
        ]
    },

    {
        icon: "🚀",
        title: "AI Product Manager",
        description:
            "Connect AI technology with business requirements to build useful AI-powered products.",
        skills: [
            "AI Concepts",
            "Product Strategy",
            "Analytics",
            "Communication"
        ]
    }

];


/* ==================================================
   HOME PAGE
================================================== */

function homePage() {

    return `

        <div class="page">

            <section class="hero">

                <div class="container hero-content">

                    <span class="hero-badge">
                        🚀 Start Your AI Journey
                    </span>

                    <h1>
                        Build Your
                        <span>Career in AI</span>
                    </h1>

                    <p>
                        Discover the skills, career paths and
                        learning roadmap you need to build a
                        successful career in Artificial Intelligence.
                    </p>


                    <div class="hero-buttons">

                        <a
                            href="/careers"
                            data-link
                            class="btn btn-primary"
                        >
                            Explore Careers
                        </a>

                        <a
                            href="/roadmap"
                            data-link
                            class="btn btn-secondary"
                        >
                            View Roadmap
                        </a>

                    </div>


                    <div class="hero-stats">

                        <div class="hero-stat">

                            <strong>6+</strong>

                            <span>
                                AI Career Paths
                            </span>

                        </div>


                        <div class="hero-stat">

                            <strong>5</strong>

                            <span>
                                Learning Stages
                            </span>

                        </div>


                        <div class="hero-stat">

                            <strong>20+</strong>

                            <span>
                                Essential Skills
                            </span>

                        </div>

                    </div>

                </div>

            </section>


            <section class="section">

                <div class="container">

                    <div class="section-title">

                        <h2>
                            Why Choose a Career in AI?
                        </h2>

                        <p>
                            Artificial Intelligence is transforming
                            industries and creating new opportunities
                            for technology professionals.
                        </p>

                    </div>


                    <div class="about-grid">

                        <div class="about-content">

                            <h2>
                                Turn Your Interest Into Expertise
                            </h2>

                            <p>
                                AI combines programming, mathematics,
                                data and problem solving to create
                                intelligent applications.
                            </p>

                            <p>
                                Whether you enjoy coding, analytics,
                                research, design or product development,
                                there is an AI career path for you.
                            </p>

                            <ul class="feature-list">

                                <li>
                                    ✓ High-impact technology
                                </li>

                                <li>
                                    ✓ Multiple career specializations
                                </li>

                                <li>
                                    ✓ Continuous learning opportunities
                                </li>

                                <li>
                                    ✓ Applications across industries
                                </li>

                            </ul>

                        </div>


                        <div class="about-box">

                            <h3>
                                Your AI Journey Starts Here
                            </h3>

                            <p>
                                Learn the fundamentals, develop
                                practical skills, build projects and
                                gradually specialize in the AI field
                                that matches your interests.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    `;
}


/* ==================================================
   CAREERS PAGE
================================================== */

function careersPage() {

    const cards = careers.map(career => {

        const tags = career.skills
            .map(skill => `
                <span class="tag">
                    ${skill}
                </span>
            `)
            .join("");

        return `

            <article class="career-card">

                <div class="career-icon">
                    ${career.icon}
                </div>

                <h3>
                    ${career.title}
                </h3>

                <p>
                    ${career.description}
                </p>

                <div class="tag-container">
                    ${tags}
                </div>

                <a
                    href="/roadmap"
                    data-link
                    class="btn btn-primary"
                >
                    View Roadmap
                </a>

            </article>

        `;

    }).join("");


    return `

        <div class="page">

            <section class="page-header">

                <div class="container">

                    <h1>
                        AI Career Paths
                    </h1>

                    <p>
                        Explore different career opportunities
                        in Artificial Intelligence.
                    </p>

                </div>

            </section>


            <section class="section">

                <div class="container">

                    <div class="career-grid">

                        ${cards}

                    </div>

                </div>

            </section>

        </div>

    `;
}


/* ==================================================
   ROADMAP PAGE
================================================== */

function roadmapPage() {

    return `

        <div class="page">

            <section class="page-header">

                <div class="container">

                    <h1>
                        AI Career Roadmap
                    </h1>

                    <p>
                        Follow these stages to build a strong
                        foundation for an AI career.
                    </p>

                </div>

            </section>


            <section class="section">

                <div class="container roadmap">


                    <div class="roadmap-item">

                        <div class="roadmap-number">
                            01
                        </div>

                        <div class="roadmap-content">

                            <h3>
                                Programming Fundamentals
                            </h3>

                            <p>
                                Build a strong programming foundation
                                before moving into advanced AI topics.
                            </p>

                            <ul class="roadmap-list">

                                <li>
                                    Python
                                </li>

                                <li>
                                    Data Structures
                                </li>

                                <li>
                                    Object-Oriented Programming
                                </li>

                                <li>
                                    Problem Solving
                                </li>

                            </ul>

                        </div>

                    </div>


                    <div class="roadmap-item">

                        <div class="roadmap-number">
                            02
                        </div>

                        <div class="roadmap-content">

                            <h3>
                                Mathematics & Statistics
                            </h3>

                            <p>
                                Learn the mathematical concepts
                                behind machine learning algorithms.
                            </p>

                            <ul class="roadmap-list">

                                <li>
                                    Linear Algebra
                                </li>

                                <li>
                                    Probability
                                </li>

                                <li>
                                    Statistics
                                </li>

                                <li>
                                    Calculus Basics
                                </li>

                            </ul>

                        </div>

                    </div>


                    <div class="roadmap-item">

                        <div class="roadmap-number">
                            03
                        </div>

                        <div class="roadmap-content">

                            <h3>
                                Machine Learning
                            </h3>

                            <p>
                                Understand how machines learn from
                                data and make predictions.
                            </p>

                            <ul class="roadmap-list">

                                <li>
                                    Supervised Learning
                                </li>

                                <li>
                                    Unsupervised Learning
                                </li>

                                <li>
                                    Model Evaluation
                                </li>

                                <li>
                                    Feature Engineering
                                </li>

                            </ul>

                        </div>

                    </div>


                    <div class="roadmap-item">

                        <div class="roadmap-number">
                            04
                        </div>

                        <div class="roadmap-content">

                            <h3>
                                Deep Learning & Generative AI
                            </h3>

                            <p>
                                Move into advanced AI technologies
                                and neural network architectures.
                            </p>

                            <ul class="roadmap-list">

                                <li>
                                    Neural Networks
                                </li>

                                <li>
                                    CNNs
                                </li>

                                <li>
                                    Transformers
                                </li>

                                <li>
                                    Large Language Models
                                </li>

                            </ul>

                        </div>

                    </div>


                    <div class="roadmap-item">

                        <div class="roadmap-number">
                            05
                        </div>

                        <div class="roadmap-content">

                            <h3>
                                Projects & Career
                            </h3>

                            <p>
                                Apply your knowledge through projects
                                and prepare for professional opportunities.
                            </p>

                            <ul class="roadmap-list">

                                <li>
                                    Build AI Projects
                                </li>

                                <li>
                                    Create GitHub Portfolio
                                </li>

                                <li>
                                    Prepare Resume
                                </li>

                                <li>
                                    Practice Interviews
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

            </section>

        </div>

    `;
}


/* ==================================================
   SKILLS PAGE
================================================== */

function skillsPage() {

    return `

        <div class="page">

            <section class="page-header">

                <div class="container">

                    <h1>
                        Essential AI Skills
                    </h1>

                    <p>
                        Develop technical and professional skills
                        required for an AI career.
                    </p>

                </div>

            </section>


            <section class="section">

                <div class="container skills-grid">


                    <div class="skill-box">

                        <h3>
                            🐍 Programming
                        </h3>

                        <ul class="skill-list">

                            <li>Python</li>

                            <li>C++</li>

                            <li>Java</li>

                            <li>Git</li>

                            <li>GitHub</li>

                        </ul>

                    </div>


                    <div class="skill-box">

                        <h3>
                            🧠 AI & Machine Learning
                        </h3>

                        <ul class="skill-list">

                            <li>Machine Learning</li>

                            <li>Deep Learning</li>

                            <li>Neural Networks</li>

                            <li>Computer Vision</li>

                            <li>NLP</li>

                        </ul>

                    </div>


                    <div class="skill-box">

                        <h3>
                            📊 Data Skills
                        </h3>

                        <ul class="skill-list">

                            <li>SQL</li>

                            <li>Statistics</li>

                            <li>Data Analysis</li>

                            <li>Power BI</li>

                            <li>Data Visualization</li>

                        </ul>

                    </div>


                    <div class="skill-box">

                        <h3>
                            ✨ Generative AI
                        </h3>

                        <ul class="skill-list">

                            <li>LLMs</li>

                            <li>Prompt Engineering</li>

                            <li>AI APIs</li>

                            <li>RAG</li>

                            <li>AI Agents</li>

                        </ul>

                    </div>


                    <div class="skill-box">

                        <h3>
                            💼 Professional Skills
                        </h3>

                        <ul class="skill-list">

                            <li>Communication</li>

                            <li>Problem Solving</li>

                            <li>Teamwork</li>

                            <li>Critical Thinking</li>

                            <li>Presentation</li>

                        </ul>

                    </div>


                    <div class="skill-box">

                        <h3>
                            🚀 Career Skills
                        </h3>

                        <ul class="skill-list">

                            <li>Resume Building</li>

                            <li>Portfolio</li>

                            <li>Networking</li>

                            <li>Interview Preparation</li>

                            <li>Project Development</li>

                        </ul>

                    </div>

                </div>

            </section>

        </div>

    `;
}


/* ==================================================
   OPPORTUNITIES PAGE
================================================== */

function opportunitiesPage() {

    return `

        <div class="page">

            <section class="page-header">

                <div class="container">

                    <h1>
                        Career Opportunities
                    </h1>

                    <p>
                        Explore where AI skills can take your career.
                    </p>

                </div>

            </section>


            <section class="section">

                <div class="container opportunity-grid">


                    <article class="opportunity-card">

                        <h3>
                            💼 Internships
                        </h3>

                        <p>
                            Gain practical experience by working
                            on AI, data science and software projects.
                        </p>

                        <ul>

                            <li>
                                AI Intern
                            </li>

                            <li>
                                ML Intern
                            </li>

                            <li>
                                Data Analyst Intern
                            </li>

                            <li>
                                Research Intern
                            </li>

                        </ul>

                    </article>


                    <article class="opportunity-card">

                        <h3>
                            🏢 Full-Time Roles
                        </h3>

                        <p>
                            Build your professional career in
                            organizations using AI technologies.
                        </p>

                        <ul>

                            <li>
                                ML Engineer
                            </li>

                            <li>
                                Data Scientist
                            </li>

                            <li>
                                AI Engineer
                            </li>

                            <li>
                                NLP Engineer
                            </li>

                        </ul>

                    </article>


                    <article class="opportunity-card">

                        <h3>
                            🌍 Freelancing
                        </h3>

                        <p>
                            Use AI skills to create solutions for
                            businesses and independent clients.
                        </p>

                        <ul>

                            <li>
                                AI Automation
                            </li>

                            <li>
                                Chatbot Development
                            </li>

                            <li>
                                Data Dashboards
                            </li>

                            <li>
                                AI Integration
                            </li>

                        </ul>

                    </article>


                    <article class="opportunity-card">

                        <h3>
                            🔬 Research
                        </h3>

                        <p>
                            Explore advanced AI concepts and
                            contribute to new technologies.
                        </p>

                        <ul>

                            <li>
                                AI Research
                            </li>

                            <li>
                                Deep Learning
                            </li>

                            <li>
                                NLP Research
                            </li>

                            <li>
                                Computer Vision
                            </li>

                        </ul>

                    </article>


                    <article class="opportunity-card">

                        <h3>
                            🚀 Entrepreneurship
                        </h3>

                        <p>
                            Build AI-powered products and
                            businesses around real-world problems.
                        </p>

                        <ul>

                            <li>
                                AI SaaS
                            </li>

                            <li>
                                Automation Products
                            </li>

                            <li>
                                AI Applications
                            </li>

                            <li>
                                Startups
                            </li>

                        </ul>

                    </article>


                    <article class="opportunity-card">

                        <h3>
                            🎓 Higher Education
                        </h3>

                        <p>
                            Continue your education through
                            specialized AI and research programs.
                        </p>

                        <ul>

                            <li>
                                M.Tech AI
                            </li>

                            <li>
                                MS in AI
                            </li>

                            <li>
                                Data Science Programs
                            </li>

                            <li>
                                Research Programs
                            </li>

                        </ul>

                    </article>

                </div>

            </section>

        </div>

    `;
}


/* ==================================================
   CONTACT PAGE
================================================== */

function contactPage() {

    return `

        <div class="page">

            <section class="page-header">

                <div class="container">

                    <h1>
                        Contact Us
                    </h1>

                    <p>
                        Have a question about your AI career journey?
                    </p>

                </div>

            </section>


            <section class="section">

                <div class="container contact-grid">


                    <div class="contact-info">

                        <h2>
                            Let's Connect
                        </h2>

                        <p>
                            Get in touch if you have questions
                            about AI careers, skills or learning paths.
                        </p>

                        <p>
                            📧 hello@aipath.example
                        </p>

                        <p>
                            📍 New Delhi, India
                        </p>

                        <p>
                            🚀 Learn. Build. Grow.
                        </p>

                    </div>


                    <form
                        class="contact-form"
                        id="contactForm"
                    >

                        <div class="form-group">

                            <label for="name">
                                Your Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                required
                            >

                        </div>


                        <div class="form-group">

                            <label for="email">
                                Email Address
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            >

                        </div>


                        <div class="form-group">

                            <label for="message">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write your message..."
                                required
                            ></textarea>

                        </div>


                        <button
                            type="submit"
                            class="btn btn-primary"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </section>

        </div>

    `;
}


/* ==================================================
   404 PAGE
================================================== */

function notFoundPage() {

    return `

        <div class="page">

            <section class="error-page">

                <div>

                    <h1>
                        404
                    </h1>

                    <h2>
                        Career Path Not Found
                    </h2>

                    <p>
                        The page you are looking for does not exist.
                    </p>

                    <a
                        href="/"
                        data-link
                        class="btn btn-primary"
                    >
                        Back to Home
                    </a>

                </div>

            </section>

        </div>

    `;
}


/* ==================================================
   ROUTES
================================================== */

const routes = {

    "/": homePage,

    "/careers": careersPage,

    "/roadmap": roadmapPage,

    "/skills": skillsPage,

    "/opportunities": opportunitiesPage,

    "/contact": contactPage

};


/* ==================================================
   GET CURRENT PATH
================================================== */

function getPath() {

    let path =
        window.location.pathname;

    if (
        path.length > 1 &&
        path.endsWith("/")
    ) {
        path =
            path.slice(0, -1);
    }

    return path || "/";
}


/* ==================================================
   ACTIVE NAVIGATION
================================================== */

function updateActiveLink(path) {

    const links =
        document.querySelectorAll(
            "[data-link]"
        );

    links.forEach(link => {

        const linkPath =
            new URL(
                link.href,
                window.location.origin
            ).pathname;

        link.classList.toggle(
            "active",
            linkPath === path
        );

    });
}


/* ==================================================
   SPA ROUTER
================================================== */

function router() {

    const path =
        getPath();

    const page =
        routes[path];


    if (page) {

        app.innerHTML =
            page();

    } else {

        app.innerHTML =
            notFoundPage();

    }


    updateActiveLink(path);


    /*
       Close mobile navigation
    */

    navbar.classList.remove(
        "open"
    );

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );


    /*
       Scroll to top
    */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    /*
       Initialize dynamic functionality
    */

    initializePage();

}


/* ==================================================
   SPA LINK HANDLING
================================================== */

document.addEventListener(
    "click",
    event => {

        const link =
            event.target.closest(
                "[data-link]"
            );


        if (!link) {
            return;
        }


        /*
           Ignore external links
        */

        if (
            link.origin !==
            window.location.origin
        ) {
            return;
        }


        event.preventDefault();


        const path =
            new URL(
                link.href
            ).pathname;


        /*
           Update browser URL
           without page reload
        */

        window.history.pushState(
            {},
            "",
            path
        );


        /*
           Render requested page
        */

        router();

    }
);


/* ==================================================
   BACK / FORWARD BUTTON
================================================== */

window.addEventListener(
    "popstate",
    router
);


/* ==================================================
   MOBILE MENU
================================================== */

menuToggle.addEventListener(
    "click",
    () => {

        const isOpen =
            navbar.classList.toggle(
                "open"
            );


        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    }
);


/* ==================================================
   CONTACT FORM
================================================== */

function initializePage() {

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    if (!contactForm) {
        return;
    }


    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                ).value;


            alert(
                `Thank you, ${name}! Your message has been submitted successfully.`
            );


            contactForm.reset();

        }
    );

}


/* ==================================================
   FOOTER YEAR
================================================== */

year.textContent =
    new Date().getFullYear();


/* ==================================================
   INITIAL APPLICATION LOAD
================================================== */

router();