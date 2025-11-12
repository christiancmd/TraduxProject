export default function Header() {
  return (
    <header className="w-full p-4 bg-white shadow-md">
      <div className="flex justify-around items-center ">
        <div className="flex items-center ">
          <img className="w-14 h-10" src="/src/assets/tradux.png" alt="" />
          <h1>TRADUX</h1>
        </div>
        <nav>
          <a href="/about">Sobre mi</a>
        </nav>
      </div>
    </header>
  );
}
