import Image from 'next/image';
import React from 'react';
import HtmlImg from '../public/assets/skills/html.png';
import css from '../public/assets/skills/css.png';
import figma from '../public/assets/skills/figma.png';
import tail from '../public/assets/skills/tailwind.png';
import java from '../public/assets/skills/java.jpg';
import javaS from '../public/assets/skills/javascript.png';
import node from '../public/assets/skills/node.png';
import aws from '../public/assets/skills/aws.png';
import mongo from '../public/assets/skills/mongo.png';
import fir from '../public/assets/skills/firebase.png';
import react from '../public/assets/skills/react.png';
import reactNative from '../public/assets/skills/reactNative.jpg';
import next from '../public/assets/skills/nextjs.png';
import github from '../public/assets/skills/github1.png';
import postgres from '../public/assets/skills/postgres.png';
import prisma from '../public/assets/skills/prisma.jpg';
import docker from '../public/assets/skills/docker.png';

function Skills() {
  return (
    <div id="skills" className="w-full p-2 lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">what I can do</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={HtmlImg} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>Html</h4>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={css} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>Css</h4>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={figma} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>Figma </h4>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={tail} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>tailwind css</h4>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={java} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>Java</h4>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={javaS} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>JavaScript</h4>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={react} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>React</h4>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src={reactNative}
                  alt="/"
                  width={64}
                  height={64}
                  className="rounded-3xl object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>React Native</h4>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={node} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>Node Js</h4>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={aws} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>AWS</h4>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={next} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>Next js</h4>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={mongo} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>MongoDB</h4>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={fir} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>Firebase</h4>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={postgres} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>Postgres</h4>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={prisma} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>Prisma</h4>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image src={github} alt="/" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>Github</h4>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src={docker}
                  alt="/"
                  width={68}
                  height={68}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4>Docker</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
