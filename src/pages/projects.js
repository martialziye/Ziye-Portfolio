import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/pegase-ECL.png";
import proj2 from "../../public/images/projects/azure-data-engineering.png";
import proj3 from "../../public/images/projects/GYM-solution.png";
import proj4 from "../../public/images/projects/e-commerce-sayed-khan.png";
import proj5 from "../../public/images/projects/dynseo.png";
import proj6 from "../../public/images/projects/Segula-ERP.jpg";
import proj7 from "../../public/images/projects/agent.png";
import proj8 from "../../public/images/projects/piana.png";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
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

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          {github && (
            <Link
              href={github}
              target={"_blank"}
              className="w-10"
              aria-label="Crypto Screener Application github link"
            >
              <GithubIcon />
            </Link>
          )}
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, summary }) => {
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

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          {link && (
            <Link
              href={link}
              target={"_blank"}
              className="rounded text-lg
           font-medium underline md:text-base
           "
              aria-label={title}
            >
              Visit
            </Link>
          )}
          {github && (
            <Link
              href={github}
              target={"_blank"}
              className="w-8 md:w-6"
              aria-label={title}
            >
              <GithubIcon />
            </Link>
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
            <div className="col-span-12">
              <FeaturedProject
                type="Fintech Project"
                title="WEB Fintech Application"
                summary="A cutting-edge feature-rich fintech project  web application designed to revolutionize how financial institutions, including banks and insurance companies, calculate Expected Credit Loss (ECL) and Amortization for bonds. This innovative tool offers lightning-fast and highly accurate calculations, streamlining critical financial processes."
                img={proj1}
                link="https://www.commandstrategy.com/?lang=en"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Fleet Finance Platform"
                title="Piana Fleet & Credit Management"
                summary="A production-grade fintech web application designed to help companies manage their vehicle fleets, combining fuel cards, deferred payments, and credit-based spending into a unified platform. The system processes large volumes of vehicle, transaction, and expense data to provide real-time visibility on usage, balances, and credit exposure."
                img={proj8}
                link="#"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Clinical Data Platform"
                title="MAPS Metadata & Code Automation"
                summary="MAPS assists statistical programmers by centralizing study metadata management and related data programming, reducing manual, error-prone work and accelerating clinical data analysis and reporting. Modules include: Study Metadata Manager for ADaM/SDTM setup, Code Generator for draft R programs, and Report Designer for TLF drafts."
                img={proj2}
                link="https://www.sanofi.com"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Conversational Analytics"
                title="Data Query Agent"
                summary="Agent helps non-technical users get data insights through natural language, removing friction from traditional BI workflows. Using LangGraph and LangSmith, the agent parses questions, maps them to schemas, generates SQL, and returns results as charts, tables, or text with conversational refinement."
                img={proj7}
                link="#"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Azure Data Engineering Solution"
                title="Financial Data End to End Solution"
                img={proj2}
                link="https://azure.microsoft.com/fr-fr/"
                summary="A complete solution that involves importing tables from Azure SQL Database to Azure Data Lake using Azure Data Factory. Subsequently, Azure Databricks refines the raw data, and Azure Synapse Analytics loads the cleansed data. Microsoft Power BI then integrates with Azure Synapse Analytics to develop an interactive dashboard. Additionally, Azure Active Directory and Azure Key Vault are employed for monitoring and governance."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="PROWESS Gym Website"
                img={proj3}
                link="https://prowess.qodeinteractive.com/"
                summary="A one-stop fitness solution, offering convenient and efficient online services for fitness enthusiasts. Members can easily book a variety of fitness classes from anywhere and browse and purchase our carefully selected fitness products. This platform aims to provide members with a seamless user experience, allowing them to conveniently arrange fitness activities and effortlessly purchase high-quality fitness products."
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="E-Commerce Website"
                title="React E-Commerce Website"
                summary="An innovative, user-friendly online marketplace, aimed at providing a seamless shopping experience for users. This independent project reflects a fusion of aesthetic design, optimal functionality, and user-centric navigation, showcasing a diverse range of products."
                img={proj4}
                link="https://avada.website/retail/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Mobile application"
                img={proj5}
                title="Stimart"
                link="https://www.dynseo.com/"
                summary="A mobile application with more than 40 educational and sports activities, digital coaches accompanie all children aged 5 to 10, helping them to develop their learning skills alongside the school curriculum."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="ERP System"
                img={proj6}
                title="Automobile Industry ERP"
                link="https://www.segulatechnologies.com/fr/"
                summary="A ERP system project tailored to meet the diverse needs of the Grand Automobile Group, a leading player in the automotive industry. This project aims to streamline and optimize operations across the entire organization, fostering efficiency, transparency, and growth."
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
