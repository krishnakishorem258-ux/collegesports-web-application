import Image from "next/image";
import { Users, MapPin, Award } from "lucide-react";

const teams = [
  {
    name: "Basketball",
    coach: "Coach Marcus Williams",
    players: 15,
    record: "18-4",
    description: "Dominating the conference with an aggressive offensive style and lock-down defense.",
    color: "from-orange-500 to-red-600",
    venue: "NNRG Sports Arena",
    achievements: ["3x Conference Champions", "Final Four 2024"],
  },
  {
    name: "Cricket",
    coach: "Coach Rajesh Kumar",
    players: 22,
    record: "14-3",
    description: "A powerhouse cricket program building on a tradition of excellence.",
    color: "from-green-500 to-emerald-700",
    venue: "NNRG Cricket Ground",
    achievements: ["Regional Champions 2025", "Inter-University Winners"],
  },
  {
    name: "Football",
    coach: "Coach James Rodriguez",
    players: 24,
    record: "12-3-1",
    description: "Technical, fast-paced football that has made NNRG a regional force.",
    color: "from-blue-500 to-indigo-600",
    venue: "NNRG Football Ground",
    achievements: ["State Champions 2025", "5 All-Stars"],
  },
  {
    name: "Track & Field",
    coach: "Coach David Okafor",
    players: 40,
    record: "Multiple Top 3 Finishes",
    description: "Developing elite sprinters, distance runners, and field athletes year after year.",
    color: "from-purple-500 to-violet-700",
    venue: "NNRG Track Complex",
    achievements: ["12 College Records", "National Qualifier 2025"],
  },
  {
    name: "Volleyball",
    coach: "Coach Lisa Nguyen",
    players: 14,
    record: "20-5",
    description: "High-energy volleyball with powerful attacks and disciplined blocking.",
    color: "from-amber-500 to-orange-600",
    venue: "NNRG Gymnasium",
    achievements: ["Conference Champions 2025", "3 All-Stars"],
  },
  {
    name: "Kabaddi",
    coach: "Coach Suresh Reddy",
    players: 12,
    record: "10-2",
    description: "Traditional sport played with modern tactics and incredible athleticism.",
    color: "from-red-500 to-rose-700",
    venue: "NNRG Indoor Arena",
    achievements: ["State Runner-Up 2025", "Inter-College Champions"],
  },
  {
    name: "Badminton",
    coach: "Coach Priya Sharma",
    players: 10,
    record: "15-3",
    description: "Consistent excellence in both singles and doubles competition.",
    color: "from-teal-500 to-green-600",
    venue: "NNRG Badminton Courts",
    achievements: ["5 University Titles", "National Doubles Finalist"],
  },
  {
    name: "Table Tennis",
    coach: "Coach Anand Rao",
    players: 8,
    record: "12-2",
    description: "Quick reflexes and strategic play define our table tennis program.",
    color: "from-cyan-500 to-blue-600",
    venue: "NNRG Indoor Sports Hall",
    achievements: ["University Champions 2025", "State Semi-Finalist"],
  },
];

export default function TeamsPage() {
  return (
    <div>
      {/* Header with background */}
      <section className="relative py-16 text-white">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b9d243db-c24f-4561-af2c-7ae62438f5d8/CLG3-1770830673279.jpeg?width=8000&height=8000&resize=contain"
          alt="NNRG Campus"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1a2e]/85" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight">Our Teams</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            NNRG fields 8 competitive varsity sports programs. Explore each team below.
          </p>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {teams.map((team) => (
              <div key={team.name} className="overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl">
                <div className={`bg-gradient-to-r ${team.color} px-6 py-6 text-white`}>
                  <h2 className="text-2xl font-bold">{team.name}</h2>
                  <p className="mt-1 text-sm text-white/80">{team.coach}</p>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-gray-600">{team.description}</p>
                  <div className="mb-4 grid grid-cols-3 gap-4 text-center">
                    <div className="rounded-lg bg-gray-50 p-3">
                      <p className="text-xs text-gray-500">Record</p>
                      <p className="font-bold text-gray-900">{team.record}</p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3">
                      <p className="text-xs text-gray-500">Roster</p>
                      <p className="font-bold text-gray-900">{team.players}</p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3">
                      <p className="text-xs text-gray-500">Venue</p>
                      <p className="truncate font-bold text-gray-900 text-xs">{team.venue}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {team.achievements.map((a) => (
                      <span key={a} className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                        <Award className="h-3 w-3" /> {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
