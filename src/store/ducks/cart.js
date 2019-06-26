// types
export const Types = {
  ADD_ITEM: 'cart/ADD_ITEM',
  REMOVE_ITEM: 'cart/REMOVE_ITEM',
};

// reducer
const INITIAL_STATE = {
  items: [],
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          {
            // encapsula em outro objeto para possibilitar a adição de
            // dois items iguais sem causar problema na id da lista
            id: Math.random(),
            item: payload.item,
          },
        ],
      };
    case Types.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload.id),
      };
    default:
      return state;
  }
}

// action creators
export const Creators = {
  addItem: item => ({
    type: Types.ADD_ITEM,
    payload: {
      item,
    },
  }),
  removeItem: id => ({
    type: Types.REMOVE_ITEM,
    payload: {
      id,
    },
  }),
};
