import { Link } from "react-scroll";

export default function Navbar() {
  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-gray-900 text-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-3 px-4">
        <h1 className="text-lg md:text-xl font-bold tracking-wide">Prashant Kushwah</h1>
        <div className="hidden md:flex gap-6">
          {sections.map((s) => (
            <Link
              key={s.id}
              to={s.id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-yellow-400"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
