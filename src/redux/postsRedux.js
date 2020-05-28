import Axios from 'axios';

/* selectors */
export const getAllPublished = ({posts}) => posts.data;

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const addPost = payload => ({ payload, type: ADD_POST});
export const editPost = payload => ({ payload, type: EDIT_POST});

/* thunk creators */
export const fetchPublished = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get('http://localhost:8000/api/posts')
      .then(res => {
        dispatch(fetchSuccess(res.data));
        console.log('get responseeee');
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const savePost = (post) => {
  return (dispatch, getState) => {
    // dispatch(fetchStarted());

    Axios
      .post('http://localhost:8000/api/posts', post)
      .then(res => {
        // dispatch(fetchSuccess(res.data));
        console.log(':: get response');
      })
      .catch(err => {
        // dispatch(fetchError(err.message || true));
        console.log(':: error');
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case ADD_POST: {
      return {
        ...statePart,
        data: [
          ...statePart.data,
          {...action.payload} ],
        loading: {
          active: false,
          error: false,
        },
      };
    }
    case EDIT_POST: {
      console.log('EDIT POST', action);
      return {
        ...statePart,
        data: statePart.data.map(post =>
          post.id === action.payload.id
            ?
            {...action.payload}
            :
            post
        ),
        loading: {
          active: false,
          error: false,
        },
      };
    }
    default:
      return statePart;
  }
};
