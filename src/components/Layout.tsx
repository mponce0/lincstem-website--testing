import { Link, useLocation } from "react-router-dom";
import { siteContent } from "@/data/content";
import lincstemLogo from "@/assets/lincstem-logo.png";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const aboutLinks = [
  { label: "Our Team", path: "/about/our-team" },
  { label: "Our History", path: "/about/our-history" },
  { label: "Our Work", path: "/about/our-work" },
  { label: "Contact", path: "/contact" },
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
  { label: "In the Media", path: "/news" },
  //{ label: "Contact", path: "/contact" },
];

const outreachNavLabel = "Research & Engagement";

const footerLinks = [
  { label: "Home", path: "/" },
  //...aboutLinks,
  { label: "Our Materials", path: "/materials" },
  //...materialLinks,
  { label: "Research and Engagement", path: "/community-outreach" },
  //...outreachLinks,
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
  onNavigate,
}: {
  label: string;
  links: { label: string; path: string }[];
  isActive: boolean;
  isLinkActive: (path: string) => boolean;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={cn(
          "flex items-center gap-1 whitespace-nowrap py-1 text-sm xl:text-base font-medium transition-colors",
          isActive
            ? "text-primary-foreground"
            : "text-primary-foreground/80 hover:text-primary-foreground",
        )}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
      </button>
      <div
        className={cn(
          "absolute left-0 top-full pt-2 transition-all duration-200",
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-1 pointer-events-none",
        )}
      >
        <div className="min-w-[11rem] rounded-md border border-border/70 bg-card text-primary py-1 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => {
                setOpen(false);
                onNavigate();
              }}
              className={cn(
                "block px-4 py-2.5 text-sm text-primary/80 transition-colors hover:bg-muted hover:text-[hsl(var(--hero-to))]",
                isLinkActive(link.path) && "bg-muted/60 text-[hsl(var(--hero-to))] font-medium",
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

  useEffect(() => {
    setMobileOpen(false);
    setAboutOpen(false);
    setMaterialsOpen(false);
    setOutreachOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const closeMobileNav = () => {
    setMobileOpen(false);
    setAboutOpen(false);
    setMaterialsOpen(false);
    setOutreachOpen(false);
  };

  const navLinkClass = (path: string) =>
    cn(
      "relative whitespace-nowrap py-1 text-sm xl:text-base font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary-foreground after:transition-transform hover:after:scale-x-100",
      isActive(path)
        ? "text-primary-foreground after:scale-x-100"
        : "text-primary-foreground/80 hover:text-primary-foreground",
    );

  // The mobile panel drops out of the red header onto a light surface.
  const mobileNavLinkClass = (path: string) =>
    cn(
      "block px-3 py-2.5 text-sm font-medium transition-colors",
      isActive(path) ? "text-primary" : "text-foreground/80 hover:text-primary",
    );

  return (
    <div className="min-h-screen flex flex-col">
      <header className="relative z-50 page-hero">
        <div className="container py-6 md:py-8">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <Link to="/" className="shrink-0">
              <img
                src={lincstemLogo}
                alt={siteContent.schoolName}
                className="h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-48 lg:w-48"
              />
            </Link>

            <div className="relative flex min-h-28 sm:min-h-36 md:min-h-44 lg:min-h-48 flex-1 min-w-0 flex-col items-center justify-center gap-2 lg:gap-3 text-center">
              <button
                className="lg:hidden absolute right-0 top-0 p-2 rounded-md text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>

              <Link to="/" className="min-w-0 px-8 lg:px-0">
                <span className="block font-display text-xl sm:text-2xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight">
                  {siteContent.fullTitle}
                </span>
                <span className="block font-display text-base md:text-2xl font-medium tracking-tight mt-1 opacity-90">
                  {siteContent.schoolName}
                </span>
              </Link>

              <nav className="hidden lg:flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 xl:gap-x-10 2xl:gap-x-16 mt-1 px-2">
                <Link to="/" className={navLinkClass("/")}>
                  Home
                </Link>

                <NavDropdown
                  label="About Us"
                  links={aboutLinks}
                  isActive={isAboutActive(location.pathname)}
                  isLinkActive={isActive}
                  onNavigate={closeMobileNav}
                />

                <NavDropdown
                  label="Materials"
                  links={[{ label: "All Materials", path: "/materials" }, ...materialLinks]}
                  isActive={isMaterialsActive(location.pathname)}
                  isLinkActive={(path) =>
                    path === "/materials"
                      ? location.pathname === "/materials"
                      : isActive(path)
                  }
                  onNavigate={closeMobileNav}
                />

                <NavDropdown
                  label={outreachNavLabel}
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
                  onNavigate={closeMobileNav}
                />

                {navLinks.slice(1).map((link) => (
                  <Link key={link.path} to={link.path} className={navLinkClass(link.path)}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden border-t border-primary-foreground/20 bg-card px-4 pb-4">
            <Link
              to="/"
              onClick={closeMobileNav}
              className={mobileNavLinkClass("/")}
            >
              Home
            </Link>

            <MobileNavDropdown
              label="About Us"
              links={aboutLinks}
              isOpen={aboutOpen}
              onToggle={() => setAboutOpen(!aboutOpen)}
              isActive={isAboutActive(location.pathname)}
              onNavigate={closeMobileNav}
              isLinkActive={isActive}
            />

            <MobileNavDropdown
              label="Materials"
              links={[{ label: "All Materials", path: "/materials" }, ...materialLinks]}
              isOpen={materialsOpen}
              onToggle={() => setMaterialsOpen(!materialsOpen)}
              isActive={isMaterialsActive(location.pathname)}
              onNavigate={closeMobileNav}
              isLinkActive={isActive}
            />

            <MobileNavDropdown
              label={outreachNavLabel}
              links={[
                { label: "Overview", path: "/community-outreach" },
                ...outreachLinks,
              ]}
              isOpen={outreachOpen}
              onToggle={() => setOutreachOpen(!outreachOpen)}
              isActive={isOutreachActive(location.pathname)}
              onNavigate={closeMobileNav}
              isLinkActive={isActive}
            />

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMobileNav}
                className={mobileNavLinkClass(link.path)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1 flex flex-col">{children}</main>

      <footer className="border-t border-primary/20 bg-[hsl(0,85%,35%)] text-primary-foreground">
        <div className="container py-10 grid gap-8 md:grid-cols-3">
          <div className="flex items-start gap-4">
            <Link to="/" className="shrink-0">
              <img
                src={lincstemLogo}
                alt={siteContent.schoolName}
                className="h-16 w-16 sm:h-20 sm:w-20"
              />
            </Link>
            <div>
              <h3 className="font-display text-lg font-semibold mb-2">{siteContent.schoolName}</h3>
              <p className="text-sm opacity-80">{siteContent.fullTitle}</p>
              <p className="text-sm opacity-80 mt-1">{siteContent.tagline}</p>
            </div>
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
