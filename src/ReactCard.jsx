import { BookOpenText, PlusCircle } from "lucide-react";
import { Button, buttonVariants } from "./Button";
import { ReactSvg } from "./ReactSvg";
import Link from "next/link";

export const ReactCard = ({ card, hideCategory }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border p-4 shadow transition-colors hover:border-gray-300 hover:bg-gray-200">
      <div className="flex w-full items-center gap-2">
        <ReactSvg size={24} />
        <span className="font-bold pl-3">React</span>
      </div>
      <p className="line-clamp-1 w-full overflow-hidden text-center text-lg font-extrabold">
        {card.name}
      </p>
      <div className="flex w-full gap-2 items-center">
        {hideCategory ? null : (
          <p className="line-clamp-1 text-start text-xs text-gray-400">
            {card.category}
          </p>
        )}

        <Link
          href={card.url}
          className={buttonVariants({
            variant: "secondary",
            className: "ml-auto",
          })}
        >
          <BookOpenText size={16} />
        </Link>
        <Button variant="secondary">
          <PlusCircle size={16} />
        </Button>
      </div>
    </div>
  );
};
