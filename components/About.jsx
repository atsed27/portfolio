import Image from 'next/image';
import React from 'react';
import AboutImg from '../public/portiflo.jpg';
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
            I specialize in building Full Stack Web And Application development
            and UX/UI designing .I’m passionate about learning new technologies
            and understand there is more than one way to accomplish a task.I am
            a quick learner and can pick up new tech stacks as needed. I believe
            that being a great developer is not using one specific language, but
            choosing the best tool for the job.
          </p>
          <p className="py-2 ">
            Though I am most proficient in building front-end applications using
            HTML, CSS,Tailwind Css Javascript,Typescript, and React,wordPress,
            and also I am proficient in building Back-end applications using
            Node Js,Express Js,Django, and Flask , and And for mobile
            Application development using React Native . As you know I use above
            technology is required database ,so I have use different database
            different Database like Relational Or Non Relation Database
            technology like MongoDb,Mysql,Prisma,PostgresSql.
          </p>
          <p className="py-2 ">
            I started web development in 2018 first year computer Engineering .
            I have experience working directly with clients and taking mock
            wireframes all the way to deployed applications.
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
