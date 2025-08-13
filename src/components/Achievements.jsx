export default function Achievements() {
  const items = [
    "Solved 100+ DSA questions.",
    "Solved 400+ Java MCQs on Coding Ninjas with 86% accuracy.",
    "Winner of PG Hostel Cricket Tournament (2x).",
    "Completed Virtual Experience Programs: Walmart (Advanced SWE), Goldman Sachs (SWE), Accenture (SWE)."
  ];

  return (
    <section id="achievements" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Achievements & Certifications</h2>
        <ul className="grid sm:grid-cols-2 gap-4">
          {items.map((a, i) => (
            <li key={i} className="border rounded-xl p-4 bg-gray-50">{a}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
