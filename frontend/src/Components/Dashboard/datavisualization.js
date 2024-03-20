import React, { useRef, useEffect, useMemo } from "react";
import Dashboardheader from "../Dashboard/dashboardheader";

const { tableau } = window;
const Datavisualization = () => {
  const ref = useRef(null);
  const url = "https://public.tableau.com/views/gisreport/Dashboard2";
  const options = useMemo(
    () => ({
      device: "desktop",
    }),
    []
  );

  useEffect(() => {
    const viz = new tableau.Viz(ref.current, url, options);

    // Clean up the viz when the component is unmounted
    return () => {
      viz.dispose();
    };
  }, [url, options]);

  return (
    <div
      style={{
        width: "100vw !important",
        height: "100vh !important",
      }}
    >
      <Dashboardheader />
      <div
        ref={ref}
        style={{ width: "100vw !important", height: "100vh !important" }}
      ></div>
    </div>
  );
};

export default Datavisualization;
