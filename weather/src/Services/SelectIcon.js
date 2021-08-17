export const SelectIcon = (id) => {
  if (199 < id && id < 299) return "thunder";
  if (299 < id && id < 399) return "partial cloud";
  if (499 < id && id < 599) return "rain";
  if (599 < id && id < 699) return "snow";
  if (699 < id && id < 799) return "mist";
  if (800 < id && id < 899) return "cloudy";
  if (id === 800) return "sunny";
  else return "null";
};
