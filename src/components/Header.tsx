export default function Header() {
  return (
    <header className="w-full p-4 bg-white shadow-md">
      <div className="flex justify-around items-center ">
        <div>
          <h1>TRADUX</h1>
        </div>
        <nav>
          <a href="/about">Sobre mi</a>
        </nav>
      </div>
    </header>
  );
}
