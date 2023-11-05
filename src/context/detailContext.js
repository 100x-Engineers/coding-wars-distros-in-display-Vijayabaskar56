import { useContext, createContext } from "react";

export const detailContext = createContext({
  details: [{}],
  getProfessionalDetails: (tweet) => {},
  getEducationalDetails: (id, tweet) => {},
  getContactDetails: (id, tweet) => {},
  userPreference: () => {},
});

export const TweetProvider = detailContext.Provider;

export function useDetails() {
  return useContext(detailContext);
}
