import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { projectShowcase } from "@/data/projectsData";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const FramerImage = motion(Image);

const isExternalLink = (url) => Boolean(url && url !== "#");

const ProjectMedia = ({ href, img, title, className, sizes, priority = false }) => {
  const imageNode = (
    <FramerImage
      src={img}
      className="h-auto w-full"
      alt={title}
      whileHover={href ? { scale: 1.05 } : undefined}
      transition={{ duration: 0.2 }}
      sizes={sizes}
      priority={priority}
    />
  );

  if (!href) {
    return <div className={`${className} overflow-hidden rounded-lg`}>{imageNode}</div>;
  }

  return (
    <Link href={href} className={`${className} cursor-pointer overflow-hidden rounded-lg`}>
      {imageNode}
    </Link>
  );
};

const ProjectTitle = ({ href, title, className }) => {
  const titleNode = <h2 className={className}>{title}</h2>;

  if (!href) {
    return titleNode;
  }

  return (
    <Link href={href} className="underline-offset-2 hover:underline">
      {titleNode}
    </Link>
  );
};

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  externalLink,
  github,
  caseStudyHref,
}) => {
  const hasExternal = isExternalLink(externalLink);

  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <ProjectMedia
        href={caseStudyHref}
        img={img}
        title={title}
        className="w-1/2 lg:w-full"
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        priority
      />
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <ProjectTitle
          href={caseStudyHref}
          title={title}
          className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl"
        />
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          {github && (
            <Link
              href={github}
              target="_blank"
              className="w-10"
              aria-label={`${title} github link`}
            >
              <GithubIcon />
            </Link>
          )}
          {caseStudyHref && (
            <Link
              href={caseStudyHref}
              className="rounded-lg border border-solid border-dark p-2 px-6 text-lg font-semibold text-dark dark:border-light dark:text-light sm:px-4 sm:text-base"
            >
              Case Study
            </Link>
          )}
          {hasExternal && (
            <Link
              href={externalLink}
              target="_blank"
              className="rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark
             sm:px-4 sm:text-base
            "
              aria-label={`${title} external link`}
            >
              Visit Project
            </Link>
          )}
          {!caseStudyHref && !hasExternal && (
            <span className="text-sm font-medium text-dark/70 dark:text-light/70">
              Case study coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

const Project = ({
  title,
  type,
  img,
  externalLink,
  github,
  summary,
  caseStudyHref,
}) => {
  const hasExternal = isExternalLink(externalLink);

  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <ProjectMedia
        href={caseStudyHref}
        img={img}
        title={title}
        className="w-full"
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <ProjectTitle
          href={caseStudyHref}
          title={title}
          className="my-2 w-full text-left text-3xl font-bold lg:text-2xl "
        />
        <div className="flex w-full flex-wrap items-center gap-4">
          {caseStudyHref && (
            <Link
              href={caseStudyHref}
              className="rounded text-lg
           font-medium underline md:text-base
           "
            >
              Case Study
            </Link>
          )}
          {hasExternal && (
            <Link
              href={externalLink}
              target="_blank"
              className="rounded text-lg
           font-medium underline md:text-base
           "
              aria-label={`${title} external link`}
            >
              Visit
            </Link>
          )}
          {github && (
            <Link
              href={github}
              target="_blank"
              className="w-8 md:w-6"
              aria-label={title}
            >
              <GithubIcon />
            </Link>
          )}
          {!caseStudyHref && !hasExternal && (
            <span className="text-sm font-medium text-dark/70 dark:text-light/70">
              Case study coming soon
            </span>
          )}
        </div>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Ziye WANG developer Portfolio | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by Ziye, a Next.js developer with
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {projectShowcase.map((project) => {
              const caseStudyHref = project.caseStudy
                ? `/projects/${project.slug}`
                : null;

              return (
                <div key={project.slug} className={project.gridClass}>
                  {project.variant === "featured" ? (
                    <FeaturedProject
                      type={project.type}
                      title={project.title}
                      summary={project.summary}
                      img={project.img}
                      externalLink={project.externalLink}
                      github={project.github}
                      caseStudyHref={caseStudyHref}
                    />
                  ) : (
                    <Project
                      type={project.type}
                      title={project.title}
                      summary={project.summary}
                      img={project.img}
                      externalLink={project.externalLink}
                      github={project.github}
                      caseStudyHref={caseStudyHref}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </Layout>
      </main>
    </>
  );
}