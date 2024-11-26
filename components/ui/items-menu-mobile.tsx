import { Menu } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent>
        <Link href="/category/cafe-molido" className="block">
          Cafe Molido
        </Link>
        <Link href="/category/cafe-grano" className="block">
          Granos de Cafe
        </Link>
        <Link href="/category/capsulas" className="block">
          Capasulas
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default ItemsMenuMobile;
