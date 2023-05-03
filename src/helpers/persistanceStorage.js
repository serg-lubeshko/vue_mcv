export const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.log("error getting data from LS", e);
    return null;
  }
};

export const setItem = (key, data) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.log("error setting data from LS", e);
  }
};
