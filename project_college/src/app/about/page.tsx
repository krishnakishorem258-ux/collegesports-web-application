import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Trophy, Users, GraduationCap, Heart, Calendar, Star } from "lucide-react";

const values = [
  {
    icon: Trophy,
    title: "Competitive Excellence",
    description: "We strive for the highest level of athletic achievement across all of our programs.",
  },
  {
    icon: GraduationCap,
    title: "Academic Success",
    description: "Student-athletes are students first. We maintain a 92% graduation rate and support academic growth.",
  },
  {
    icon: Users,
    title: "Teamwork & Character",
    description: "We build leaders who embody integrity, discipline, and respect both on and off the field.",
  },
  {
    icon: Heart,
    title: "Community Spirit",
    description: "NNRG Athletics brings our college together and strengthens bonds within the wider community.",
  },
];

const staff = [
  { name: "Dr. Nalla Narasimha Reddy", role: "Chairman", email: "chairman@nnrg.edu.in" },
  { name: "Dr. Ramesh Kumar", role: "Sports Director", email: "sports@nnrg.edu.in" },
  { name: "Coach Rajesh Kumar", role: "Head Cricket Coach", email: "cricket@nnrg.edu.in" },
  { name: "Coach Marcus Williams", role: "Head Basketball Coach", email: "basketball@nnrg.edu.in" },
  { name: "Coach Suresh Reddy", role: "Head Kabaddi Coach", email: "kabaddi@nnrg.edu.in" },
  { name: "Dr. Priya Sharma", role: "Head Athletic Trainer", email: "trainer@nnrg.edu.in" },
];

const events = [
  { year: "2025", items: [
    { name: "International Day of Yoga", date: "21st June 2025", category: "Wellness" },
    { name: "TARA -25", date: "21st & 22nd Feb 2025", category: "Cultural" },
  ]},
  { year: "2024", items: [
    { name: "Independence Day", date: "15th Aug 2024", category: "National" },
    { name: "Tara - 2Day Cultural Fest", date: "22nd & 23rd March 2024", category: "Cultural" },
    { name: "NNRG Alumni Meet 2024", date: "27th Jan 2024", category: "Alumni" },
  ]},
  { year: "2023", items: [
    { name: "Independence Day", date: "15th Aug 2023", category: "National" },
    { name: "Raaga - 2Day Cultural Fest '23", date: "10th & 11th March 2023", category: "Cultural" },
    { name: "Republic Day", date: "26th Jan 2023", category: "National" },
  ]},
  { year: "2022", items: [
    { name: "AWS Certified Cloud Practitioner", date: "19th Sep – 1st Oct 2022", category: "Technical" },
    { name: "ART AND LITERARY EVENTS (Creative Writing, Elocution, Best out of Waste & Calligraphy)", date: "22nd July 2022", category: "Literary" },
    { name: "International Day of Yoga", date: "21st June 2022", category: "Wellness" },
    { name: 'The 3-Day National Level Technical Symposium "Tech Samprathi-2k22" and "Pharmasamprathi-2k22"', date: "7th, 8th & 9th June 2022", category: "Technical" },
    { name: "INTERNAL HACKATHON for SIH2022", date: "26th March 2022", category: "Technical" },
  ]},
  { year: "2020", items: [
    { name: '3rd National Conference On "Convergence of Emerging Technologies In Computer Science & Engineering (CETCSE-2K20)" — Organized by CSE Department', date: "2020", category: "Conference" },
    { name: "INTERNAL HACKATHON for SIH2020", date: "30th Jan 2020", category: "Technical" },
  ]},
  { year: "2019", items: [
    { name: "I B.Tech Induction Program Inaugural (2019-20)", date: "3rd August 2019", category: "Academic" },
    { name: 'Nalla Narasimha Reddy Education Society\'s Group of Institutions "Decennial Celebrations (2009-2019)"', date: "8th – 9th March 2019", category: "Milestone" },
    { name: '2nd National Conference On "Convergence of Emerging Technologies In Computer Science & Engineering (CETCSE-2K19)" — Organized by CSE Department', date: "2019", category: "Conference" },
    { name: '2nd National Conference on "Recent Advances in Electronics & Communication Engineering (RAECE-2K19)" — Organized by Department of ECE', date: "2019", category: "Conference" },
    { name: '3rd National Conference on "Recent Trends, Innovations in Civil Engineering and Urban Infrastructure (RTICEUI-2K19)" — Organized by Department of CIVIL', date: "2019", category: "Conference" },
  ]},
];

const categoryColors: Record<string, string> = {
  Wellness: "bg-green-100 text-green-700",
  Cultural: "bg-purple-100 text-purple-700",
  National: "bg-orange-100 text-orange-700",
  Alumni: "bg-blue-100 text-blue-700",
  Technical: "bg-cyan-100 text-cyan-700",
  Literary: "bg-pink-100 text-pink-700",
  Conference: "bg-indigo-100 text-indigo-700",
  Academic: "bg-yellow-100 text-yellow-700",
  Milestone: "bg-amber-100 text-amber-700",
};

