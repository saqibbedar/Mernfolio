import "./Grid.css";
import React, { useState, useEffect } from "react";

const Grid = ({ isGrid, gridTempCol }) => {
  const [gridTemplateColumns, setGridTemplateColumns] = useState(() =>
    window.innerWidth <= 767 ? "1fr 1fr" : gridTempCol
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setGridTemplateColumns("1fr 1fr");
      } else {
        setGridTemplateColumns(gridTempCol);
      }
    }; 

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [gridTempCol]);

  return (
    <div
      className={isGrid ? "grid" : "grid active-landScape-mode"}
      style={{ gridTemplateColumns }}
    >
      <div className="grid-item">
        <p>• Frontend</p>
        <div className="grid-item-img-container">
          <img
            src="https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0"
            alt=""
          />
        </div>
      </div>
      <div className="grid-item">
        <p>• Frontend</p>
        <div className="grid-item-img-container">
          <img
            src="https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0"
            alt=""
          />
        </div>
      </div>
      <div className="grid-item">
        <p>• Frontend</p>
        <div className="grid-item-img-container">
          {/* <img
            src="https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0"
            alt=""
          /> */}
          <img src="https://github-readme-stats.vercel.app/api/top-langs?username=saqibbedar&show_icons=true&locale=en&layout=compact" alt="Saqib bedar" />
        </div>
      </div>
    </div>
  );
};

export default Grid;
