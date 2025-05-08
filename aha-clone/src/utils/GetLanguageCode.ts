export const getLanguageCode = (lang: string) => {
  switch (lang.toLowerCase()) {
    case "english":
      return "en";
    case "telugu":
      return "te";
    case "tamil":
      return "ta";
    default:
      return "en";
  }
};
