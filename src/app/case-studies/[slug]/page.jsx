import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyBySlug } from "../data/caseStudiesData";
import TableOfContents from "../components/TableOfContents";

export async function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    return { title: "Case Study" };
  }

  return {
    title: caseStudy.hero?.title || "Case Study",
    description:
      caseStudy.hero?.subtitle?.slice(0, 155) ||
      "Explore how Fast Code AI delivers impact across industries.",
  };
}

const SectionTitle = ({ title }) => (
  <h2 className="text-2xl md:text-[34px] leading-tight font-aeonik text-[f7f7f7] tracking-wide">
    {title}
  </h2>
);

const ParagraphGroup = ({ content }) => (
  <div className="space-y-4 text-base md:text-lg text-[#9EB3CF] font-bwmss01">
    {content?.map((paragraph, index) => {
      if (typeof paragraph === "string" && paragraph.includes(":")) {
        const [lead, ...restParts] = paragraph.split(":");
        const rest = restParts.join(":");
        return (
          <p key={index}>
            <strong className="font-semibold text-white">{lead}</strong>
            {":"}
            {rest}
          </p>
        );
      }
      return <p key={index}>{paragraph}</p>;
    })}
  </div>
);

const BulletList = ({ bullets }) => (
  <ul className="space-y-3 text-base md:text-lg text-[#9EB3CF] pl-5 list-disc ">
    {bullets?.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
);

const ColumnBlock = ({ columns }) => (
  <div className="grid gap-6 md:grid-cols-2">
    {columns?.map((column, idx) => (
      <div
        key={idx}
        className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm"
      >
        {column.heading && (
          <h3 className="text-lg md:text-xl  text-white font-aeonik tracking-wide">
            {column.heading}
          </h3>
        )}
        {column.bullets && (
          <div className="mt-4">
            <BulletList bullets={column.bullets} />
          </div>
        )}
        {column.content && (
          <div className="mt-4 text-base md:text-lg text-[#9EB3CF] space-y-3">
            {column.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
);

const SubsectionBlock = ({ items, layout = "two-column", variant }) => {
  const isStack = layout === "stack";
  const gridClass =
    layout === "two-column"
      ? "grid gap-6 md:grid-cols-2"
      : isStack
      ? "space-y-8"
      : "grid gap-6";

  return (
    <div className={gridClass}>
      {items?.map((item, idx) =>
        isStack ? (
          <div key={idx} className="space-y-3">
            {item.heading && (
              <h3 className="text-lg md:text-xl font-aeonik tracking-wide text-white">
                {item.heading}
              </h3>
            )}
            {item.bullets && (
              <div className="mt-2">
                <BulletList bullets={item.bullets} />
              </div>
            )}
            {item.content && (
              <div className="mt-2 text-base md:text-lg text-[#9EB3CF] space-y-3">
                {item.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div
            key={idx}
            className={`rounded-2xl border border-white/10 p-6 md:p-8 backdrop-blur-sm ${
              variant === "card" ? "bg-white/5" : "bg-transparent"
            }`}
          >
            {item.heading && (
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {item.heading}
              </h3>
            )}
            {item.bullets && (
              <div className="mt-4">
                <BulletList bullets={item.bullets} />
              </div>
            )}
            {item.content && (
              <div className="mt-4 text-base md:text-lg text-[#9EB3CF] space-y-3">
                {item.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

const CalloutBlock = ({ iconLabel, description, align = "left" }) => (
  <div
    className={`mt-8 flex ${
      align === "right" ? "justify-end" : "justify-start"
    }`}
  >
    <div className="flex max-w-md items-center gap-4 rounded-2xl border border-white/10 bg-[#1A2744] px-6 py-5 text-white shadow-[0_10px_60px_rgba(0,0,0,0.35)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2DC1C3] text-xl font-semibold text-[#020F3B]">
        {iconLabel}
      </div>
      <p className="text-base md:text-lg text-[#E5F1FF]">{description}</p>
    </div>
  </div>
);

const VideoBlock = ({
  placeholder = "Product walkthrough video coming soon",
}) => (
  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#071336] shadow-[0_20px_80px_rgba(2,11,33,0.45)]">
    <div className="relative w-full pt-[56.25%]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[#C6D7F5]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="11"
              stroke="currentColor"
              strokeOpacity="0.5"
            />
            <path d="M10 8L16 12L10 16V8Z" fill="currentColor" />
          </svg>
          <span className="text-sm md:text-base">{placeholder}</span>
        </div>
      </div>
    </div>
  </div>
);

const ImageBlock = ({
  src,
  alt = "Case study visual",
  width = 1920,
  height = 1080,
  caption,
}) => {
  if (!src) return null;

  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#071336] shadow-[0_20px_80px_rgba(2,11,33,0.45)]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full object-cover"
      />
      {caption && (
        <figcaption className="px-4 py-3 text-sm text-[#9EB3CF]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

const renderBlock = (block) => {
  switch (block.type) {
    case "text":
      return <ParagraphGroup content={block.content} />;
    case "callout":
      return (
        <CalloutBlock
          iconLabel={block.iconLabel}
          description={block.description}
          align={block.align}
        />
      );
    case "columns":
      return <ColumnBlock columns={block.columns} />;
    case "subsections":
      return (
        <SubsectionBlock
          items={block.items}
          layout={block.layout}
          variant={block.variant}
        />
      );
    case "video":
      return <VideoBlock placeholder={block.placeholder} />;
    case "image":
      return (
        <ImageBlock
          src={block.src}
          alt={block.alt}
          width={block.width}
          height={block.height}
          caption={block.caption}
        />
      );
    default:
      return null;
  }
};

export default function CaseStudyDetailPage({ params }) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  const { hero, sections } = caseStudy;

  return (
    <div className=" bg-[#050B1F] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#060E2A] via-[#060F2E] to-[#040A1D] opacity-95" />
          <div className="absolute left-1/2 top-[-120px] h-[320px] w-[860px] -translate-x-1/2 rounded-full bg-[#1C2B5B]/40 blur-[160px]" />
          <div className="absolute left-[8%] top-[260px] h-[280px] w-[280px] rounded-full bg-[#2DC1C3]/15 blur-[140px]" />
          <div className="absolute right-[5%] top-[360px] h-[260px] w-[260px] rounded-full bg-[#2C56A5]/18 blur-[130px]" />
        </div>

        <div className="relative mx-auto flex  flex-col gap-8 px-6 pb-20 pt-24 md:pt-44 md:px-24">
          <div className="flex flex-col gap-4 mb-8">
            {(hero?.badges?.length > 0 || hero?.readTime) && (
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-3">
                  {hero?.badges?.map((badge, idx) => (
                    <span
                      key={idx}
                      className={`rounded-[10px] px-2 py-1 text-sm tracking-wider border ${
                        idx == 0
                          ? "text-[#D6BBFB] bg-[#2C1C5F]  border-[#53389E]"
                          : " bg-[#1F235B] border-[#2D31A6] text-[#A4BCFD]"
                      } 
                      `}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                {hero?.readTime && (
                  <div className="inline-flex items-center gap-2 rounded-[10px] border border-[#373A41] bg-[#0C0E12] px-2 py-1 text-xs text-[#9EB3CF]">
                    {hero.readTime}
                  </div>
                )}
              </div>
            )}

            <div className="space-y-6">
              {hero?.title && (
                <h1 className="font-aeonik text-3xl font-medium  md:text-5xl md:font-semibold text-white md:text-[56px] tracking-wide">
                  {hero.title}
                </h1>
              )}
            </div>
          </div>
          {hero?.image && (
            <div className="relative  overflow-hidden ">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#010615]/70" />
              <Image
                src={hero.image.src}
                alt={hero.image.alt || hero.title}
                width={hero.image.width || 1920}
                height={hero.image.height || 1080}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          )}

          {hero?.meta?.length > 0 && (
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6  ">
              <div className="flex flex-wrap gap-8">
                {hero.meta.slice(0, -1).map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <p className="text-sm capitalize font-aeonik tracking-wide font-semibold text-[#8AA2CD]">
                      {item.label}
                    </p>
                    <p className="text-base text-white md:text-lg">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              {hero.meta.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm capitalize font-aeonik tracking-wide font-semibold text-[#8AA2CD]">
                    {hero.meta[hero.meta.length - 1].label}
                  </p>
                  <p className="text-base text-white md:text-lg">
                    {hero.meta[hero.meta.length - 1].value}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="relative z-10  pb-24">
        <div className="mx-auto grid  gap-10 px-6 md:px-24 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="hidden h-full lg:block">
            <div className="sticky top-[136px] rounded-2xl border border-white/10 bg-[#071336] p-6 backdrop-blur-lg shadow-[0_20px_80px_rgba(2,11,33,0.45)]">
              <p className="text-md  text-[#9EB3CF80]">Table of contents</p>
              <TableOfContents sections={sections} />
            </div>
          </aside>

          <div className="">
            {hero?.subtitle && (
              <div className="text-base leading-relaxed text-[#E5F1FF] md:text-lg">
                {hero.subtitle}
              </div>
            )}
            {sections?.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="mt-16 scroll-mt-[140px]"
              >
                <div className="space-y-6">
                  {section.title && <SectionTitle title={section.title} />}
                  <div className="space-y-8">
                    {section.blocks?.map((block, index) => (
                      <div key={index}>{renderBlock(block)}</div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
