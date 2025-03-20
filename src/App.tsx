// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Store from "./components/Store";
import Booking from "./components/Booking";
import EventImage from "./components/EventImage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/store" element={<Store />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/eventimage" element={<EventImage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;