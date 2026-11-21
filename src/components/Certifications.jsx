import { motion } from "framer-motion";

import { styles } from "../styles";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({
  index,
  name,
  issuer,
  date,
  status,
  description,
  verify_link,
}) => {
  const inProgress = status === "in-progress";

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="green-pink-gradient p-[1px] rounded-[20px] shadow-card sm:w-[360px] w-full">
      <div className="bg-tertiary rounded-[20px] p-6 h-full flex flex-col">
        <span
          className={`w-fit text-[12px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
            inProgress
              ? "bg-[#3a2f12] text-[#f5c542]"
              : "bg-[#0f3a33] text-[#3ee0b5]"
          }`}>
          {inProgress ? "In progress" : "Earned"}
        </span>

        <h3 className="mt-4 text-white font-bold text-[22px] leading-tight">
          {name}
        </h3>
        <p className="mt-1 text-secondary text-[14px] font-semibold">
          {issuer} · {date}
        </p>
        <p className="mt-3 text-white-100 text-[14px] leading-[22px] flex-1">
          {description}
        </p>

        {verify_link && (
          <a
            href={verify_link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-fit text-[14px] font-semibold text-[#915eff] hover:text-white">
            Verify credential →
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Recently earned</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Since graduating, I have been building on my Information Systems degree
        with industry certifications in IT support, analytics, and security.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-7">
        {certifications.map((certification, index) => (
          <CertificationCard
            key={certification.name}
            index={index}
            {...certification}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
