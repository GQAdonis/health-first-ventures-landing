"use client";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Health First Ventures</h3>
            <p className="font-sans text-primary-200">Building the future of healthcare</p>
          </div>
          <div>
            <h4 className="text-lg font-display font-bold mb-4">Contact</h4>
            <p className="font-sans text-primary-200">info@healthfirstventures.com</p>
            <p className="font-sans text-primary-200">+1 (555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-lg font-display font-bold mb-4">Location</h4>
            <p className="font-sans text-primary-200">123 Innovation Drive</p>
            <p className="font-sans text-primary-200">San Francisco, CA 94105</p>
          </div>
        </div>
        <div className="border-t border-primary-800 mt-8 pt-8 text-center text-primary-200">
          <p className="font-sans">&copy; {new Date().getFullYear()} Health First Ventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
