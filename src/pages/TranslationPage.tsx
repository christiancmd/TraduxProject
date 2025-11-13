import TranslationBlock from "../components/TranslationBlock";
import IconTools from "../components/IconTools";
import Title from "../components/Title";
import { useText } from "../context/TextContext";

export default function TranslationPage() {

  const {text} = useText();

  return (
    <section className="min-h-screen lg:min-h-[85vh] bg-gray-100 px-6 pt-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <header className="text-center">
          <Title title='Traductor Español-Inglés' description='Escribe tu texto y obtén la traducción con solo un click.'/>
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

        <footer className="flex justify-center mt-12">
          <IconTools />
        </footer>
      </div>
    </section>
  );
}
