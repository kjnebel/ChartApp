import Image from "next/image";
import CandlestickChart from "./charts/CandlestickChart"
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";
import BarChart from "./charts/BarChart";

export default function Home() {
  return (
    <>
      <div className="chartGroup">
        <CandlestickChart />
        <LineChart />
      </div>
      <div className="chartGroup">
        <PieChart />
        <BarChart />
      </div>
    </>
  );
}
