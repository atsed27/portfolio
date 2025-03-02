import Image from "next/image";
import React from "react";
import HtmlImg from "../public/assets/skills/html.png";
import css from "../public/assets/skills/css.png";
import javaS from "../public/assets/skills/javascript.png";
import node from "../public/assets/skills/node.png";
import aws from "../public/assets/skills/aws.png";
import next from "../public/assets/skills/nextjs.png";
import docker from "../public/assets/skills/docker.png";

function Skills() {
  return (
    <div id="skills" className="w-full p-2 lg:h-screen ">
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
        </div>
      </div>
    </div>
  );
}

export default Skills;
