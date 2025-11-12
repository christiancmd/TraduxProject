import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import TranslationPage from "./pages/TranslationPage";
import { BrowserRouter, Routes, Route } from "react-router";
import {TextProvider} from './context/TextContext'

export default function App() {

  //const api = import.meta.env.VITE_GOOGLE_API_KEY_DO;
  //const api2 = import.meta.env.VITE_GOOGLE_API_KEY_DO2;

  //console.log(api, api2);
  
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
        </TextProvider>
      </BrowserRouter>
    </>
  );
}
