import React, { PureComponent } from "react";
import { Treemap, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = [
  "#8889DD",
  "#9597E4",
  "#8DC77B",
  "#A5D297",
  "#E2CF45",
  "#F8C12D",
];

class CustomizedContent extends PureComponent {
  render() {
    const { root, depth, x, y, width, height, index, colors, name } =
      this.props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill:
              depth < 2
                ? colors[Math.floor((index / root.children.length) * 6)]
                : "#ffffff00",
            stroke: "#fff",
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {depth === 1 && (
          <>
            <text
              x={x + width / 2}
              y={y + height / 2 + 7}
              textAnchor="middle"
              fill="#fff"
              fontSize={14}
            >
              {name}
            </text>
            <text
              x={x + 4}
              y={y + 18}
              fill="#fff"
              fontSize={16}
              fillOpacity={0.9}
            >
              {index + 1}
            </text>
          </>
        )}
      </g>
    );
  }
}

// ✅ Custom Tooltip Component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { user_name, hsc_result } = payload[0].payload;
    return (
      <div className="bg-white p-2 rounded shadow text-sm text-black">
        <p>
          <strong>Name:</strong> {user_name}
        </p>
        <p>
          <strong>HSC Result:</strong> {hsc_result}
        </p>
      </div>
    );
  }
  return null;
};

const Chart = ({ allApplications }) => {
  return (
    <div className="mt-10">
      <h2 className="text-white mb-2 text-center">Find Talent Student</h2>

      <div
        className={`border border-slate-200 rounded-lg flex justify-center shadow-lg bg-secondary p-6 ${
          allApplications?.length == 0 ? "hidden" : "block"
        }`}
      >
        <ResponsiveContainer width="100%" height={300}>
          <Treemap
            width={1000}
            height={300}
            data={allApplications}
            dataKey="hsc_result"
            stroke="#fff"
            fill="#8884d8"
            content={(props) => (
              <CustomizedContent {...props} colors={COLORS} />
            )}
          >
            <Tooltip content={<CustomTooltip />} />
          </Treemap>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
