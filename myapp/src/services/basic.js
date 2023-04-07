import { useQuery, useMutation } from '@tanstack/react-query';
import { api } from './axios';
export const GET_FULL_MENU="api/menu/ptm/menu/2";

export function getFullMenu(params) {
  return api.get(GET_FULL_MENU).then(({ data }) => data);
}

export function useFullMenu(params, config = {}) {
  return useQuery([GET_FULL_MENU, params], payload => getFullMenu(params, payload), config);
}
