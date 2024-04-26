import { Row as RowComponent } from "../row/Row";
import { useState } from "react";
import { sortByName } from "../../features/dataSlice";
import { useAppDispatch, useAppSelector } from "../../features/hook";

import "./table.css";

export const Table = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data);

  const [name, setName] = useState("");

  const createTable = () => {
    return data.sortedRows.map((item, id) => {
      return (
        <RowComponent
          name={item.row.name}
          id={item.row.id}
          score={item.row.data[1][2]}
          abundance={`${checkPercent(item.row.data[0][2] * 100)}  `}
          frequency={item.row.data[2][2]}
          key={id}
        />
      );
    });
  };

  const checkPercent = (number: number) => {
    if (number < 0.01) {
      return "< 0.01%";
    } else {
      return `${number.toFixed(2)}%`;
    }
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="input"
      />
      <button onClick={() => dispatch(sortByName(name))}>Найти</button>
      <div className="table">
        <RowComponent
          name="Name"
          id="Tax ID"
          score="Abundance score"
          abundance="Relative abundance"
          frequency="Unique matches frequency"
        />
        {...createTable()}
      </div>
    </>
  );
};
