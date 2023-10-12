import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    // cardCount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.cardCount += 1;
    },
    removeItem: (state, action) => {
      const deleteObjId = action.payload.id;
      const newArr = [...state.items];
      for (let i = 0; i < newArr.length; i++) {
        if (deleteObjId === newArr[i].id) {
          newArr.splice(i, 1);
          break;
        }
      }
      // console.log(newArr);
      state.items = newArr;
      state.cardCount -= 1;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export const selectCardCount = (state) => state.cart.cardCount;

export default cartSlice.reducer;

export const selectItemCount = (state) => {
  const items = state.cart.items;
  const itemCount = {};

  items.forEach((item) => {
    const itemId = item.id;
    if (itemCount[itemId]) {
      itemCount[itemId]++;
    } else {
      itemCount[itemId] = 1;
    }
  });

  return itemCount;
};
