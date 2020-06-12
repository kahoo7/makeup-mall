export default {
  addCount(state, payload) {
    payload.count++;
    // console.log('addCount');
    
  },
  addCart(state, payload) {
    state.cartList.push(payload);
    console.log(payload);
    
  },
  accountLogin(state, payload) {
    if(payload.loginFlag === true) {
      state.userinfo = payload;
    }
    console.log(payload);
    
  }
}