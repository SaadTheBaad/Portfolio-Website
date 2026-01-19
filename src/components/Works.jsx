import React from "react";
import { projects } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { MdCheckCircle } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";

const ProjectsCard = ({ title, year, results, link, image, index }) => {
  const hasLink = Boolean(link && link.trim().length > 0);

  return (
    <div
      className="
        relative bg-white rounded-[28px] z-0 overflow-hidden border border-black/10
        shadow-[0_30px_70px_-40px_rgba(0,0,0,0.45)]
        before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(255,204,102,0.25),transparent_55%)]
        px-6 pt-8 md:pt-10 md:px-10 lg:pt-12 lg:px-14 sticky
      "
      style={{ top: `${84 + index * 40}px` }}
    >
      <div className="relative lg:grid lg:grid-cols-[1.05fr_1fr] lg:gap-12 items-center">
        <div className="lg:py-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-black text-[22px] md:text-[26px] font-bold">
              {title}
            </span>
            <span className="rounded-full bg-black text-white text-[12px] font-semibold tracking-wide px-3 py-1">
              {year}
            </span>
          </div>

          <p className="text-black/50 text-[12px] uppercase tracking-[0.2em] mt-6">
            Highlights
          </p>

          <ul className="text-black/80 text-[14px] leading-6 mt-4 md:mt-5 space-y-3">
            {results.map((result, i) => (
              <li key={`project-${title}-${i}`} className="flex gap-3">
                <MdCheckCircle className="text-black mt-1" size={16} />
                <span>{result.title}</span>
              </li>
            ))}
          </ul>

          {hasLink ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} project`}
            >
              <button className="bg-black text-white h-12 w-full md:w-auto px-6 rounded-full font-semibold inline-flex items-center justify-center gap-2 mt-8 transition-transform duration-200 hover:-translate-y-0.5">
                <span>View Project</span>
                <FaArrowTrendUp />
              </button>
            </a>
          ) : (
            <button
              disabled
              className="bg-black/10 text-black/50 h-12 w-full md:w-auto px-6 rounded-full font-semibold inline-flex items-center justify-center gap-2 mt-8 cursor-not-allowed"
              title="Link coming soon"
            >
              <span>Coming Soon</span>
            </button>
          )}
        </div>

        <div className="mt-8 lg:mt-0">
          <div className="relative rounded-2xl overflow-hidden border border-black/10 bg-[#f4f4f5] shadow-[0_20px_50px_-35px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/30" />
            <img
              src={image}
              alt={`${title} preview`}
              loading="lazy"
              className="relative w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
      Throughout my journey as a software engineering student, I’ve built products that focus on performance, 
      accessibility, and real-world usability — from serverless mobile apps to full-stack platforms. 
      Here are a few projects I’m proud of, including hackathon builds and longer-term systems I’m actively improving.

      </motion.p>
      <div className="mt-10 md:mt-20 flex flex-col gap-20">
        {projects.map((project, index) => (
          <ProjectsCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
