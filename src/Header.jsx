import { Button } from "./Button";
import { ReactSvg } from "./ReactSvg";
import { ShoppingBasket, User } from "lucide-react";
// import { Icon } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex w-full items-center py-4">
      <h1 className="inline-flex items-center ">
        <ReactSvg size="32" />
        <span className="pl-3 font-bold">React Journey</span>
      </h1>
      <div className="flex items-center ml-auto gap-2">
        <Button variant="ghost">
          <ShoppingBasket size="24" />
        </Button>
        <Button variant="ghost">
          <User size="24" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
