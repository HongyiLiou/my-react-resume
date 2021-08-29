import { createStore } from "redux";

const CHANGE_THEME = 'CHANGE_THEME';
const CHANGE_SIDEBAR_TYPE = 'CHANGE_SIDEBAR_TYPE';

const initState = {
  theme: 'light',
  sidebar: 'outer',
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      const theme = action.payload.theme;
      state = Object.assign(state, { theme });
      return state;

    case CHANGE_SIDEBAR_TYPE:
      const sidebar = action.payload.sidebar;
      state = Object.assign(state, { sidebar });
      console.log('state', state);
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

/**
 * Sidebar收合
 * @param {String} type 收合型態
 */
export function changeSidebarType(type) {
  return {
    type: CHANGE_SIDEBAR_TYPE,
    payload: {
      type,
    },
  };
}

export default createStore(reducer);;
