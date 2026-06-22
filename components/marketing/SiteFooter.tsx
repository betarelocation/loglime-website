import type { SVGProps } from "react";
import { Logo } from "@/components/ui/Logo";

const columns = [
  {
    title: "Company",
    links: [
      ["About Loglime", "/contact"],
      ["Restaurant apps", "/products/restaurant"],
      ["Case studies", "/#customers-story"],
      ["Contact us", "/contact"]
    ]
  },
  {
    title: "Support",
    links: [
      ["FAQ", "/#faq"],
      ["Book a demo", "/demo"],
      ["Pricing", "/pricing"],
      ["Launch guide", "/demo"]
    ]
  },
  {
    title: "Legal Policies",
    links: [
      ["Terms & Conditions", "/terms"],
      ["Privacy", "/privacy"],
      ["Security", "/security"],
      ["Refund policy", "/terms"]
    ]
  }
];

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.1 8.4V6.7c0-.8.6-1 1.1-1h1.7V2.8c-.3 0-1.3-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5v1.2H7.1v3.3H10v8.5h3.5v-8.5h2.9l.5-3.3h-3Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="16.9" cy="7.1" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.5 7.3c-.2-.8-.8-1.4-1.6-1.6C18.5 5.3 12 5.3 12 5.3s-6.5 0-7.9.4c-.8.2-1.4.8-1.6 1.6-.4 1.4-.4 4.7-.4 4.7s0 3.3.4 4.7c.2.8.8 1.4 1.6 1.6 1.4.4 7.9.4 7.9.4s6.5 0 7.9-.4c.8-.2 1.4-.8 1.6-1.6.4-1.4.4-4.7.4-4.7s0-3.3-.4-4.7ZM10 14.9V9.1l5.2 2.9L10 14.9Z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5.2 8.9h3.1v10.2H5.2V8.9Zm1.6-5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6Zm4.2 5h3v1.4h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5v5.5H18v-4.9c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v5H11V8.9Z" />
    </svg>
  );
}

const socials = [
  { label: "Facebook", icon: FacebookIcon, href: "/contact" },
  { label: "Instagram", icon: InstagramIcon, href: "/contact" },
  { label: "YouTube", icon: YoutubeIcon, href: "https://www.youtube.com/@Loglime" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "/contact" }
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>Apps for restaurants. Digital menus, online ordering, bookings, loyalty and customer updates in branded app packages.</p>
            <div className="footer-socials" aria-label="Social links">
              {socials.map((social) => (
                <a aria-label={social.label} href={social.href} key={social.label} title={social.label}>
                  <social.icon aria-hidden="true" focusable="false" />
                </a>
              ))}
            </div>
          </div>
          {columns.map((column) => (
            <div className="footer-column" key={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>Copyright &copy; Loglime - smart restaurant apps for modern businesses.</span>
          <span>Customer-facing app packages for restaurants.</span>
        </div>
      </div>
    </footer>
  );
}
