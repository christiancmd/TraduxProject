import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import TranslationPage from "./pages/TranslationPage";
import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-gray-200 min-h-screen flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<TranslationPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
