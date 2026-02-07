  //Footer Component
export default function Footer() {
  return (
    <footer className="w-full px-4 py-10 bg-white shadow-md">
      <div className="flex flex-col justify-between items-center lg:flex-row  xl:px-6">
        <p className="font-medium text-gray-800">© 2024 <span className="text-teal-900">Tradux</span>. All rights reserved.</p>
        <p className="inline-block font-medium text-gray-800">
          Contact: <span className="text-teal-900">pariscachristian@gmail.com</span>
        </p>
      </div>
    </footer>
  );
}
