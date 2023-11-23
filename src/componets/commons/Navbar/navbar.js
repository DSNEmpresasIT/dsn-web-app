"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import * as Icon from "react-feather";
import { PAGES } from "@/app/Data/pages";

const NavBarLinks = [
  {
    name: 'Home',
    href: PAGES.HOME,
  },
  {
    name: 'Marketing & Redes',
    href: PAGES.MARKETING,
  }, 
  {
    name: 'Consultora',
    href: PAGES.CONSULTING
  },
  {
    name: 'Tecnología',
    href: '',
    subLinks: [
      {
        name: 'Desarrollo Web & Software',
        href: PAGES.SOFTWARE_DEVELOPMENT
      },
      {
        name: 'Infraestructura',
        href: PAGES.INFRAESTRUCTURE
      }
    ]
  },
  {
    name: 'Contacto',
    href: PAGES.CONTACT
  }
]

export default function Navbar({ navClass = undefined, navJustify = undefined}) {
  const [isMenu, setisMenu] = useState(false);
  const [navbarTop, setNavbarTop] = useState(false);

  const toggleMenu = () => {
    setisMenu(!isMenu);
    if (document.getElementById("navigation")) {
      const anchorArray = Array.from(
        document.getElementById("navigation").getElementsByTagName("a")
      );
      anchorArray.forEach((element) => {
        element.addEventListener("click", (elem) => {
          const target = elem.target.getAttribute("href");
          if (target !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        });
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", windowScroll);
    }
    activateMenu();
    window.scrollTo(0, 0);
  }, []);

  function windowScroll() {
    setNavbarTop(
      document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50
    );

    const mybutton = document.getElementById("back-to-top");
    if (mybutton != null) {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        mybutton.classList.add("flex");
        mybutton.classList.remove("hidden");
      } else {
        mybutton.classList.add("hidden");
        mybutton.classList.remove("flex");
      }
    }
  }

  const activateMenu = () => {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }
      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");

        var immediateParent = getClosest(matchingMenuItem, "li");

        if (immediateParent) {
          immediateParent.classList.add("active");
        }

        var parent = getClosest(immediateParent, ".child-menu-item");
        if (parent) {
          parent.classList.add("active");
        }

        var parent = getClosest(parent || immediateParent, ".parent-menu-item");

        if (parent) {
          parent.classList.add("active");

          var parentMenuitem = parent.querySelector(".menu-item");
          if (parentMenuitem) {
            parentMenuitem.classList.add("active");
          }

          var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        } else {
          var parentOfParent = getClosest(
            matchingMenuItem,
            ".parent-parent-menu-item"
          );
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        }
      }
    }
  };

  const getClosest = (elem, selector) => {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(
              s
            ),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  };

  return (
    <>
      <nav
        id="topnav"
        className={`${navbarTop ? "nav-sticky" : ""} ${
          navClass === "nav-light"
            ? ""
            : navClass === "nav-sticky"
            ? "bg-white dark:bg-slate-900"
            : ""
        } defaultscroll font-nunito`}
      >
        <div className="container relative">
          {navClass === "nav-light" ? (
            <Link href="/" className="logo">
              <span className="inline-block dark:hidden">
                <Image
                  src="/images/logo-dark.png"
                  className="l-dark"
                  height={24}
                  width={138}
                  alt=""
                />
                <Image
                  src="/images/logo-light.png"
                  className="l-light"
                  height={24}
                  width={138}
                  alt=""
                />
              </span>
              <Image
                src="/images/logo-light.png"
                height={24}
                width={138}
                className="hidden dark:inline-block"
                alt=""
              />
            </Link>
          ) : (
            <Link href="/" className="logo">
              <Image
                src="/images/logo-dark.png"
                height={24}
                width={138}
                className="inline-block dark:hidden"
                alt=""
              />
              <Image
                src="/images/logo-light.png"
                height={24}
                width={138}
                className="hidden dark:inline-block"
                alt=""
              />
            </Link>
          )}
          <div className="menu-extras">
            <div className="menu-item">
              <Link
                href="#"
                className={`navbar-toggle ${isMenu ? "open" : ""}`}
                id="isToggle"
                onClick={() => toggleMenu()}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>
          <div id="navigation" style={{ display: isMenu ? "block" : "none" }}>
            <ul className={`navigation-menu ${navClass} ${navJustify}`}>
              {
                NavBarLinks.map((link, index) => (
                  <li key={`${index}-nav-bar-key`} className={link.subLinks ? "has-submenu parent-parent-menu-item" : ""}>
                    <Link href={link.href}>
                      {link.name} {" "} {link.subLinks && (<span className="menu-arrow"></span>)}
                    </Link>
                    {
                      link.subLinks && (
                        <ul className="submenu">
                          {
                            link.subLinks.map((subLink, index) => (
                              <li key={`${index}-sublink-nav-key`}>
                                <Link href={subLink.href} className="sub-menu-item">
                                  {subLink.name}
                                </Link>
                              </li>
                            ))
                          }
                        </ul>
                      )
                    }
                  </li>
                  )
                )
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
