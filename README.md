Page Navigation App
A React-based web application featuring a draggable, sortable page navigation bar with a context menu for page management. Built with Vite, @dnd-kit for drag-and-drop functionality, and lucide-react for icons, styled with Tailwind CSS for a modern, responsive UI.
Table of Contents

Features
Tech Stack
Installation
Usage
Project Structure
Components
Contributing
License

Features

Drag-and-Drop Navigation: Reorder pages using drag-and-drop, powered by @dnd-kit.
Context Menu: Right-click on active pages to access actions like "Set as first page," "Rename," "Copy," "Duplicate," and "Delete."
Dynamic Page Addition: Add new pages between existing ones or at the end of the navigation bar.
Accessibility: Supports keyboard navigation for drag-and-drop operations.
Active Page Highlighting: Visually distinguishes the active page with styling and a context menu trigger.

Tech Stack

React: Frontend library for building the UI.
Vite: Build tool for fast development and production builds.
@dnd-kit/core & @dnd-kit/sortable: Libraries for drag-and-drop and sortable functionality.
lucide-react: Icon library for consistent, lightweight icons.
Tailwind CSS: Utility-first CSS framework for styling.

Installation
To set up the project locally, follow these steps:

Clone the Repository:
git clone https://github.com/ABMshawonislam-dev/page-navigation-app.git
cd page-navigation-app


Install Dependencies:Ensure you have Node.js (v16 or higher) installed. Then run:
npm install


Start the Development Server:
npm run dev

Open http://localhost:5173 in your browser to view the app.

Build for Production:
npm run build

The production-ready files will be generated in the dist folder.


Usage

Navigating Pages:

Click a page to set it as active (highlighted with a white background and border).
Active pages display an EllipsisVertical icon for context menu access.


Reordering Pages:

Drag a page to reorder it within the navigation bar.
Use keyboard navigation (via @dnd-kit) for accessibility.


Adding Pages:

Hover between pages to reveal a + button, or click the "Add page" button at the end.
New pages are added with a default title (e.g., Page5) and a FileText icon.


Context Menu:

Right-click an active dot page to open the context menu.
Options include:
Set as first page: Moves the page to the start (not yet implemented).
Rename: Edit the page title (not yet implemented).
Copy: Copy the page content (not yet implemented).
Duplicate: Create a copy of the page (not yet implemented).
Delete: Remove the page (not yet implemented).





Project Structure
page-navigation-app/
├── public/
│   ├── vite.svg            # Vite logo
├── src/
│   ├── assets/
│   │   ├── fonts       # React logo
│   ├── components/
│   │   ├── PageItem.jsx    # Single page item component
│   │   ├── PageNav.jsx     # Navigation bar with drag-and-drop and context menu
│   ├── App.jsx             # Root component
│   ├── App.css             # Global styles
│   ├── main.jsx            # Entry point for React
│   ├── index.css           # Tailwind CSS setup
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
├── README.md               # Project documentation

Components

App.jsx:

The root component that renders the PageNav component and a fallback context menu.
Manages the top-level layout with a min-h-screen container.
Note: The context menu in App.jsx uses direct DOM manipulation, which could be refactored to use React state for better consistency.


PageNav.jsx:

Handles the page navigation bar with drag-and-drop functionality using @dnd-kit.
Manages page state, including adding new pages and handling context menu interactions.
Implements hover effects for adding pages between existing ones.


PageItem.jsx:

Represents a single page in the navigation bar.
Supports drag-and-drop with @dnd-kit/sortable and handles click events for selection.
Displays an icon, title, and context menu trigger for active pages.
