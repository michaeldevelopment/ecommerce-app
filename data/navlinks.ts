import { navlinksType } from "./../types/dataTypes";

export const navlinks: navlinksType = {
  home: "/",
  earphones: "/earphones",
  speakers: "/speakers",
  headphones: "/headphones",
  cart: "/cart",
};

export const navlinksLabels = Object.keys(navlinks);
export const navlinksUrls = Object.values(navlinks);
