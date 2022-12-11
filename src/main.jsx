import React from "react";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
// import thunk from "redux-thunk";
// import reducers from "./reducers";
import { createRoot } from "react-dom/client";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import "./styles/style.css";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

// const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));

// const persistor = persistStore(store);


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
  <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
