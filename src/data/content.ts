// ============================================================
// MODULAR CONTENT DATA
// Edit this file to update all site content without touching components.
// ============================================================

import coDesignDiagram from "@/assets/our-work/slide3-img-0.png";
import classroomPresentation from "@/assets/homepage/classroom-presentation.jpeg";
import labMicroscopes from "@/assets/homepage/lab-microscopes.jpeg";
import mentorPresentation from "@/assets/homepage/mentor-presentation.jpeg";
import gelElectrophoresisLab from "@/assets/homepage/gel-electrophoresis-lab.jpeg";
import studentAwards from "@/assets/homepage/student-awards.jpeg";
import pilotClassroom from "@/assets/history/page10-img3.jpeg";
import pilotLab from "@/assets/history/page11-img7.jpeg";

export interface LabMaterial {
  title: string;
  description: string;
  type: "pdf" | "doc" | "link";
  url: string;
}

export interface SlideLink {
  title: string;
  description: string;
  url: string;
  date?: string;
}

export interface VideoLink {
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
}

export interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

export interface EventHighlight {
  title: string;
  date: string;
  description: string;
  venue?: string;
  image?: string;
  link?: string;
}

export interface GradeContent {
  grade: number;
  title: string;
  description: string;
  labMaterials: LabMaterial[];
  slides: SlideLink[];
  videos: VideoLink[];
  photos: Photo[];
  events: EventHighlight[];
}

export interface Partner {
  name: string;
  logo?: string;
  url?: string;
}

export type TeamCategory =
  | "leadership"
  | "core"
  | "contributing"
  | "scientific-mentor"
  | "former-scientific-mentor";

export interface TeamMember {
  name: string;
  designation: string;
  bio?: string;
  photo?: string;
  pronouns?: string;
  category: TeamCategory;
}

export interface GrowthMilestone {
  metric: string;
  start: string;
  current: string;
}

export interface WorkHighlight {
  title: string;
  description: string;
  diagramLabel: string;
}

export interface Highlight {
  title: string;
  description?: string;
  image?: string;
}

export interface TimelinePhoto {
  src: string;
  alt: string;
  caption?: string;
}

export interface TimelineEntry {
  period: string;
  title: string;
  subtitle?: string;
  details: string[];
  collaborators?: string;
  funding?: string;
  photos?: TimelinePhoto[];
}

export interface OutreachCategory {
  id: string;
  title: string;
  description: string;
}

export interface SiteContent {
  schoolName: string;
  fullTitle: string;
  tagline: string;
  heroDescription: string;
  whoWeAreDescription: string;
  missionStatement: string;
  approachTitle: string;
  approachDescription: string;
  growthIntro: string;
  impactOverview: string;
  coDesignTitle: string;
  coDesignDescription: string;
  growthMilestones: GrowthMilestone[];
  whatSetsUsApart: WorkHighlight[];
  coDesignImage?: string;
  historyIntro: string;
  historyTimeline: TimelineEntry[];
  pilotYearDescription: string;
  homepagePhotos: Photo[];
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  collaborationMessage: string;
  socialLinks: { platform: string; url: string }[];
  teamMembers: TeamMember[];
  grades: GradeContent[];
  outreachCategories: OutreachCategory[];
}

// ============================================================
// EDIT BELOW to customize all content
// ============================================================

