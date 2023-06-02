import { j as jsx, a as jsxs, F as Fragment } from "../ssr.js";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import Carousel from "react-bootstrap/cjs/Carousel.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react-bootstrap/cjs/SSRProvider.js";
const logo = "/build/assets/gameflix-885d6d8c.jpg";
function Navbar() {
  return /* @__PURE__ */ jsx("nav", { className: "navbar fixed-top navbar-expand-lg navbar-light bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container-fluid", children: [
    /* @__PURE__ */ jsx("a", { className: "navbar-brand", href: "/index.php", children: /* @__PURE__ */ jsx("img", { src: logo, height: "30px" }) }),
    /* @__PURE__ */ jsx("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarText", "aria-controls": "navbarText", "aria-expanded": "false", "aria-label": "Toggle navigation", children: /* @__PURE__ */ jsx("span", { className: "navbar-toggler-icon" }) }),
    /* @__PURE__ */ jsxs("div", { className: "collapse navbar-collapse", id: "navbarText", children: [
      /* @__PURE__ */ jsxs("ul", { className: "navbar-nav me-auto mb-2 mb-lg-0", children: [
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Link, { className: "nav-link active", "aria-current": "page", href: "/", children: "Inicio" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link", href: "/nosotros.php", children: "Nosotros" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link", href: "#", children: "Catálogo" }) })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "/login.php", className: "btn btn-danger", children: "Iniciar Sesión" })
    ] })
  ] }) });
}
function ControlledCarousel({ data }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return /* @__PURE__ */ jsx(Carousel, { activeIndex: index, onSelect: handleSelect, fade: true, children: data.map((value, index2) => /* @__PURE__ */ jsxs(Carousel.Item, { children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "d-block w-100",
        src: value.imageUrl,
        alt: value.imageAlt
      }
    ),
    value.promoName !== void 0 || value.promoDescription !== void 0 ? /* @__PURE__ */ jsxs(Carousel.Caption, { children: [
      /* @__PURE__ */ jsx("h3", { children: value.promoName ?? "" }),
      /* @__PURE__ */ jsx("p", { children: value.promoDescription ?? "" })
    ] }) : null
  ] }, index2)) });
}
const image = "/build/assets/genshinimpact-754d59e0.jpg";
function Home() {
  const data = [
    {
      imageUrl: image
    },
    {
      imageUrl: image
    },
    {
      imageUrl: image
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "py-56", children: [
      /* @__PURE__ */ jsx(ControlledCarousel, { data }),
      /* @__PURE__ */ jsx("h1", { children: "Main" })
    ] })
  ] });
}
export {
  Home as default
};
