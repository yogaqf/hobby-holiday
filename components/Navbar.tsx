"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
      { name: "Home", href: "/room" },
      { name: "Why Us", href: "/facilities" },
      { name: "About Us", href: "/menu" },
      { name: "Destination", href: "/team" },
      { name: "Contact Us", href: "/about" },
];

export default function Navbar() {
      const [isOpen, setIsOpen] = useState(false);

      return (
            <div className="relative z-40">
                  <nav className="bg-white border-b top-0 left-0 right-0 fixed">
                        <div className="max-w-8xl mx-auto px-4 md:px-10 lg:px-40 xl:px-[200px] 2xl:px-[400px]">
                              <div className="flex items-center justify-between h-30">
                                    <div className="flex items-center justify-evenly">
                                          <Link href="/">
                                                <div style={{ width: '175px', height: '120px', position: 'relative' }}>
                                                      <Image
                                                            src="/logo.jpeg"
                                                            alt="Hobi Holidays"
                                                            layout="fill"
                                                            objectFit="contain"
                                                      />
                                                </div>
                                          </Link>
                                    </div>
                                    <div className="hidden md:block">
                                          <div className="ml-10 flex items-baseline space-x-4">
                                                {navItems.map((item) => (
                                                      <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="text-blue-800 hover:text-primary px-1 py-2 rounded-md text-md font-bold"
                                                      >
                                                            {item.name}
                                                      </Link>
                                                ))}
                                          </div>
                                    </div>
                                    <div className="md:hidden">
                                          <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                                <SheetTrigger asChild>
                                                      <Button variant="ghost" size="icon">
                                                            <Menu className="h-6 w-6" />
                                                            <span className="sr-only">Toggle menu</span>
                                                      </Button>
                                                </SheetTrigger>
                                                <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                                                      <div className="flex flex-col space-y-4 mt-4 mb-4">
                                                            {navItems.map((item) => (
                                                                  <Link
                                                                        key={item.name}
                                                                        href={item.href}
                                                                        className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                                                                        onClick={() => setIsOpen(false)}
                                                                  >
                                                                        {item.name}
                                                                  </Link>
                                                            ))}
                                                      </div>
                                                </SheetContent>
                                          </Sheet>
                                    </div>
                              </div>
                        </div>
                  </nav>
            </div>
      );
}