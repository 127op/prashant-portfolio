import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact, FaGithub } from "react-icons/fa";
import { SiMysql, SiFirebase, SiTailwindcss, SiPostman } from "react-icons/si";

export default function Skills() {
  const tech = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Java", icon: <FaJava /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "C", icon: "C" },
    { name: "XML/JSX", icon: "<>" },
    { name: "ReactJS", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "REST APIs", icon: "{}" },
  ];

  const soft = ["Decision-Making", "Problem-Solving", "Teamwork", "Public Speaking", "Adaptability", "Communication"];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-6 text-3xl font-bold">Skills</h2>
        <h3 className="mb-3 text-xl font-semibold">Technical</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {tech.map((t) => (
            <div key={t.name} className="flex flex-col items-center gap-2 p-4 border rounded-xl bg-gray-50 hover:shadow">
              <div className="text-2xl">{t.icon}</div>
              <div className="text-sm font-medium">{t.name}</div>
            </div>
          ))}
        </div>
        <h3 className="mt-10 mb-3 text-xl font-semibold">Soft Skills</h3>
        <div className="flex flex-wrap gap-2">
          {soft.map((s) => (
            <span key={s} className="px-3 py-1 text-sm bg-gray-200 rounded-full">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
