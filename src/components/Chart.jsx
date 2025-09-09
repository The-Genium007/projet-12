import React from "react";
import { colors } from "../styles/theme";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Tooltip minimal
function SimpleTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;
  const poids = payload.find((p) => p.dataKey === "kilogram")?.value;
  const kCal = payload.find((p) => p.dataKey === "calories")?.value;
  return <div className="activity-tooltip"><p>{poids}kg</p><p>{kCal}Kcal</p></div>;
}

function Chart({ data = [] }) {
  // Ajout d'un index jour directement (1..n)
  const processedData = data.map((d, i) => ({ ...d, jour: i + 1 }));

  // styles globaux importés via src/styles/main.scss
  return (
    <div className="chart activity-card">
      <div className="activity-header">
        <h2 className="activity-title">Activité quotidienne</h2>
        <ul className="activity-legend">
          <li>
            <span className="dot" style={{ backgroundColor: colors.contrast }} />
            Poids (kg)
          </li>
          <li>
            <span className="dot" style={{ backgroundColor: colors.primary600 }} />
            Calories brûlées (kCal)
          </li>
        </ul>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={processedData}
          margin={{ top: 40, right: 30, left: 30, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="jour" dy={10} />
          <YAxis
            yAxisId="kg"
            orientation="right"
            axisLine={false}
            tickLine={false}
            domain={["dataMin", "dataMax"]}
            allowDecimals={false}
            tick={{ fontSize: 12 }}
            dx={10}
          />
          <YAxis yAxisId="cal" hide />
          <Tooltip
            content={<SimpleTooltip />}
            wrapperStyle={{ outline: "none" }}
          />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            fill={colors.contrast}
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            fill={colors.primary600}
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
