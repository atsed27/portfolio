import Image from "next/image";
import React from "react";
import AboutImg from "../public/portiflo.jpg";
function About() {
  return (
    <div
      id="about"
      className="flex items-center w-full p-2 py-16 md:h-screen bg-black/60 text-white"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#51e56a]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2">
            I specialize in Full Stack Web and Application Development, along
            with UX/UI design. I’m passionate about learning new technologies
            and understand that there is more than one way to accomplish a task.
            I am a quick learner and can adapt to new tech stacks as needed. I
            believe that being a great developer is not about using a single
            language, but about choosing the best tool for the job.
          </p>
          <p className="py-2">
            While I am most proficient in building front-end applications using
            HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React, and I also
            have expertise in back-end development with Node.js, Express.js,
            Golang. Additionally, for mobile application development, I work
            with React Native. Since these technologies require databases, I
            have experience with both relational and non-relational database
            technologies, including MongoDB and PostgreSQL.
          </p>
          <p className="py-2">
            I began my web development journey in 2018 during my first year of
            studying Computer Engineering. I have experience working directly
            with clients, transforming mock wireframes into fully deployed
            applications.
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105">
          <Image
            className="rounded-xl"
            src={AboutImg}
            alt="/"
            height={200}
            width={300}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
