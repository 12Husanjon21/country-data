import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CountryPage from "./components/CountryPage";
import DrawerComponent from "./components/DrawerComponent";

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <Provider store={store}>
      <Router>
        <div className="flex justify-center mb-12">
          <Header onDrawerOpen={handleDrawerOpen} />
        </div>
        <DrawerComponent isOpen={drawerOpen} onClose={handleDrawerClose} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:cca3" element={<CountryPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
