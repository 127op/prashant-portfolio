import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen px-4 text-center text-white bg-gray-900">
      <p className="text-xs tracking-widest text-gray-300 uppercase">Aspiring Software Developer</p>
      <h1 className="mt-2 text-4xl font-extrabold md:text-6xl">Prashant Kushwah</h1>
      <p className="max-w-2xl mt-4 text-gray-200">
        Skilled in Java, ReactJS, Firebase, and MySQL with hands-on experience building full‑stack web and Android apps.
        Passionate about solving problems and creating scalable, impactful software.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <a href="https://github.com/127op" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-black bg-white rounded hover:bg-gray-300">
          <FaGithub /> GitHub
        </a>
        <a href="https://linkedin.com/in/127op" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://drive.google.com/file/d/15SLyCmDyAyUoFVpJ2Awk65nrlP4Xz8am/view?usp=share_link" download className="px-4 py-2 bg-green-600 rounded hover:bg-green-700">
          View CV
        </a>
      </div>
      <div className="mt-3 text-sm text-gray-300">
        Sikandra Rao, UP · (+91) 7037349494 · pk21.prashant@gmail.com
      </div>
    </section>
  );
}
