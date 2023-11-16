import { useState } from "react";
import { Navbar, Nav } from "rsuite";

type Items = {
  name: string;
  to: string;
  composedItems: Array<Items>;
};
const navigation: Items[] = [
  {
    name: "Início",
    to: "/home",
    composedItems: [],
  },
  {
    name: "Serviços",
    to: "/home#services",
    composedItems: [
      {
        name: "Diagnóstico",
        to: "/home#services",
        composedItems: [],
      },
      {
        name: "Test",
        to: "/home#services",
        composedItems: [],
      },
    ],
  },
  {
    name: "Mais",
    to: "/contact",
    composedItems: [
      {
        name: "Política de Privacidade",
        to: "/privacy-policy",
        composedItems: [],
      },
    ],
  },
  {
    name: "Contato",
    to: "/contact",
    composedItems: [],
  },
];

const itemsOrder = [0, 1, 3, 2];

export default function NavBarContent() {
  const [navItems] = useState(itemsOrder.map((index) => navigation[index]));

  return (
    <Navbar className="sm:pr-0 pr-6 bg-darkblue">
      <Navbar.Brand className="text-2xl font-semibold p-0" href="/">
        CGRH
      </Navbar.Brand>
      <Nav pullRight>
        {navItems.map((item, index) =>
          item.composedItems.length > 0 ? (
            <Nav.Menu key={index} title={item.name}>
              {item.composedItems.map((subItem, subItemIndex) => (
                <Nav.Item
                  as={"a"}
                  className="w-24"
                  href={subItem.to}
                  key={subItemIndex}
                >
                  {subItem.name}
                </Nav.Item>
              ))}
            </Nav.Menu>
          ) : (
            <Nav.Item href={item.to} key={index}>
              {item.name}
            </Nav.Item>
          )
        )}
      </Nav>
    </Navbar>
  );
}
