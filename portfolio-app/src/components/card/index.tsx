import * as Dialog from "@radix-ui/react-dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Modal } from "../modal";

type CardData = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  repositoryUrl: string;
  liveUrl: string;
};

export function Card({
  id,
  title,
  description,
  imageUrl,
  repositoryUrl,
  liveUrl,
}: CardData) {
  return (
    <Dialog.Root>
      <DialogTrigger className="flex flex-col  rounded-md bg-slate-800 text-left p-[1.75rem] gap-2 overflow-hidden relative outline-none  bg-light-500 dark:bg-gray-600  transform transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:transform hover:transition-transform hover:duration-500 focus-visible:2 focus-visible:ring-lime-400">
        <div>
          <img src={imageUrl} alt="" width={500} className="rounded-md" />
        </div>

        <Dialog.Title className="text-xl pt-4 font-Poppins font-semibold text-gray-600 dark:text-primary">
          {title.split(":", 1)}
        </Dialog.Title>
        <Dialog.DialogDescription className="text-gray-600 dark:text-primary text-left">
          {description.substring(0, 50)}...
          <span className="text-purple-800"> Ver mais</span>
        </Dialog.DialogDescription>
      </DialogTrigger>
      <Modal
        id={id}
        key={id}
        title={title}
        description={description}
        imageUrl={imageUrl}
        repositoryUrl={repositoryUrl}
        liveUrl={liveUrl}
      />
    </Dialog.Root>
  );
}
