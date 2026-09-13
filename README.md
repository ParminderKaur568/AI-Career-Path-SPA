# AIPath – Interactive AI Career Roadmap SPA 🤖

AIPath is a responsive **Single Page Application (SPA) simulation** developed as part of a Frontend Web Development Internship – Week 5 task.

The project provides an interactive roadmap for users interested in building a career in Artificial Intelligence. It presents AI career roles, required skills, learning stages, career opportunities, and contact information through dynamically rendered pages without requiring a complete browser page reload.

The application is built using **HTML5, CSS3, and Vanilla JavaScript**, with client-side routing implemented using the browser **History API**.

---

## 🚀 Live Demo

**Live Website:**
https://ai-career-path-spa.netlify.app/

**GitHub Repository:**
https://github.com/ParminderKaur568/AI-Career-Path-SPA

---

## 📌 Project Objective

The main objective of this project is to demonstrate how a Single Page Application can be developed using fundamental frontend technologies.

The project focuses on:

* Client-side routing
* Dynamic content rendering
* DOM manipulation
* Browser History API
* Responsive web design
* CSS transitions and animations
* Navigation state management
* Error handling
* Accessibility
* Mobile-friendly user experience

Unlike a traditional multi-page website, AIPath uses a single HTML document and dynamically updates the main content area according to the selected route.

---

## ✨ Features

### 🏠 Home Page

The homepage introduces the AI career ecosystem and provides users with quick access to the career roadmap.

It includes:

* Hero section
* AI career introduction
* Career statistics
* Call-to-action buttons
* Responsive navigation

### 💼 AI Careers

The Careers section presents different AI-related career paths, including:

* AI/ML Engineer
* Data Scientist
* NLP Engineer
* Computer Vision Engineer
* Generative AI Engineer
* AI Product Manager

Each career option provides information about the role and relevant skills.

### 🗺️ AI Career Roadmap

The roadmap provides a structured learning journey:

```text
Programming Fundamentals
          ↓
Mathematics & Statistics
          ↓
Machine Learning
          ↓
Deep Learning & Generative AI
          ↓
Projects & Career Development
```

This helps users understand the recommended progression for entering the AI field.

### 🧠 Skills

The Skills section categorizes important skills into areas such as:

* Programming
* AI & Machine Learning
* Data
* Generative AI
* Professional Skills
* Career Skills

### 💼 Opportunities

The application highlights several career opportunities:

* Internships
* Full-Time Jobs
* Freelancing
* Research
* Entrepreneurship
* Higher Education

### 📩 Contact

A responsive contact form is included to demonstrate user interaction and form handling using JavaScript.

### ❌ 404 Error Handling

Invalid routes are handled using a custom 404 page instead of leaving the application blank.

---

# 🧩 SPA Architecture

AIPath follows a simple client-side SPA architecture.

```text
User Interaction
       ↓
Navigation Click
       ↓
JavaScript Event Handler
       ↓
history.pushState()
       ↓
Router Function
       ↓
Route Detection
       ↓
Dynamic Page Rendering
       ↓
DOM Update
```

The application maintains a common HTML structure while JavaScript dynamically changes the content inside the main application container.

---

## 🛠️ Technologies Used

| Technology  | Purpose                                        |
| ----------- | ---------------------------------------------- |
| HTML5       | Semantic webpage structure                     |
| CSS3        | Styling, layout, responsiveness and animations |
| JavaScript  | Dynamic content and application logic          |
| History API | Client-side routing                            |
| DOM API     | Dynamic page rendering                         |
| Git         | Version control                                |
| GitHub      | Repository and submission                      |
| Netlify     | Deployment                                     |

---

## 📂 Project Structure

```text
AIPath/
│
├── index.html
├── style.css
├── script.js
├── _redirects
└── README.md
```

### `index.html`

Contains the main application shell, including:

* Header
* Navigation
* Main dynamic container
* Footer
* JavaScript reference

The primary dynamic container is:

