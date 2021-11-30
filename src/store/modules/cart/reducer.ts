import { Reducer } from "redux";
import produce from "immer"


import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: []
}

export const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART': {

        const { product } = action.payload

        const productInCarIndex = draft.items.findIndex( item => 
          item.product.id === product.id
          )

          if (productInCarIndex >= 0){
            draft.items[productInCarIndex].quantity++
          } else {
            draft.items.push({
              product,
              quantity: 1,

            })
          }



        // return {
        //   ...state,
        //   items: [
        //     ...state.items, {
        //       product,
        //       quantity: 1,
        //     }
        //   ]
        // }
        break;

      } default: {
        return draft
      }
    }
  })
}