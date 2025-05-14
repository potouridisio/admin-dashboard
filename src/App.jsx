import ChartPie from "./components/ChartPie";
import DocumentReport from "./components/DocumentReport";

function App() {
  return (
    <div className="flex min-h-dvh flex-col bg-gray-50">
      <header className="h-[70px] flex-none border-b border-b-gray-200 bg-white"></header>
      <div className="flex grow">
        <aside className="w-[250px] flex-none border-r border-r-gray-200 bg-white">
          <ul className="space-y-[22px] px-3 pt-4">
            <li className="flex h-6 items-center px-2 font-medium text-green-500">
              <ChartPie className="mr-4" />
              Overview
            </li>
            <li className="flex h-6 items-center px-2 font-medium text-gray-900">
              <DocumentReport className="mr-4" />
              Pages
            </li>
            <li className="flex h-6 items-center px-2 font-medium text-gray-900">
              Sales
            </li>
            <li className="flex h-6 items-center px-2 font-medium text-gray-900">
              Product List
            </li>
            <li className="flex h-6 items-center px-2 font-medium text-gray-900">
              Billing
            </li>
            <li className="flex h-6 items-center px-2 font-medium text-gray-900">
              Invoice
            </li>
          </ul>
          <hr className="my-6 border-t-gray-200" />
          <ul className="space-y-[22px] px-3"></ul>
        </aside>
        <main className="grow p-4"></main>
      </div>
    </div>
  );
}

export default App;
