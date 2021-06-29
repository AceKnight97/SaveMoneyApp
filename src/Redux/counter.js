const CounterDefault = {
  INC: 'INCREASE',
  DEC: 'DECREASE',
  SET: 'SETCOUNTER',
  KEY:'@Counter',
};
const {INC, DEC, SET, KEY} = CounterDefault;

const initialState = {
  counter: 0,
};

export function increaseCounter() {
  return {type: INC};
}
export function decreaseCounter() {
  return {type: DEC};
}
export function setCounterData(data) {
  return {type: SET, data};
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return {counter: state.counter + 1};
    case DEC:
      return {counter: state.counter - 1};
    case SET:
      return {counter: action.data};
  }
  return {...state};
};
export default Reducer;
