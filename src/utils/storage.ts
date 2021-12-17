export function setSession(key: string, value: any): void {
  const str = window.JSON.stringify(value);
  window.sessionStorage.setItem(key, str);
}

export function getSession(key: string): any {
  let json: string | null;
  json = window.sessionStorage.getItem(key);
  if (json) json = window.JSON.parse(json);
  return json;
}

export function setLocal(key: string, value: any): void {
  const str = window.JSON.stringify(value);
  window.localStorage.setItem(key, str);
}

export function removeLocal(key: string): void {
  window.localStorage.removeItem(key);
}
export function getLocal(key: string): any {
  let json: string | null;
  json = window.localStorage.getItem(key);
  if (json) json = window.JSON.parse(json);
  return json;
}
