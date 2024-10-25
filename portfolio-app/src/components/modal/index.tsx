import * as Dialog from "@radix-ui/react-dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { 
  GithubLogo,
  X,
  ArrowSquareOut,
  Globe,
  CaretRight,
  CaretLeft, } from "@phosphor-icons/react"; 
import { Tags } from "../tags";

type ModalData = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  repositoryUrl: string;
  liveUrl: string;
};

export function Modal({
  title,
  description,
  imageUrl,
  repositoryUrl,
  liveUrl,
}: ModalData) {
  return (
    <Dialog.Portal>
      <Dialog.DialogOverlay className="inset-0 fixed bg-black/90 md:bg-black/90" />
      <Dialog.Content className="laptop:flex laptop:flex-row fixed overflow-hidden p-8 inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] laptop:max-w-[75vw] laptop:max-h-[90vh] w-full h-full  md:rounded-md bg-gray-600 my-6 outline-none">
        <ScrollArea.Root className="w-[100%] h-[100%] overflow-hidden m-auto">
          <ScrollArea.Viewport className="w-full h-full relative">
            <DialogClose className="absolute right-0 top-0 z-10 hover:text-light-400 text-light-600 focus-visible:ring-2 focus-visible:ring-green-900 outline-none rounded-md">
              <X width={24} height={24} />
            </DialogClose>
            <div className="flex mobile:hidden gap-4">
              <button className="" title="Anterior" aria-label="Previous">
                <CaretLeft width={24} height={24} color="white" />
              </button>
              <button className=" " title="Próximo" aria-label="Next">
                <CaretRight width={24} height={24} color="white" />
              </button>
            </div>
            <section className="flex gap-6 mt-6">
              <div className="flex flex-col gap-4 px-1 dark:text-primary text-black laptop:w-[45vw] laptop:p-0">
                <img
                  src={imageUrl}
                  alt=""
                  width={600}
                  className="rounded-lg hidden"
                />
                <div className="hidden laptop:flex gap-4 w-[4rem]">
                  <button className="" title="Anterior" aria-label="Previous">
                    <CaretLeft width={24} height={24} color="white" />
                  </button>
                  <button className=" " title="Próximo" aria-label="Next">
                    <CaretRight width={24} height={24} color="white" />
                  </button>
                </div>
                <h4 className="text-3xl font-semibold text-primary">{title}</h4>
                <div className="text-base leading-6">
                  <div className="p-2 px-4 border-l-[0.5px] text-primary  border-purple-500 font-Poppins font-normal text-sm  laptop:flex">
                    <p>{description}</p>
                  </div>
                </div>
                <div className="inline-flex gap-4">
                  <Tags />
                </div>
                <div className="font-extralight text-xs text-primary">
                  JAN 23 · 2024
                </div>
                <a
                  href={repositoryUrl}
                  target="_blank"
                  className="laptop:hidden inline-flex items-center justify-between  w-full p-4 laptop:p-2 rounded-md bg-white text-black uppercase mt-6 mb-2 focus-visible:ring-4 focus-visible:ring-green-900 outline-none"
                >
                  <GithubLogo width={24} height={24} />
                  Repo
                  <ArrowSquareOut width={24} height={24} />
                </a>
                <a
                  href={liveUrl}
                  target="_blank"
                  className="laptop:hidden inline-flex items-center justify-between w-full p-4 laptop:p-2 rounded-md bg-white text-black uppercase mt-2 focus-visible:ring-4 focus-visible:ring-green-900 outline-none"
                >
                  <Globe width={24} height={24} />
                  Live
                  <ArrowSquareOut width={24} height={24} />
                </a>
                <div className="hidden laptop:flex mb-8">
                  <img src={imageUrl} alt="" className="rounded-md" />
                </div>
              </div>
              <div className="border-r-[1px] border-purple-500 hidden laptop:flex"></div>
              <div className="hidden laptop:flex laptop:flex-col laptop:gap-12">
                <div className="border-[1px] border-purple-500 text-light-500 rounded-xl p-4">
                  <h4 className="text-xl font-semibold">Aprendizados:</h4>
                  <ul className="inline-flex flex-col list-inside list-disc font-Poppins font-light text-sm mt-2">
                    <li>Configuração Tailwindcss</li>
                    <li>Responsividade com grid</li>
                    <li>Acessibilidade com outline</li>
                  </ul>
                </div>
                <div className="hidden laptop:flex laptop:flex-col border-[0.5px] text-light-500  border-purple-500 rounded-xl p-4 laptop:h-[13.6rem]">
                  <h4 className="text-xl font-semibold ">Links Importantes:</h4>
                  <a
                    href={repositoryUrl}
                    target="_blank"
                    className="inline-flex items-center justify-between p-2 rounded-md bg-white text-black  mt-4 focus-visible:ring-4 focus-visible:ring-green-900 outline-none max-w-[12rem]"
                  >
                    <GithubLogo />
                    Repositório
                    <ArrowSquareOut />
                  </a>
                  <a
                    href={liveUrl}
                    target="_blank"
                    className="inline-flex items-center justify-between p-2 rounded-md bg-white text-black  mt-4 focus-visible:ring-4 focus-visible:ring-green-900 outline-none max-w-[12rem]"
                  >
                    <Globe />
                    Visualizar
                    <ArrowSquareOut />
                  </a>
                </div>
              </div>
            </section>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
            orientation="vertical"
          >
            <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
          </ScrollArea.Scrollbar>
          <ScrollArea.Scrollbar
            className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
            orientation="horizontal"
          >
            <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner className="bg-blackA5" />
        </ScrollArea.Root>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
