import Image from 'next/image';
import React from 'react';
import AboutImg from '../public/portiflo.jpg';
function About() {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other Build back-end RestAPI and UI/UX
            designer. I’m passionate about learning new technologies and
            understand there is more than one way to accomplish a task.I am a
            quick learner and can pick up new tech stacks as needed. I believe
            that being a great developer is not using one specific language, but
            choosing the best tool for the job.
          </p>
          <p className="py-2 text-gray-600">
            Though I am most proficient in building front-end applications using
            HTML, CSS, Java,Python,Javascript,Typescript, and React,wordPress,
            and also I am proficient in building Back-end applications using
            Node Js,Express Js,Django, and Flask , and use different Database
            technology like MongoDb,Mysql,Prisma.
          </p>
          <p className="py-2 text-gray-600">
            I started web development in 2018 first year computer Engineering .
            I have experience working directly with clients and taking mock
            wireframes all the way to deployed applications. In my spare time I
            run Code Commerce
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
