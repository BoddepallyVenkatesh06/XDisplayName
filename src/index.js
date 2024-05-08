import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import FullNameDisplay from "./FullNameDisplay";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FullNameDisplay />
  </StrictMode>
);
