import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";

import { Logo } from "../assets";
import { Button } from "./Button";

export function Navbar() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [scrollAtTop, setScrollAtTop] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("");

  const sectionList = ["home", "benefits", "our_classes", "contact_us"];

  function handleScroll() {
    window.scrollY === 0 ? setScrollAtTop(true) : setScrollAtTop(false);

    sectionList.map((item) => {
      const section = document.getElementById(item) as HTMLElement;

      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const targetLine = scrollY + innerHeight / 2;

      const passedTop = targetLine >= sectionTop;
      const passedBottom = targetLine >= sectionBottom;
      const sectionBoundaries = passedTop && !passedBottom;

      if (sectionBoundaries) {
        setActiveSection(item);
      }
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full py-6 z-20 ${
          scrollAtTop ? "" : "bg-primary-100"
        }`}
      >
        <div className="flex items-center justify-between w-5/6 mx-auto gap-16">
          {/* Left */}
          <img src={Logo} />

          {/* Right */}
          {/* Hidden if page width is greater than 1024px */}
          <div className="flex-1 hidden lg:flex items-center justify-between ">
            <ul className="flex gap-8 text-sm">
              {sectionList.map((section) => (
                <li
                  key={`#${section}`}
                  className={`${section === activeSection ? "active" : ""}`}
                >
                  <a href={`#${section}`} className="hover:text-primary-500">
                    {section
                      .split("_")
                      .map((word) =>
                        word[0].toUpperCase().concat(word.substring(1))
                      )
                      .join(" ")}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-8">
              <a href="">Sign In</a>
              <Button text="Become a Member" />
            </div>
          </div>

          {/* Hidden if page width is lower than 1024px */}
          <div className="lg:hidden">
            <button
              onClick={() => setOpenModal(!openModal)}
              className="p-2 bg-secondary-500 rounded-full text-white hover:text-current transition-colors"
            >
              {openModal ? <X weight="bold" /> : <List weight="bold" />}
            </button>
          </div>
        </div>
      </nav>

      {/* NavMenu for Mobile only when user clicks button Open Modal */}
      {openModal && (
        <div className="fixed z-10 top-0 left-0 h-screen w-screen flex flex-1 items-center justify-center bg-primary-100">
          <ul className="flex flex-col items-center gap-3">
            {sectionList.map((section) => (
              <li
                key={`#${section}`}
                className={`${section === activeSection ? "active" : ""}`}
              >
                <a
                  href={`#${section}`}
                  className="hover:text-primary-500"
                  onClick={() => setOpenModal(false)}
                >
                  {section
                    .split("_")
                    .map((word) =>
                      word[0].toUpperCase().concat(word.substring(1))
                    )
                    .join(" ")}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
