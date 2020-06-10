export default {
  addToCart(context, payload) {
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    // console.log('actions');
    
    if(oldProduct) {
      context.commit('addCount', oldProduct);
    } else {
      payload.count = 1;
      context.commit('addCart', payload);
    }
  }
}