export const setUserLocalStorage = () => {
  typeof window !== "undefined"
    ? window.localStorage.setItem("userId", "jbu3470")
    : false;
};

export const getUserLocalStorage = () => {
  let userId: string | null = " ";
  typeof window !== "undefined"
    ? (userId = window.localStorage.getItem("userId"))
    : false;

  return {
    userId,
  };
};
