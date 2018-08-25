import { queryBrief, getOperator } from '../services/overview';

export default {
  namespace: 'overview',

  state: {
    tags: [],
    operator: {},
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryBrief, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },

    *fetchOperator({ payload }, { call, put }) {
      const response = yield call(getOperator, payload);

      yield put({
        type: 'appendOperator',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
    appendOperator(state, action) {
      return {
        ...state,
        operator: action.payload,
      };
    },
  },
};
