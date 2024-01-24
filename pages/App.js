import Image from 'next/image';
import React from 'react';
import TreGire from '../public/assets/projects/tregre.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const TreGre = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={TreGire}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="mb-2">Project</p>
          <h5>Overview</h5>

          <p>
            This web app was built using React JS ,Tailwind Css for client side
            and Express js for server side use mongodb fro database is hosted on
            Vercel . Users are able to search different Job to retrieve a list
            of active Job currently form posts. You will be able to view detail
            Job and apply fro free . User authentication is require fro apply
            job and upload you resume and cover letter
          </p>
          <p className="text-blue-400">
            it will be integration for business purpose also with chapa ,paypal
            and stipe for payment{' '}
          </p>
          <a
            href="https://github.com/atsed27/Tre_Gre"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://tre-gre.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
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
                <RiRadioButtonFill className="pr-1" /> Tailwind css
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>

              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Node js
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Express js
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> MongoDB
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
};

export default TreGre;
