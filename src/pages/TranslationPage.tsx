import TranslationBlock from "../components/TranslationBlock";
import IconTools from "../components/IconTools";
import { useText } from "../context/TextContext";

export default function TranslationPage() {

  const {text} = useText();

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <header className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800">
            Traductor Español-Inglés
          </h1>
          <p className="text-gray-500 mt-2">
            Escribe tu texto y obtén la traducción con solo un click.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TranslationBlock
            title="Entrada"
            placeholder="Escribe tu texto aquí..."
            disabled={false}
          />
          <TranslationBlock
            title="Salida"
            placeholder="Resultado de la traducción..."
            text = {text}
            disabled={true}
          />
        </div>

        <footer className="flex justify-center">
          <IconTools />
        </footer>
      </div>
    </section>
  );
}
