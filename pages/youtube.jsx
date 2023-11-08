import Image from 'next/image';
import React from 'react';
import semonunImg from '../public/assets/projects/youtube.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

function youtube() {
  return (
    <div>
      return (
      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={semonunImg}
            alt="/"
          />
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              This app was built using React JS and is hosted on MongoDb.Use my
              RestAPI create by node js and express js , it is some part of
              youtube
            </p>
            <a
              href="https://github.com/fireclint/property-finder"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <button className="px-8 py-2 mt-4">Demo</button>
            </a>
          </div>
          <div className="col-span-4 py-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
            <div className="p-2">
              <p className="pb-2 font-bold text-center">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="flex items-center py-2 text-gray-600">
                  <RiRadioButtonFill className="pr-1" /> React js
                </p>
                <p className="flex items-center py-2 text-gray-600">
                  <RiRadioButtonFill className="pr-1" /> Tailwind
                </p>
                <p className="flex items-center py-2 text-gray-600">
                  <RiRadioButtonFill className="pr-1" /> Javascript
                </p>
                <p className="flex items-center py-2 text-gray-600">
                  <RiRadioButtonFill className="pr-1" /> MongoDb
                </p>
                <p className="flex items-center py-2 text-gray-600">
                  <RiRadioButtonFill className="pr-1" /> Node js
                </p>
              </div>
            </div>
          </div>
          <Link href="/#projects">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
      );
    </div>
  );
}

export default youtube;
