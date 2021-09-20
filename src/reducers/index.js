import { createStore } from "redux";

const CHANGE_THEME = 'CHANGE_THEME';
const CHANGE_SIDEBAR_TYPE = 'CHANGE_SIDEBAR_TYPE';
const UPLOAD_REFS = 'UPLOAD_REFS';
const SET_ACTIVE_REF = 'SET_ACTIVE_REF';

const initState = {
  theme: 'light',
  rwdSidebar: 'outer',
  refs: [],
  activeRef: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      const theme = action.payload.theme;
      state = Object.assign(state, { theme });
      return state;

    case CHANGE_SIDEBAR_TYPE:
      const rwdSidebar = action.payload.type;
      state = Object.assign(state, { rwdSidebar });
      console.log('state', state);
      return state;

    case UPLOAD_REFS:
      const ref = action.payload.ref;
      state = state.refs.indexOf(ref) === -1 ? Object.assign(state, state.refs.push(ref)) : state;
      return state;

    case SET_ACTIVE_REF:
      const activeRef = action.payload.activeRef;
      state = Object.assign(state, { activeRef });
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

/**
 * 儲存頁面區塊
 * @param {Any} ref 區塊Ref
 * @returns 
 */
export function uploadRefs(ref) {
  return {
    type: UPLOAD_REFS,
    payload: {
      ref,
    },
  };
}

/**
 * 設定當前頁面區塊
 * @param {Any} activeRef 
 */
export function setActiveRef(activeRef) {
  return {
    type: SET_ACTIVE_REF,
    payload: {
      activeRef,
    },
  };
}

export default createStore(reducer);;
