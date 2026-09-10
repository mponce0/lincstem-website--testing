import withCareLincStem from "@/assets/news/with-care-linc-stem.jpg";
import allyFernandezSpotlight from "@/assets/news/ally-fernandez-spotlight.png";
import susheenSpotlight from "@/assets/news/susheen-spotlight.png";
import lincStemLocalGems from "@/assets/news/linc-stem-local-gems.jpg";
import utsc60LegacyFund from "@/assets/news/utsc60-legacy-fund.jpg";

export interface NewsItem {
  year: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  url: string;
  source?: string;
}

export const newsItems: NewsItem[] = [
  {
    year: "2026",
    title: "LinC STEM in With Care",
    summary:
      "LinC STEM is featured in UTSC's With Care flipbook, highlighting the program's work linking university laboratories to high school STEM curriculum across Scarborough.",
    image: withCareLincStem,
    imageAlt: "LinC STEM team in lab coats, featured in UTSC's With Care annual report",
    url: "https://heyzine.com/flip-book/3389bafab5.html#page/25",
    source: "UTSC With Care",
  },
  {
    year: "2025",
    title: "Ally Fernandez — Scientific Mentor Spotlight",
    summary:
      "UTSC Community Partnerships & Engagement's November newsletter spotlights Ally Fernandez, a LinC STEM scientific mentor whose instructional videos and mini-documentaries with Scarborough high school students are making science more accessible.",
    image: allyFernandezSpotlight,
    imageAlt: "Ally Fernandez, LinC STEM scientific mentor",
    imagePosition: "center 28%",
    url: "https://us8.campaign-archive.com/?u=bfafa7d4cc569ddadf458a479&id=4e93f74320",
    source: "UTSC CPE Newsletter",
  },
  {
    year: "2025",
    title: "Susheen Mahmood — Local Gems",
    summary:
      "The August UTSC East End newsletter spotlights scientific mentor Susheen Mahmood as a change-maker in the Local Gems series.",
    image: susheenSpotlight,
    imageAlt: "Susheen Mahmood, LinC STEM scientific mentor",
    url: "https://us8.campaign-archive.com/?u=bfafa7d4cc569ddadf458a479&id=beeb9cbb49",
    source: "UTSC CPE Newsletter",
  },
  {
    year: "2025",
    title: "LinC STEM — Local Gems",
    summary:
      "The August UTSC East End newsletter features LinC STEM as a Local Gem, highlighting how the program brings hands-on STEM workshops to Scarborough high schools.",
    image: lincStemLocalGems,
    imageAlt: "LinC STEM mentors and students working with microscopes in a UTSC laboratory",
    url: "https://us8.campaign-archive.com/?u=bfafa7d4cc569ddadf458a479&id=beeb9cbb49",
    source: "UTSC CPE Newsletter",
  },
  {
    year: "2025",
    title: "UTSC60 Legacy Fund Expands LinC STEM",
    summary:
      "U of T Scarborough's 60th Anniversary Legacy Fund awarded LinC STEM one of its largest grants (~$20,000), expanding the pilot to four Grade 9 classes at three local high schools and bringing students into UTSC teaching labs.",
    image: utsc60LegacyFund,
    imageAlt: "High school students conducting research in UTSC labs",
    url: "https://utsc.utoronto.ca/news-events/our-community/u-t-scarborough-funds-legacy-leaving-projects-60th-birthday",
    source: "UTSC News",
  },
];
