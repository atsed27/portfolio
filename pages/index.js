import About from '@/components/About';
import Contact from '@/components/Contact';
import Main from '@/components/Main';
import Project from '@/components/Project';
import Skills from '@/components/Skills';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel.lap</title>
      </Head>

      <Main />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
