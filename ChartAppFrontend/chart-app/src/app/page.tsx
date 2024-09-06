import Image from "next/image";
import CandlestickChart from "./charts/CandlestickChart"
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";
import BarChart from "./charts/BarChart";

export default function Home() {
  return (
    <main>
      Chart App
      <CandlestickChart />
      <LineChart />
      <PieChart />
      <BarChart />
    </main>
  );
}
