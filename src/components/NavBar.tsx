import { Disclosure } from "@headlessui/react";
import { useState } from "react";

type Items = {
  name: string;
  to: string;
  current: boolean;
  composedItems: Array<Items>;
  isSubmenuOpen: boolean;
};

export default function NavBar() {
  const navigation: Items[] = [
    {
      name: "Início",
      to: "/home",
      current: false,
      composedItems: [],
      isSubmenuOpen: false,
    },
    {
      name: "Serviços",
      to: "/home#services",
      current: false,
      composedItems: [
        {
          name: "Diagnóstico",
          to: "/home#services",
          current: false,
          composedItems: [],
          isSubmenuOpen: false,
        },
        {
          name: "Diagnóstico",
          to: "/home#services",
          current: false,
          composedItems: [],
          isSubmenuOpen: false,
        },
      ],
      isSubmenuOpen: false,
    },
    {
      name: "Contato",
      to: "/contact",
      current: false,
      composedItems: [],
      isSubmenuOpen: false,
    },
    {
      name: "Mais",
      to: "/contact",
      current: false,
      composedItems: [],
      isSubmenuOpen: false,
    },
  ];

  const [navItems, setNavItems] = useState(navigation);

  // function classNames(...classes: string[]) {
  //   return classes.filter(Boolean).join(" ");
  // }

  function toggleSubmenu(item: Items) {
    const updatedNavItems: Items[] = navItems.map((navItem) => {
      if (navItem === item) {
        return {
          ...navItem,
          isSubmenuOpen: !navItem.isSubmenuOpen,
        };
      } else {
        return {
          ...navItem,
          isSubmenuOpen: false,
        };
      }
    });
    setNavItems(updatedNavItems);
  }

  return (
    <Disclosure as="nav" className="bg-white border-gray-100 border-b-2">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="flex h-16 justify-between items-center w-100">
          <div className="">
            <p className="text-gray-900">CGRH</p>
          </div>
          <div className="flex space-x-4 inline">
            {navItems.map((item) => (
              <div
                key={item.name}
                className=""
                onMouseEnter={() => toggleSubmenu(item)}
                // onMouseLeave={() => toggleSubmenu(item)}
              >
                <button
                  onClick={() => toggleSubmenu(item)}
                  className="focus:outline-none"
                >
                  {item.name}
                </button>
                {item.isSubmenuOpen && (
                  <div
                    className="transition ease-in-out delay-150  space-y-2 min-w-32 bg-white border border-gray-200 divide-y rounded-md shadow-lg z-10 absolute top-10"
                    // style={{ top: "100%" }}
                  >
                    {item.composedItems.map((childItem) => (
                      <a
                        key={childItem.name}
                        href={childItem.to}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-darkblue "
                      >
                        {childItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
