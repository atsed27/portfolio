import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa';

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <p className="text-lg tracking-widest text-gray-600 ">
            Let’s build something together new
          </p>
          <h2 className="py-4 text-gray-700">
            Hy, I’m <span className="text-[#5651e1]">Dani</span>
          </h2>
          <h2 className="py-2text-gray-700 "> A Full-Stack Developer</h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications and
            Build back-end RestAPI and integrating both of them technologies.
          </p>
          <div className="w-[25%] m-auto flex items-center justify-center">
            <Link
              href="/Daniel.pdf"
              target={'_blank'}
              className="flex items-center text-white  bg-black
               text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-black border-2 border-solid border-transparent
               hover:border-dark "
              download={true}
            >
              Resume
            </Link>
          </div>
          <div className="flex items-center justify-between m-auto max-w-[330px] py-4">
            <a href="https://www.linkedin.com/in/daniel-nigatu-b5585123a/">
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/atsed27">
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ">
                <FaGithub />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/daniel-nigatu-b5585123a/">
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ">
                <AiOutlineMail />
              </div>
            </a>
            <a href="https://web.telegram.org/k/#@dani_027">
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ">
                <FaTelegram />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
