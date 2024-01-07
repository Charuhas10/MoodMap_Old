"use client";

import { updateEntry } from "@/utils/api";
import { useState } from "react";
import { useAutosave } from "react-autosave";
import styles from "./component.module.css";

const Editor = ({ entry }) => {
  const [value, setValue] = useState(entry.content);
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState(entry.analysis);

  const { mood, summary, color, subject, negative } = analysis;
  const analysisData = [
    { name: "Summary", value: summary },
    { name: "Subject", value: subject },
    { name: "Mood", value: mood },
    { name: "Negative", value: negative ? "True" : "False" },
  ];

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true);
      const data = await updateEntry(entry.id, _value);
      setAnalysis(data.analysis);
      setIsLoading(false);
    },
  });
  return (
    <div className={styles.editorContainer}>
      <div style={{ gridColumn: "span 2 / span 2" }}>
        {isLoading && <div>loading...</div>}
        <textarea
          className={styles.editorArea}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className={styles.analysisContainer}>
        <div
          className={styles.analysisHeader}
          style={{ backgroundColor: color }}
        >
          <h2 className={styles.analysisTitle}>Analysis</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((item) => (
              <li key={item.name} className={styles.analysisItem}>
                <span className={styles.itemLabel}>{item.name}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Editor;
