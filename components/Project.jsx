import React from 'react';
import semonunImg from '../public/assets/projects/gebiya.png';
import yoututeImg from '../public/assets/projects/youtube.png';
import TreGre from '../public/assets/projects/tregre.png';
import kdame from '../public/assets/projects/kdame.png';
import ProjectItems from './ProjectItems';
import Event from '../public/assets/projects/semonun.png';
import Andr from '../public/assets/projects/app.jpg';

function Project() {
  return (
    <div id="project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Project
        </p>
        <h2>What I`ve Built</h2>
        <div className="grid gap-8 md:grid-cols-2 ">
          <ProjectItems
            title="Event Discovery"
            backgroundImg={Event}
            projectUrl="/event"
            tech="Next Js,Tailwind Css"
          />
          <ProjectItems
            title="MERN stack E-commerce web app"
            backgroundImg={semonunImg}
            projectUrl="/semonun"
            tech="ReactJs,ExpressJs"
          />

          <ProjectItems
            title="Youtube clone"
            backgroundImg={yoututeImg}
            projectUrl="/youtube"
            tech="ReactJS,ExpressJs,"
          />
          <ProjectItems
            title="Next js 13 Full-stack E-commerce web app"
            backgroundImg={kdame}
            projectUrl="/kdame_gebiya"
            tech="ReactJs,Next Js"
          />
          <ProjectItems
            title="Online Job seekers web app"
            backgroundImg={TreGre}
            projectUrl="/tregre"
            tech="ReactJS,ExpressJs,Tailwind Css"
          />
          <ProjectItems
            title="Andriod App app"
            backgroundImg={Andr}
            projectUrl="/App"
            tech="ReactJS,ExpressJs,Tailwind Css"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
