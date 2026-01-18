import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Senior Full Stack Engineer"
            company="Piana"
            companyLink="#"
            time="Since Sep 2025"
            address="Paris, France"
            work={
              <>
                Parallelized job processing with BullMQ workers, reducing
                average job delay by 85% under high load.
                <br />
                Optimized critical SQL view and queries by adding composite
                indexes, reducing DB query latency by 90% during traffic peaks.
                <br />
                Implemented Redis-based caching to offload 70% of high-frequency
                database queries.
              </>
            }
          />

          <Details
            position="Senior Full Stack Engineer"
            company="Sanofi"
            companyLink="https://www.sanofi.com"
            time="Since Feb 2025"
            address="Paris, France"
            work={
              <>
                Built and maintained a full-stack web application "MAPS" to
                support statistical programmers in code generation for drug
                submission, integrating LLM-based template-driven approaches to
                automate and accelerate code creation.
                <br />
                Led the design and implementation of CI/CD infrastructure using
                GitHub Actions, deploying applications to AWS services including
                S3, Lambda, EC2, and DynamoDB.
                <br />
                The MAPS project significantly improved R&D efficiency, helping
                Sanofi reduce the average drug development timeline by up to one
                year.
              </>
            }
          />

          <Details
            position="Senior Full Stack Engineer"
            company="Command Strategy"
            companyLink="https://www.commandstrategy.com/?lang=en"
            time="May 2023 - Jan 2025"
            address="Paris, France"
            work={
              <>
                Led and managed cross-functional teams responsible for
                designing, developing, and delivering full-stack cloud solutions
                to meet clients' fintech needs, reducing amortization and ECL
                calculation time by 96%.
                <br />
                Designed and launched an AI-powered equity research assistant
                that generates personalized stock analysis reports, increasing
                analyst output by 900%.
                <br />
                Built a Retrieval-Augmented Generation (RAG) system for Societe
                Generale, enabling real-time IFRS-compliant knowledge retrieval
                for accounting professionals.
              </>
            }
          />

          <Details
            position="Software Tech Lead - CDI"
            company="SEGULA"
            companyLink="https://www.segulatechnologies.com"
            time="Aug 2022 - May 2023"
            address="Ile-de-France, France"
            work={
              <>
                Led a team of 5 developers in designing and implementing an ERP
                platform from scratch, reducing workflow management time by 80%.
                <br />
                Led the selection and integration of cloud infrastructure AWS
                tailored to business needs, improving reliability while reducing
                operational costs.
              </>
            }
          />

          <Details
            position="Senior Full Stack Engineer - CDI"
            company="Logicom"
            companyLink="https://www.logicom-europe.com/fr/"
            time="Since Feb 2020"
            address="Paris, France"
            work={
              <>
                Developed a custom e-commerce platform using React, Node.js, and
                MongoDB from scratch.
                <br />
                Designed the storefront and admin back office, covering product
                catalog, inventory, orders, and customer management.
                <br />
                Built secure REST APIs with role-based access and optimized
                MongoDB schemas and indexes for fast search and checkout flows.
                <br />
                Integrated payment, shipping, and notification services to
                support end-to-end transactions.
                <br />
                Improved performance, SEO, and reliability through caching,
                monitoring, and automated tests.
              </>
            }
          />

          <Details
            position="Full Stack Engineer"
            company="Dynseo"
            companyLink="https://dynseo.com"
            time="Oct 2019 - Dec 2020"
            address="Paris, France"
            work={
              <>
                Analyzed client requirements and designed and developed
                customized high-quality iOS/Android applications in Swift,
                Objective-C, Java, and React Native.
              </>
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
