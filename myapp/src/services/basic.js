import { useQuery, useMutation } from '@tanstack/react-query';
import { api } from './axios';
export const GET_FULL_MENU="api/menu/ptm/menu/2";
export const POST_CREATE_MENU="api/menu/createMenu";

export function getFullMenu(params) {
  return api.get(GET_FULL_MENU).then(({ data }) => data);
}

export function useFullMenu(params, config = {}) {
  return useQuery([GET_FULL_MENU, params], payload => getFullMenu(params, payload), config);
}
export function updateMenu(params,payload) {
  return api.post(POST_CREATE_MENU,{
    ...payload,
    userId:2
  }).then(({ data }) => data);
}

export function useUpdateMenu(params, config = {}) {
  return useMutation([POST_CREATE_MENU, params], payload => updateMenu(params, payload), config);
}
