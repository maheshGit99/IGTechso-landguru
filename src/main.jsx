import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/style.css";
import "./styles/responsive.css";
import * as $  from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ThemeProvider from "./theme/index.jsx";


createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </>
);
