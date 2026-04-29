import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 border-t-4 border-[#1a6b2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & About */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-[#1a6b2e] bg-white px-2 py-1 rounded">Kirana</span>
              <span className="text-[#f9c740]">Cart</span>
            </h2>
            <p className="text-sm mb-4">
              India's fastest growing online supermarket. Fresh groceries, vegetables, and daily needs delivered in 10 minutes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/vegetables" className="hover:text-[#f9c740] transition">Fresh Vegetables</Link></li>
              <li><Link href="/category/fruits" className="hover:text-[#f9c740] transition">Fresh Fruits</Link></li>
              <li><Link href="/category/dairy" className="hover:text-[#f9c740] transition">Dairy & Eggs</Link></li>
              <li><Link href="/category/snacks" className="hover:text-[#f9c740] transition">Snacks & Beverages</Link></li>
              <li><Link href="/category/household" className="hover:text-[#f9c740] transition">Household Needs</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-[#f9c740] transition">About Us</Link></li>
              <li><Link href="/terms" className="hover:text-[#f9c740] transition">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-[#f9c740] transition">Privacy Policy</Link></li>
              <li><Link href="/faq" className="hover:text-[#f9c740] transition">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-[#f9c740] transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#f9c740] mt-0.5" size={18} />
                <span>123, Kirana Street, Andheri West, Mumbai, Maharashtra 400053</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#f9c740]" size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#f9c740]" size={18} />
                <span>support@kiranacart.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} KiranaCart E-commerce Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
