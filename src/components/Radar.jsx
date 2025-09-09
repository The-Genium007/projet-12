import React from "react";
import { colors } from "../styles/theme";
import { Radar as RadarShape, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
// styles globaux importés via src/styles/main.scss

function RadarPerformance({ data = [] }) {
  const safe = Array.isArray(data) ? data : [];

  return (
    <div className="radarChartCard">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          startAngle={-90}
            endAngle={270}
            cx="50%"
            cy="50%"
            outerRadius="70%"
            data={safe}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"   // utiliser la propriété 'kind' (ex: 'cardio', 'energy', etc.)
            tick={{ fill: colors.white, fontSize: 12, fontWeight: 500 }}
            tickLine={false}
          />
          <PolarRadiusAxis tick={false} axisLine={false} stroke="transparent" />
          <RadarShape
            dataKey="value"
            stroke={colors.primary}
            fill={colors.primary}
            fillOpacity={0.6}
            dot={false}
            activeDot={false}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadarPerformance;
