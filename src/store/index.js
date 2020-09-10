import {createStore} from 'redux';
import reducer from './reducer';


const loadState = () => {
  try { // 也可以容错一下不支持localStorage的情况下，用其他本地存储
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch (err) {
    // ... 错误处理
    return undefined;
  }
}
const store = createStore(
    
    reducer,
    loadState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;