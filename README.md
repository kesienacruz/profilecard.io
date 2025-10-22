# profilecard.io
Responsive Semantic Profile Card

This project implements a multi-page profile card component using pure HTML, CSS (Flexbox for responsiveness), and vanilla JavaScript. It strictly adheres to accessibility best practices, semantic HTML structure, and specific testing requirements (data-testid attributes).

Features

*Semantic HTML:* Uses appropriate tags like <article>, <figure>, <nav>, <section>, and headings.
*Full Responsiveness:* The layout adapts cleanly from mobile devices (stacked content) to desktop screens (avatar left, text content right, lists side-by-side).
*Data-Test ID Compliance:* Every core element includes the required data-testid attribute for stable end-to-end testing.
*Live Time Implementation:* Uses JavaScript's Date.now() and setInterval to accurately display the current time in milliseconds, updating every second.
*Accessibility (A11y):* All interactive links are keyboard-focusable and visible focus styles are provided.

Local Installation and Running
This project is a multi-page contained HTML file (index.html, about.html, contact.html) requiring no external dependencies or build tools.

Prerequisites
You need a modern web browser (Chrome, Firefox, Edge, Safari).

Steps to Run
Save the Code: Save the provided HTML content into a file named index.html.


Directly Open:
You can often just double-click the index.html file to open it in your browser, but be mindful of potential script execution issues.

📝 Implementation Notes

CSS: Uses standard, non-prefixed CSS with Flexbox for layout control. No external frameworks (like Tailwind) were strictly necessary, so pure CSS was used for simplicity and completeness in a single file.

Image URL: A placeholder image from picsum.photos is used for the avatar, fulfilling the requirement to display an image URL.

JavaScript: The script is minimal, encapsulated at the end of the <body>, and solely dedicated to handling the time update.
