"use client";

export default function TableOfContents({ sections }) {
  const handleClick = (event, id) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ul className="mt-5 space-y-3">
      {sections?.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="block text-md font-semibold font-aeonik text-[#9EB3CF] transition-colors hover:text-white"
            onClick={(e) => handleClick(e, section.id)}
          >
            {section.tocTitle || section.navLabel || section.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
