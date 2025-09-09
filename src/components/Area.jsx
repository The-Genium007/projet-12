import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Rectangle } from "recharts";
// styles globaux importés via src/styles/main.scss

const CustomTooltip = ({ active, payload }) => active && payload?.length ? (
  <div className="areaTooltip">{payload[0].value} min</div>
) : null;

// Curseur personnalisé : zone de surbrillance du point jusqu'au bord droit
function AreaCursor({ points, viewBox }) {
  if (!points || !points.length || !viewBox) return null;
  const x = points[0].x;
  const { x: vx, width: vw, y: vy, height: vh } = viewBox;
  const overlayWidth = vx + vw - x;
  return (
    <Rectangle
      x={x}
      y={vy}
      width={overlayWidth}
      height={vh}
      fill="rgba(0,0,0,0.15)"
    />
  );
}

function AreaChartComponent({data = []}) {

  return (
    <div className="areaChartCard">
      <h3>Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 40, right: 10, left: 10, bottom: 0 }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
            padding={{ left: 5, right: 5 }}
          />
          <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: "none" }}
            cursor={<AreaCursor />}
          />
          <Area
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
            fill="none"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartComponent;
