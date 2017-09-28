const SET_MOBILE_NAV_VISIBILITY = 'LAYOUT/SET_MOBILE_NAV_VISIBILITY';

export const setMobileNavVisibility = (visibility) => ({
  type: SET_MOBILE_NAV_VISIBILITY,
  visibility
});

export const toggleMobileNavVisibility = () => (dispatch, getState) => {
  let visibility = getState().Layout.mobileNavVisibility;
  dispatch(setMobileNavVisibility(!visibility));
}

const initialState = {
  mobileNavVisibility: false,
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOBILE_NAV_VISIBILITY: {
      return {
        ...state,
        mobileNavVisibility: action.visibility
      };
    }
    default: {
      return {
        ...state,
        mobileNavVisibility: action.visibility
      };
    }
  }
}

export default layoutReducer;
