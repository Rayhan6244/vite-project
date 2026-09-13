import { useEffect, useState } from "react";
import techData from "../data/technologies.json";

/**
 * Loads the technology list from the JSON data file.
 * The data lives locally, but we still model it as an async fetch
 * (with a brief artificial delay) so the loading state is real and
 * the hook would work the same way against a network endpoint.
 */
export default function useTechnologies() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      // Simulate the async nature of a real fetch() call.
      await new Promise((resolve) => setTimeout(resolve, 400));
      if (!cancelled) {
        setTechnologies(techData);
        setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { technologies, loading };
}
