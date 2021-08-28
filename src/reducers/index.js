import { createStore } from "redux";

const CHANGE_THEME = 'CHANGE_THEME';

const initState = {
  theme: 'light',
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      const theme = action.payload.theme;
      state = Object.assign(state, { theme });
      return state;
    default:
      return state;
  }
};

/**
 * 變更主題
 * @param {String} theme 主題
 */
export function changeTheme(theme) {
  return {
    type: CHANGE_THEME,
    payload: {
      theme,
    },
  };
}

export default createStore(reducer);;