```html
<main id="app" class="main-content" aria-live="polite"></main>
```

---

### `style.css`

Responsible for the visual presentation of the application.

It includes:

* Global styles
* Header and navigation
* Hero section
* Career cards
* Roadmap design
* Skills sections
* Opportunity cards
* Contact form
* Responsive layouts
* Hover effects
* Animations
* Focus states
* Reduced-motion support

---

### `script.js`

Contains the main application functionality.

It manages:

* Career data
* Page rendering
* Client-side routing
* Navigation
* Browser history
* Mobile menu
* Contact form
* Active navigation states
* 404 handling

---

### `_redirects`

Used for SPA deployment on Netlify.

```text
/*    /index.html   200
```

This ensures that client-side routes are redirected to the main HTML file so that routes such as `/careers` and `/roadmap` continue to work when accessed directly.

---

# 🔀 Client-Side Routing

The project uses the browser History API instead of traditional page navigation.

Navigation links contain the `data-link` attribute:

```html
<a href="/careers" data-link>Careers</a>
<a href="/roadmap" data-link>Roadmap</a>
```

JavaScript intercepts the navigation:

```javascript
document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-link]");

    if (!link) return;

    event.preventDefault();

    history.pushState({}, "", link.href);
    router();
});
```

The `pushState()` method changes the URL without reloading the page.

The `popstate` event handles browser Back and Forward navigation:

```javascript
window.addEventListener("popstate", router);
```

This keeps the displayed content synchronized with the browser URL.

---

# 📄 Application Routes

| Route            | Description          |
| ---------------- | -------------------- |
| `/`              | AIPath homepage      |
| `/careers`       | AI career options    |
| `/roadmap`       | AI learning roadmap  |
| `/skills`        | Required AI skills   |
| `/opportunities` | Career opportunities |
| `/contact`       | Contact form         |
| Invalid route    | Custom 404 page      |

---

# 📱 Responsive Design

The website is designed to work across different screen sizes.

Responsive techniques include:

* CSS Grid
* Flexbox
* Flexible containers
* Media queries
* Responsive typography
* Mobile navigation
* Adaptive card layouts
* Flexible buttons and forms

The interface was tested for:

* Desktop screens
* Tablet screens
* Mobile screens

The mobile navigation changes into a hamburger-style menu to provide a cleaner experience on smaller screens.

---

# 🎨 UI/UX Features

The interface uses a modern technology-inspired visual style.

UX improvements include:

* Smooth hover effects
* Animated page entrances
* Interactive buttons
* Active navigation indicators
* Responsive cards
* Clear content hierarchy
* Mobile-friendly navigation
* Visible keyboard focus states
* Reduced-motion support

Animations are used carefully so that they improve visual feedback without interfering with usability.

---

# ♿ Accessibility

Accessibility was considered during development.

Implemented practices include:

* Semantic HTML elements
* Descriptive form labels
* Keyboard-friendly controls
* Visible focus states
* `aria-live="polite"` for dynamic content
* Responsive text and layouts
* Reduced-motion support

The reduced-motion rule respects users who have enabled motion-reduction preferences in their operating system or browser.

---

# 🧪 Testing

The following functionality was tested during development:

| Test                     | Expected Result         | Status   |
| ------------------------ | ----------------------- | -------- |
| Home navigation          | Home content loads      | ✅ Passed |
| Careers navigation       | Career content loads    | ✅ Passed |
| Roadmap navigation       | Roadmap loads           | ✅ Passed |
| Skills navigation        | Skills content loads    | ✅ Passed |
| Opportunities navigation | Opportunities load      | ✅ Passed |
| Contact navigation       | Contact form loads      | ✅ Passed |
| Back button              | Previous route loads    | ✅ Passed |
| Forward button           | Next route loads        | ✅ Passed |
| Invalid URL              | 404 page appears        | ✅ Passed |
| Mobile menu              | Menu opens/closes       | ✅ Passed |
| Responsive layout        | Layout adapts to screen | ✅ Passed |
| Contact form             | Form interaction works  | ✅ Passed |

