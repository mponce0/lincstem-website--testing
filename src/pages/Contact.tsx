import { siteContent } from "@/data/content";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const { collaborationMessage, contactEmail, contactPhone, contactAddress } = siteContent;

  return (
    <>
      <section className="page-header py-5">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-xl md:text-3xl font-bold mb-2"
          >
            Contact Us
          </motion.h1>
          <p className="opacity-100 max-w-2xl mx-auto leading-relaxed">{collaborationMessage}</p>
        </div>
      </section>

      <section className="py-20 section-pale">
        <div className="container max-w-2xl">
          <div className="grid gap-6">
            <ContactCard
              icon={<Mail className="h-6 w-6 text-secondary" />}
              label="Email"
              value={contactEmail}
              href={`mailto:${contactEmail}`}
            />
            {contactPhone && (
              <ContactCard
                icon={<Phone className="h-6 w-6 text-secondary" />}
                label="Phone"
                value={contactPhone}
                href={`tel:${contactPhone}`}
              />
            )}
            <ContactCard
              icon={<MapPin className="h-6 w-6 text-secondary" />}
              label="Location"
              value={contactAddress}
            />
          </div>

          {siteContent.socialLinks.length > 0 && (
            <div className="mt-12 text-center">
              <h2 className="font-display text-xl font-bold mb-4">Follow Us</h2>
              <div className="flex justify-center gap-4">
                {siteContent.socialLinks.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md border bg-card text-sm font-medium hover:border-secondary transition-colors"
                  >
                    {s.platform}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-lg border bg-card p-5 hover:border-secondary transition-colors">
      {icon}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{label}</p>
        <p className="font-medium mt-0.5">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}
