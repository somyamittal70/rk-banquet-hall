import { motion } from "framer-motion";

const team = [
  {
    name: "Rohit Malhotra",
    role: "Founder & Director",
    image:
      "https://i.pinimg.com/736x/8d/45/2b/8d452b1e6c5b0a8f3d1a2e0e9c3d1a2e.jpg",
  },
  {
    name: "Neha Sharma",
    role: "Event Planner",
    image:
      "https://i.pinimg.com/736x/3f/2a/1c/3f2a1c9e5b0a8f3d1a2e0e9c3d1a2e5f.jpg",
  },
  {
    name: "Arjun Mehta",
    role: "Head Chef",
    image:
      "https://i.pinimg.com/736x/5b/0a/8f/5b0a8f3d1a2e0e9c3d1a2e5f3f2a1c9e.jpg",
  },
  {
    name: "Pooja Verma",
    role: "Decoration Head",
    image:
      "https://i.pinimg.com/736x/1a/2e/0e/1a2e0e9c3d1a2e5f3f2a1c9e5b0a8f3d.jpg",
  },
];

function SparkleIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={16}
      height={16}
      {...props}
    >
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={14}
      height={14}
      {...props}
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.5h4.5V23h-4.5V8.5zM8.24 8.5h4.31v1.98h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.43 3.01 5.43 6.93V23h-4.5v-6.98c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.68 1.81-2.68 3.68V23h-4.5V8.5z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      width={14}
      height={14}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function MeetOurTeam() {
  return (
    <section className="relative bg-[#F5EDE0] py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Ambient decoration */}
      <div className="absolute -left-24 -top-24 w-72 h-72 rounded-full bg-[#D9C8A9]/20 blur-3xl pointer-events-none" />
      <div className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full bg-[#6B4423]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-px bg-[#D9C8A9]" />
            <SparkleIcon className="text-[#A06C3A]" />
            <div className="w-10 h-px bg-[#D9C8A9]" />
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#6B4423]"
            style={{ fontFamily: "'Marcellus SC', serif" }}
          >
            Meet Our Team
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-lg mx-auto px-4 sm:px-0">
            The dedicated people behind every celebration, bringing skill,
            care, and passion to your special day.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl border border-[#E8DAC5] px-5 py-7 sm:px-6 sm:py-8 text-center shadow-[0_15px_35px_-15px_rgba(107,68,35,0.15)] hover:border-[#D9C8A9] hover:shadow-[0_20px_45px_-15px_rgba(107,68,35,0.25)] duration-300"
            >
              {/* Photo */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-5">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#D9C8A9] group-hover:rotate-45 duration-700" />
                <div className="absolute inset-[6px] rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name & Role */}
              <h3
                className="text-base sm:text-lg text-[#3F2715]"
                style={{ fontFamily: "'Marcellus SC', serif" }}
              >
                {member.name}
              </h3>
              <p className="mt-1 text-[11px] sm:text-xs uppercase tracking-widest text-[#A06C3A]">
                {member.role}
              </p>

              {/* Social icons — reveal on hover, always visible on touch devices */}
              <div className="mt-4 sm:mt-5 flex items-center justify-center gap-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:-translate-y-1 sm:group-hover:translate-y-0 duration-300">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#F5EDE0] flex items-center justify-center hover:bg-[#6B4423] group/icon"
                >
                  <LinkedinIcon className="text-[#6B4423] group-hover/icon:text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#F5EDE0] flex items-center justify-center hover:bg-[#6B4423] group/icon"
                >
                  <InstagramIcon className="text-[#6B4423] group-hover/icon:text-white" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}