import Image from "next/image";

const news = [
  {
    date: "Feb 10, 2026",
    category: "Basketball",
    title: "NNRG Basketball Clinches Conference Lead",
    content:
      "With a dominant 78-62 victory over JNTU, NNRG has secured the top spot in the inter-college standings with an 18-4 overall record. Guard Jamal Carter led the way with 24 points. The team now looks ahead to a crucial away matchup against MVSR on Friday.",
  },
  {
    date: "Feb 8, 2026",
    category: "Track & Field",
    title: "Track & Field Sets New College Record",
    content:
      "Senior sprinter Maya broke the women's 100m college record at the University Invitational meet, clocking an incredible 11.32 seconds. The previous record of 11.47 seconds had stood since 2019. Coach David Okafor praised the entire team's performance.",
  },
  {
    date: "Feb 5, 2026",
    category: "General",
    title: "Spring Sports Tryouts Announced",
    content:
      "NNRG Athletics has announced tryout dates for all spring sports programs. Cricket tryouts begin February 20, kabaddi on February 22, badminton on February 18, and swimming tryouts on February 25. All interested student-athletes must complete eligibility paperwork.",
  },
  {
    date: "Feb 3, 2026",
    category: "Cricket",
    title: "Cricket Program Signs 12 New Players",
    content:
      "Coach Rajesh Kumar and the NNRG Cricket program have announced the signing of 12 new players for the upcoming season. The class includes 4 fast bowlers, 3 all-rounders, 2 spinners, 2 batsmen, and a wicketkeeper.",
  },
  {
    date: "Jan 30, 2026",
    category: "Football",
    title: "Football Earns Regional Championship Title",
    content:
      "The NNRG Football team captured its first regional championship in program history with a thrilling 2-1 overtime victory. The golden goal in the 103rd minute sent NNRG fans into a frenzy.",
  },
  {
    date: "Jan 28, 2026",
    category: "Volleyball",
    title: "Volleyball Star Named Conference Player of the Year",
    content:
      "Senior spiker Rachel has been named Conference Player of the Year after leading NNRG to a 20-5 record. She averaged 4.2 kills per set and posted a .350 hitting percentage.",
  },
  {
    date: "Jan 25, 2026",
    category: "Badminton",
    title: "NNRG Shuttlers Qualify for Nationals",
    content:
      "Three NNRG badminton players have qualified for the National Championship. Junior singles player Priya, senior doubles pair Ravi and Kiran all earned qualifying spots at the university championships.",
  },
  {
    date: "Jan 22, 2026",
    category: "General",
    title: "New Sports Training Center Opens at NNRG",
    content:
      "NNRG officially opened its brand-new, state-of-the-art Sports Training Center this week. The 15,000-square-foot facility features modern gym equipment, recovery zones, and dedicated sports medicine offices.",
  },
];

const categoryColors: Record<string, string> = {
  Basketball: "bg-orange-100 text-orange-700",
  Cricket: "bg-green-100 text-green-700",
  Football: "bg-blue-100 text-blue-700",
  "Track & Field": "bg-purple-100 text-purple-700",
  Badminton: "bg-teal-100 text-teal-700",
  Volleyball: "bg-amber-100 text-amber-700",
  General: "bg-gray-100 text-gray-700",
};

export default function NewsPage() {
  return (
    <div>
      {/* Header with background */}
      <section className="relative py-16 text-white">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/b9d243db-c24f-4561-af2c-7ae62438f5d8/CLG2-1770830673280.jpeg?width=8000&height=8000&resize=contain"
          alt="NNRG Campus"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1a2e]/85" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight">News & Updates</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            The latest stories, results, and announcements from NNRG Athletics.
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {news.map((item) => (
              <article key={item.title} className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColors[item.category] || "bg-gray-100 text-gray-700"}`}>
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
                <h2 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h2>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
