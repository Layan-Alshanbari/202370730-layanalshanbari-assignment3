# Technical Documentation

## Project Overview

This project is a responsive personal portfolio website created using HTML, CSS, and JavaScript. It contains About Me, Projects, and Contact sections, along with a home section, SWE and COE project filters, GitHub repositories fetched from the GitHub API and sorted by creation date, a validated demo contact form, and a light/dark theme that remembers the visitor’s choice after refresh.

## Project Structure

```text
repository-root/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

- `index.html` contains the website content.
- `css/styles.css` contains the design and responsive layout.
- `js/script.js` handles GitHub repository loading and sorting, project filters, theme persistence, and contact-form validation.
- `assets/images/` contains the project illustrations.
- `docs/` contains the assignment documentation.

## Technical Implementation

The HTML uses semantic elements such as `header`, `nav`, `main`, `section`, `article`, `form`, and `footer`.

CSS Flexbox is used for the navigation, while CSS Grid is used for the project cards. On mobile screens, projects appear in one column. At a width of 768 pixels or more, they appear in two columns.
JavaScript controls the dark/light theme. When the theme button is clicked, the script adds or removes the `dark-mode` class from the page.

### GitHub repository API

The script requests up to five public repositories from the GitHub API. It checks whether the request succeeded, converts the response to JSON, and creates a card for each repository with its name, description, main language, and GitHub link. If the request fails, the page displays a user-friendly error message.

### Repository sorting

The sorting menu lets visitors choose newest or oldest repositories. When the selection changes, `loadRepositories()` makes a new API request using the selected direction, clears the previous cards, and displays the returned repositories.

### Project category filters

The project filter buttons show all projects or only the projects in the selected category. Each project card’s `data-category` value is compared with the selected filter.

### Theme state

When the page loads, the script reads the saved theme from `localStorage`. Clicking the theme button switches the page’s `dark-mode` class and saves the new choice, so it remains selected after a refresh.

### Contact form

The form checks that the name, email, and message are not empty, then checks the email format. It displays a success or error message. This is a front-end demo; it does not send messages.

## Accessibility

The website includes:

- Labels connected to the contact-form fields.
- Required name, email, and message fields.
- Descriptive alternative text for project images.
- Semantic HTML elements.
- An accessible navigation label.
- Readable text and background colors.

## Testing

The website was tested in Safari at mobile-sized and laptop-sized widths. The GitHub repository cards and sorting, theme persistence, project filters, and contact form were checked. PageSpeed Insights was run for both mobile and desktop.
## Performance Testing

- Tool: Google PageSpeed Insights
- Test date: 2026/ 11/ 21
- Device: Mobile and Desktop
- URL: https://layan-alshanbari.github.io/202370730-layanalshanbari-assignment3/
- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100
- First Contentful Paint: 0.2 s
- Largest Contentful Paint: 0.2 s
- Total Blocking Time: 0 ms
- Cumulative Layout Shift: 0.002
- Speed Index: 0.2 s
- Findings: PageSpeed listed LCP, caching, and render-blocking suggestions as unscored. No code changes were made based on these suggestions because the site already received a 100 performance score.

## Known Limitations

The contact form is a front-end demo and does not send or store messages. The GitHub repository section requires an internet connection and displays up to five public repositories.