import { Link, useLocation } from "react-router-dom";
import { siteContent } from "@/data/content";
import lincstemLogo from "@/assets/lincstem-logo.png";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const aboutLinks = [
  { label: "Our Work", path: "/about/our-work" },
  { label: "Our History", path: "/about/our-history" },
  { label: "Our Team", path: "/about/our-team" },
];

const materialLinks = siteContent.grades.map((g) => ({
  label: `Grade ${g.grade}`,
  path: `/grade/${g.grade}`,
}));

const outreachLinks = siteContent.outreachCategories.map((c) => ({
  label: c.title,
  path: `/community-outreach/${c.id}`,
}));

const navLinks = [
  { label: "Home", path: "/" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];

const footerLinks = [
  { label: "Home", path: "/" },
  ...aboutLinks,
  { label: "Our Materials", path: "/materials" },
  ...materialLinks,
  { label: "Community Outreach", path: "/community-outreach" },
  ...outreachLinks,
  ...navLinks.slice(1),
];

function isAboutActive(pathname: string) {
  return aboutLinks.some((l) => pathname.startsWith(l.path));
}

function isMaterialsActive(pathname: string) {
  return pathname.startsWith("/materials") || pathname.startsWith("/grade/");
}

function isOutreachActive(pathname: string) {
  return pathname.startsWith("/community-outreach");
}

function NavDropdown({
  label,
  links,
  isActive,
  isLinkActive,
}: {
  label: string;
  links: { label: string; path: string }[];
  isActive: boolean;
  isLinkActive: (path: string) => boolean;
}) {
  return (
    <div className="relative group">
      <button
        type="button"
        className={cn(
          "flex items-center gap-1 py-1 text-sm font-medium transition-colors",
          isActive ? "text-primary" : "text-foreground/80 hover:text-primary",
        )}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200">
        <div className="min-w-[11rem] rounded-md border border-border/70 bg-card py-1 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "block px-4 py-2.5 text-sm transition-colors hover:bg-muted hover:text-primary",
                isLinkActive(link.path) && "bg-muted/60 text-primary font-medium",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavDropdown({
  label,
  links,
  isOpen,
  onToggle,
  isActive,
  onNavigate,
  isLinkActive,
}: {
  label: string;
  links: { label: string; path: string }[];
  isOpen: boolean;
  onToggle: () => void;
  isActive: boolean;
  onNavigate: () => void;
  isLinkActive: (path: string) => boolean;
}) {
  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "flex w-full items-center justify-between px-3 py-2.5 text-sm font-medium",
          isActive ? "text-primary" : "text-foreground/80",
        )}
      >
        {label}
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="ml-3 border-l border-border pl-3 mb-1">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={onNavigate}
              className={cn(
                "block px-3 py-2 text-sm transition-colors",
                isLinkActive(link.path)
                  ? "text-primary font-medium"
                  : "text-foreground/70 hover:text-primary",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [materialsOpen, setMaterialsOpen] = useState(false);
  const [outreachOpen, setOutreachOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    cn(
      "relative py-1 text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100",
      isActive(path) ? "text-primary after:scale-x-100" : "text-foreground/80 hover:text-primary",
    );

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-card/90 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between gap-8">
          <Link to="/" className="shrink-0 flex items-center">
            <img
              src={lincstemLogo}
              alt={siteContent.schoolName}
              className="h-10 w-auto md:h-12"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link to="/" className={navLinkClass("/")}>
              Home
            </Link>

            <NavDropdown
              label="About"
              links={aboutLinks}
              isActive={isAboutActive(location.pathname)}
              isLinkActive={isActive}
            />

            <NavDropdown
              label="Our Materials"
              links={[{ label: "All Materials", path: "/materials" }, ...materialLinks]}
              isActive={isMaterialsActive(location.pathname)}
              isLinkActive={(path) =>
                path === "/materials"
                  ? location.pathname === "/materials"
                  : isActive(path)
              }
            />

            <NavDropdown
              label="Community Outreach"
              links={[
                { label: "Overview", path: "/community-outreach" },
                ...outreachLinks,
              ]}
              isActive={isOutreachActive(location.pathname)}
              isLinkActive={(path) =>
                path === "/community-outreach"
                  ? location.pathname === "/community-outreach"
                  : isActive(path)
              }
            />

            {navLinks.slice(1).map((link) => (
              <Link key={link.path} to={link.path} className={navLinkClass(link.path)}>
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden border-t border-border/70 bg-card px-4 pb-4">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className={cn("block px-3 py-2.5 text-sm font-medium", navLinkClass("/"))}
            >
              Home
            </Link>

            <MobileNavDropdown
              label="About"
              links={aboutLinks}
              isOpen={aboutOpen}
              onToggle={() => setAboutOpen(!aboutOpen)}
              isActive={isAboutActive(location.pathname)}
              onNavigate={() => setMobileOpen(false)}
              isLinkActive={isActive}
            />

            <MobileNavDropdown
              label="Our Materials"
              links={[{ label: "All Materials", path: "/materials" }, ...materialLinks]}
              isOpen={materialsOpen}
              onToggle={() => setMaterialsOpen(!materialsOpen)}
              isActive={isMaterialsActive(location.pathname)}
              onNavigate={() => setMobileOpen(false)}
              isLinkActive={isActive}
            />

            <MobileNavDropdown
              label="Community Outreach"
              links={[
                { label: "Overview", path: "/community-outreach" },
                ...outreachLinks,
              ]}
              isOpen={outreachOpen}
              onToggle={() => setOutreachOpen(!outreachOpen)}
              isActive={isOutreachActive(location.pathname)}
              onNavigate={() => setMobileOpen(false)}
              isLinkActive={isActive}
            />

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={cn("block px-3 py-2.5 text-sm font-medium", navLinkClass(link.path))}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1 flex flex-col">{children}</main>

      <footer className="border-t border-primary/20 bg-[hsl(0,30%,28%)] text-primary-foreground">
        <div className="container py-10 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-semibold mb-2">{siteContent.schoolName}</h3>
            <p className="text-sm opacity-80">{siteContent.fullTitle}</p>
            <p className="text-sm opacity-80 mt-1">{siteContent.tagline}</p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm opacity-80">
              {footerLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="hover:opacity-100 transition-opacity">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-2">Contact</h4>
            <p className="text-sm opacity-80">{siteContent.contactEmail}</p>
            {siteContent.contactPhone && (
              <p className="text-sm opacity-80">{siteContent.contactPhone}</p>
            )}
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 py-4">
          <p className="container text-center text-xs opacity-60">
            © {new Date().getFullYear()} {siteContent.schoolName}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
