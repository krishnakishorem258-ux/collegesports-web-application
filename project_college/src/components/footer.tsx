import { Trophy } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2 text-lg font-bold">
              <Trophy className="h-6 w-6 text-amber-400" />
              NNRG Sports
            </div>
            <p className="text-sm text-gray-400">
              Nalla Narasimha Reddy Group of Institutions. Inspiring excellence in sports and academics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-400">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/teams" className="hover:text-white">Teams</Link></li>
              <li><Link href="/schedule" className="hover:text-white">Schedule</Link></li>
              <li><Link href="/news" className="hover:text-white">News</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-400">Sports</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Basketball</li>
              <li>Cricket</li>
              <li>Football</li>
              <li>Volleyball</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-400">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Hyderabad, Telangana</li>
              <li>India</li>
              <li>sports@nnrg.edu.in</li>
              <li>+91 40 1234 5678</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} NNRG - Nalla Narasimha Reddy Group of Institutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
