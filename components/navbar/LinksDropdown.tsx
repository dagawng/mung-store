import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { AlignLeft } from "lucide-react";
import Link from "next/link";
import { links } from "@/utils/links";

export default function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="flex gap-4 max-w-[100px] "
        >
          <AlignLeft className="w-6 h-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20" align="start" sideOffset={10}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="capitalize w-full">
            <DropdownMenuItem>{link.label}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
