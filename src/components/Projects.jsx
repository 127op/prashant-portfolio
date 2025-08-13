export default function Projects() {
  const items = [
    {
      title: "University Android App + Admin Web Portal",
      period: "Mar 2025 – May 2025",
      role: "Project Manager & Developer (Team of 4)",
      points: [
        "Built Android app for announcements, schedules, and resources with Firebase backend.",
        "Implemented auth, real‑time notifications, and intuitive UI (Android Studio, Java, Firebase).",
        "Improved student engagement by ~40% via forums and event reminders."
      ],
      link: "#"
    },
    {
      title: "Hospital Management System",
      period: "Feb 2024 – Mar 2024",
      role: "Project Manager & Front-end Developer (Team of 4)",
      points: [
        "Web-based system to manage patient records, appointments, and billing.",
        "Stack: HTML, CSS, JavaScript, MySQL; automated scheduling and records."
      ],
      link: "#"
    },
    {
      title: "Amazon Web App Clone",
      period: "Jul 2022 – Jan 2023",
      role: "Full-stack Developer",
      points: [
        "Replicated core e-commerce features with React, Tailwind, JavaScript, and APIs.",
        "User profiles, account management, and dynamic cart with real-time interactions."
      ],
      link: "#"
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((p, idx) => (
          <div key={idx} className="border rounded-xl p-6 bg-white">
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <span className="text-sm text-gray-500">{p.period}</span>
            </div>
            <p className="text-gray-600 mt-1">{p.role}</p>
            <ul className="list-disc ms-6 mt-3 space-y-2 text-gray-700">
              {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
            </ul>
            {p.link && <a href={p.link} className="inline-block mt-4 text-blue-600 hover:underline">View</a>}
          </div>
        ))}
      </div>
    </section>
  );
}
