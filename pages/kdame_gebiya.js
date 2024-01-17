import Image from 'next/image';
import React from 'react';
import kdame from '../public/assets/projects/kdame.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const KdameGebiya = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={kdame}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="mb-2">Project</p>
          <h5>Overview</h5>

          <p>
            This app was built using React JS by Next Js for both client side
            and server side use mongodb for database is hosted on Vercel . Users
            are able to search different Shop to retrieve a list of active
            products currently for sale. You will be able to view detail Product
            information. User authentication is available so you can signup and
            signIn to your account with an email address or you went in order to
            save your favorite product and use React context.
          </p>
          <p className="text-blue-500">
            It integration also with chapa and paypal for payment of products
          </p>
          <a
            href="https://github.com/atsed27/Kidame_gebiya"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://kidame-gebiya.vercel.app/"
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
                <RiRadioButtonFill className="pr-1" /> Next js
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> React js
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Tailwind css
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>

              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Node js
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

export default KdameGebiya;
