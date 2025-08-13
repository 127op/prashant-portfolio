export default function Footer() {
  return (
    <footer className="py-6 text-gray-300 bg-gray-900">
      <div className="flex items-center justify-between max-w-6xl px-4 mx-auto">
        <p>© {new Date().getFullYear()} Prashant Kushwah. All rights reserved.</p>
        <div className="text-sm">Made with 🖤 By Prashant Kushwah</div>
      </div>
    </footer>
  );
}
