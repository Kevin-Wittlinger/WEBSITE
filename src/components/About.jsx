import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

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
        <img
          //icons being imported from pngs
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />

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

      <motion.p
        //Text below the introduction title
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Welcome to my Website! I created this site to give you a glimpse into
        who I am as an individual and to showcase the experiences and opportunities 
        that have helped shape me into who I am. 
  
        I earned my Bachelor of Science in Information Systems from Stevens Institute of Technology
        in May 2026. I am grateful for the unique skills, experiences, and friendships I gained 
        throughout my college journey, and I look forward to applying what I have learned as I 
        begin my professional career.

        Below, you can explore some of the hobbies and interests I have developed throughout my 
        time in college, as well as learn more about my experiences, projects, and interests.
  
        
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
