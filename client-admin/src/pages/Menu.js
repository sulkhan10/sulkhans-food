import TableMenu from "../components/TableMenu.js";
export default function Menu() {
  return (
    <div>
      <header className="fixed right-0 top-0 left-60 bg-yellow-200 py-3 px-4 h-16">
        <div className="max-w-4xl mx-auto flex text-4xl  font-bold items-center justify-center">
          <h1>Dashboard</h1>
        </div>
      </header>
      <main className="pl-60 py-16  min-h-screen bg-green-700 ">
        <div className="max-w-4xl mt-10 mx-auto">
          <TableMenu />
        </div>
      </main>
    </div>
  );
}
