import Image from 'next/image';
import React from 'react';
import App from '../public/assets/projects/Hospital.jpg';
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
          src={App}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="mb-2">Project</p>
          <h5>Overview</h5>

          <p>
            is a Andriod App that helps manage the information related to
            healthcare and aids in the job completion of healthcare providers
            effectively. They manage the data related to all departments of
            healthcare such as, Clinical Management,Financial Management
            Laboratory Management Inpatient Management.
          </p>

          <a
            href="https://github.com/atsed27/Hospital-Manag"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>
        <div className="col-span-4 py-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Java
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
