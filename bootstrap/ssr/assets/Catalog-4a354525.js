import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { N as Navbar } from "./Navbar-6647be99.js";
import { L as Logo } from "./logoGameflix-dd02ce1e.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "react-bootstrap/cjs/SSRProvider.js";
function Catalog() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "py-56", children: [
      /* @__PURE__ */ jsx("img", { src: Logo, alt: "Logo Gameflix", height: "100px" }),
      /* @__PURE__ */ jsx("div", { className: "linea" }),
      /* @__PURE__ */ jsx("section", { id: "productos-container", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-md-3 listado-filtros", children: /* @__PURE__ */ jsxs("div", { id: "filtros-container", children: [
          /* @__PURE__ */ jsxs("div", { className: "list-group", children: [
            /* @__PURE__ */ jsx("a", { href: "#", className: "list-group-item list-group-item-action active", children: /* @__PURE__ */ jsx("h5", { className: "list-group-item-heading", children: "Precio" }) }),
            /* @__PURE__ */ jsx("a", { href: "#", className: "list-group-item list-group-item-action", children: "De menor a mayor" }),
            /* @__PURE__ */ jsx("a", { href: "#", className: "list-group-item list-group-item-action", children: "De mayor a menor" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "list-group", children: [
            /* @__PURE__ */ jsx("a", { href: "#", className: "list-group-item list-group-item-action active", children: /* @__PURE__ */ jsx("h5", { className: "list-group-item-heading", children: "Calificación" }) }),
            /* @__PURE__ */ jsx("a", { href: "#", className: "list-group-item list-group-item-action", children: "De mayor a menor" }),
            /* @__PURE__ */ jsx("a", { href: "#", className: "list-group-item list-group-item-action", children: "De menor a mayor" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "list-group", children: [
            /* @__PURE__ */ jsx("a", { href: "#", className: "list-group-item list-group-item-action active", children: /* @__PURE__ */ jsx("h5", { className: "list-group-item-heading", children: "Categoría" }) }),
            /* @__PURE__ */ jsx("a", { href: "#", className: "list-group-item list-group-item-action", children: /* @__PURE__ */ jsx("div", { className: "form-check", children: /* @__PURE__ */ jsxs("label", { htmlFor: "", className: "form-check-label", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", value: "carreras", className: "form-check-input" }),
              "Carreras"
            ] }) }) }),
            /* @__PURE__ */ jsx("a", { href: "#", className: "list-group-item list-group-item-action", children: /* @__PURE__ */ jsx("div", { className: "form-check", children: /* @__PURE__ */ jsxs("label", { htmlFor: "", className: "form-check-label", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", value: "shooter", className: "form-check-input" }),
              "Shooter"
            ] }) }) }),
            /* @__PURE__ */ jsx("a", { href: "#", className: "list-group-item list-group-item-action", children: /* @__PURE__ */ jsx("div", { className: "form-check", children: /* @__PURE__ */ jsxs("label", { htmlFor: "", className: "form-check-label", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", value: "survival", className: "form-check-input" }),
              "Survival"
            ] }) }) }),
            /* @__PURE__ */ jsx("a", { href: "#", className: "list-group-item list-group-item-action", children: /* @__PURE__ */ jsx("div", { className: "form-check", children: /* @__PURE__ */ jsxs("label", { htmlFor: "", className: "form-check-label", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", value: "Terror", className: "form-check-input" }),
              "Terror"
            ] }) }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "col-xs-12 col-md-9 listado-productos", children: [
          /* @__PURE__ */ jsxs("div", { className: "row", children: [
            /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-6 col-lg-4", children: /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("img", { src: "https://th.bing.com/th/id/OIP.hJ1c37JAEFTr-zJ3kDXIqAHaGe?pid=ImgDet&rs=1", alt: "Producto 1", className: "card-img-top img-fluid" }),
              /* @__PURE__ */ jsxs("div", { className: "card-block", children: [
                /* @__PURE__ */ jsx("h4", { className: "card-title", children: "Producto 1" }),
                /* @__PURE__ */ jsx("p", { className: "card-text", children: "$000.00" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-6 col-lg-4", children: /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("img", { src: "https://th.bing.com/th/id/OIP.hJ1c37JAEFTr-zJ3kDXIqAHaGe?pid=ImgDet&rs=1", alt: "Producto 1", className: "card-img-top img-fluid" }),
              /* @__PURE__ */ jsxs("div", { className: "card-block", children: [
                /* @__PURE__ */ jsx("h4", { className: "card-title", children: "Producto 1" }),
                /* @__PURE__ */ jsx("p", { className: "card-text", children: "$000.00" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-6 col-lg-4", children: /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("img", { src: "https://th.bing.com/th/id/OIP.hJ1c37JAEFTr-zJ3kDXIqAHaGe?pid=ImgDet&rs=1", alt: "Producto 1", className: "card-img-top img-fluid" }),
              /* @__PURE__ */ jsxs("div", { className: "card-block", children: [
                /* @__PURE__ */ jsx("h4", { className: "card-title", children: "Producto 1" }),
                /* @__PURE__ */ jsx("p", { className: "card-text", children: "$000.00" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-6 col-lg-4", children: /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("img", { src: "https://th.bing.com/th/id/OIP.hJ1c37JAEFTr-zJ3kDXIqAHaGe?pid=ImgDet&rs=1", alt: "Producto 1", className: "card-img-top img-fluid" }),
              /* @__PURE__ */ jsxs("div", { className: "card-block", children: [
                /* @__PURE__ */ jsx("h4", { className: "card-title", children: "Producto 1" }),
                /* @__PURE__ */ jsx("p", { className: "card-text", children: "$000.00" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-6 col-lg-4", children: /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("img", { src: "https://th.bing.com/th/id/OIP.hJ1c37JAEFTr-zJ3kDXIqAHaGe?pid=ImgDet&rs=1", alt: "Producto 1", className: "card-img-top img-fluid" }),
              /* @__PURE__ */ jsxs("div", { className: "card-block", children: [
                /* @__PURE__ */ jsx("h4", { className: "card-title", children: "Producto 1" }),
                /* @__PURE__ */ jsx("p", { className: "card-text", children: "$000.00" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-6 col-lg-4", children: /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("img", { src: "https://th.bing.com/th/id/OIP.hJ1c37JAEFTr-zJ3kDXIqAHaGe?pid=ImgDet&rs=1", alt: "Producto 1", className: "card-img-top img-fluid" }),
              /* @__PURE__ */ jsxs("div", { className: "card-block", children: [
                /* @__PURE__ */ jsx("h4", { className: "card-title", children: "Producto 1" }),
                /* @__PURE__ */ jsx("p", { className: "card-text", children: "$000.00" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-6 col-lg-4", children: /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("img", { src: "https://th.bing.com/th/id/OIP.hJ1c37JAEFTr-zJ3kDXIqAHaGe?pid=ImgDet&rs=1", alt: "Producto 1", className: "card-img-top img-fluid" }),
              /* @__PURE__ */ jsxs("div", { className: "card-block", children: [
                /* @__PURE__ */ jsx("h4", { className: "card-title", children: "Producto 1" }),
                /* @__PURE__ */ jsx("p", { className: "card-text", children: "$000.00" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-6 col-lg-4", children: /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("img", { src: "https://th.bing.com/th/id/OIP.hJ1c37JAEFTr-zJ3kDXIqAHaGe?pid=ImgDet&rs=1", alt: "Producto 1", className: "card-img-top img-fluid" }),
              /* @__PURE__ */ jsxs("div", { className: "card-block", children: [
                /* @__PURE__ */ jsx("h4", { className: "card-title", children: "Producto 1" }),
                /* @__PURE__ */ jsx("p", { className: "card-text", children: "$000.00" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "col-xs-12 col-sm-6 col-lg-4", children: /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("img", { src: "https://th.bing.com/th/id/OIP.hJ1c37JAEFTr-zJ3kDXIqAHaGe?pid=ImgDet&rs=1", alt: "Producto 1", className: "card-img-top img-fluid" }),
              /* @__PURE__ */ jsxs("div", { className: "card-block", children: [
                /* @__PURE__ */ jsx("h4", { className: "card-title", children: "Producto 1" }),
                /* @__PURE__ */ jsx("p", { className: "card-text", children: "$000.00" })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("div", { className: "col-xs-12 text-center", id: "paginator-container", children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { className: "pagination", children: [
            /* @__PURE__ */ jsx("li", { className: "page-item disabled", children: /* @__PURE__ */ jsx("a", { href: "#", className: "page-link", children: "«" }) }),
            /* @__PURE__ */ jsx("li", { className: "page-item active", children: /* @__PURE__ */ jsx("a", { href: "#", className: "page-link", children: "1" }) }),
            /* @__PURE__ */ jsx("li", { className: "page-item", children: /* @__PURE__ */ jsx("a", { href: "#", className: "page-link", children: "2" }) }),
            /* @__PURE__ */ jsx("li", { className: "page-item", children: /* @__PURE__ */ jsx("a", { href: "#", className: "page-link", children: "3" }) }),
            /* @__PURE__ */ jsx("li", { className: "page-item", children: /* @__PURE__ */ jsx("a", { href: "#", className: "page-link", children: "4" }) }),
            /* @__PURE__ */ jsx("li", { className: "page-item", children: /* @__PURE__ */ jsx("a", { href: "#", className: "page-link", children: "»" }) })
          ] }) }) }) })
        ] })
      ] }) }) })
    ] })
  ] });
}
export {
  Catalog as default
};
