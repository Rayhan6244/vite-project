Here is a complete, polished README.md file tailored specifically for your React + Vite + Tailwind CSS project.

DevStack — Tech Stack Builder
A modern, interactive web application designed to help developers explore, compare, and assemble their ideal technology stack for upcoming projects.

🛠 Tech Stack
Frontend Framework: React (Vite)

Styling: Tailwind CSS

Icons & Assets: Custom SVG / Image Assets

Language: JavaScript (ES6+)

✨ Features
Interactive Stack Selection: Browse through curated frontend, backend, database, and DevOps tools and dynamically add or remove them from your personal stack.

Real-time Stack Preview: View your selected technologies side-by-side in a dedicated sidebar with live counts and custom badges.

Optimized Asset Delivery: Powered by Vite for lightning-fast HMR (Hot Module Replacement) and efficient image asset bundling.

💡 React Q&A

1. What is JSX, and why is it used in React?
   JSX stands for JavaScript XML. It allows us to write HTML-like markup directly inside JavaScript files. It is used in React because it makes building UI structures intuitive and easy to read while keeping rendering logic and markup in one place.

2. What is the difference between props and state?
   Props (Properties): Read-only data passed from a parent component down to a child component. The child component cannot modify props directly.

State: Data that is managed locally within a component. State can change over time based on user interactions and triggers a re-render when updated.

3. What does the useState hook do, and where did you use it in this project?
   The useState hook allows functional components to create and manage local state. In this project, it was used in App.jsx as useState([]) to keep track of the list of technologies currently added to the user's custom stack (userStack).

4. What does the useEffect hook do, and why did you need it to load the JSON data?
   The useEffect hook handles side effects in components, such as fetching data or setting timers. It was used to fetch the initial technology items from an external or local .json file asynchronously as soon as the component mounted on the screen.

5. Why does every item in a .map() list need a unique key prop?
   React relies on unique key props to track individual list items efficiently. It helps React identify which items have changed, been added, or removed so it can re-render only the modified elements instead of rebuilding the entire list.

6. What is conditional rendering? Show one place you used it.
   Conditional rendering means displaying specific UI elements based on certain conditions (like if statements or ternary operators).

Example from StackSidebar.jsx:

JavaScript
{stack.length === 0 ? (

  <div className="border border-dashed border-slate-200 bg-white rounded-xl p-6 text-center">
    <p className="text-xs text-slate-400">Your stack is empty.</p>
  </div>
) : (
  <div className="space-y-3">
    {/* Render list of selected tech items */}
  </div>
)}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent to Child: Data is passed downward using props.

Child to Parent: The parent passes a callback function to the child as a prop. The child component then calls that function and passes data into it as an argument (e.g., passing onToggle(tech) from TechCard back to App).
