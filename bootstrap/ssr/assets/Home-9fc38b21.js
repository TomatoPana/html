import { a as jsx, j as jsxs, F as Fragment } from "../ssr.js";
import { N as Navbar } from "./Navbar-6647be99.js";
import { useState } from "react";
import Carousel from "react-bootstrap/cjs/Carousel.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "react-bootstrap/cjs/SSRProvider.js";
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
