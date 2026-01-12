"use client";
import { ModeToggle } from "@/components/common/ModeToggle";
import { BellIcon, PhoneIcon } from "@/components/icons";
import { MENU_ITEMS } from "@/components/layouts/contants";
import { NavLink } from "@/components/layouts/Header/NavLink";
import {
  Button,
  Container,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui";
import { useAppRouter } from "@/hooks/useAppRouter";
import useDidUpdateEffect from "@/hooks/useDidUpdateEffect";
import { Routes } from "@/lib/enum/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ChevronDown, Menu, X } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimateButton, AnimateDiv } from "@/components/common/Animate";
import { motion } from "motion/react";

// Mobile Menu Item Component
const MobileMenuItem = ({
  item,
  onClose,
}: {
  item: (typeof MENU_ITEMS)[0];
  onClose: () => void;
}) => {
  const hasSubTabs = item.children && item.children.length > 0;
  const [openSubmenu, setOpenSubmenu] = useState(false);

  return (
    <div key={item.key} className="space-y-0">
      {hasSubTabs ? (
        <button
          onClick={() => setOpenSubmenu(!openSubmenu)}
          className="w-full flex items-center justify-between px-4 py-3.5 text-white font-semibold hover:bg-white/15 rounded-lg transition-all duration-200 group"
        >
          <span className="group-hover:translate-x-1 transition-transform duration-200">
            {item.label}
          </span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              openSubmenu ? "rotate-180" : ""
            }`}
          />
        </button>
      ) : (
        <Link
          href={`${item.key}`}
          onClick={onClose}
          className="block px-4 py-3.5 text-white font-semibold hover:bg-white/15 hover:translate-x-1 rounded-lg transition-all duration-200"
        >
          {item.label}
        </Link>
      )}

      {hasSubTabs && openSubmenu && (
        <div className="pl-4 space-y-1 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
          {item.children.map((subTab) => (
            <Link
              key={subTab.key}
              href={`${subTab.key}`}
              onClick={onClose}
              className="block px-4 py-2.5 text-blue-100 font-medium hover:bg-white/15 hover:text-white hover:translate-x-1 rounded-lg transition-all duration-200 text-sm"
            >
              {subTab.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export const Header = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(() => {
    const firstSegment = `/${pathname.split("/")[1]}`;
    return firstSegment === "/" ? Routes.HOME : firstSegment;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const route = useAppRouter();
  const isHome = pathname === "/";

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  useDidUpdateEffect(() => {
    const firstSegment = `/${pathname.split("/")[1]}`;
    setActive(firstSegment === "/" ? Routes.HOME : firstSegment);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all bg-[#0B1220]  duration-500 ${
          isScrolled
            ? "backdrop-blur-xl shadow-2xl"
            : isHome
              ? "!bg-transparent"
              : ""
        }`}
        ref={ref}
      >
        <Container className="py-0">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Premium Design */}
            <AnimateDiv
              initial={{ opacity: 0.8, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href={Routes.HOME}
                aria-label="Trở về trang chủ"
                className="flex items-center gap-3 flex-shrink-0 group"
              >
                <div className="relative transition-all duration-300 group-hover:scale-110">
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-secondary rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-secondary rounded-full blur-lg opacity-50 transition-opacity duration-300  group-hover:opacity-0" />
                  </>
                  <Image
                    src="/logo_header.png"
                    alt="Logo"
                    priority
                    quality={100}
                    width={120}
                    height={72}
                    unoptimized
                    className="relative h-15 sm:h-18 w-auto"
                  />
                </div>
              </Link>
            </AnimateDiv>

            {/* Desktop Navigation - Enhanced */}
            <motion.nav
              className="hidden lg:flex items-center gap-8"
              initial={{ opacity: 0.8, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {MENU_ITEMS.map((item) => {
                const hasSubTabs = item.children && item.children.length > 0;

                if (hasSubTabs) {
                  return (
                    <div key={item.key}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="relative">
                            <NavLink
                              href={`${item.key}`}
                              isActive={active === item.key}
                            >
                              <span className="flex items-center gap-1">
                                {item.label}
                                <ChevronDown size={14} className="opacity-60" />
                              </span>
                            </NavLink>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent
                          side="bottom"
                          sideOffset={16}
                          className="z-[1000] w-max rounded-xl bg-white shadow-2xl border border-blue-100 p-2 animate-in fade-in slide-in-from-top-2"
                        >
                          <div className="py-1 min-w-max">
                            {item.children.map((subTab) => (
                              <Link
                                key={subTab.key}
                                href={`${subTab.key}`}
                                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-200 whitespace-nowrap first:rounded-t-lg last:rounded-b-lg hover:translate-x-1"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subTab.label}
                              </Link>
                            ))}
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  );
                }

                return (
                  <AnimateDiv key={item.key}>
                    <NavLink
                      href={`${item.key}`}
                      isActive={active === item.key}
                    >
                      {item.label}
                    </NavLink>
                  </AnimateDiv>
                );
              })}
            </motion.nav>

            {/* Right Actions - Premium Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <AnimateDiv
                initial={{ opacity: 0.8, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex-1 group"
              >
                <a href="tel:0433263105">
                  <AnimateDiv
                    whileHover="hover"
                    initial="initial"
                    variants={{}} // cần để button có state để truyền xuống
                    // className="w-full hidden lg:flex  gap-2 items-center bg-white text-primary font-semibold hover:bg-blue-50 hover:shadow-2xl transition-transform duration-300 active:scale-95 hover:scale-105 px-4 py-1.5 text-sm sm:text-base rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    style={{ originX: 0.5, originY: 0.5 }}
                  >
                    <Button className="rounded-lg hidden lg:flex hover:shadow-2xl transition-transform duration-300 active:scale-95 hover:scale-105">
                      <AnimateDiv
                        variants={{
                          initial: { rotate: 0 },
                          hover: {
                            rotate: [0, 15, -15, 10, -10, 0],
                            transition: { duration: 0.5 },
                          },
                        }}
                      >
                        <PhoneIcon className="[&_path]:stroke-white size-5 transition-all " />
                      </AnimateDiv>
                      <span className="text-white">0433263105</span>
                    </Button>
                  </AnimateDiv>
                </a>
              </AnimateDiv>

              <AnimateDiv
                initial={{ opacity: 0.8, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="group flex-1"
              >
                <AnimateButton
                  whileHover="hover"
                  initial="initial"
                  variants={{}} // cần để button có state để truyền xuống
                  className="w-full hidden lg:flex flex-1 gap-2 items-center bg-white  font-semibold hover:bg-blue-50 hover:shadow-2xl transition-transform duration-300 active:scale-95 hover:scale-105 px-4 py-1.5 text-sm sm:text-base rounded-lg group bg-gradient-to-r from-orange-500 to-red-500 text-white"
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  style={{ originX: 0.5, originY: 0.5 }}
                  onClick={() => {
                    route.push(Routes.BOOKING);
                  }}
                >
                  <AnimateDiv
                    variants={{
                      initial: { rotate: 0 },
                      hover: {
                        rotate: [0, 15, -15, 10, -10, 0],
                        transition: { duration: 0.5 },
                      },
                    }}
                  >
                    <BellIcon className="size-5" />
                  </AnimateDiv>
                  <span>Book now</span>
                </AnimateButton>
              </AnimateDiv>

              {/* Mobile Menu Button - Premium Style */}
              <AnimateButton
                initial={{ opacity: 0.8, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.55 }}
                onClick={toggleMobileMenu}
                className={
                  "lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-primary hover:bg-primary/20 transition-all duration-200 active:bg-primary/30"
                }
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 transition-transform duration-300" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform duration-300" />
                )}
              </AnimateButton>
            </div>
          </div>
        </Container>

        {/* Mobile Navigation - Premium Design */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 bg-gradient-to-b from-primary/98 to-primary/95 backdrop-blur-xl animate-in slide-in-from-top-2 duration-300">
            <div className="px-4 sm:px-6 py-6 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
              {MENU_ITEMS.map((item) => (
                <MobileMenuItem
                  key={item.key}
                  item={item}
                  onClose={() => setIsMobileMenuOpen(false)}
                />
              ))}

              {/* Mobile Action Buttons */}
              <div className="pt-6 border-t border-white/20 space-y-3 mt-4">
                <a href="tel:0433263105" className="block">
                  <Button className="w-full flex gap-2 bg-white text-primary font-semibold hover:bg-blue-50 transition-all duration-200 py-3 rounded-lg shadow-md">
                    <PhoneIcon className="[&_path]:stroke-primary size-5" />
                    <span className="text-primary">0433263105</span>
                  </Button>
                </a>
                <Button
                  onClick={() => {
                    route.push(Routes.BOOKING);
                  }}
                  className="w-full flex gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:shadow-lg transition-all duration-200 py-3 rounded-lg"
                >
                  <BellIcon className="size-5" />
                  <span>Book now</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacing untuk fixed header */}
      <div className="h-20" />
    </>
  );
};
