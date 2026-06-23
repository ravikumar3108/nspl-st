import StatCard from "./StatCard";
import ChartCard from "./ChartCard";

export default function DashboardContent() {
  return (
    <div>

      {/* Top Cards */}

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-6
      "
      >
        <StatCard
          title="Used Space"
          value="49/50GB"
          bg="bg-orange-500"
        />

        <StatCard
          title="Revenue"
          value="$34,245"
          bg="bg-green-500"
        />

        <StatCard
          title="Fixed Issues"
          value="75"
          bg="bg-red-500"
        />

        <StatCard
          title="Followers"
          value="+245"
          bg="bg-cyan-500"
        />
      </div>

      {/* Charts */}

      <div
        className="
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-6
        mt-8
      "
      >
        <ChartCard
          title="Daily Sales"
          bg="bg-green-500"
        />

        <ChartCard
          title="Email Subscriptions"
          bg="bg-orange-500"
        />

        <ChartCard
          title="Completed Tasks"
          bg="bg-red-500"
        />
      </div>

      {/* Bottom Tables */}

      <div
        className="
        grid
        lg:grid-cols-2
        gap-6
        mt-8
      "
      >
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-bold text-lg mb-4">
            Tasks
          </h3>

          <div className="space-y-3">
            <div>✅ Sign contract</div>
            <div>✅ Meeting with client</div>
            <div>⏳ Product Review</div>
            <div>🚀 Launch Campaign</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-bold text-lg mb-4">
            Employee Stats
          </h3>

          <table className="w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Salary</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>John</td>
                <td>$5000</td>
              </tr>

              <tr>
                <td>Alex</td>
                <td>$4500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}