export default {
  addCount(state, payload) {
    payload.count++;
    // console.log('addCount');
    
  },
  addCart(state, payload) {
    state.cartList.push(payload);
    // console.log('addCart');
    
  }
}