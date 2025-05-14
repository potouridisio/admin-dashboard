import Card from "./components/Card";
import ChartPie from "./components/ChartPie";
import DocumentReport from "./components/DocumentReport";

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col bg-gray-50">
      <header className="h-[70px] flex-none border-b border-b-gray-200 bg-white"></header>
      <div className="flex grow">
        <aside className="w-[250px] flex-none border-r border-r-gray-200 bg-white">
          <ul className="space-y-[22px] px-3 pt-4">
            <li className="flex h-6 items-center px-2 font-medium text-green-500">
              <ChartPie className="mr-4" data-my-prop="test" />
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
        <main className="grow p-4">
          <div className="flex gap-16">
            <Card title="Latest Customers"></Card>
            <Card title="Top products"></Card>
          </div>
          <Card
            title="Transactions"
            description="This is a list of latest transactions."
          >
            <table className="w-full">
              <thead>
                <tr>
                  <th className="rounded-tl-xl border-b border-b-gray-200 bg-gray-50 p-4 text-left text-xs font-semibold text-gray-500">
                    TRANSACTION
                  </th>
                  <th className="border-b border-b-gray-200 bg-gray-50 p-4 text-left text-xs font-semibold text-gray-500">
                    DATE & TIME
                  </th>
                  <th className="border-b border-b-gray-200 bg-gray-50 p-4 text-left text-xs font-semibold text-gray-500">
                    AMOUNT
                  </th>
                  <th className="rounded-tr-xl border-b border-b-gray-200 bg-gray-50 p-4 text-left text-xs font-semibold text-gray-500">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    Payment from <span>Bonnie Green</span>
                  </th>
                  <td>Apr 23, 2021</td>
                  <td>$2300</td>
                  <td>
                    {/* Badge */}
                    <span>Completed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </main>
      </div>
    </div>
  );
}
