import Link from "next/link";
import Image from "next/image";
import {
  Trophy,
  Calendar,
  Users,
  ArrowRight,
  Medal,
  Target,
  Star,
} from "lucide-react";

const highlights = [
  {
    icon: Trophy,
    title: "15 Championship Titles",
    description: "Our teams have won 15 championships across all sports in the last decade.",
  },
  {
    icon: Medal,
    title: "200+ Student Athletes",
    description: "Over 200 dedicated student-athletes compete across 8 varsity sports programs.",
  },
  {
    icon: Target,
    title: "92% Graduation Rate",
    description: "Our athletes excel both on the field and in the classroom with outstanding records.",
  },
  {
    icon: Star,
    title: "World-Class Facilities",
    description: "Train and compete in modern, fully-equipped athletic facilities on our campus.",
  },
];

const featuredTeams = [
  { name: "Basketball", record: "18-4", status: "Conference Leaders", color: "from-orange-500 to-red-600" },
  { name: "Football", record: "9-2", status: "Playoff Bound", color: "from-green-500 to-emerald-700" },
  { name: "Cricket", record: "14-3", status: "Regional Champs", color: "from-blue-500 to-indigo-600" },
];

const recentNews = [
  {
    date: "Feb 10, 2026",
    title: "NNRG Basketball Clinches Conference Lead",
    excerpt: "With a dominant 78-62 victory, NNRG secures the top spot in the conference standings.",
  },
  {
    date: "Feb 8, 2026",
    title: "Track & Field Sets New College Record",
    excerpt: "Senior sprinter breaks the 100m college record at the Invitational meet.",
  },
  {
    date: "Feb 5, 2026",
    title: "Spring Sports Tryouts Announced",
    excerpt: "Tryout dates for cricket, kabaddi, volleyball, and swimming have been posted.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section with College Background */}
      <section className="relative overflow-hidden text-white" style={{ minHeight: "600px" }}>
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b9d243db-c24f-4561-af2c-7ae62438f5d8/CJG1-1770830673280.jpeg?width=8000&height=8000&resize=contain"
          alt="NNRG Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/75 to-[#1a1a2e]/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-400/20 px-4 py-1.5 text-sm font-medium text-amber-400 backdrop-blur-sm">
              <Trophy className="h-4 w-4" />
              2025-26 Season
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl drop-shadow-lg">
              Nalla Narasimha Reddy{" "}
              <span className="text-amber-400">Group of Institutions</span>
            </h1>
            <p className="mt-4 text-xl font-semibold text-amber-300 drop-shadow">NNRG Sports</p>
            <p className="mt-4 max-w-lg text-lg text-gray-200 drop-shadow">
              Welcome to NNRG Athletics. Experience the thrill of competition, the pride of our teams, and the spirit that unites our college community.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/teams"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3 font-semibold text-[#1a1a2e] transition-colors hover:bg-amber-300"
              >
                Explore Teams <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-100 bg-gray-50 p-6 text-center transition-shadow hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1a1a2e]">
                  <item.icon className="h-7 w-7 text-amber-400" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">Our Campus</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative h-72 overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b9d243db-c24f-4561-af2c-7ae62438f5d8/CLG3-1770830673279.jpeg?width=8000&height=8000&resize=contain"
                alt="NNRG Campus Gate"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-lg font-bold text-white drop-shadow">NNRG Main Entrance</p>
            </div>
            <div className="relative h-72 overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b9d243db-c24f-4561-af2c-7ae62438f5d8/CLG2-1770830673280.jpeg?width=8000&height=8000&resize=contain"
                alt="NNRG Engineering Building"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-lg font-bold text-white drop-shadow">School of Engineering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Teams */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Teams</h2>
              <p className="mt-2 text-gray-600">See how our NNRG teams are performing this season</p>
            </div>
            <Link href="/teams" className="hidden items-center gap-1 text-sm font-medium text-[#1a1a2e] hover:text-amber-600 sm:flex">
              All Teams <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTeams.map((team) => (
              <div key={team.name} className="overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl">
                <div className={`bg-gradient-to-r ${team.color} px-6 py-8 text-white`}>
                  <h3 className="text-2xl font-bold">{team.name}</h3>
                  <p className="mt-1 text-sm font-medium text-white/80">{team.status}</p>
                </div>
                <div className="flex items-center justify-between px-6 py-4">
                  <div>
                    <p className="text-sm text-gray-500">Season Record</p>
                    <p className="text-xl font-bold text-gray-900">{team.record}</p>
                  </div>
                  <Link href="/teams" className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200">
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
              <p className="mt-2 text-gray-600">Stay up to date with NNRG Athletics</p>
            </div>
            <Link href="/news" className="hidden items-center gap-1 text-sm font-medium text-[#1a1a2e] hover:text-amber-600 sm:flex">
              All News <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentNews.map((item) => (
              <article key={item.title} className="rounded-xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-lg">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-amber-600">{item.date}</p>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with background image */}
      <section className="relative py-20 text-white">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b9d243db-c24f-4561-af2c-7ae62438f5d8/CLG2-1770830673280.jpeg?width=8000&height=8000&resize=contain"
          alt="NNRG Campus"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1a2e]/85" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Ready to Join NNRG Sports?</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            Whether you want to compete, cheer, or simply support, there&apos;s a place for you in NNRG Athletics.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/about" className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3 font-semibold text-[#1a1a2e] transition-colors hover:bg-amber-300">
              <Users className="h-5 w-5" /> Contact Us
            </Link>
            <Link href="/schedule" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold transition-colors hover:bg-white/10">
              <Calendar className="h-5 w-5" /> Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
