import React from "react";
import { projects } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { MdArrowOutward, MdLockOutline } from "react-icons/md";

const cardGradients = [
  "radial-gradient(circle at 50% 0%, rgba(168, 85, 247, 0.1), transparent 60%)",
  "radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.1), transparent 60%)", 
  "radial-gradient(circle at 50% 0%, rgba(236, 72, 153, 0.1), transparent 60%)", 
];

const ProjectsCard = ({
  title,
  year,
  results,
  link,
  image,
  type,
  status,
  index,
}) => {
  const hasLink = Boolean(link && link.trim().length > 0);
  const isApp = type === "app";
  
  const bgGradient = cardGradients[index % cardGradients.length];

  return (
    <div
      className="
        relative z-0 bg-white/80 backdrop-blur-sm rounded-[32px] overflow-hidden border border-black/5
        shadow-[0_8px_30px_rgb(0,0,0,0.04)]
        px-6 pt-10 md:px-12 md:pt-12 lg:px-16 lg:sticky transition-all duration-300
      "
      style={{ top: `${200 + index * 40}px`, backgroundImage: bgGradient }}
    >
      <div className="relative lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-start">
        <div className="flex flex-col h-full justify-between pb-10 lg:py-8">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-black text-[28px] md:text-[32px] font-bold tracking-tight">
                {title}
              </span>
              
              <div className="bg-black/5 border border-black/10 rounded-full px-3 py-1.5 flex items-center justify-center">
                <span className="text-black/70 text-[12px] font-semibold uppercase tracking-wider leading-none">
                  {year}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {results.map((result, i) => (
                <div key={`project-${title}-${i}`} className="group flex gap-4 items-start">
                  <span className="mt-2 min-w-[6px] h-[6px] rounded-full bg-black/20 group-hover:bg-black/60 transition-colors" />
                  <p className="text-black/70 text-[15px] md:text-[16px] leading-relaxed font-light">
                    {result.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 md:mt-12 flex flex-wrap gap-4">
            {hasLink ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-black px-8 font-medium text-white transition-all duration-300 hover:w-full md:hover:w-auto hover:bg-neutral-800 hover:shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span>View Project</span>
                  <MdArrowOutward className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ) : (
              <button
                disabled
                className="inline-flex h-12 items-center px-8 rounded-full border border-black/10 bg-black/5 text-black/40 font-medium cursor-not-allowed"
              >
                 {status === "private" ? <MdLockOutline className="mr-2"/> : null}
                 {status === "private" ? "Private Repo" : "Coming Soon"}
              </button>
            )}
          </div>
        </div>

        <div className="mt-8 lg:mt-0 w-full flex items-center justify-center lg:justify-end">
          <div
            className={`relative transition-transform duration-500 hover:scale-[1.01] ${
              isApp
                ? "w-[240px] md:w-[280px]"
                : "w-full max-w-[580px]"
            }`}
          >
            <div
              className={`
                relative overflow-hidden bg-gray-50 border-[6px] border-black/5 
                shadow-[0_50px_100px_-20px_rgba(50,50,93,0.15),0_30px_60px_-30px_rgba(0,0,0,0.1)]
                ${isApp ? "rounded-[40px] aspect-[9/19]" : "rounded-[16px] aspect-[16/10]"}
              `}
            >
              {!isApp && (
                <div className="absolute top-0 left-0 right-0 h-8 bg-white border-b border-black/5 flex items-center px-4 gap-1.5 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <div className="mx-auto w-1/3 h-4 bg-gray-100 rounded-md" />
                </div>
              )}

              {isApp && (
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-24 bg-black rounded-b-xl z-20" />
              )}

              <div className={`w-full h-full overflow-hidden bg-white ${!isApp ? "pt-8" : ""}`}>
                <img
                  src={image}
                  alt={`${title} preview`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/0 to-white/40 opacity-50 z-10" />
            </div>
            
            <div className="absolute -inset-4 bg-gradient-to-r from-gray-200/50 to-gray-100/50 blur-2xl -z-10 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      {/* Header always above */}
      <div className="relative z-20 pointer-events-none">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-black/60 text-[17px] max-w-3xl leading-[30px]"
        >
          Throughout my journey as a software engineering student, I've built products that focus on performance,
          accessibility, and real-world usability, from serverless mobile apps to full-stack platforms.
          Here are a few projects I'm proud of, including hackathon builds and longer-term systems I'm actively improving.
        </motion.p>
      </div>

      {/* Cards go under header */}
      <div className="relative z-0 mt-24 flex flex-col gap-10 pb-20">
        {projects.map((project, index) => (
          <ProjectsCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(Works, "");
