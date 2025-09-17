import { FaInstagram, FaXTwitter, FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa6";


const socials = [
  { href: "https://www.instagram.com/elielfilho.dev/",          Icon: FaInstagram,  label: "Instagram" },
  { href: "https://x.com/elielfilho_dev",                       Icon: FaXTwitter,   label: "X (Twitter)" },
  { href: "https://www.youtube.com/@elielfilhodev",             Icon: FaYoutube,    label: "YouTube" },
  { href: "https://github.com/elielfilhodev2",                  Icon: FaGithub,     label: "GitHub" },
  { href: "https://www.linkedin.com/in/eliel-filho-8083a3359/", Icon: FaLinkedin,   label: "LinkedIn" },
];

export default function SocialLinks({ className = "", size = 20 }) {
  return (
    <div className={`flex gap-3 ${className}`}>
      {socials.map(({ href, Icon, label }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
           className="transition-transform hover:scale-110">
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}
