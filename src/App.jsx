// App.jsx
// The root component of the application, serving as the main entry point.
// Renders the PageNav component and a context menu for page actions.
// Utilizes React for state management and Vite for asset imports.

// Core React imports

// Style imports
import './App.css'

// Component imports
import PageNav from './components/PageNav'


/**
 * App component serves as the main entry point for the application.
 * It renders the PageNav component and a context menu for page interactions.
 */

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Render the page navigation component */}
      <PageNav />
      {/* Context menu for page actions, hidden by default */}
      <div
        id="context-menu"
        className="context-menu absolute hidden"
        onClick={() => (document.getElementById("context-menu").style.display = "none")}
      >
        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Set as first page</button>
        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Rename</button>
        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Copy</button>
        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Duplicate</button>
        <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">Delete</button>
      </div>
  </div>
  )
}

export default App
