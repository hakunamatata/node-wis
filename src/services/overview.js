import request from '../utils/request';

export async function queryBrief() {
  return request('/api/overview/taskbrief');
}

export async function getOperator() {
  return request('/api/overview/operator');
}
