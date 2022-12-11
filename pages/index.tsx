import Home from "containers/Home";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import { DOMAIN } from "config/common";

export default function HomePage() {
  const { t } = useTranslation("index");

  return (
    <div>
      <Head>
        <title>{t("metaTitle")}</title>
        <meta name="description" content={t("metaDescription")} />
        <meta property="og:url" content={`${DOMAIN}`} />
        <meta name="twitter:url" content={`${DOMAIN}`} />
        <link rel="canonical" href={`${DOMAIN}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "Do you have experience with <technology X>?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "I am a real hands-on worker and I am constantly experimenting with new techniques and tools. So I'm used to making things my own quickly. Are you looking for very specific skills? Please contact me to see if I can help you with that!"
              }
          },
          {
            "@type": "Question",
            "name": "Where are you located? Do you work remotely?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A year ago I exchanged Zaporizhzhia for Lviv in the Ukraine. Is Lviv too far away from your organization? No problem, I'm used to working remotely. A hybrid model (for example x days in the office) is also possible."
              }
            },
            {
              "@type": "Question",
              "name": "What was this site built with?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "React framework Next.js, TypeScript and CSS modules. For animations I used Gsap library."
              }
            },
            {
              "@type": "Question",
              "name": "Ok, enough about your work, what do you do when you're not in front of your laptop?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "I like to work out in the gym and walking through the old part of the city. I also enjoy playing soccer and watching soccer games. In my spare time I like to work on one of my side projects. I really enjoy making tools that make live just a little bit easier."
              }
            }]
          }`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "http://schema.org/",
              "@type": "CreativeWorkSeries",
              "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue":"5",
              "ratingCount":"47"
                },
              "description":"${t("metaDescription")}",
              "image":"${DOMAIN}static/images/logo/1.png",
              "name":"${t("metaTitle")}",
              "url":"${DOMAIN}"
            }
            `,
          }}
        />
      </Head>
      <Home />
    </div>
  );
}
