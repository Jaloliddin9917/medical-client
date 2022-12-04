import useApi from "./query";
import useApiMutation from "./mutation";
export const GetNews = (params, options) => {
  return useApi("/news", params, options);
};

export const GetNewsDetailed = (id, params, options) => {
  return useApi(`/news/${id}`, params, options);
};

export const GetNewsCategories = (params, options) => {
  return useApi("/news-category", params, options);
};

export const GetNewsByCategories = (params, options) => {
  return useApi(`/news`, params, options);
};

export const GetSurgeries = (params, options) => {
  return useApi("/surgery", params, options);
};

export const GetSurgeryDetailed = (id, params, options) => {
  return useApi(`/surgery/${id}`, params, options);
};

export const SendMessage = () => {
  return useApiMutation("post", `/messages`);
};
