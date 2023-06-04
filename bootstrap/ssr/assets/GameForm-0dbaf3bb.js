import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { N as Navbar } from "./Navbar-6647be99.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "react-bootstrap/cjs/SSRProvider.js";
function GameForm() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "py-56", children: /* @__PURE__ */ jsxs("div", { className: "nosotros", children: [
      /* @__PURE__ */ jsx("img", { src: "/img/logoGameflix.png", alt: "", height: "100px" }),
      /* @__PURE__ */ jsx("div", { className: "linea" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "login-form", children: /* @__PURE__ */ jsxs("form", { action: "/examples/actions/confirmation.php", method: "post", children: [
        /* @__PURE__ */ jsx("h2", { children: "Agregar juego nuevo" }),
        /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "formFile", className: "form-label", children: "Ingrese la imagen del juego" }),
          /* @__PURE__ */ jsx("input", { className: "form-control", type: "file", id: "formFile" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-group purple-border", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "exampleFormControlTextarea4", children: "Descripción del juego" }),
          /* @__PURE__ */ jsx("textarea", { className: "form-control", id: "exampleFormControlTextarea4", rows: 3 })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "hint-text", children: "ingrese el nombre del empleado que realizara el cambio" }),
        /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx("input", { type: "text", className: "form-control", name: "user", placeholder: "Nombre del empleado", required: true }) }),
        /* @__PURE__ */ jsx("p", { className: "hint-text", children: "ingrese el nombre del juego" }),
        /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx("input", { type: "text", className: "form-control", name: "name", placeholder: "nombre del juego", required: true }) }),
        /* @__PURE__ */ jsx("p", { className: "hint-text", children: "ingrese el precio del juego" }),
        /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx("input", { type: "number", className: "form-control", name: "precio", placeholder: "precio del juego", required: true }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "hint-text", children: "agregar todas las plataformas donde estará el juego" }),
          /* @__PURE__ */ jsx("input", { name: "playStation", type: "checkbox" }),
          /* @__PURE__ */ jsx("h5", { children: "PlayStation" }),
          /* @__PURE__ */ jsx("input", { name: "xbox", type: "checkbox" }),
          /* @__PURE__ */ jsx("h5", { children: "Xbox" }),
          /* @__PURE__ */ jsx("input", { name: "pc", type: "checkbox" }),
          /* @__PURE__ */ jsx("h5", { children: "PC" }),
          /* @__PURE__ */ jsx("input", { name: "switch", type: "checkbox" }),
          /* @__PURE__ */ jsx("h5", { children: "Nintendo Switch" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-success btn-lg btn-block", children: "agregar" }) })
      ] }) }) }) }) })
    ] }) })
  ] });
}
export {
  GameForm as default
};
