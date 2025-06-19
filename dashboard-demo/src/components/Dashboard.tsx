import React, { useState, useEffect } from "react";
import HeavyWorker from "../workers/heavy.worker.js";

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    const worker = new HeavyWorker();
    worker.onmessage = (e: MessageEvent) => {
      setD(e.data);
      worker.terminate();
    };
    worker.postMessage(null);
    return () => worker.terminate();
  }, []);

  return <div>{d}</div>;
}
