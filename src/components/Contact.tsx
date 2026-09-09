import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import PulsatingBorder from "@/components/originkit/ui/pulsating-border";

const links = [
  {
    icon: <FaEnvelope size={18} />,
    label: "Email",
    value: "guruneshm1@gmail.com",
    href: "mailto:guruneshm1@gmail.com",
  },
  {
    icon: <FaPhone size={16} />,
    label: "Phone",
    value: "+91 9080230843",
    href: "tel:+919080230843",
  },
  {
    icon: <FaGithub size={18} />,
    label: "GitHub",
    value: "github.com/gurunesh30",
    href: "https://github.com/gurunesh30",
  },
  {
    icon: <SiLeetcode size={18} />,
    label: "LeetCode",
    value: "leetcode.com/gurunesh30",
    href: "https://leetcode.com/gurunesh30",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#111]">
      <div className="container-narrow">
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#767676] mb-6 block">
          Contact
        </span>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — headline */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-tight tracking-tight text-[#faf7f3]">
              Let's build<br />
              <span className="text-[#0000ee]">something</span><br />
              together.
            </h2>
            <p className="text-[16px] text-[#767676] leading-relaxed max-w-[360px]">
              Open to internships, full-time roles, freelance collabs, or just a good
              conversation about tech. Reach out — I reply fast.
            </p>

            <a
              href="mailto:guruneshm1@gmail.com"
              className="self-start inline-flex items-center gap-2 text-[15px] font-bold bg-[#0000ee] text-white px-6 py-3 rounded-full hover:bg-[#0024c3] transition-colors"
            >
              <FaEnvelope size={14} />
              Say Hello
            </a>
          </div>

          {/* Right — contact cards */}
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-[14px] bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#0000ee] transition-all duration-200"
              >
                <span className="w-9 h-9 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#faf7f3] group-hover:bg-[#0000ee] transition-colors">
                  {link.icon}
                </span>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wide font-semibold text-[#767676]">
                    {link.label}
                  </span>
                  <span className="text-[14px] font-medium text-[#faf7f3]">{link.value}</span>
                </div>
                <span className="ml-auto text-[#767676] group-hover:text-[#0000ee] text-lg transition-colors">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
