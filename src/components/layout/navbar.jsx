import Link from "next/link";
import { useState } from "react";
import { MixpanelTracking } from "../../utils/mixpanel";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import { ChevronDown } from 'lucide-react';
import { cn } from "@/utils/helper";

export default function TopNavbar() {
    const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
    const [isLoading, setIsLoading] = useState(false);
    const loginClick = () => {
        setIsLoading(true);
        MixpanelTracking.getInstance().track("Login button clicked", {
            description: "User clicked on login button",
        });
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUseCase, setIsUseCase] = useState(false);

    const menuItems = [
        { name: "Food", link: '/food-photography' },
        { name: "Furniture", link: '/furniture-photography' },
        { name: "Pricing", link: '/pricing' },
        { name: "Login", link: 'https://app.unstudio.ai/' }
    ];
    return (
        <Navbar maxWidth='full' className="bg-black relative py-2" onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent className=" md:pl-8 lg:pl-14">

                <NavbarBrand>
                    <Link href="/">
                        <div className="flex items-center space-x-2 text-2xl font-medium  text-gray-100">
                            <span>
                                <img
                                    src="/logo_unstudio3.png"
                                    alt="N"
                                    width="32"
                                    height="32"
                                    className="w-8"
                                />
                            </span>
                            <span className="font-poppin">Unstudio</span>
                        </div>
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden text-white"
            />
            <NavbarContent className="hidden sm:flex gap-12  md:pr-8 lg:pr-14" justify="end" >
                <NavbarItem
                    onMouseLeave={() => setIsUseCase(false)}
                    onMouseEnter={() => setIsUseCase(true)}
                    className="relative cursor-pointer flex gap-1 items-center">
                    Use-Cases <ChevronDown className={cn(isUseCase ? "rotate-180 transition-all" : "rotate-0 transition-all")} size={20} />
                    {isUseCase && <div onMouseEnter={() => setIsUseCase(true)} className="absolute -bottom-44 bg-black min-w-28 py-3 flex flex-col gap-2   rounded-md -right-1 z-50">
                        <p className="hover:bg-primary-green hover:text-black cursor-pointer py-1 pl-6">
                            <Link href="/food-photography">
                                Food
                            </Link>
                        </p>
                        <p className="hover:bg-primary-green hover:text-black cursor-pointer py-1 pl-6">
                            <Link href="/furniture-photography">
                                Furniture
                            </Link>
                        </p>
                        <p className="hover:bg-primary-green hover:text-black cursor-pointer py-1 pl-6">
                            <Link href="/cosmetic-photography">
                                Cosmetics
                            </Link>
                        </p>
                        <p className="hover:bg-primary-green hover:text-black cursor-pointer py-1 pl-6">
                            <Link href="/jewellery-photography">
                                Jewellery
                            </Link>
                        </p>
                    </div>}
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/background-removal" className="font-poppin">
                        Background Remover
                    </Link>

                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/pricing" className="font-poppin">
                        Pricing
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/blog" className="font-poppin">
                        Blog
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link
                        href="https://app.unstudio.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            onClick={loginClick}
                            // style={{ background: "linear-gradient(180deg, rgba(5,246,174,0.3) 0%, rgba(5,246,174,0.7) 100%)" }}
                            className=" relative flex items-center justify-center bg-primary-green bg-opacity-30 text-white rounded-lg  overflow-hidden"
                        >
                            <div className="font-poppin flex items-center justify-center bg-black rounded-lg h-[calc(100%-2px)] w-[calc(100%-2px)]  absolute top-px z-30 left-px">
                                Login
                            </div>
                            <span className="absolute -top-0 left-[1.125rem] h-px w-[calc(100%-1.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                            <span className="absolute -top-0 left-0 h-px w-[calc(100%-1rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                            <span className="absolute -top-0 right-0 h-px w-[calc(100%-6.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                            <span className="absolute -bottom-0 left-0 h-[80%] opacity-60 w-px bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                            <span className="absolute -bottom-0 right-0 h-[80%] opacity-60 w-px bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-1.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                            <span className="absolute -bottom-0 left-0 h-px w-[calc(100%-1rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                            <span className="absolute -bottom-0 right-0 h-px w-[calc(100%-6.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                        </Button>
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="bg-black pt-10 text-white">

                <Link
                    className="w-full font-poppin"
                    href={'/pricing'}
                    size="lg"
                >
                    <NavbarMenuItem className="border-b border-gray-500 pb-4 pt-2" onClick={() => setIsMenuOpen(false)}>
                        Pricing
                    </NavbarMenuItem>
                </Link>
                <Link

                    className="w-full font-poppin"
                    href={'https://app.unstudio.ai/'}
                    size="lg"
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                >
                    <NavbarMenuItem className="border-b w-full border-gray-500 pb-4 pt-2" onClick={() => setIsMenuOpen(false)}>
                        Login
                    </NavbarMenuItem>
                </Link>
                <Link      className="w-full font-poppin"
                    href={'https://app.unstudio.ai/'}
                    size="lg"
                    target={"_blank"}
                    rel={"noopener noreferrer"}>

                    <NavbarMenuItem className="border-b w-full border-gray-500 pb-4 pt-2" onClick={() => setIsMenuOpen(false)}>
                        Blog
                    </NavbarMenuItem>
                    </Link>
                <Link     className="w-full font-poppin"
                href={'/background-removal'}
                size="lg"
                target={"_blank"}
                rel={"noopener noreferrer"}>
                    <NavbarMenuItem className="border-b w-full border-gray-500 pb-4 pt-2" onClick={() => setIsMenuOpen(false)}>
                        Background Remover
                    </NavbarMenuItem>
                </Link>


                <NavbarMenuItem className="border-b border-gray-500 pb-4 pt-2 cursor-pointer" onClick={() => setIsUseCase((prev) => !prev)}>
                    <div className="flex items-center justify-between">
                        Use-Cases  <ChevronDown className={cn(isUseCase ? "rotate-180 transition-all" : "rotate-0 transition-all")} size={20} />
                    </div>
                    {isUseCase && <div className="bg-black w-full py-3 flex flex-col gap-2 ">
                        <Link href="/food-photography">
                            <p onClick={() => setIsMenuOpen(false)} className=" cursor-pointer py-1 pl-6">
                                Food
                            </p>
                        </Link>
                        <Link href="/furniture-photography">
                            <p onClick={() => setIsMenuOpen(false)} className="cursor-pointer py-1 pl-6">
                                Furniture
                            </p>
                        </Link>
                        <Link href="/cosmetic-photography">
                            <p onClick={() => setIsMenuOpen(false)} className="cursor-pointer py-1 pl-6">
                                Cosmetics
                            </p>
                        </Link>
                        <Link href="/jewellery-photography">
                            <p onClick={() => setIsMenuOpen(false)} className="cursor-pointer py-1 pl-6">
                                Jewellery
                            </p>
                        </Link>
                    </div>}
                </NavbarMenuItem>

            </NavbarMenu>


            <div className="w-full absolute -bottom-2 h-px left-0 bg-black  flex justify-end items-end mx-auto" >
                <div className="w-full  inset-x-0 h-px  mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-primary-green to-transparent" />
            </div>
        </Navbar>
    );
}


