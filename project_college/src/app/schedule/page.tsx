import Image from "next/image";
import { Clock, MapPin } from "lucide-react";

const events = [
  { date: "Feb 12", day: "Thu", sport: "Basketball", opponent: "vs. JNTU", time: "7:00 PM", location: "NNRG Sports Arena", home: true },
  { date: "Feb 14", day: "Sat", sport: "Cricket", opponent: "vs. CBIT", time: "10:00 AM", location: "NNRG Cricket Ground", home: true },
  { date: "Feb 15", day: "Sun", sport: "Football", opponent: "@ GRIET", time: "1:00 PM", location: "GRIET Ground", home: false },
  { date: "Feb 18", day: "Wed", sport: "Kabaddi", opponent: "Inter-College Meet", time: "10:00 AM", location: "NNRG Indoor Arena", home: true },
  { date: "Feb 20", day: "Fri", sport: "Basketball", opponent: "@ MVSR", time: "6:00 PM", location: "MVSR Court", home: false },
  { date: "Feb 22", day: "Sun", sport: "Badminton", opponent: "vs. VNR VJIET", time: "3:00 PM", location: "NNRG Badminton Courts", home: true },
  { date: "Feb 25", day: "Wed", sport: "Table Tennis", opponent: "vs. Muffakham Jah", time: "4:00 PM", location: "NNRG Indoor Hall", home: true },
  { date: "Feb 27", day: "Fri", sport: "Track & Field", opponent: "University Championship", time: "9:00 AM", location: "NNRG Track Complex", home: true },
  { date: "Mar 1", day: "Sun", sport: "Volleyball", opponent: "@ BVRIT", time: "5:00 PM", location: "BVRIT Gym", home: false },
  { date: "Mar 4", day: "Wed", sport: "Basketball", opponent: "vs. Vasavi", time: "7:00 PM", location: "NNRG Sports Arena", home: true },
  { date: "Mar 7", day: "Sat", sport: "Cricket", opponent: "@ Osmania University", time: "10:00 AM", location: "OU Ground", home: false },
  { date: "Mar 10", day: "Tue", sport: "Football", opponent: "vs. Anurag University", time: "4:00 PM", location: "NNRG Football Ground", home: true },
];

const sportColors: Record<string, string> = {
  Basketball: "bg-orange-100 text-orange-700",
  Cricket: "bg-green-100 text-green-700",
  Football: "bg-blue-100 text-blue-700",
  Kabaddi: "bg-red-100 text-red-700",
  Badminton: "bg-teal-100 text-teal-700",
  "Table Tennis": "bg-cyan-100 text-cyan-700",
  "Track & Field": "bg-purple-100 text-purple-700",
  Volleyball: "bg-amber-100 text-amber-700",
};

export default function SchedulePage() {
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
          <h1 className="text-4xl font-extrabold tracking-tight">Schedule & Events</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Upcoming games, meets, and events for all NNRG sports programs.
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {events.map((event, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-[#1a1a2e] text-white">
                    <span className="text-xs font-medium uppercase">{event.day}</span>
                    <span className="text-lg font-bold">{event.date.split(" ")[1]}</span>
                    <span className="text-[10px] text-gray-400">{event.date.split(" ")[0]}</span>
                  </div>

                  <div>
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${sportColors[event.sport] || "bg-gray-100 text-gray-700"}`}>
                        {event.sport}
                      </span>
                      {event.home && (
                        <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">
                          Home
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{event.opponent}</h3>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 sm:gap-6">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> {event.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
