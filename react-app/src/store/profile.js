//Types:
const LOAD_USERPROFILE = 'userprofile/LOAD_USERPROFILE';
const EDIT_USERPROFILE = 'userprofile/EDIT_USERPROFILE';

//Action Creators:
const loadProfile = (userId) => {
  return {
    type: LOAD_USERPROFILE,
    payload: userId
  }
}

const editProfile = (userId) => {
  return {
    type: EDIT_USERPROFILE,
    payload: userId
  }
}

//Thunks:
export const loadUserProfile = (userId) => async (dispatch) => {
  const res = await fetch(`/api/profile/${userId}`);
  if (res.ok) {
    const profile = await res.json();
    dispatch(loadProfile(profile))
  };
};

export const editUserProfile = (profile, userId) => async (dispatch) => {
  const res = await fetch(`/api/profile/${userId}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(profile)
  });
  if (res.ok) {
    const editedUserProfile = await res.json();
    dispatch(editProfile(editedUserProfile));
    return editedUserProfile;
  };
};

//Initial State:
const initialState = {};

//Reducer:
const userProfileReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD_USERPROFILE:
      newState = action.payload;
      return newState;
    case EDIT_USERPROFILE:
      newState = action.payload;
      return newState;
    default:
      return state;
  };
};

export default userProfileReducer;
