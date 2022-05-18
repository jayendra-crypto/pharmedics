import {
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_SUCCESS,
  BLOG_CREATE_FAIL,
  BLOG_UPDATE_REQUEST,
  BLOG_UPDATE_SUCCESS,
  BLOG_UPDATE_FAIL,
  BLOG_DELETE_REQUEST,
  BLOG_DELETE_SUCCESS,
  BLOG_DELETE_FAIL,
  BLOG_DETAILS_BY_ID_REQUEST,
  BLOG_DETAILS_BY_ID_SUCCESS,
  BLOG_DETAILS_BY_ID_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_DETAILS_FAIL,
} from "../constants/blogConstants";

export const createBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_CREATE_REQUEST:
      return { loading: true };
    case BLOG_CREATE_SUCCESS:
      return { loading: false, blogInfo: action.payload };
    case BLOG_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const deleteBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_DELETE_REQUEST:
      return { loading: true };
    case BLOG_DELETE_SUCCESS:
      return { loading: false, blogInfo: action.payload };
    case BLOG_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const updateBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_UPDATE_REQUEST:
      return { loading: true };
    case BLOG_UPDATE_SUCCESS:
      return { loading: false, blogInfo: action.payload };
    case BLOG_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const detailByIdBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_DETAILS_BY_ID_REQUEST:
      return { loading: true };
    case BLOG_DETAILS_BY_ID_SUCCESS:
      return { loading: false, blogInfo: action.payload };
    case BLOG_DETAILS_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const allBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_DETAILS_REQUEST:
      return { loading: true };
    case BLOG_DETAILS_SUCCESS:
      return { loading: false, blogInfo: action.payload };
    case BLOG_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
