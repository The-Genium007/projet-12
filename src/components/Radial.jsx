import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { colors } from "../styles/theme";
// styles globaux importés via src/styles/main.scss

function RadialChartComponent(score) {
  const ratio = Math.min(1, Math.max(0, score.data > 1 ? score.data / 100 : score.data));
  const percent = Math.round(ratio * 100);
  const data = [
    { name: "progress", value: percent, fill: colors.primary }
  ];

  return (
    <div className="radialScoreCard">
      <h3 className="radialScoreCard__title">Score</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="80%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={90 + 360 * ratio}
        >
          <circle cx="50%" cy="50%" r="30%" fill={colors.white} />
          <RadialBar
            minAngle={15}
            clockWise={true}
            dataKey="value"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="radialScoreCard__center">
        <span className="radialScoreCard__value">{percent}%</span>
        <span className="radialScoreCard__subtitle">de votre objectif</span>
      </div>
    </div>
  );
}

export default RadialChartComponent;
