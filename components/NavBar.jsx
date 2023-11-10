import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

function NavBar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg] = useState('#ecf0f3');
  const [linkColor] = useState('#1f2937');
  const navHandle = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const shadowHandle = () => {
      if (window.scrollY > 90) {
        setShadow(true);
      } else {
        setShadow(true);
      }
    };
    window.addEventListener('scroll', shadowHandle);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed  w-full h-20 shadow-xl z-[100]'
          : 'fixed  w-full h-20  z-[100]'
      }
    >
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        <Link href={'/'}>
          <h2 className="text-blue-400 font-mono underline-offset-4 underline ">
            Dani
          </h2>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 uppercase hover:border-b">about</li>
            </Link>
            <Link href={'/#skills'}>
              <li className="ml-10 uppercase hover:border-b">skills</li>
            </Link>
            <Link href="/#project">
              <li className="ml-10 uppercase hover:border-b">projects</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 uppercase hover:border-b">contact</li>
            </Link>
          </ul>
          <div
            style={{ color: `${linkColor}` }}
            onClick={navHandle}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? ' fixed top-0 left-0 w-[75%] sm:w-[65%] md:w-[45] bg-[#ecf0f3] p-10 ease-in duration-500 h-screen'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-blue-400 font-mono  ">Dani</h2>
              <div
                onClick={navHandle}
                className="p-3 text-lg rounded-full shadow-lg cursor-pointer shadow-gray-400 "
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="my-4 border-b border-gray-300">
              <p className="py-4 w-[80%] md:w-[90%]">
                Let build something legendary together
              </p>
            </div>
            <div className="flex flex-col py-4">
              <ul className="">
                <Link onClick={navHandle} href={'/'}>
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link onClick={navHandle} href={'/#about'}>
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link onClick={navHandle} href={'/#skills'}>
                  <li className="py-4 text-sm">Skills</li>
                </Link>
                <Link onClick={navHandle} href={'/#project'}>
                  <li className="py-4 text-sm">Project</li>
                </Link>
                <Link onClick={navHandle} href={'/#contact'}>
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="ml-[-30px]">
            <p className="uppercase">Let connect us</p>
            <div className="flex items-center justify-between w-full my-4 sm:w-[80%]">
              <a href="https://www.linkedin.com/in/daniel-nigatu-b5585123a/">
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ">
                  <FaLinkedin />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/daniel-nigatu-b5585123a/">
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ">
                  <FaGithub />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/daniel-nigatu-b5585123a/">
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ">
                  <AiOutlineMail />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/daniel-nigatu-b5585123a/">
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ">
                  <FaTelegram />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
