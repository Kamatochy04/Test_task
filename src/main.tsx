import ReactDOM from "react-dom/client";
import App from "./components/app/App.tsx";
import store from "./features/store.ts";
import { Provider } from "react-redux";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
