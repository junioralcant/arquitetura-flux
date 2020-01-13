import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        // verifica se o produto adicionado ja existe
        const productIndex = draft.findIndex(p => p.id === action.product.id);

        if (productIndex >= 0) {
          // add mais 1 na quantidade
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });

    case '@cart/REMOVE': {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        //remove do carrinho
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    }

    default:
      return state;
  }
}
