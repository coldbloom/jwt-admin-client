import {axiosInstance} from "../instance";
import {ILoginRequest, ILoginResponse} from "./types";
import Endpoints from "../endpoints";
import {AxiosPromise} from "axios";

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
    axiosInstance.post('http://localhost:3030/login', params, {withCredentials: true})

export const logout = (): AxiosPromise =>
    axiosInstance.get('http://localhost:3030/logout')