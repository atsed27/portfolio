import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function ProjectItems({ title, tech, backgroundImg, projectUrl }) {
  return (
    <div>
      <div className="relative flex items-center justify-center w-44 h-auto p-4 shadow-xl rounded-xl shadow-gray-400 group hover:bg-gradient-to-r from-[#5651e3] to-[#709dff]">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImg}
          alt="/"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl tracking-wider text-center text-white">
            {title}
          </h3>
          <p className="pt-2 pb-4 text-center text-white">{tech}</p>
          <Link href={projectUrl}>
            <p className="text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectItems;
