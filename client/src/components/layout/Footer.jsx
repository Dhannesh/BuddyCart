import { IoIosCart } from "react-icons/io";

import { socialLinks, services, footerLinks } from "@/data/data";
export default function Footer() {
  return (
    <footer className="border-t bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-2">
            <a href="/" className="inline-flex items-center gap-2">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <IoIosCart className="size-5" />
              </span>

              <span className="text-xl font-bold tracking-tight">
                BuddyCart
              </span>
            </a>

            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              Discover quality products at great prices. Shop your favorites
              with a seamless and secure shopping experience.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold">{section.title}</h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service highlights */}
        <div className="mt-12 grid grid-cols-2 gap-6 border-y py-8 md:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon className="mt-1 size-5 shrink-0 text-muted-foreground" />

              <div>
                <h4 className="text-sm font-medium">{title}</h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BuddyCart. All rights reserved.
          </p>

          <p className="text-xs text-muted-foreground">
            Designed for a better shopping experience.
          </p>
        </div>
      </div>
    </footer>
  );
}
