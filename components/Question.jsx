"use client";

import { askQuestion } from "@/utils/api";
import { useState } from "react";
import styles from "./component.module.css";

const Question = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();

  const onChange = (e) => {
    //do things here
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const answer = await askQuestion(value);
    setResponse(answer);
    setValue("");
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          disabled={loading}
          onChange={onChange}
          value={value}
          type="text"
          placeholder="Present your query"
          className={styles.questionInput}
        />
        <button
          disabled={loading}
          type="submit"
          className={styles.questionButton}
        >
          Ask
        </button>
      </form>
      {loading && <div>...loading</div>}
      {response && <div>{response}</div>}
    </div>
  );
};

export default Question;