export const siteContent: SiteContent = {
  schoolName: "LinC STEM",
  fullTitle: "Linking Laboratories to Curriculum in STEM",
  tagline: "Empowering Scarborough Youth Through STEM",
  heroDescription:
    "LinC STEM is a community-embedded STEM outreach program that co-creates a sustained set of engagements across the academic year with Grade 9 and 10 students in STEM or science programs in the Scarborough area.",
  whoWeAreDescription:
    "LinC STEM is a community-embedded STEM outreach program that co-creates a sustained set of engagements across the academic year with Grade 9 and 10 students in STEM or science programs in the Scarborough area.",
  missionStatement:
    "Our mission is to increase access to and engagement with STEM among high school students from historically underrepresented communities while disrupting stereotypes about science and scientists.",
  approachTitle: "Empowering Scarborough Youth Through STEM",
  approachDescription:
    "Our approach is to work in close collaboration with classroom teachers to bridge the gap between classroom curriculum and hands-on scientific learning. Through intergenerational mentorship, we connect students with diverse scientist-mentors who support the development of youth investigative skills while fostering a sense of belonging in science.",
  growthIntro:
    "Since launching in January of 2024 and through strategic grant funding, LinC STEM has rapidly expanded its reach across 3 local Scarborough high schools to support and inspire students in Grade 9 & 10 STEM classes.",
  impactOverview:
    "Supported by strategic grant funding, LinC STEM has grown from a single-school pilot into a multi-grade outreach initiative, delivering hands-on university laboratory experiences to students across multiple high schools and allowing a two-year engagement with the same cohort of students.",
  coDesignTitle: "From Strategy to Synergy: The Co-Design Phase",
  coDesignDescription:
    "Our program structure, activities, and materials are intentionally built through collaboration between scientists and classroom teachers, ensuring every experience supports Grade 9 and 10 STEM Ontario science curriculum goals.",
  growthMilestones: [
    { metric: "Partner Schools", start: "1 School", current: "3 Partner Schools" },
    { metric: "Grade Levels", start: "Grade 9", current: "Grades 9 & 10" },
    { metric: "Classroom Reach", start: "2 Classes", current: "10 Classes" },
    { metric: "Students Reached", start: "48 Students", current: "320+ Students" },
    {
      metric: "Hands-On Labs & Activities Delivered",
      start: "23 Activities",
      current: "150+ Activities",
    },
    { metric: "Scientist Mentors", start: "6 Mentors", current: "11 Scientist Mentors" },
  ],
  whatSetsUsApart: [
    {
      title: "Curriculum-Aligned Co-Design",
      diagramLabel: "Co-Creation of activities with teachers",
      description:
        "Our program structure, activities, and materials are intentionally built by scientists with direct input from classroom teachers, ensuring every experience supports and enhances Grade 9 and 10 STEM Ontario science curriculum goals.",
    },
    {
      title: "Students Learn Science by Practicing Science",
      diagramLabel: "Students as Scientists",
      description:
        "Students and teachers engage in the complete scientific method: asking questions, designing and conducting multiple experiments, gathering original data, and analyzing results, with the support of an intergenerational team of scientists with diverse backgrounds, life experiences, and career stages.",
    },
    {
      title: "Students Communicating Their Findings",
      diagramLabel: "Student Symposium",
      description:
        "Students, teachers, and scientist mentors gather for a dedicated symposium where student groups present their research findings to peers from other schools via posters or videos. During this event, students are recognized by their peers and program members for all their work, dedication, and creativity during the program.",
    },
    {
      title: "Continuous Evolution",
      diagramLabel: "Reflection about the program",
      description:
        "We improve and adapt our activities every year based on reflections and feedback from participating teachers, students, and scientific mentors, ensuring our program remains responsive and effective.",
    },
  ],
  coDesignImage: coDesignDiagram,
  historyIntro:
    "The program was initiated with two classes in a local school (West Hill Collegiate) using a small Outreach award to Dr. Baruffaldi from the Animal Behavior Society (2023), in-kind contributions from the Department of Biological Sciences, and support from the Department's EDI committee. Dr. Baruffaldi was a research associate in the Andrade lab at the time, and other contributors included graduate students Susheen Mahmood and Lani Taylor, as well as Dr. Andrade. A second grant to Dr. Baruffaldi and collaborators expanded the program to more schools in 2025 (UTSC Legacy grant). As of Fall 2025, LinC STEM is on the verge of a new expansion, with a major grant awarded to Dr. Baruffaldi and collaborators Christopher Armstrong (UTSC); Dr. Fiona Rawle (UTM), Dr. Rishi Krishnamoorthy (OISE), and Dr. Andrade from the University of Toronto's Access Programs University Fund. This funding allows the program to scale up to include three schools in Scarborough communities, to assess the efficacy of this approach, and to provide teaching resources and activities that teachers are seeking to support engaging curriculum delivery across the critical stages of grade 9 and 10, when most students must decide whether or not to stay in STEM.",
  historyTimeline: [
    {
      period: "Pilot Year — Winter 2024",
      title: "Two Bugs/One Stone",
      subtitle: "Breaking Barriers to Biology for Under-served Students through Interactive Invertebrate Behavior Experiences",
      details: [
        "1 School: 2 Grade 9 STEM classes at West Hill Collegiate Institute",
        "Bi-weekly classroom and laboratory activities from February to May 2024",
        "Students explored scientific concepts, collected and analyzed data, and developed research and communication skills",
        "Program culminated in STEM and Arts Nights where students presented their learning to families, peers, educators, and the broader community",
      ],
      collaborators: "Prof. Maydianne Andrade",
      funding: "Animal Behavior Society (~$1,300) & BioSci E.D.I. (~$6,000)",
      photos: [
        {
          src: pilotClassroom,
          alt: "LinC STEM mentor facilitating classroom discussions at West Hill Collegiate",
          caption: "Classroom workshops — February–May 2024",
        },
        {
          src: pilotLab,
          alt: "Students conducting hands-on lab experiments at UTSC",
          caption: "UTSC laboratory activities",
        },
      ],
    },
    {
      period: "Year 1 — Fall 2024 / Winter 2025",
      title: "Breaking Barriers to Science",
      subtitle: "Building a long-lasting legacy in our communities",
      details: [
        "3 Schools: 4 Grade 9 STEM classes",
        "First expansion and consolidation of the program to include 2 more local high schools",
        "Continued bi-weekly workshops and science activities in classrooms and at UTSC labs",
      ],
      collaborators: "Prof. Maydianne Andrade & Marcelo Ponce, MSc. Susheen Mahmood",
      funding: "Legacy 60th Grant from UTSC (~$17,000) & BioSci E.D.I. PIE Grant (~$1,200)",
      photos: [
        {
          src: mentorPresentation,
          alt: "LinC STEM mentor leading an in-class session with students",
          caption: "Expanded in-class engagements across Scarborough schools",
        },
        {
          src: labMicroscopes,
          alt: "Students using microscopes in a university laboratory",
          caption: "University lab visits for expanded cohorts",
        },
      ],
    },
    {
      period: "Year 2 — 2025/2026",
      title: "Linking Laboratories to Curriculum in STEM Program",
      details: [
        "3 Schools: 5 Grade 9 & 3 Grade 10 STEM classes",
        "Multi-grade outreach initiative with two-year engagement with the same cohort of students",
        "Delivering hands-on university laboratory experiences across multiple high schools",
      ],
      collaborators:
        "Prof. Maydianne Andrade, Fiona Rawle & Rishi Krishnamoorthy, MSc. Chris Armstrong",
      funding: "APUF Grant from the ASPO Office, University of Toronto (~$100,000)",
      photos: [
        {
          src: gelElectrophoresisLab,
          alt: "Students conducting a gel electrophoresis experiment in the lab",
          caption: "Grade 9 & 10 hands-on laboratory experiences",
        },
        {
          src: studentAwards,
          alt: "Students recognized at a LinC STEM symposium",
          caption: "Student symposium and peer recognition",
        },
      ],
    },
  ],
  pilotYearDescription:
    "The pilot experiences were initiated in Winter 2024 with two Grade 9 STEM classes at West Hill Collegiate Institute, a local Scarborough high school. This initiative was supported through an Outreach Award awarded to Dr. Baruffaldi by the Animal Behavior Society (2023), along with in-kind contributions from the Department of Biological Sciences and the Andrade Lab, and support from the UTSC Biological Sciences EDI Committee. From February to May, biweekly classroom and laboratory activities were conducted, providing students with hands-on STEM learning experiences. Throughout the program, students explored scientific concepts, collected and analyzed data, and developed research and communication skills. The project culminated in STEM and Arts Nights at their school, where students presented their learning, findings, and creative projects to their families, peers, educators, and the broader community.",
  homepagePhotos: [
    {
      src: classroomPresentation,
      alt: "LinC STEM mentors presenting to students in a Scarborough classroom",
      caption: "Connecting students with scientist mentors in the classroom",
    },
    {
      src: labMicroscopes,
      alt: "Students in lab coats using microscopes in a university laboratory",
      caption: "Hands-on university laboratory experiences",
    },
    {
      src: mentorPresentation,
      alt: "LinC STEM team member leading an in-class session with students",
      caption: "Curriculum-aligned activities co-designed with teachers",
    },
    {
      src: gelElectrophoresisLab,
      alt: "Diverse group of students conducting a gel electrophoresis experiment",
      caption: "Students learn science by practicing science",
    },
    {
      src: studentAwards,
      alt: "Students holding certificates at a LinC STEM symposium",
      caption: "Students recognized for their research and dedication",
    },
  ],
  contactEmail: "lincstem@utoronto.ca",
  contactPhone: "",
  contactAddress: "Department of Biological Sciences, University of Toronto Scarborough",
  collaborationMessage:
    "Ready to Collaborate? Whether you are a local school, graduate mentor, or community partner, join us in making STEM accessible.",
  socialLinks: [{ platform: "Instagram", url: "https://www.instagram.com/lincstem" }],
  teamMembers: [
    {
      name: "Dr. Luciana Baruffaldi",
      designation: "Laboratory Coordinator, Department of Biological Sciences, UTSC",
      pronouns: "she/her",
      category: "leadership",
      bio: "Dr. Luciana Baruffaldi is a biologist, science communicator, and activist dedicated to equitable access to STEM. As Founder and Director of LinC STEM, Luciana oversees all program operations, strategic design, and evaluations, leading the integration of hands-on lab activities and workshops directly into Grade 9 and 10 curricula to dismantle systemic barriers, disrupt stereotypes, and strengthen youth's scientific skills. Holding a PhD in Ecology and Evolutionary Biology from the University of Toronto, Luciana brings over 20 years of research experience specializing in spider sexual selection. She currently works as the Laboratory Coordinator for the Undergraduate Teaching Laboratories in the Department of Biological Sciences at UTSC.",
    },
    {
      name: "Dr. Maydianne Andrade",
      designation: "Dean of Science, York University",
      pronouns: "she/her",
      category: "core",
      bio: "Dr. Maydianne Andrade is an award-winning researcher with over 25 years dedicated to science outreach in Scarborough. Focused on expanding educational access for underserved youth, she has advocated for LinC STEM since its inception in 2024. Maydianne actively collaborates in the program with grant writing and strategic development to secure funding and key partners for the program. Her extensive experience in community organizing and co-founding national equity initiatives like the Canadian Black Scientists Network and founding the Toronto Initiative for Diversity & Excellence (TIDE) helps strengthen LinC STEM's mission and long-term impact. She is currently the Dean of Science at York University.",
    },
    {
      name: "Dr. Rishi Krishnamoorthy",
      designation: "Assistant Professor, Ontario Institute for Studies in Education (OISE)",
      pronouns: "they/them",
      category: "core",
      bio: "Dr. Rishi Krishnamoorthy is a science educator whose scholarship examines how race, gender, sexuality, and class shape youth science learning. As a core team member of the LinC STEM program, Rishi designs and facilitates in-class activities that promote critical thinking and social awareness. They also support hands-on laboratory experiences, co-design justice-oriented curriculum components, and contribute to program evaluation alongside students and teachers. Rishi is currently an Assistant Professor at the Ontario Institute for Studies in Education (OISE).",
    },
    {
      name: "MSc. Chris Armstrong",
      designation: "Laboratory Technician, Department of Biological Sciences, UTSC",
      pronouns: "he/his",
      category: "core",
      bio: "MSc. Chris Armstrong is a scientist with over 15 years of higher education experience supporting students in the laboratory. As a core team member of the LinC STEM program, he plays a vital role in designing and facilitating hands-on lab experiences and campus activities at UTSC. Chris ensures experiments are both engaging and feasible for high school students, while managing all technical delivery during UTSC lab visits. Holding a Master's in Biology from Trent University, he currently works as the Laboratory Technician for the Undergraduate Teaching Laboratories in the Department of Biological Sciences at UTSC.",
    },
    {
      name: "Dr. Fiona Rawle",
      designation: "Professor, Teaching Stream, Department of Biology, UTM",
      pronouns: "she/her",
      category: "core",
      bio: "Dr. Fiona Rawle is an award-winning professor who brings critical expertise in evidence-informed learning, qualitative data analysis, and human-subject ethics to LinC STEM. A leader in science education and communication, she guides the core team in designing robust survey instruments, focus groups, and ethical research protocols to evaluate program impact. Her extensive background as Co-chair of the Toronto Initiative for Diversity & Excellence (TIDE) ensures LinC STEM's assessment remains inclusive and equitable. Fiona is currently a Professor, Teaching Stream, in the Department of Biology at UTM.",
    },
    {
      name: "Dr. Marcelo Ponce",
      designation: "Assistant Professor, Computer and Mathematical Sciences, UTSC",
      pronouns: "he/his",
      category: "contributing",
      bio: "Dr. Marcelo Ponce is an Assistant Professor (Teaching Stream) in Computer and Mathematical Sciences at UTSC and an expert in computational astrophysics, high-performance computing, and scientific visualization. A dedicated advocate for STEM education, he has supported LinC STEM since its inception in 2024. Marcelo plays a vital role in designing and facilitating interactive laboratory experiences focused on data analysis and data visualization for LinC STEM.",
    },
    {
      name: "Dr. Andrew Mason",
      designation: "Professor, Department of Biological Sciences, UTSC",
      pronouns: "he/his",
      category: "contributing",
      bio: "Dr. Andrew Mason is a Professor in Biological Sciences at UTSC and an internationally recognized researcher in neuroethology, animal communication, and bioacoustics. A strong advocate for science outreach, Andrew has supported LinC STEM since September 2025, providing administrative guidance, specialized lab space, and organismal resources (such as spiders and invertebrates) to support student experiments for LinC STEM.",
    },
  ],
  grades: [
    {
      grade: 9,
      title: "Grade 9 — STEM",
      description:
        "Hands-on laboratory experiences and curriculum-aligned activities for Grade 9 STEM and science students in Scarborough.",
      labMaterials: [],
      slides: [],
      videos: [],
      photos: [],
      events: [],
    },
    {
      grade: 10,
      title: "Grade 10 — STEM",
      description:
        "Advanced investigative projects and university lab visits for Grade 10 STEM and science students, building on foundational skills from Grade 9.",
      labMaterials: [],
      slides: [],
      videos: [],
      photos: [],
      events: [],
    },
  ],
  outreachCategories: [
    {
      id: "outreach_one",
      title: "outreach_one",
      description:
        "Community outreach content for outreach_one coming soon. Check back for symposium highlights, STEM and Arts Nights, and stories from our partner schools.",
    },
    {
      id: "outreach_two",
      title: "outreach_two",
      description:
        "Community outreach content for outreach_two coming soon. Check back for symposium highlights, STEM and Arts Nights, and stories from our partner schools.",
    },
  ],
};

export const teamCategoryLabels: Record<TeamCategory, string> = {
  leadership: "Leadership",
  core: "Core Team",
  contributing: "Contributing Faculty & Researchers",
  "scientific-mentor": "Scientific Mentors",
  "former-scientific-mentor": "Former Scientific Mentors",
};
