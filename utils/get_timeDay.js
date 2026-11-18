export function get_days() {
  let dayIndex = new Date().getDay();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[dayIndex];
}

export function get_greet() {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return "Good Morning";
  } else if (currentHour < 17) {
    return "Good Afternoon";
  } else if (currentHour < 21) {
    return "Good Evening";
  } else {
    return "Good Evening";
  }
}
