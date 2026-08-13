import { useParams, Link } from "react-router-dom";
import { siteContent } from "@/data/content";
import { motion } from "framer-motion";
import {
  FileText,
  Presentation,
  Video,
  Image,
  Calendar,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GradePage() {
  const { gradeId } = useParams();
  const grade = siteContent.grades.find((g) => g.grade === Number(gradeId));

  if (!grade) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-3xl font-bold mb-4">Grade Not Found</h1>
        <Button asChild variant="outline">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  const gradeIndex = siteContent.grades.findIndex((g) => g.grade === grade.grade);
  const prevGrade = siteContent.grades[gradeIndex - 1];
  const nextGrade = siteContent.grades[gradeIndex + 1];

  return (
    <>
      {/* Header */}
      <section className="page-hero py-16">
        <div className="container">
          <Link to="/materials" className="inline-flex items-center text-sm opacity-70 hover:opacity-100 mb-4 transition-opacity">
            <ArrowLeft className="mr-1 h-4 w-4" /> Our Materials
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-5xl font-bold mb-3"
          >
            {grade.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg opacity-80 max-w-2xl"
          >
            {grade.description}
          </motion.p>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-12 section-pale">
        <div className="container">
          <Tabs defaultValue="labs" className="space-y-8">
            <TabsList className="flex flex-wrap gap-1">
              <TabsTrigger value="labs" className="gap-1.5">
                <FileText className="h-4 w-4" /> Lab Materials
              </TabsTrigger>
              <TabsTrigger value="slides" className="gap-1.5">
                <Presentation className="h-4 w-4" /> Slides
              </TabsTrigger>
              <TabsTrigger value="videos" className="gap-1.5">
                <Video className="h-4 w-4" /> Videos
              </TabsTrigger>
              <TabsTrigger value="photos" className="gap-1.5">
                <Image className="h-4 w-4" /> Photos
              </TabsTrigger>
              <TabsTrigger value="events" className="gap-1.5">
                <Calendar className="h-4 w-4" /> Events
              </TabsTrigger>
            </TabsList>

            {/* Lab Materials */}
            <TabsContent value="labs">
              {grade.labMaterials.length === 0 ? (
                <EmptyState label="lab materials" />
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {grade.labMaterials.map((m, i) => (
                    <a
                      key={i}
                      href={m.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-lg border bg-card p-5 hover:border-secondary transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <FileText className="h-5 w-5 text-secondary shrink-0" />
                        <span className="text-xs font-mono uppercase text-muted-foreground">{m.type}</span>
                      </div>
                      <h3 className="font-display font-semibold mb-1">{m.title}</h3>
                      <p className="text-sm text-muted-foreground">{m.description}</p>
                    </a>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Slides */}
            <TabsContent value="slides">
              {grade.slides.length === 0 ? (
                <EmptyState label="slides" />
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {grade.slides.map((s, i) => (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-lg border bg-card p-5 hover:border-secondary transition-colors"
                    >
                      <Presentation className="h-5 w-5 text-secondary mb-2" />
                      <h3 className="font-display font-semibold mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{s.description}</p>
                      {s.date && (
                        <span className="text-xs text-muted-foreground">{s.date}</span>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Videos */}
            <TabsContent value="videos">
              {grade.videos.length === 0 ? (
                <EmptyState label="videos" />
              ) : (
                <div className="grid gap-6 sm:grid-cols-2">
                  {grade.videos.map((v, i) => (
                    <div key={i} className="rounded-lg border bg-card overflow-hidden">
                      <div className="aspect-video">
                        <iframe
                          src={v.url}
                          title={v.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-display font-semibold mb-1">{v.title}</h3>
                        <p className="text-sm text-muted-foreground">{v.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Photos */}
            <TabsContent value="photos">
              {grade.photos.length === 0 ? (
                <EmptyState label="photos" />
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {grade.photos.map((p, i) => (
                    <div key={i} className="rounded-lg border bg-card overflow-hidden">
                      <img src={p.src} alt={p.alt} className="w-full aspect-video object-cover" />
                      {p.caption && (
                        <p className="p-3 text-sm text-muted-foreground">{p.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Events */}
            <TabsContent value="events">
              {grade.events.length === 0 ? (
                <EmptyState label="event highlights" />
              ) : (
                <div className="space-y-4">
                  {grade.events.map((e, i) => (
                    <div
                      key={i}
                      className="rounded-lg border bg-card p-5 flex flex-col sm:flex-row gap-4"
                    >
                      {e.image && (
                        <img
                          src={e.image}
                          alt={e.title}
                          className="w-full sm:w-48 h-32 object-cover rounded-md"
                        />
                      )}
                      <div>
                        <span className="text-xs text-secondary font-medium">{e.date}</span>
                        {e.venue && <span className="text-xs text-muted-foreground ml-2">• {e.venue}</span>}
                        <h3 className="font-display font-semibold text-lg">{e.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{e.description}</p>
                        {e.link && (
                          <a
                            href={e.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-secondary mt-2 hover:underline"
                          >
                            Read more <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t">
            {prevGrade ? (
              <Button asChild variant="outline">
                <Link to={`/grade/${prevGrade.grade}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Grade {prevGrade.grade}
                </Link>
              </Button>
            ) : (
              <div />
            )}
            {nextGrade ? (
              <Button asChild variant="outline">
                <Link to={`/grade/${nextGrade.grade}`}>
                  Grade {nextGrade.grade} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="text-center py-12 text-muted-foreground">
      <p>No {label} added yet. Check back soon!</p>
    </div>
  );
}
