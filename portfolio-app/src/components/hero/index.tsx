import { GithubLogo, ReadCvLogo } from "@phosphor-icons/react";

import programming from '@assets/programming.svg';
import { TypeAnimationWriter } from "@components/type";

export function Hero() {
  return (
    <section className="grid grid-cols-1 laptop:grid-cols-2 items-center place-items-end">
      <div className="font-Poppins text-white max-w-[22rem] m-auto laptop:max-w-[37.5rem] laptop:w-[37.5rem]">
        <span className="text-green-900 uppercase tracking-widest">
          Web Developer
        </span>
        <h1 className=" text-3xl laptop:text-5xl font-bold py-2">Olá, Eu sou Denilson!</h1>
        <TypeAnimationWriter />
        <p className="py-4 font-light w-[20rem] laptop:w-[34rem]">
          Estudante de sistemas de informação no Instituto Federal de Goiás.
          Especializando-se para desenvolver páginas web com ReactTS e Angular
          17.
        </p>

        <div className="flex gap-6 pt-2">
          <a
            href="https://github.com/Denilson-B-Sousa"
            target="_blank"
            className="inline-flex items-center gap-4 bg-purple-800 py-6 px-5 laptop:px-10 rounded-md hover:shadow-lg hover:shadow-purple-900/40 font-semibold hover:scale-105 transition-all duration-150 uppercase tracking-widest"
          >
            <ReadCvLogo width={24} height={24} />
            <span>Resume</span>
          </a>
          <a
            href="https://www.linkedin.com/in/denilson-bezerra-de-sousa-38b964257/"
            target="_blank"
            className="inline-flex items-center gap-4 py-6 px-5 laptop:px-10 rounded-md bg-light-gray hover:shadow-lg hover:bg-purple-800 hover:shadow-purple-900/40 font-semibold hover:scale-105 transition-all duration-150 uppercase tracking-widest"
          >
            <GithubLogo width={24} height={24} />
            <span>Github</span>
          </a>
        </div>
      </div>

      <div className="hover:animate-pulse-slow hidden laptop:flex">
        <img
          src={programming}
          alt="Ilustração de um ambiente de programação com um monitor, um teclado com mãos digitando, uma xícara com café com fumaça saindo e um mouse"
        />
      </div>
    </section>
  );
}