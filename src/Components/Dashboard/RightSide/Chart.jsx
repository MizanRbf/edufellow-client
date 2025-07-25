import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Chart = ({ allApplications }) => {
  const colors1 = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const colors2 = ["#FF6666", "#AA66CC", "#33B5E5", "#99CC00"];

  const dataWithName = allApplications.map((item) => ({
    ...item,
    name: item.university_name, // or item.scholarship_name
  }));

  return (
    <div className="md:mt-10">
      <h2 className="text-white mb-2 mt-10 md:mt-0 text-center">
        Find Talent Students
      </h2>

      <div
        className={`border border-slate-200 rounded-lg flex justify-center shadow-lg bg-secondary md:p-6  ${
          allApplications?.length === 0 ? "hidden" : "block"
        }`}
      >
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Tooltip />
            <Legend />

            {/* Pie for service_charge */}
            <Pie
              data={dataWithName}
              dataKey="hsc_result"
              nameKey="name"
              cx="40%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {dataWithName.map((_, index) => (
                <Cell
                  key={`cell-s-${index}`}
                  fill={colors1[index % colors1.length]}
                />
              ))}
            </Pie>

            {/* Pie for application_fees */}
            <Pie
              data={dataWithName}
              dataKey="ssc_result"
              nameKey="name"
              cx="70%"
              cy="50%"
              outerRadius={80}
              innerRadius={50}
              fill="#82ca9d"
              label
            >
              {dataWithName.map((_, index) => (
                <Cell
                  key={`cell-a-${index}`}
                  fill={colors2[index % colors2.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
