import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import graduation from "../assets/graduation.png";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      //Cards borders
      className="w-full green-pink-gradient p-[1px] 
      rounded-[20px] shadow-card">
      <div
        //tilt options
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        //extending the cards
        className="bg-tertiary rounded-[20px] py-5 px-12 
        min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />

        <h3
          //Text in cards
          //{title} will extend to the text of the cards
          className="text-white text-[20px] font-bold
         text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    //header for the intro page
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Introduction.</h2>
      </motion.div>

      <motion.div
        //Text below the introduction title
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 flex flex-col md:flex-row items-center gap-6">
        <p className="text-secondary text-[17px] md:w-2/3 leading-[30px]">
          Welcome to my site to give you a glimpse into who I am as an
          individual and to showcase the experiences and opportunities that have
          helped shape me into who I am. I earned my Bachelor of Science in
          Information Systems from Stevens Institute of Technology in May 2026.
          I am grateful for the unique skills, experiences, and friendships I
          gained throughout my college journey, and I look forward to applying
          what I have learned as I begin my professional career. Below, you can
          explore some of the hobbies and interests I have developed throughout
          my time in college, as well as learn more about my experiences,
          projects, and interests.
        </p>

        {/* Graduation image: place your PNG at the project public root at /graduation.png (public/graduation.png)
            or update the src path below to point to your image in src/assets if you prefer importing it. */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={graduation}
            alt="Graduation"
            className="w-full max-w-[250px] aspect-square rounded-lg shadow-lg object-cover"
          />
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
