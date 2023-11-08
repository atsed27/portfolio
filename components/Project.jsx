import React from 'react';
import semonunImg from '../public/assets/projects/semonun.png';
import yoututeImg from '../public/assets/projects/youtube.png';

import ProjectItems from './ProjectItems';

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
            title="Semonun App"
            backgroundImg={semonunImg}
            projectUrl="/semonun"
            tech="NextJS,ExpressJs"
          />
          <ProjectItems
            title="Youtube clone"
            backgroundImg={yoututeImg}
            projectUrl="/youtube"
            tech="ReactJS,ExpressJs"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
