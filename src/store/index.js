import { createStore } from 'redux';
import reducer from './reducer';

//先向localStorage获取current
const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return undefined;
		} else {
			return JSON.parse(serializedState);
		}
	} catch (err) {
		console.log('localStorage获取失败');
		return undefined;
	}
};

const store = createStore(
	reducer,
	loadState(),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
