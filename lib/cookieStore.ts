// lib/cookieStore.ts
let lastCookiesDump = "";

export function setLastCookiesDump(dump: string) {
  lastCookiesDump = dump;
}

export function getLastCookiesDump() {
  return lastCookiesDump;
}
