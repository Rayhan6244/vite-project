import TechCard from "./TechCard";

export default function TechGrid({ technologies, stackIds, onAdd }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isAdded={stackIds.has(tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}


