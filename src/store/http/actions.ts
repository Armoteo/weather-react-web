import { ActionHttp, RequestPayload, ACTION_TYPES } from "./types";


export const request = (p: RequestPayload): ActionHttp => ({
    type: ACTION_TYPES.REQUEST,
    ...p
});

export const requestPhoto = (p: RequestPayload): ActionHttp => ({
    type: ACTION_TYPES.REQUEST_CITY_PHOTO,
    ...p
});
