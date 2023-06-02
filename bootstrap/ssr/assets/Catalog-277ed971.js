import { a as jsx } from "../ssr.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
import "react-bootstrap/cjs/SSRProvider.js";
function Catalog() {
  return /* @__PURE__ */ jsx("h1", { children: "Catalog" });
}
export {
  Catalog as default
};
