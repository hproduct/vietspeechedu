import { LocalStorageKey } from "@/constant/LocalStorageKey";
import axios from "axios";
import { BaseURl } from "./ListAPI";
import route from '@/router/Router'
import AppModule from "@/store/AppModule";

export const FetchApi = async (
  url,
  method,
  contentType,
  data,
  param,
  resultCallback
) => {
  axios({
    method: method,
    url: `${BaseURl}${url}`,
    headers: {
        'Content_Type': contentType
    },
    data: data,
    param: param
  }).then((response) => {
    resultCallback(response.data)
  }).catch((error) => {
    // console.log('error name:'+Object.keys(error))
    // console.log('error name:'+error.name)
    // console.log('error code:'+error.code)
    // console.log('error message:'+error.message)
    // console.log('error name:'+error.config.timeout)
    // AppModule.state.error = error;
    if(error.code != 'ERR_BAD_REQUEST'){
      //route.push({ name:"ErrorPage"})
    }
    resultCallback(error.response.data)
  })
};

export const FetchApiWithCustomHeader = async(
  url,
  method,
  header,
  data,
  param,
  resultCallback
) => {
  axios(
    {
      method: method,
      url: `${BaseURl}${url}`,
      headers: header,
      data: data,
      params: param
    }
  ).then((response) => {
    resultCallback(response.data)
  }).catch((error) => {
    //route.push({name: "notFound"})
    resultCallback(error.response.data)
  })
}

export const FetchTestApi = async (
  url,
  method,
  contentType,
  data,
  param,
  resultCallback
) => {
  axios({
    method: method,
    url: `${BaseURl2}`,
    headers: {
        'Content_Type': contentType
    },
    data: data,
    param: param
  }).then((response) => {
    resultCallback(response.data)
  }).catch((error) => {
    resultCallback(error)
  })
};