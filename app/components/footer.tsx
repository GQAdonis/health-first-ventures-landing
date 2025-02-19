export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Health First Ventures</h3>
            <p className="text-gray-400">Building the future of healthcare</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">info@healthfirstventures.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Location</h4>
            <p className="text-gray-400">123 Innovation Drive</p>
            <p className="text-gray-400">San Francisco, CA 94105</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Health First Ventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
