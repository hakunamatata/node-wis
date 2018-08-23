import {queryBrief } from '../services/overview';

export default {
    namespace: 'overview',
  
    state: {
      tags: [],
    },
  
    effects: {
        *fetch({ payload }, { call, put }) {
            const response = yield call(queryBrief, payload);
            yield put({
              type: 'save',
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
    },
  };
  