export default function AboutPage() {
  return (
    <div>
      {/* Header with background */}
      <section className="relative py-16 text-white">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b9d243db-c24f-4561-af2c-7ae62438f5d8/CJG1-1770830673280.jpeg?width=8000&height=8000&resize=contain"
          alt="NNRG Campus"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1a2e]/85" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight">About NNRG Athletics</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Learn about our mission, values, events history, staff, and how to get in touch.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Nalla Narasimha Reddy Group of Institutions (NNRG) is committed to fostering an environment where student-athletes
              can achieve their full potential both academically and athletically. We have developed champions on the field and
              leaders in the community, building a legacy of excellence that defines our institution.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">Our Values</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1a1a2e]">
                  <v.icon className="h-7 w-7 text-amber-400" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{v.title}</h3>
                <p className="text-sm text-gray-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Milestones Timeline */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Events & Milestones</h2>
            <p className="mt-3 text-gray-500">A proud history of events, celebrations, conferences, and achievements at NNRG</p>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-gradient-to-b from-amber-400 via-[#1a1a2e] to-amber-400 md:left-1/2 md:block" />

            {events.map((yearGroup, yi) => (
              <div key={yearGroup.year} className="mb-12">
                {/* Year badge */}
                <div className="relative mb-8 flex justify-center">
                  <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-[#1a1a2e] px-6 py-2 text-lg font-bold text-amber-400 shadow-lg">
                    <Star className="h-5 w-5" />
                    {yearGroup.year}
                  </span>
                </div>

                {yearGroup.items.map((event, ei) => {
                  const isLeft = (yi + ei) % 2 === 0;
                  return (
                    <div key={event.name + event.date} className="relative mb-6 flex flex-col md:flex-row md:items-start">
                      {/* Left content (desktop) */}
                      <div className={`hidden w-1/2 md:block ${isLeft ? "pr-12 text-right" : ""}`}>
                        {isLeft && (
                          <div className="ml-auto max-w-md rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                            <div className="mb-2 flex items-center justify-end gap-2">
                              <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColors[event.category] || "bg-gray-100 text-gray-600"}`}>
                                {event.category}
                              </span>
                            </div>
                            <h4 className="font-bold text-gray-900">{event.name}</h4>
                            <div className="mt-2 flex items-center justify-end gap-1.5 text-sm text-gray-500">
                              <Calendar className="h-3.5 w-3.5" />
                              {event.date}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Center dot */}
                      <div className="absolute left-2.5 hidden h-3.5 w-3.5 rounded-full border-2 border-white bg-amber-400 shadow md:left-1/2 md:block md:-translate-x-1/2" style={{ top: "1.25rem" }} />

                      {/* Right content (desktop) */}
                      <div className={`hidden w-1/2 md:block ${!isLeft ? "pl-12" : ""}`}>
                        {!isLeft && (
                          <div className="max-w-md rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                            <div className="mb-2 flex items-center gap-2">
                              <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColors[event.category] || "bg-gray-100 text-gray-600"}`}>
                                {event.category}
                              </span>
                            </div>
                            <h4 className="font-bold text-gray-900">{event.name}</h4>
                            <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
                              <Calendar className="h-3.5 w-3.5" />
                              {event.date}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Mobile layout */}
                      <div className="ml-10 block md:hidden">
                        <div className="absolute left-2.5 top-5 h-3.5 w-3.5 rounded-full border-2 border-white bg-amber-400 shadow md:hidden" />
                        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                          <div className="mb-2 flex items-center gap-2">
                            <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColors[event.category] || "bg-gray-100 text-gray-600"}`}>
                              {event.category}
                            </span>
                          </div>
                          <h4 className="font-bold text-gray-900 text-sm">{event.name}</h4>
                          <div className="mt-1.5 flex items-center gap-1.5 text-xs text-gray-500">
                            <Calendar className="h-3 w-3" />
                            {event.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">Athletics Staff</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((s) => (
              <div key={s.name} className="rounded-xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-md">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1a2e] text-sm font-bold text-amber-400">
                  {s.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-bold text-gray-900">{s.name}</h3>
                <p className="text-sm text-gray-500">{s.role}</p>
                <a href={`mailto:${s.email}`} className="mt-2 inline-block text-sm text-amber-600 hover:underline">
                  {s.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">Contact Us</h2>
          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
            <div className="rounded-xl bg-gray-50 p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-bold text-gray-900">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-amber-500" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-sm text-gray-600">Nalla Narasimha Reddy Group of Institutions<br />Hyderabad, Telangana, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-amber-500" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-sm text-gray-600">+91 40 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-amber-500" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">sports@nnrg.edu.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-amber-500" />
                  <div>
                    <p className="font-medium text-gray-900">Office Hours</p>
                    <p className="text-sm text-gray-600">Mon-Fri: 9:00 AM - 5:00 PM<br />Sat: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gray-50 p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-bold text-gray-900">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Message</label>
                  <textarea rows={4} className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400" placeholder="Your message..." />
                </div>
                <button type="submit" className="w-full rounded-lg bg-[#1a1a2e] px-6 py-2.5 font-semibold text-white transition-colors hover:bg-[#16213e]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
