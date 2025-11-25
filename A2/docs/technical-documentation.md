
# 🧱 Technical Documentation

## 🧩 Project Overview
This project is an interactive portfolio website built with **React** and **Vite**.  
It includes multiple sections: Hero, About, Skills, Services, Projects, GitHub API Integration, and Contact.

The website demonstrates:
- Component-based architecture  
- API integration  
- Input validation  
- State management  
- Responsive and accessible design  

---

## ⚙️ Architecture & Component Structure
src/
├── components/
│ ├── Header.jsx # Navigation bar (desktop + mobile)
│ ├── Footer.jsx # Footer with branding and links
│ ├── Social.jsx # Reusable social icon link
│ ├── ContactForm.jsx # Validated contact form with error handling
│ ├── ProjectsGrid.jsx # Displays portfolio projects
│ ├── ServicesCarousel.jsx # Scrollable services carousel with swipe support
│ ├── GithubRepos.jsx # Fetches and displays latest GitHub repositories (API)
│ └── icons/GitHubIcon.jsx # Custom GitHub SVG icon
│
├── data/
│ ├── projects.js # Local project list
│ └── services.js # Local services list
│
├── assets/ # Images and media
├── App.jsx # Main layout and section composition
├── App.css # Global styles and theme variables
└── main.jsx # App entry point



---

## 🌐 API Integration (GitHub REST API)
This project integrates with the **GitHub API** to load and display the latest repositories.

### Endpoint Used
https://api.github.com/users/<username>/repos?sort=updated&per_page=6


### Why No API Token?
- GitHub allows **60 unauthenticated requests per hour** for this endpoint.
- Storing tokens in frontend code is unsafe.
- Therefore, the project uses **public, no-auth API calls**, which meet assignment requirements.

### Error Handling
If GitHub is unavailable or the username is wrong:
- A friendly message appears:  
  **"Could not load GitHub repositories. Please try again later."**

  ---

  ## 🧠 React Hooks Used

  | Hook | Purpose |
  |------|----------|
  | **useState** | Manage form inputs, carousel index, API data, menu toggles, and errors. |
  | **useEffect** | Fetch GitHub repos, handle scroll effects, and lifecycle behaviors. |
  | **useRef** | Track touch positions for swipe gestures in the carousel. |
  | **useMemo** | Cache static project/service data and avoid unnecessary rerenders. |

  ---

  ## 🧩 Data Handling

  ### 1. Contact Form Validation
  - Ensures **full name**, **email**, and **message** are not empty.
  - Email is validated using a regex pattern.
  - Inline error messages appear dynamically.
  - Successful submission displays a success message.

  ### 2. API Data (GitHub Repos)
  - Fetched once on component mount.
  - Stored in local state.
  - Renders repository name, description, star count, and link.

  ---

  ## 🎨 Styling & Responsiveness
  - **Glassmorphism Theme** using custom CSS variables.
  - Layout built with **Flexbox** and **CSS Grid**.
  - Fully responsive across all screen sizes.
  - Subtle animations: hover effects, scroll indicator, card transitions.

  ---

  ## ⚡ Carousel & Interaction Logic
  The `ServicesCarousel` includes:
  - Index-based navigation
  - Prev/Next buttons
  - Swipe gesture support via `touchstart`, `touchmove`, `touchend`
  - Bounds-clamping logic to prevent invalid slide positions

  ---

  ## 🧪 Error Handling & User Feedback
  - Form shows clear errors when invalid.
  - GitHub API requests show fallback messages.
  - All asynchronous operations include try/catch blocks.

  ---

  ## 🧰 Development Tools
  - **React 19** + **Vite**
  - **Node.js** + **NPM**
  - **GitHub** for version control
  - **VS Code**
  - **ChatGPT** for debugging and documentation support

  ---

  ## 🚀 Performance Improvements
  - Optimized images to reduce load time.
  - Used `useMemo` to prevent unnecessary rerenders.
  - Removed unused assets and code.
  - Verified performance in Chrome Lighthouse.

  ---

  ## 🧠 Summary
  This portfolio demonstrates strong React knowledge, reusable component design, real API integration, validated forms, and responsive UI.  
  The structure is maintainable, scalable, and aligned with modern web development standards.

  It showcases both technical ability and thoughtful UI/UX design.

