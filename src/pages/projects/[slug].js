import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon } from "@/components/Icons";
import { caseStudyProjects, getProjectBySlug } from "@/data/projectsData";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const isExternalLink = (url) => Boolean(url && url !== "#");

const MetaItem = ({ label, value }) => {
  if (!value) return null;

  return (
    <div className="rounded-xl border border-solid border-dark/20 bg-light/70 p-4 dark:border-light/20 dark:bg-dark/40">
      <p className="text-xs font-semibold uppercase tracking-wider text-dark/60 dark:text-light/60">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-dark dark:text-light">{value}</p>
    </div>
  );
};

const DetailSection = ({ title, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="rounded-2xl border border-solid border-dark/15 bg-light p-6 shadow-lg dark:border-light/15 dark:bg-dark sm:p-5">
      <h2 className="text-2xl font-bold text-dark dark:text-light sm:text-xl">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item, index) => (
          <li
            key={`${title}-${index}`}
            className="flex items-start gap-3 text-base font-medium text-dark/85 dark:text-light/85 sm:text-sm"
          >
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary dark:bg-primaryDark" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const RichSection = ({ section }) => {
  if (!section) return null;

  const { title, description, paragraphs, items, groups, note } = section;

  return (
    <section className="rounded-2xl border border-solid border-dark/15 bg-light p-6 shadow-lg dark:border-light/15 dark:bg-dark sm:p-5">
      <h2 className="text-2xl font-bold text-dark dark:text-light sm:text-xl">{title}</h2>

      {description && (
        <p className="mt-4 text-base font-medium leading-relaxed text-dark/85 dark:text-light/85 sm:text-sm">
          {description}
        </p>
      )}

      {paragraphs &&
        paragraphs.map((paragraph, index) => (
          <p
            key={`${title}-paragraph-${index}`}
            className="mt-4 text-base font-medium leading-relaxed text-dark/85 dark:text-light/85 sm:text-sm"
          >
            {paragraph}
          </p>
        ))}

      {groups &&
        groups.map((group, groupIndex) => (
          <div
            key={`${title}-group-${groupIndex}`}
            className="mt-5 rounded-xl border border-solid border-dark/10 bg-dark/5 p-4 dark:border-light/10 dark:bg-light/5"
          >
            {group.title && (
              <h3 className="text-base font-bold text-dark dark:text-light sm:text-sm">
                {group.title}
              </h3>
            )}
            {group.description && (
              <p className="mt-2 text-sm font-medium leading-relaxed text-dark/80 dark:text-light/80">
                {group.description}
              </p>
            )}
            {group.items && group.items.length > 0 && (
              <ul className="mt-3 space-y-2">
                {group.items.map((item, itemIndex) => (
                  <li
                    key={`${title}-group-${groupIndex}-item-${itemIndex}`}
                    className="flex items-start gap-3 text-sm font-medium text-dark/85 dark:text-light/85"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary dark:bg-primaryDark" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

      {items && items.length > 0 && (
        <ul className="mt-4 space-y-3">
          {items.map((item, index) => (
            <li
              key={`${title}-item-${index}`}
              className="flex items-start gap-3 text-base font-medium text-dark/85 dark:text-light/85 sm:text-sm"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary dark:bg-primaryDark" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {note && (
        <p className="mt-4 rounded-xl border border-dashed border-dark/20 bg-dark/5 p-4 text-sm font-medium text-dark/80 dark:border-light/20 dark:bg-light/5 dark:text-light/80">
          {note}
        </p>
      )}
    </section>
  );
};

export default function ProjectCaseStudyPage({ project }) {
  const { caseStudy } = project;
  const hasExternal = isExternalLink(project.externalLink);
  const demoVideo = caseStudy.demoVideo;

  return (
    <>
      <Head>
        <title>{`${project.title} | Case Study`}</title>
        <meta name="description" content={project.summary} />
      </Head>

      <TransitionEffect />
      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/projects"
                className="rounded-lg border border-solid border-dark px-4 py-2 text-sm font-semibold text-dark transition-colors hover:bg-dark hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark"
              >
                Back to Projects
              </Link>

              <div className="flex flex-wrap items-center gap-3">
                {demoVideo?.watchUrl && (
                  <Link
                    href={demoVideo.watchUrl}
                    target="_blank"
                    className="rounded-lg border border-solid border-dark px-4 py-2 text-sm font-semibold text-dark dark:border-light dark:text-light"
                  >
                    Watch Demo
                  </Link>
                )}
                {hasExternal && (
                  <Link
                    href={project.externalLink}
                    target="_blank"
                    className="rounded-lg bg-dark px-4 py-2 text-sm font-semibold text-light dark:bg-light dark:text-dark"
                  >
                    Visit Project
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="w-8 text-dark dark:text-light"
                    aria-label={`${project.title} github link`}
                  >
                    <GithubIcon />
                  </Link>
                )}
              </div>
            </div>

            <header className="rounded-3xl border border-solid border-dark bg-light p-8 shadow-2xl dark:border-light dark:bg-dark sm:p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-primaryDark">
                {project.type}
              </p>
              <h1 className="mt-3 text-5xl font-bold leading-tight text-dark dark:text-light lg:text-4xl sm:text-3xl">
                {project.title}
              </h1>
              {caseStudy.tagline && (
                <p className="mt-4 text-lg font-medium text-dark/80 dark:text-light/80 sm:text-base">
                  {caseStudy.tagline}
                </p>
              )}
              <p className="mt-4 text-base font-medium text-dark/85 dark:text-light/85 sm:text-sm">
                {project.summary}
              </p>
            </header>

            <div className="grid grid-cols-12 gap-8 lg:gap-6">
              <div className="col-span-8 lg:col-span-12">
                <div className="relative overflow-hidden rounded-3xl border border-solid border-dark bg-light p-3 shadow-xl dark:border-light dark:bg-dark">
                  {demoVideo?.embedUrl ? (
                    <div className="aspect-video w-full overflow-hidden rounded-2xl">
                      <iframe
                        className="h-full w-full"
                        src={demoVideo.embedUrl}
                        title={demoVideo.title || `${project.title} demo video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <Image
                      src={project.img}
                      alt={project.title}
                      className="h-auto w-full rounded-2xl"
                      priority
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                  )}
                </div>
              </div>

              <aside className="col-span-4 flex flex-col gap-4 lg:col-span-12">
                <div className="rounded-2xl border border-solid border-dark/15 bg-light p-5 shadow-lg dark:border-light/15 dark:bg-dark">
                  <h2 className="text-lg font-bold text-dark dark:text-light">
                    Project Snapshot
                  </h2>
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-1">
                    <MetaItem label="Role" value={caseStudy.role} />
                    <MetaItem label="Timeline" value={caseStudy.timeline} />
                    <MetaItem label="Collaboration" value={caseStudy.collaboration} />
                    <MetaItem label="Scope" value={caseStudy.scope} />
                  </div>
                </div>

                {caseStudy.stack && caseStudy.stack.length > 0 && (
                  <div className="rounded-2xl border border-solid border-dark/15 bg-light p-5 shadow-lg dark:border-light/15 dark:bg-dark">
                    <h2 className="text-lg font-bold text-dark dark:text-light">Stack</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {caseStudy.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-solid border-dark/20 px-3 py-1 text-sm font-medium text-dark dark:border-light/20 dark:text-light"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>

            <section className="rounded-2xl border border-solid border-dark/15 bg-light p-6 shadow-lg dark:border-light/15 dark:bg-dark sm:p-5">
              <h2 className="text-2xl font-bold text-dark dark:text-light sm:text-xl">
                Overview
              </h2>
              <p className="mt-4 text-base font-medium leading-relaxed text-dark/85 dark:text-light/85 sm:text-sm">
                {caseStudy.overview}
              </p>
              {caseStudy.confidentialityNote && (
                <p className="mt-4 rounded-xl border border-dashed border-dark/20 bg-dark/5 p-4 text-sm font-medium text-dark/80 dark:border-light/20 dark:bg-light/5 dark:text-light/80">
                  {caseStudy.confidentialityNote}
                </p>
              )}
            </section>

            <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
              <DetailSection title="Goals" items={caseStudy.goals} />
              <DetailSection title="Contributions" items={caseStudy.contributions} />
              <DetailSection title="Architecture & Workflow" items={caseStudy.architecture} />
              <DetailSection title="Outcomes" items={caseStudy.outcomes} />
            </div>

            {caseStudy.extraSections && caseStudy.extraSections.length > 0 && (
              <div className="grid grid-cols-1 gap-6">
                {caseStudy.extraSections.map((section, index) => (
                  <RichSection
                    key={`${section.title || "section"}-${index}`}
                    section={section}
                  />
                ))}
              </div>
            )}

            <DetailSection title="Key Learnings" items={caseStudy.learnings} />

            <div className="flex justify-end">
              <Link
                href="/projects"
                className="rounded-lg border border-solid border-dark px-4 py-2 text-sm font-semibold text-dark transition-colors hover:bg-dark hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark"
              >
                Back to Projects
              </Link>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: caseStudyProjects.map((project) => ({
      params: { slug: project.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project || !project.caseStudy) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project: JSON.parse(JSON.stringify(project)),
    },
  };
}