Testing was performed using browser developer tools and different viewport sizes.

---

# ⚡ Performance Considerations

The application uses lightweight frontend technologies and does not depend on a large JavaScript framework.

Performance-oriented decisions include:

* Vanilla JavaScript
* Reusable rendering functions
* Limited HTML duplication
* CSS-based animations
* Dynamic content rendering
* Responsive CSS
* No unnecessary page reloads during internal navigation

For formal performance evaluation, the deployed website can be tested using **Chrome Lighthouse**.

Recommended metrics to record include:

* Performance
* Accessibility
* Best Practices
* SEO
* First Contentful Paint (FCP)
* Largest Contentful Paint (LCP)
* Cumulative Layout Shift (CLS)

Actual Lighthouse scores should be added to the project documentation after testing the deployed version.

---

# 🧠 Challenges & Solutions

### 1. Implementing SPA Navigation

**Challenge:**
Traditional links reload the entire webpage.

**Solution:**
Navigation events were intercepted using JavaScript and `preventDefault()`. The History API was then used to update the URL.

---

### 2. Browser History Synchronization

**Challenge:**
The browser Back and Forward buttons needed to update the application content.

**Solution:**
The `popstate` event was connected to the router.

---

### 3. Dynamic Content

**Challenge:**
Creating multiple HTML pages would not demonstrate SPA functionality effectively.

**Solution:**
Content was stored in JavaScript data structures and dynamically inserted into the main application container.

---

### 4. Invalid Routes

**Challenge:**
An unsupported URL could result in an empty content area.

**Solution:**
A dedicated 404 rendering function was created for unknown routes.

---

### 5. Deployment Routing

**Challenge:**
Directly opening an SPA route on a hosting platform can result in a server-side 404.

**Solution:**
A Netlify `_redirects` file was added to redirect requests to `index.html`.

---

# 🔮 Future Improvements

Possible future enhancements include:

* Search functionality for AI careers
* Career recommendation quiz
* Progress tracking
* LocalStorage-based learning progress
* Dark/light theme switcher
* Interactive skill assessment
* Backend-powered contact form
* Authentication
* AI-powered career recommendations
* Course and resource recommendations
* Dashboard for tracking career progress

---

# 📚 Learning Outcomes

Through this project, I gained practical experience in:

* SPA architecture
* Client-side routing
* JavaScript DOM manipulation
* Browser History API
* Dynamic content generation
* Responsive web development
* CSS animations
* Accessibility
* Error handling
* Debugging
* Frontend project organization
* Deployment considerations

The project strengthened my understanding of how modern web applications can provide page-like navigation while maintaining a single loaded document.

---

# 🚀 How to Run Locally

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project folder

```bash
cd AIPath
```

### 3. Run the project

The project can be opened using a local development server such as **VS Code Live Server**.

Alternatively, use any static HTTP server.

### 4. Open the application

Open the local server URL in your browser.

---

# 📌 Internship Task

**Week:** 5
**Task:** Developing a Single Page Application (SPA) Simulation
**Domain:** Frontend Web Development

The project demonstrates the integration of HTML, CSS, and JavaScript to create a responsive SPA experience with dynamic content, client-side routing, navigation state management, transitions, error handling, and browser history support.

---

# 👩‍💻 Author

**Parminder Kaur**

Frontend Web Development Intern
B.Tech Computer Science Engineering Student

---

## ⭐ Project Highlights

* ✅ Single Page Application simulation
* ✅ Vanilla JavaScript routing
* ✅ Dynamic DOM rendering
* ✅ History API integration
* ✅ Browser Back/Forward support
* ✅ Responsive design
* ✅ Mobile navigation
* ✅ CSS transitions and animations
* ✅ Accessibility considerations
* ✅ Custom 404 handling
* ✅ Netlify SPA deployment support
