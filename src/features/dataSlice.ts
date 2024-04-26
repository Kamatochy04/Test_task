import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import biom from "./biom.json";

const transforData = () => {
  let countre = 0;

  return biom.rows.map((item) => {
    const arr = biom.data.slice(countre, countre + 3);
    countre += 3;
    return {
      row: {
        data: arr,
        name: item.metadata.lineage[7].name,
        id: item.metadata.lineage[7].tax_id,
        score: arr[1][2],
        abundance: arr[0][2],
        frequency: arr[2][2],
      },
    };
  });
};

type Line = {
  row: {
    data: number[][];
    name: string;
    id: number | string;
    score: number | string;
    abundance: string | number;
    frequency: string | number;
  };
};

type dataType = {
  sortedRows: Line[];
  mainData: Line[];
};

const initialState: dataType = {
  sortedRows: transforData(),
  mainData: transforData(),
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    sortByName(state, action: PayloadAction<string>) {
      if (action.payload.length != 0) {
        state.sortedRows = state.sortedRows.filter((item) =>
          item.row.name
            .toLowerCase()
            .includes(action.payload.toLocaleLowerCase())
        );
      } else {
        state.sortedRows = state.mainData;
      }
    },
  },
});

export const { sortByName } = dataSlice.actions;

export default dataSlice.reducer;
