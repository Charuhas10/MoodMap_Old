"use client";

import { ResponsiveContainer, Line, Tooltip, XAxis, LineChart } from "recharts";
import styles from "./component.module.css";
const CustomTooltip = ({ payload, label, active }) => {
  const dateLabel = new Date(label).toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  if (active) {
    const analysis = payload[0].payload;
    return (
      <div className={styles.custom - tooltip - container}>
        <div
          className={styles.color - indicator}
          style={{ background: analysis.color }}
        ></div>
        <p className={styles.label - text}>{dateLabel}</p>
        <p className={styles.intro - text}>{analysis.mood}</p>
      </div>
    );
  }

  return null;
};

const HistoryChart = ({ data }) => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <LineChart width={300} height={100} data={data}>
        <Line
          dataKey="sentimentScore"
          type="monotone"
          stroke="#8884d8"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <XAxis dataKey="createdAt" />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default HistoryChart;
