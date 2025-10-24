export const caseStudies = [
  {
    slug: "process-flow-ai",
    hero: {
      badges: ["Complex Value", "Research and Deployment"],
      title: "Revolutionising Engineering Safety",
      subtitle:
        "Using advanced AI and computer vision, it processes PFDs and PNIDs 50x faster than traditional methods, reducing costs by 93% and error rates by 90%, while enabling real-time safety decision-making across SATC's infrastructure.",
      image: {
        src: "/v2/case-studies/case-3.jpg",
        alt: "ProcessFlow AI dashboard",
        width: 1920,
        height: 1080,
      },
      backgroundImage: "/case-studies/process-flow-ai/background.jpg",
      readTime: "5 min read",
      meta: [
        { label: "Industry", value: "Oil and Gas" },
        { label: "Duration", value: "1 year" },
        { label: "Time", value: "Aug'24 – Ongoing" },
        { label: "Team", value: "Team of 7" },
      ],
    },
    sections: [
      {
        id: "challenge",
        title: "The Challenge",
        tocTitle: "Challenge",
        blocks: [
          {
            type: "text",
            content: [
              "Saudi Aramco Technologies Company (SATC) faced a critical challenge in their engineering operations. Their Quantitative Risk Assessment (QRA) process, essential for evaluating isolation procedures, EPS Transfer, and ensuring safety compliance, relied heavily on complex, time-consuming manual analysis of engineering diagrams. Engineers struggled with accuracy concerns and real-time decision-making bottlenecks that posed significant risks to operational efficiency and safety. ",
              "The stakes were high: these processes directly impact the safety of engineering operations across SATC's vast infrastructure, where any oversight could have serious consequences.",
            ],
          },
        ],
      },
      {
        id: "overview-video",
        title: "",
        // tocTitle: "Overview Video",
        blocks: [
          {
            type: "video",
            placeholder: "Overview video coming soon",
          },
        ],
      },
      {
        id: "solution",
        title: "Solution: AI-Powered Intelligence",
        tocTitle: "Solution",
        blocks: [
          {
            type: "text",
            content: [
              "ProcessFlow AI emerged as SATC's game-changing solution, empowering the company to make faster, smarter decisions in safety and engineering while significantly improving operational efficiency",
            ],
          },
        ],
      },
      {
        id: "data-foundation",
        title: "Data Foundation",
        tocTitle: "Data Foundation",
        navLabel: "Data",
        blocks: [
          {
            type: "subsections",
            layout: "stack",
            items: [
              {
                heading: "Data Collection & Preparation",
                bullets: [
                  "Open Source Training Data: 10+ public P&ID diagrams for initial model training",
                  "Proprietary SATC Data: 3,000 Saudi Aramco P&IDs with domain-specific symbols",
                  "Data Types: Engineering diagrams, Heat/Material Balance tables, equipment specifications",
                  "Annotation Volume: 500,000+ component annotations across diagrams",
                ],
              },
              {
                heading: "Our Data Engineering Role",
                bullets: [
                  "Symbol Library Creation: Built comprehensive database of 2,000+ industry-standard symbols",
                  "Template Matching: Developed algorithms for component extraction from complex diagrams",
                  "OCR Pipeline: Custom text extraction for equipment tags and line numbers",
                  "Domain Adaptation: Fine-tuned on SATC-specific symbols and nomenclature",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        tocTitle: "Architecture",
        blocks: [
          {
            type: "subsections",
            layout: "stack",
            items: [
              {
                heading: "AI Infrastructure",
                bullets: [
                  "Model Selection: Custom vision transformers optimized for diagram analysis",
                  "GPU Server: A100 instance at 300 USD/month (cheapest market option for large models)",
                  "Processing Pipeline: Distributed processing across multiple models for efficiency",
                  "Caching Layer: Redis for frequently accessed diagram components",
                ],
              },
              {
                heading: "Technical Stack",
                bullets: [
                  "Backend: FastAPI with async processing for high throughput",
                  "ML Framework: PyTorch with custom architectural components",
                  "OCR Engine: Combination of Easy-OCR and TR-OCR for text extraction",
                  "Database: PostgreSQL for component relationships and metadata",
                  "Deployment: Kubernetes for scalable container orchestration",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "operational-costs",
        title: "Operational Costs",
        tocTitle: "Costs",
        blocks: [
          {
            type: "subsections",
            layout: "stack",
            items: [
              {
                heading: "Traditional SME Approach: 45,000 USD/month",
                bullets: [
                  "10 SMEs at 4,500 USD/month each",
                  "Processing: 2-3 P&IDs per day",
                  "Error rate: 30%",
                ],
              },
              {
                heading: "ProcessFlow AI Solution: 3000 USD/month",
                bullets: [
                  "A100 GPU server: 3000 USD",
                  "Processing: 100+ P&IDs per day",
                  "Error rate: 2%",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const getCaseStudyBySlug = (slug) =>
  caseStudies.find((caseStudy) => caseStudy.slug === slug);

export const defaultCaseStudySlug = caseStudies[0]?.slug;
