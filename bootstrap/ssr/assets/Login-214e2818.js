import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { N as Navbar } from "./Navbar-6647be99.js";
import Alert from "react-bootstrap/cjs/Alert.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "react-bootstrap/cjs/SSRProvider.js";
function Login({ message }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "py-56", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      message !== void 0 ? /* @__PURE__ */ jsx(Alert, { variant: message.type, children: message.message }) : null,
      /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("div", { className: "col-5", children: /* @__PURE__ */ jsx("div", { className: "login-form", children: /* @__PURE__ */ jsxs("form", { action: "/examples/actions/confirmation.php", method: "post", children: [
          /* @__PURE__ */ jsx("h2", { children: "Iniciar Sesión" }),
          /* @__PURE__ */ jsx("p", { className: "hint-text", children: "Bienvenido a Gameflix" }),
          /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx("input", { type: "text", className: "form-control", name: "username", placeholder: "Usuario", required: true }) }),
          /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx("input", { type: "password", className: "form-control", name: "password", placeholder: "Contraseña", required: true }) }),
          /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-danger btn-lg btn-block", children: "Iniciar Sesión" }) })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "col-7", children: /* @__PURE__ */ jsx("div", { className: "signup-form", children: /* @__PURE__ */ jsxs("form", { action: "/examples/actions/confirmation.php", method: "post", children: [
          /* @__PURE__ */ jsx("h2", { children: "Registrarse" }),
          /* @__PURE__ */ jsx("p", { className: "hint-text", children: "Crea tu cuenta. Es gratis y solo tomará un minuto." }),
          /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx("input", { type: "text", className: "form-control", name: "name", placeholder: "Nombre", required: true }) }),
          /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx("input", { type: "text", className: "form-control", name: "usuario", placeholder: "Usuario", required: true }) }),
          /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx("input", { type: "email", className: "form-control", name: "email", placeholder: "Correo", required: true }) }),
          /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx("input", { type: "password", className: "form-control", name: "password", placeholder: "Contraseña", required: true }) }),
          /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx("input", { type: "password", className: "form-control", name: "confirm_password", placeholder: "Confirme su contraseña", required: true }) }),
          /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsxs("label", { className: "form-check-label", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", required: true }),
            " Acepto los",
            /* @__PURE__ */ jsx("a", { href: "#", children: "Términos y condiciones" }),
            ";"
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-danger btn-lg btn-block", children: "Registrarse" }) })
        ] }) }) })
      ] })
    ] }) })
  ] });
}
export {
  Login as default
};
