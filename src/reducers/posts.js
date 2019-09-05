
function posts(state = [], action) {
  //匹配到某一个post，让该post的likes数量+1
  //让state对应拥有这个tpe的方法
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log(111)
      const index =action.index
      return [
        ...state.slice(0,index),//在更新前
        {...state[index], likes: state[index].likes + 1},
        ...state.slice(index+1),//更新后
      ]
      default:
        return state;
  }
}

export default posts;