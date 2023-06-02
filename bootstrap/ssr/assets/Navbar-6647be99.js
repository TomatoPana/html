import { a as jsx, j as jsxs } from "../ssr.js";
import { Link } from "@inertiajs/react";
const logo = "/build/assets/gameflix-885d6d8c.jpg";
function Navbar() {
  return /* @__PURE__ */ jsx("nav", { className: "navbar fixed-top navbar-expand-lg navbar-light bg-light", children: /* @__PURE__ */ jsxs("div", { className: "container-fluid", children: [
    /* @__PURE__ */ jsx(Link, { className: "navbar-brand", href: "/", children: /* @__PURE__ */ jsx("img", { src: logo, height: "30px" }) }),
    /* @__PURE__ */ jsx("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarText", "aria-controls": "navbarText", "aria-expanded": "false", "aria-label": "Toggle navigation", children: /* @__PURE__ */ jsx("span", { className: "navbar-toggler-icon" }) }),
    /* @__PURE__ */ jsxs("div", { className: "collapse navbar-collapse", id: "navbarText", children: [
      /* @__PURE__ */ jsxs("ul", { className: "navbar-nav me-auto mb-2 mb-lg-0", children: [
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Link, { as: "a", className: "nav-link active", "aria-current": "page", href: "/", children: "Inicio" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Link, { as: "a", className: "nav-link", href: "/about", children: "Nosotros" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Link, { as: "a", className: "nav-link", href: "/catalog", children: "Catálogo" }) })
      ] }),
      /* @__PURE__ */ jsx(Link, { as: "a", href: "/login", className: "btn btn-danger", children: "Iniciar Sesión" })
    ] })
  ] }) });
}
export {
  Navbar as N
};
