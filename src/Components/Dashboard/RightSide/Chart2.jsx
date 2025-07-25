import {
  BarChart,
  Cell,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
} from "recharts";

const Chart2 = ({ allScholarships }) => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}
            C${x + width / 3},${y + height} ${x + width / 2},${
      y + height / 3
    } ${x + width / 2},${y}
            C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width},${y + height}
            Z`;
  };
  return (
    <div className="mt-10">
      <h2 className="text-white mb-2 text-center">Cost Comparison</h2>

      <div
        className={`border border-slate-200 rounded-lg flex justify-center shadow-lg bg-secondary p-6 ${
          allScholarships?.length == "0" ? "hidden" : "block"
        }`}
      >
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            width={1000}
            height={300}
            data={allScholarships}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3,3" />
            <XAxis dataKey="university_name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="service_charge"
              fill="#8884d8"
              label={{ position: "top" }}
            >
              {allScholarships.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
            <Line
              type="monotone"
              dataKey="application_fees"
              stroke="#82ca9d"
              yAxisId="left"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart2;
