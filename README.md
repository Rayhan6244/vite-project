# 🧱 Dev Stack — Build Your Ideal Development Stack

Dev Stack is a small React app that helps you plan a project's tech stack.
Browse frontend, backend, database, and tooling options side by side, then
add the ones you like to a running "Your Stack" list you can review, trim,
and clear as you go.

## About the project

Instead of hunting through a dozen tabs to remember what framework, database,
or tool you wanted to use for a new project, Dev Stack puts every option on
one page — with a rating, difficulty level, and short description for each —
so you can compare them at a glance and build your shortlist as you browse.

## Built with

- **React 19** (function components + hooks)
- **Vite** as the build tool and dev server
- **Tailwind CSS** + **DaisyUI** for styling
- **React-Toastify** for alerts (add / duplicate / remove / remove all)
- **JSON** as the local technology data source, loaded through a custom
  `useTechnologies` hook (not hardcoded in any component)

## Features

1. **Build a stack interactively** — add any technology card to "Your Stack"
   with one click; the same technology can't be added twice, and its button
   switches to a disabled "✓ Added to Stack" state.
2. **Full control over your selection** — remove a single item with its ✕
   button, or clear everything at once with "Remove All", each backed by a
   toast confirmation.
3. **Responsive, theme-consistent UI** — a single shared gradient (orange →
   pink → violet), defined once in `tailwind.config.js`, drives the brand
   name, hero heading, and primary buttons across a layout that adapts from
   a 1-column mobile view up to a 3-column desktop grid.

## Getting started

```bash
npm install
npm run dev
```

## Project structure

```
src/
  components/   Navbar, Hero, TechCard, TechGrid, StackSidebar, Footer, Loader
  data/         technologies.json — the technology dataset
  hooks/        useTechnologies.js — loads the JSON data with a loading state
  App.jsx       top-level state: the stack, add/remove/remove-all logic
```

---

## React questions

**What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-looking markup directly
inside JavaScript. Under the hood it compiles down to plain
`React.createElement()` calls. It's used because describing UI as nested
tags is much easier to read and reason about than building the same tree
with nested function calls.

**What is the difference between props and state?**
Props are values passed *into* a component from its parent — the component
receiving them can't change them itself. State is data a component owns and
manages internally, and it can update over time (usually in response to user
actions), causing the component to re-render. In short: props flow down,
state lives inside.

**What does the `useState` hook do, and where did you use it in this project?**
`useState` gives a function component a piece of state that persists between
renders, plus a setter function to update it. In this project it's used in
`App.jsx` to hold the `stack` array (the technologies the user has added),
and in `Navbar.jsx` to track whether the mobile menu is open.

**What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs a side effect after a component renders — things like
fetching data, subscribing to something, or setting a timer, which aren't
part of the render itself. The `useTechnologies` hook uses it to "load" the
technology data once when the component mounts, and to flip a `loading` flag
before and after, which is what makes the loading state possible even though
the data technically comes from a local file.

**Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to match up list items between renders, so it knows
which ones stayed the same, moved, were added, or removed. Without a stable
key, React can only guess based on position, which leads to items losing
state or re-rendering incorrectly when the list changes.

**What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some
condition, instead of always rendering the same thing. `StackSidebar.jsx`
does this with `stack.length === 0 ? (...) : (...)` — if the stack is empty
it shows a placeholder message, and otherwise it renders the list of added
technologies.

**How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down through props, e.g. `<TechCard tech={tech} />`.
For a child to send information back up, the parent passes a function down
as a prop (e.g. `onAdd`), and the child calls that function with whatever
data it needs to send — like `onAdd(tech)` in `TechCard.jsx`, which runs the
`handleAdd` logic that actually lives in `App.jsx`.

---

**GitHub Repository Link:** _add after pushing to GitHub_
**Live Site Link:** _add after deploying_
