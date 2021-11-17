function ls(key, obj) {
  if (obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
  return localStorage.getItem(key) != null
    ? JSON.parse(localStorage.getItem(key))
    : [];
}

export default ls;
