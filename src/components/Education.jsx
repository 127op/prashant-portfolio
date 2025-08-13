export default function Education() {
  const items = [
    { year: "2023–2025", title: "MCA, IET (MJP Rohilkhand University), Bareilly", detail: "CGPA: 8.10" },
    { year: "2019–2022", title: "B.Sc. (Computer Science), Sri Varshney College, Aligarh", detail: "Percentage: 64.88%" },
    { year: "2018–2019", title: "Computer Hardware & Network Maintenance, Govt. ITI Hathras", detail: "Percentage: 77.7%" },
  ];

  return (
    <section id="education" className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="relative border-s-2 border-gray-200 ms-4">
        {items.map((e, idx) => (
          <div key={idx} className="ms-6 mb-8">
            <div className="absolute w-3 h-3 bg-yellow-400 rounded-full -start-1.5 mt-2 border"></div>
            <h3 className="text-xl font-semibold">{e.title}</h3>
            <p className="text-gray-600">{e.year}</p>
            <p className="text-gray-700">{e.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
