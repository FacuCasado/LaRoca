import { USER_SIGN_IN } from './userActions';

const initialState = {
	isLogin: false,
	userData: {},
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case USER_SIGN_IN:
			return { ...state, isLogin: true, userData: action.payload };

		default:
			return state;
	}
}

export default rootReducer;
