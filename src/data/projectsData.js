import proj1 from "../../public/images/projects/pegase-ECL.png";
import proj2 from "../../public/images/projects/azure-data-engineering.png";
import proj3 from "../../public/images/projects/GYM-solution.png";
import proj4 from "../../public/images/projects/e-commerce-sayed-khan.png";
import proj5 from "../../public/images/projects/dynseo.png";
import proj6 from "../../public/images/projects/Segula-ERP.jpg";
import proj7 from "../../public/images/projects/agent.png";
import proj8 from "../../public/images/projects/Piana.png";
import proj9 from "../../public/images/projects/forge-ai.png";

export const projectShowcase = [
  {
    slug: "web-fintech-application",
    variant: "featured",
    gridClass: "col-span-12",
    type: "Fintech Project",
    title: "WEB Fintech Application",
    summary:
      "A cutting-edge feature-rich fintech project  web application designed to revolutionize how financial institutions, including banks and insurance companies, calculate Expected Credit Loss (ECL) and Amortization for bonds. This innovative tool offers lightning-fast and highly accurate calculations, streamlining critical financial processes.",
    img: proj1,
    externalLink: "https://www.commandstrategy.com/?lang=en",
    caseStudy: {
      tagline:
        "Risk-calculation workflows redesigned for speed, traceability, and day-to-day analyst usability.",
      confidentialityNote:
        "This case study focuses on product and engineering decisions. Client-specific models, formulas, and internal datasets are omitted.",
      role: "Full-stack engineer (fintech product delivery)",
      timeline: "Production rollout and iterative enhancements",
      collaboration:
        "Worked with finance domain experts, product stakeholders, and engineering teammates",
      scope:
        "Expected Credit Loss (ECL) and bond amortization workflows for financial institutions",
      overview:
        "The platform was built to reduce spreadsheet-heavy, manual financial calculations and replace them with a guided, auditable web workflow. The main challenge was balancing performance and accuracy while keeping the interface accessible for finance users working under strict deadlines.",
      goals: [
        "Reduce manual calculation effort for recurring ECL and amortization scenarios",
        "Improve consistency and auditability across financial calculation runs",
        "Deliver faster turnaround for analysts without compromising result accuracy",
      ],
      contributions: [
        "Implemented key front-end flows for configuration, execution, and result review",
        "Helped shape service interactions to support fast calculation requests and clear error feedback",
        "Improved result presentation so users could validate assumptions and outputs more efficiently",
        "Contributed to iteration cycles based on user feedback from finance teams",
      ],
      architecture: [
        "Web UI for scenario configuration and result exploration",
        "Calculation services handling domain-specific processing logic",
        "Structured data exchange between inputs, calculation engine, and result tables",
        "Operational safeguards for validation and failure reporting",
      ],
      outcomes: [
        "Enabled a more repeatable and user-friendly calculation process compared with manual methods",
        "Improved transparency of calculation inputs and outputs for review",
        "Supported operational teams with quicker processing during reporting cycles",
      ],
      learnings: [
        "Financial tools need strong UX around validation and explainability, not just computation speed",
        "Small workflow improvements can significantly reduce analyst friction in regulated processes",
      ],
      stack: ["React / Next.js", "Web APIs", "Fintech domain workflows", "Data validation"],
    },
  },
  {
    slug: "piana-fleet-credit-management",
    variant: "featured",
    gridClass: "col-span-12",
    type: "Fleet Finance Platform",
    title: "Piana Fleet & Credit Management",
    summary:
      "A production-grade fintech web application designed to help companies manage their vehicle fleets, combining fuel cards, deferred payments, and credit-based spending into a unified platform. The system processes large volumes of vehicle, transaction, and expense data to provide real-time visibility on usage, balances, and credit exposure.",
    img: proj8,
    externalLink: null,
    caseStudy: {
      tagline:
        "A unified operational cockpit for fleet spending, deferred payments, and credit visibility.",
      confidentialityNote:
        "Screenshots and implementation specifics are simplified because this is a confidential product environment.",
      role: "Full-stack / data platform engineer",
      timeline: "Multi-phase product delivery",
      collaboration:
        "Partnered with product, operations, and engineering teams in an iterative delivery loop",
      scope:
        "Fleet transaction ingestion, expense visibility, and credit exposure monitoring",
      overview:
        "The product centralizes fleet-related financial operations that are often scattered across separate tools and manual reconciliation steps. The core engineering challenge was presenting near real-time financial visibility while integrating data from multiple operational sources and preserving trust in the numbers.",
      goals: [
        "Unify fleet, expense, and credit workflows in one platform",
        "Give operations teams near real-time visibility on balances and usage",
        "Reduce manual reconciliation overhead across transactions and expenses",
      ],
      contributions: [
        "Designed user-facing flows for monitoring fleet usage, spending, and account status",
        "Implemented data-driven dashboards and views for transactions and credit signals",
        "Worked on backend/API integrations that support large-volume financial records",
        "Helped improve operational reliability with validation and error-handling patterns",
      ],
      architecture: [
        "Web application for fleet managers and finance/operations users",
        "APIs and services for transaction and expense data processing",
        "Data pipelines/aggregation layers for balance and exposure views",
        "Monitoring and guardrails for ingestion consistency and operational support",
      ],
      outcomes: [
        "Improved visibility of fleet spending and credit usage in a single workflow",
        "Reduced fragmentation between operational actions and financial review",
        "Created a stronger foundation for scaling reporting and control features",
      ],
      learnings: [
        "Financial operations products need clear state transitions and traceability",
        "User trust depends on surfacing data freshness and error states explicitly",
      ],
      stack: [
        "Next.js / React",
        "Backend APIs",
        "Data processing pipelines",
        "Dashboard UI",
        "Operational monitoring",
      ],
    },
  },
  {
    slug: "maps-metadata-code-automation",
    variant: "featured",
    gridClass: "col-span-12",
    type: "Clinical Data Platform",
    title: "MAPS Metadata & Code Automation",
    summary:
      "MAPS assists statistical programmers by centralizing study metadata management and related data programming, reducing manual, error-prone work and accelerating clinical data analysis and reporting. Modules include: Study Metadata Manager for ADaM/SDTM setup, Code Generator for draft R programs, and Report Designer for TLF drafts.",
    img: proj2,
    externalLink: "https://www.sanofi.com",
    caseStudy: {
      tagline:
        "Centralizing study metadata to accelerate clinical programming and reduce repetitive setup work.",
      confidentialityNote:
        "The content below summarizes platform capabilities and engineering contributions without exposing proprietary study data or internal workflows.",
      role: "Data/Platform engineer",
      timeline: "Internal platform evolution across multiple modules",
      collaboration:
        "Worked with statistical programmers, domain SMEs, and engineering stakeholders",
      scope:
        "Metadata management, automation support, and report-draft acceleration for clinical workflows",
      overview:
        "Clinical programming teams often spend significant time on repeated setup and manual drafting tasks before analysis can move forward. MAPS was designed to centralize study metadata and use that foundation to automate downstream outputs, helping teams move faster with fewer manual errors.",
      goals: [
        "Create a reliable metadata source of truth for study configuration",
        "Reduce repetitive programming and reporting setup effort",
        "Support faster handoff from study design to analysis/reporting preparation",
      ],
      contributions: [
        "Contributed to workflows for metadata capture and structured management",
        "Supported automation-oriented features that generate draft assets from metadata",
        "Worked on data handling and platform logic to reduce manual, error-prone steps",
        "Helped align implementation details with end-user needs from statistical programming teams",
      ],
      architecture: [
        "Metadata management module for study setup",
        "Automation components producing draft code/report artifacts",
        "Shared data model connecting modules and reducing duplication",
        "User-facing interfaces tailored to programmer workflow steps",
      ],
      outcomes: [
        "Reduced manual setup and repeat work in clinical programming preparation",
        "Improved consistency of metadata-driven outputs across modules",
        "Supported faster iteration for study teams preparing analysis/reporting assets",
      ],
      learnings: [
        "Automation quality depends heavily on metadata quality and governance",
        "Domain-user feedback is essential to make generated outputs actually usable",
      ],
      stack: [
        "Web platform development",
        "Metadata modeling",
        "Automation workflows",
        "Clinical data process support",
      ],
    },
  },
  {
    slug: "data-query-agent",
    variant: "featured",
    gridClass: "col-span-12",
    type: "Conversational Analytics",
    title: "Data Query Agent",
    summary:
      "Agent helps non-technical users get data insights through natural language, removing friction from traditional BI workflows. Using LangGraph and LangSmith, the agent parses questions, maps them to schemas, generates SQL, and returns results as charts, tables, or text with conversational refinement.",
    img: proj7,
    externalLink: null,
    caseStudy: {
      tagline:
        "Natural-language analytics designed with guardrails, schema awareness, and iterative refinement.",
      confidentialityNote:
        "The case study focuses on the agent workflow and product design choices. Internal datasets and prompt details are not included.",
      role: "AI / LLM application engineer",
      timeline: "Prototype to iterative product hardening",
      collaboration:
        "Built with product stakeholders and data users to validate the query experience",
      scope:
        "Natural language to SQL analytics for non-technical users, with conversational follow-up",
      overview:
        "Business users often know the question they want to ask but not how to translate it into SQL or dashboard filters. The agent was built to bridge that gap while maintaining practical safeguards around schema selection, query generation, and result interpretation.",
      goals: [
        "Enable non-technical users to retrieve data insights without SQL knowledge",
        "Reduce analyst interruptions for routine reporting questions",
        "Support iterative follow-up questions in a conversational workflow",
      ],
      contributions: [
        "Implemented agent orchestration flow for intent parsing, schema mapping, and SQL generation",
        "Designed response outputs that can return tables, charts, or narrative summaries",
        "Added guardrails and validation steps to reduce invalid or unsafe query generation",
        "Improved iteration loops for clarifying ambiguous questions and refining results",
      ],
      architecture: [
        "LangGraph-driven multi-step orchestration pipeline",
        "Schema/context retrieval layer for query grounding",
        "SQL generation and execution path with validation checkpoints",
        "Result formatting layer for chart/table/text responses",
      ],
      outcomes: [
        "Lowered the barrier to self-service analytics for non-technical stakeholders",
        "Improved speed from question to insight for common data exploration tasks",
        "Established a reusable foundation for future domain-specific analytics agents",
      ],
      learnings: [
        "NL2SQL accuracy depends as much on schema context quality as on model choice",
        "Conversational analytics needs clarification UX, not only generation quality",
      ],
      stack: ["LangGraph", "LangSmith", "LLM orchestration", "SQL", "Visualization outputs"],
    },
  },
  {
    slug: "forge-ai",
    variant: "featured",
    gridClass: "col-span-12",
    type: "AI Writing Workflow Platform",
    title: "ForgeAI",
    summary:
      "A template-driven AI writing workflow product for cover letters, emails, and proposals. Users build reusable templates with placeholders, extract structured variables from messy inputs (like job descriptions or requirements), generate editable drafts, and preserve history/versioning for iterative reuse.",
    img: proj9,
    externalLink: null,
    caseStudy: {
      tagline:
        "A production-style AI writing workflow app designed around templates, structured variables, reliability, and iterative reuse.",
      confidentialityNote:
        "This case study is based on product and engineering architecture details. It intentionally focuses on system design and implementation decisions rather than private user data.",
      role: "Full-stack / AI product engineer (solo build)",
      timeline: "MVP build and iterative feature expansion",
      collaboration:
        "Primarily solo implementation across product design, frontend, backend, AI workflow, and deployment setup",
      scope:
        "Template authoring, variable extraction, AI rendering, generation history, versioning, dashboard aggregation, auth, and deployment pipeline",
      overview:
        "ForgeAI started from a practical product goal: build a template-driven AI writing workflow tool instead of a simple prompt demo. The app lets users create reusable templates with placeholders (for example {{company}}, {{role}}, {{skills}}), extract structured values from unstructured inputs like job descriptions or notes, generate editable drafts, and preserve history so good outputs can be reused or converted into new template versions. This made the product much closer to a real AI-enabled productivity application with reliability, validation, and fallback behavior built in.",
      goals: [
        "Build a reusable template system for repeatable writing workflows",
        "Convert unstructured user input into structured variables",
        "Generate editable outputs quickly and keep the UX fast",
        "Preserve history and support iterative reuse through versioning",
        "Keep baseline functionality available even if the AI provider fails",
      ],
      contributions: [
        "Built the template editor workflow, including placeholder parsing and variable schema synchronization",
        "Implemented the AI extraction and rendering pipeline with Gemini as primary provider plus fallback rules",
        "Designed the generation history and persistence model for traceability and reuse",
        "Implemented dashboard recent-template aggregation and workflow-oriented pages (Templates / Editor / Generate / History)",
        "Improved UI/UX through page redesigns, sidebar behavior, branding, and clearer multi-step interactions",
        "Added backend validation, permissions, normalization, and error-handling for reliability",
      ],
      architecture: [
        "React SPA (Vite) frontend with TanStack Router and TanStack Query",
        "FastAPI backend using layered architecture (routes -> services -> repositories)",
        "SQLModel / Pydantic schemas over PostgreSQL for typed domain models",
        "Gemini-based AI pipeline with strict JSON responses and rule-based fallback",
        "Docker Compose deployment stack with Traefik, PostgreSQL, Adminer, and Nginx frontend hosting",
      ],
      outcomes: [
        "Delivered an end-to-end template-driven AI writing workflow, not a one-shot prompt UI",
        "Enabled reusable templates, structured extraction, editable generation, and saved history in one product loop",
        "Improved reliability via backend schema normalization and AI fallback behavior",
        "Created a maintainable full-stack architecture that supports future feature growth",
      ],
      learnings: [
        "AI product quality depends heavily on deterministic contracts, validation layers, and fallback behavior",
        "Separating template identity from template versions is critical for traceability and safe iteration",
        "Workflow-heavy UIs are easier to maintain when server state and transient UI state are clearly separated",
        "Backend normalization is essential when the frontend provides user-driven editing convenience",
      ],
      stack: [
        "React",
        "Vite",
        "TypeScript",
        "TanStack Router",
        "TanStack Query",
        "Tailwind CSS",
        "shadcn/ui",
        "Radix UI",
        "FastAPI",
        "SQLModel",
        "Pydantic",
        "PostgreSQL",
        "Gemini API",
        "Docker Compose",
        "Traefik",
        "Nginx",
      ],
      demoVideo: {
        title: "ForgeAI Demo Video",
        watchUrl: "https://www.youtube.com/watch?v=jfsvwWj7UUI",
        embedUrl: "https://www.youtube.com/embed/jfsvwWj7UUI?rel=0",
      },
      extraSections: [
        {
          title: "Context",
          paragraphs: [
            "The core product goal was to build a template-driven AI writing workflow tool for documents like cover letters, emails, and proposals.",
            "Instead of a simple 'call an LLM and print text' demo, the workflow was designed around reusable templates, structured variable extraction, editable generation, and history/version reuse.",
          ],
          items: [
            "Users create reusable writing templates with placeholders such as {{company}}, {{role}}, and {{skills}}",
            "The system extracts values from unstructured input (job descriptions, notes, requirements)",
            "The system generates a draft using template content plus extracted variables",
            "The result is saved as history and can be reused or converted into a new template version",
          ],
        },
        {
          title: "Objectives",
          groups: [
            {
              title: "Product Objectives",
              items: [
                "Build a reusable template system for writing workflows",
                "Convert unstructured user input into structured variables",
                "Generate editable outputs quickly",
                "Preserve history and support iterative reuse (template versioning + saved generations)",
                "Keep the app usable even when the AI provider is unavailable",
              ],
            },
            {
              title: "Engineering Objectives",
              items: [
                "Enforce strong validation and permissions on the backend",
                "Maintain a clear, usable multi-step workflow UX",
                "Design for reliability with fallbacks, error handling, and schema normalization",
              ],
            },
          ],
        },
        {
          title: "Scope Delivered",
          items: [
            "Template editor workflow (placeholders -> variable schema sync)",
            "AI extraction/render pipeline (Gemini + fallback rules)",
            "Generation history and persistence model",
            "Dashboard recent-templates aggregation",
            "Frontend workflow pages (Template Editor / Generate / History / Templates)",
            "UI/UX improvements (sidebar behavior, branding, page redesigns)",
          ],
        },
        {
          title: "Technical Architecture (High-Level)",
          groups: [
            {
              title: "React SPA (Vite)",
              items: [
                "TanStack Router for route structure",
                "TanStack Query for server-state and caching",
                "Tailwind + shadcn/ui + Radix UI for UI layer",
                "Generated API clients plus a custom MVP client",
                "REST calls to FastAPI backend",
              ],
            },
            {
              title: "FastAPI Backend",
              items: [
                "HTTP API route layer",
                "Service layer for business logic, authz, and orchestration",
                "Repository layer for data access",
                "SQLModel models and Pydantic schemas",
                "PostgreSQL persistence",
              ],
            },
            {
              title: "AI Layer",
              items: [
                "Gemini API as primary provider",
                "Rule-based extraction/render fallback for degraded-mode reliability",
              ],
            },
            {
              title: "Infrastructure",
              items: [
                "Docker Compose orchestration",
                "Traefik reverse proxy / TLS",
                "PostgreSQL + Adminer",
                "Frontend container with Nginx static hosting",
              ],
            },
          ],
        },
        {
          title: "Backend Architecture (Detailed)",
          groups: [
            {
              title: "FastAPI Backbone",
              description:
                "FastAPI was chosen for fast REST API iteration, strong typing/validation with Pydantic, automatic OpenAPI docs, and dependency injection for auth/session handling.",
              items: [
                "Auth routes (/login, Google login, password recovery)",
                "Template routes (/templates, /templates/{id}/versions)",
                "AI routes (/generate/extract, /generate/render)",
                "Generation history routes (/generations)",
                "Dashboard route (/dashboard/recent-templates)",
              ],
            },
            {
              title: "Layered Design: Routes -> Services -> Repositories",
              items: [
                "Route layer handles request parsing, auth/session dependencies, response models, and HTTP error mapping",
                "Service layer owns authorization checks, business rules, AI orchestration, fallback behavior, and normalization before persistence",
                "Repository layer encapsulates SQLModel queries and centralizes reusable list/filter/query behavior",
              ],
            },
            {
              title: "Domain Modeling (Core Entities)",
              items: [
                "Template: stable identity (name, category, language, tags, archive state, owner, timestamps)",
                "TemplateVersion: evolving content (template body, variables_schema JSON, version number, created_by, created_at)",
                "Generation: generated result (input text, extracted values, output text, template + version references, timestamps)",
                "Separating Template and TemplateVersion preserved traceability and safe iteration",
              ],
            },
            {
              title: "Validation and Schema Normalization",
              description:
                "Template variable schema normalization on the backend was a key reliability feature because frontend placeholder parsing can drift during frequent edits.",
              items: [
                "Extract placeholders from current template content",
                "Preserve only variables that still exist in content",
                "Keep variable order stable",
                "Validate and normalize variable config structure",
                "Prevent stale schema data and protect backend integrity even with inconsistent frontend payloads",
              ],
            },
            {
              title: "AI Pipeline (Extraction + Rendering)",
              items: [
                "Extraction endpoint accepts template version id, user text, and optional profile context and returns extracted values, missing required variables, confidence scores, and notes",
                "Rendering endpoint accepts template version id, variable values, and style options (tone/length) and returns a generated draft",
                "Gemini is the primary provider for better extraction from messy text and more natural rendering/polishing",
                "Strict JSON response design keeps the frontend deterministic and avoids brittle free-form parsing",
                "Rule-based fallback supports heuristic extraction and local placeholder substitution when Gemini is unavailable or fails",
              ],
            },
            {
              title: "Authentication and Security",
              items: [
                "JWT auth with PyJWT and OAuth2PasswordBearer for stateless SPA-to-API auth",
                "Password hashing with pwdlib (Argon2 + Bcrypt support)",
                "Google login on frontend + backend token verification, then local JWT issuance",
                "Inactive user checks and ownership checks for templates/generations",
                "Password recovery flow avoids email enumeration",
                "Dummy hash verification path reduces timing leakage on login failures",
              ],
            },
          ],
        },
        {
          title: "Frontend Architecture (Detailed)",
          groups: [
            {
              title: "React + Vite + TypeScript",
              items: [
                "Fast local feedback loop with Vite",
                "Type-safe UI and API integration with TypeScript",
                "Composable React components for workflow-heavy pages",
              ],
            },
            {
              title: "TanStack Router",
              items: [
                "File-based route structure for clean organization",
                "Typed route params and search params",
                "Improved maintainability as workflow pages expanded (Templates / Editor / Generate / History / Dashboard)",
              ],
            },
            {
              title: "TanStack Query",
              items: [
                "Fetch templates, versions, generations, and dashboard stats",
                "Trigger extraction/render mutations",
                "Cache reuse, deduplication, and query invalidation after saves/updates",
                "Reduced state bugs in multi-step workflow screens",
              ],
            },
            {
              title: "API Client Strategy (Generated + Custom MVP Client)",
              items: [
                "Generated OpenAPI client (@hey-api/openapi-ts) for stable, type-safe endpoints",
                "Custom templateMvpApi.ts for rapid iteration on evolving MVP features",
                "Tradeoff: long-term type safety + short-term delivery speed",
              ],
            },
            {
              title: "UI Layer",
              items: [
                "Tailwind CSS for fast, consistent responsive styling",
                "shadcn/ui + Radix UI for composable primitives with better accessibility defaults",
                "Lucide icons for consistent visual affordances",
                "next-themes for persistent light/dark mode support",
                "Sonner toast notifications for async action feedback",
              ],
            },
          ],
        },
        {
          title: "Core User Workflows (End-to-End)",
          groups: [
            {
              title: "Workflow A: Build a Template",
              items: [
                "User writes template content with placeholders like {{company}}",
                "Frontend parses placeholders and updates variable list",
                "User configures variable schema (required/type/example/default)",
                "App saves template metadata and template version",
                "Backend normalizes schema before persistence",
              ],
            },
            {
              title: "Workflow B: Generate a Draft from Requirements",
              items: [
                "User selects template + version",
                "User pastes input text (JD / notes / requirements)",
                "App calls variable extraction endpoint",
                "User reviews and edits extracted values",
                "App renders final draft and saves generation history",
              ],
            },
            {
              title: "Workflow C: Turn a Good Result into a Better Template",
              items: [
                "User generates a draft and edits the output",
                "User saves the result as a new template version",
                "App can generalize specific values back into placeholders",
                "The system becomes a reusable template asset loop rather than one-off generation",
              ],
            },
          ],
        },
        {
          title: "Infrastructure and Deployment Architecture",
          groups: [
            {
              title: "Docker Compose",
              items: [
                "Standardized local development and deployment orchestration",
                "Runs backend, frontend, database, and supporting services together",
              ],
            },
            {
              title: "Traefik + Nginx + Prestart",
              items: [
                "Traefik as reverse proxy with domain routing and TLS automation",
                "Nginx in frontend container for reliable SPA asset hosting",
                "Prestart container for migrations/init tasks before backend startup",
              ],
            },
            {
              title: "Data Services",
              items: [
                "PostgreSQL as primary relational store",
                "Adminer for quick DB inspection and debugging",
              ],
            },
          ],
        },
        {
          title: "Testing and Code Quality",
          groups: [
            {
              title: "Backend",
              items: [
                "Pytest for API and service behavior checks",
                "Mypy for Python type checking",
                "Ruff for linting and style checks",
              ],
            },
            {
              title: "Frontend",
              items: [
                "TypeScript `tsc --noEmit` for compile-time validation",
                "Biome for formatting/linting",
                "Playwright for end-to-end user flows (login, admin, settings, etc.)",
              ],
            },
          ],
          note:
            "The goal was to keep delivery speed high while maintaining confidence in a workflow-heavy, full-stack application.",
        },
        {
          title: "Key Engineering Decisions (Interview-Ready)",
          items: [
            "Template + TemplateVersion separation: preserves traceability and safe iteration for generated outputs",
            "AI output must be structured JSON: makes the extraction/render pipeline deterministic and debuggable",
            "Rule-based fallback when AI fails: keeps the product usable in degraded mode and improves demo reliability",
            "Backend re-validates and normalizes schema: protects data integrity instead of trusting frontend correctness",
            "Generation history as a first-class entity: enables editing, auditing, and reuse instead of one-off generation",
          ],
        },
        {
          title: "Challenges and How I Solved Them",
          groups: [
            {
              title: "AI responses are not always stable",
              items: [
                "Used strict JSON prompts",
                "Added parsing/normalization layer",
                "Implemented fallback rules",
              ],
            },
            {
              title: "Variable schema drift from template edits",
              items: [
                "Frontend auto-sync while editing",
                "Backend schema normalization on save",
              ],
            },
            {
              title: "Multi-step UI state gets messy quickly",
              items: [
                "Used TanStack Query for server state",
                "Kept local component state only for transient form/workflow interactions",
                "Applied explicit query invalidation after mutations",
              ],
            },
            {
              title: "Need speed without sacrificing maintainability",
              items: [
                "Built on an existing full-stack template",
                "Added domain-specific layers cleanly",
                "Mixed generated and custom API clients strategically",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    slug: "financial-data-end-to-end-solution",
    variant: "standard",
    gridClass: "col-span-6 sm:col-span-12",
    type: "Azure Data Engineering Solution",
    title: "Financial Data End to End Solution",
    summary:
      "A complete solution that involves importing tables from Azure SQL Database to Azure Data Lake using Azure Data Factory. Subsequently, Azure Databricks refines the raw data, and Azure Synapse Analytics loads the cleansed data. Microsoft Power BI then integrates with Azure Synapse Analytics to develop an interactive dashboard. Additionally, Azure Active Directory and Azure Key Vault are employed for monitoring and governance.",
    img: proj2,
    externalLink: "https://azure.microsoft.com/fr-fr/",
  },
  {
    slug: "prowess-gym-website",
    variant: "standard",
    gridClass: "col-span-6 sm:col-span-12",
    type: "Website",
    title: "PROWESS Gym Website",
    summary:
      "A one-stop fitness solution, offering convenient and efficient online services for fitness enthusiasts. Members can easily book a variety of fitness classes from anywhere and browse and purchase our carefully selected fitness products. This platform aims to provide members with a seamless user experience, allowing them to conveniently arrange fitness activities and effortlessly purchase high-quality fitness products.",
    img: proj3,
    externalLink: "https://prowess.qodeinteractive.com/",
  },
  {
    slug: "react-e-commerce-website",
    variant: "featured",
    gridClass: "col-span-12",
    type: "E-Commerce Website",
    title: "React E-Commerce Website",
    summary:
      "An innovative, user-friendly online marketplace, aimed at providing a seamless shopping experience for users. This independent project reflects a fusion of aesthetic design, optimal functionality, and user-centric navigation, showcasing a diverse range of products.",
    img: proj4,
    externalLink: "https://avada.website/retail/",
  },
  {
    slug: "stimart",
    variant: "standard",
    gridClass: "col-span-6 sm:col-span-12",
    type: "Mobile application",
    title: "Stimart",
    summary:
      "A mobile application with more than 40 educational and sports activities, digital coaches accompanie all children aged 5 to 10, helping them to develop their learning skills alongside the school curriculum.",
    img: proj5,
    externalLink: "https://www.dynseo.com/",
  },
  {
    slug: "automobile-industry-erp",
    variant: "standard",
    gridClass: "col-span-6 sm:col-span-12",
    type: "ERP System",
    title: "Automobile Industry ERP",
    summary:
      "A ERP system project tailored to meet the diverse needs of the Grand Automobile Group, a leading player in the automotive industry. This project aims to streamline and optimize operations across the entire organization, fostering efficiency, transparency, and growth.",
    img: proj6,
    externalLink: "https://www.segulatechnologies.com/fr/",
  },
];

export const caseStudyProjects = projectShowcase.filter(
  (project) => Boolean(project.caseStudy)
);

export const getProjectBySlug = (slug) =>
  projectShowcase.find((project) => project.slug === slug);
