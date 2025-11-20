//Libraries
import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";
//Contexts and Providers
import { TextProvider } from "./context/TextContext";
//Components and Pages
import TranslationPage from "./pages/TranslationPage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

//App Component
export default function App() {
  return (
    <>
      <BrowserRouter>
        <TextProvider>
          <div className="bg-gray-200 min-h-screen flex flex-col">
            <Header />
            <Routes>
              <Route path="/" element={<TranslationPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Footer />
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </TextProvider>
      </BrowserRouter>
    </>
  );
}
