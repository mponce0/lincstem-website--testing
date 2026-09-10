import { useState } from "react";
import { siteContent, teamCategoryLabels, type TeamCategory, type TeamMember } from "@/data/content";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ArrowUpRight, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const categoryOrder: TeamCategory[] = [
  "core",
  "contributing",
  "scientific-mentor",
  "former-scientific-mentor",
];

function TeamMemberCard({
  member,
  index,
  onSelect,
}: {
  member: TeamMember;
  index: number;
  onSelect: (member: TeamMember) => void;
}) {
  const isClickable = Boolean(member.bio);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="h-full"
    >
      <button
        type="button"
        onClick={() => isClickable && onSelect(member)}
        disabled={!isClickable}
        className={cn(
          "flex h-full w-full min-h-[300px] flex-col items-center rounded-xl border border-border/60 bg-card p-5 text-center shadow-sm transition-all",
          isClickable && "hover:border-primary/30 hover:bg-muted/30 hover:shadow-md cursor-pointer group",
          !isClickable && "cursor-default opacity-90",
        )}
      >
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="mb-4 h-36 w-36 shrink-0 rounded-full object-cover ring-2 ring-primary/15 md:h-40 md:w-40"
          />
        ) : (
          <div className="mb-4 flex h-36 w-36 shrink-0 items-center justify-center rounded-full bg-muted ring-2 ring-primary/15 md:h-40 md:w-40">
            <Users className="h-14 w-14 text-muted-foreground/40" />
          </div>
        )}

        <div className="flex w-full flex-1 flex-col items-center justify-center gap-1">
          <h3 className="line-clamp-2 w-full font-display text-base font-semibold leading-snug">
            {member.name}
          </h3>
          {member.pronouns && (
            <p className="text-xs text-muted-foreground">{member.pronouns}</p>
          )}
          <p className="mt-2 line-clamp-5 w-full text-sm leading-relaxed text-primary/90">
            {member.designation}
          </p>
          <p className="mt-2 line-clamp-5 w-full text-sm leading-relaxed text-primary/90">
            {member.designation2}
          </p>
        </div>

        {isClickable && (
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
            View profile
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        )}
      </button>
    </motion.div>
  );
}

function TeamMemberModal({
  member,
  open,
  onOpenChange,
}: {
  member: TeamMember | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!member) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader className="items-center text-center sm:items-center sm:text-center">
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="mx-auto mb-2 h-24 w-24 rounded-full object-cover ring-2 ring-border/60"
            />
          ) : (
            <div className="mx-auto mb-2 flex h-24 w-24 items-center justify-center rounded-full bg-muted ring-2 ring-border/60">
              <Users className="h-10 w-10 text-muted-foreground/40" />
            </div>
          )}
          <DialogTitle className="font-display text-xl">{member.name}</DialogTitle>
          {member.pronouns && (
            <p className="text-sm text-muted-foreground">({member.pronouns})</p>
          )}
          <p className="text-sm font-medium text-primary">{member.designation}</p>
          <p className="text-sm font-medium text-primary">{member.designation2}</p>
        </DialogHeader>
        {member.bio && (
          <DialogDescription asChild>
            <p className="text-sm leading-relaxed text-muted-foreground text-left">{member.bio}</p>
          </DialogDescription>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default function Team() {
  const { teamMembers } = siteContent;
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <section className="page-header py-5">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-xl md:text-3xl font-bold mb-2"
          >
            Our Team
          </motion.h1>
          <p className="opacity-100 max-w-xl mx-auto">
            Meet the scientists, educators, and researchers behind {siteContent.schoolName}.
          </p>
        </div>
      </section>

      <section className="py-20 section-pale">
        <div className="container space-y-14">
          {categoryOrder.map((category) => {
            const members = teamMembers.filter((m) => m.category === category);
            const label = teamCategoryLabels[category];

            return (
              <div key={category}>
                <h2 className="font-display text-xl font-bold mb-5 border-b border-border/60 pb-2">
                  {label}
                </h2>

                {members.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground rounded-lg border border-border/60 bg-card/50">
                    <Users className="mx-auto h-8 w-8 mb-2 opacity-50" />
                    <p className="text-sm">Coming soon</p>
                  </div>
                ) : (
                  <div className="grid auto-rows-fr gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {members.map((member, i) => (
                      <TeamMemberCard
                        key={member.name}
                        member={member}
                        index={i}
                        onSelect={setSelectedMember}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <TeamMemberModal
        member={selectedMember}
        open={selectedMember !== null}
        onOpenChange={(open) => !open && setSelectedMember(null)}
      />
    </>
  );
}
