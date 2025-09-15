// styles globaux importés via src/styles/main.scss
import Chart from "../components/Chart";
import AreaChartComponent from "../components/Area";
import RadarPerformance from "../components/Radar";
import RadialChartComponent from "../components/Radial";
import CardInfo from "../components/CardInfo";
import { colors } from "../styles/theme";
import { useLoaderData } from "react-router-dom";
import { useUserBundle } from "../data/Fetch";
import { config } from "../config";


function User() {
  const { userId } = useLoaderData();
  const { data, loading } = useUserBundle(config.apiBaseUrl, userId);

  if (loading) return <p>Chargement…</p>;
  if (!data) return <p>Erreur : données introuvables</p>;

  return (
    <>
      <div className="title">
        <h1>
          Bonjour{" "}
          <span className="firstName">
            {data?.user?.firstName || "Utilisateur"}
          </span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="container">
        <div>
          <Chart data={data?.activity} />
          <div className="bottom-container">
            <AreaChartComponent data={data?.sessions} />
            <RadarPerformance data={data?.performance} />
            <RadialChartComponent data={data?.user?.score} />
          </div>
        </div>
        <div className="container-info">
          <CardInfo
            value={data?.user?.keyData?.calorieCount}
            unit="kCal"
            label="Calories"
            iconSrc="/src/assets/icons/Vector-1.svg"
            color={colors.primary}
          />
          <CardInfo
            value={data?.user?.keyData?.proteinCount}
            unit="g"
            label="Proteines"
            iconSrc="/src/assets/icons/chicken.svg"
            color={colors.accentBlue}
          />
          <CardInfo
            value={data?.user?.keyData?.carbohydrateCount}
            unit="g"
            label="Glucides"
            iconSrc="/src/assets/icons/apple.svg"
            color={colors.accentYellow}
          />
          <CardInfo
            value={data?.user?.keyData?.lipidCount}
            unit="g"
            label="Lipides"
            iconSrc="/src/assets/icons/cheeseburger.svg"
            color={colors.accentPink}
          />
        </div>
      </div>
    </>
  );
}

export default User;