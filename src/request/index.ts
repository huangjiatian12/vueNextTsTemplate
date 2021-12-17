import instance from "./base";

export async function get<T>(url: string, params?: T) {
  return instance.get(url, { params });
}
