export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-xl p-6 bg-white">
          <h3 className="text-xl font-semibold">Get in touch</h3>
          <p className="text-gray-700 mt-2">
            Feel free to reach out for collaborations, internships, or freelancing opportunities.
          </p>
          <div className="mt-4 space-y-1 text-gray-700">
            <p><strong>Email:</strong> <a className="text-blue-600" href="mailto:pk21.prashant@gmail.com">pk21.prashant@gmail.com</a></p>
            <p><strong>Phone:</strong> <a className="text-blue-600" href="tel:+917037349494">+91 7037349494</a></p>
            <p><strong>Location:</strong> Sikandra Rao, UP</p>
            <p><strong>GitHub:</strong> <a className="text-blue-600" target="_blank" rel="noreferrer" href="https://github.com/127op">github.com/127op</a></p>
            <p><strong>LinkedIn:</strong> <a className="text-blue-600" target="_blank" rel="noreferrer" href="https://linkedin.com/in/127op">linkedin.com/in/127op</a></p>
          </div>
        </div>
        <form className="border rounded-xl p-6 bg-white" action="mailto:pk21.prashant@gmail.com" method="post" encType="text/plain">
          <h3 className="text-xl font-semibold">Quick Message</h3>
          <div className="mt-4 grid gap-3">
            <input className="border rounded px-3 py-2" name="name" placeholder="Your Name" required />
            <input className="border rounded px-3 py-2" name="email" placeholder="Your Email" type="email" required />
            <textarea className="border rounded px-3 py-2 h-28" name="message" placeholder="Your Message" required></textarea>
            <button className="bg-gray-900 text-white rounded px-4 py-2 hover:bg-gray-800" type="submit">Send</button>
          </div>
          <p className="text-xs text-gray-500 mt-2">This uses your email client to send the message.</p>
        </form>
      </div>
    </section>
  );
}
