import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function Header() {
  return (
    <header className="flex justify-between py-2 border-b">
      <div className="flex items-center">
        <div className="ml-2 font-semibold">LOGO</div>
        <div className="flex items-center ml-2">
          <ModeToggle />
        </div>
        <div className="ml-6 flex-1 gap-x-3 hidden sm:flex">
          <Input placeholder="Search" className="w-80 " />
        </div>
      </div>
      <div className="ml-2 flex">
        <Button variant="outline">Login</Button>
        <Button className="ml-2">Sign up</Button>
      </div>
    </header>
  );
}

export default Header;
