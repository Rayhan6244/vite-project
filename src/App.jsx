import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import TechGrid from "./components/TechGrid";
import StackSidebar from "./components/StackSidebar";
import Footer from "./components/Footer";
import useTechnologies from "./hooks/useTechnologies";

export default function App() {
  const { technologies, loading } = useTechnologies();
  const [stack, setStack] = useState([]);

  const stackIds = useMemo(() => new Set(stack.map((t) => t.id)), [stack]);

  function handleAdd(tech) {
    if (stackIds.has(tech.id)) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  }

  function handleRemove(id) {
    const removed = stack.find((t) => t.id === id);
    setStack((prev) => prev.filter((t) => t.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack.`);
  }

  function handleRemoveAll() {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("Your stack has been cleared.");
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <Hero />

      <section id="technologies" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-10">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Explore the <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mt-2 max-w-xl text-muted">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1fr_320px]">
            <TechGrid
              technologies={technologies}
              stackIds={stackIds}
              onAdd={handleAdd}
            />
            <StackSidebar
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        )}
      </section>

      <Footer />

      <ToastContainer
        position="bottom-right"
        theme="dark"
        autoClose={2500}
        newestOnTop
      />
    </div>
  );
}
