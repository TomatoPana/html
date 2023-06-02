import { j as jsx } from "../ssr.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
function Home() {
  return /* @__PURE__ */ jsx("h1", { children: "Home" });
}
export {
  Home as default
};
