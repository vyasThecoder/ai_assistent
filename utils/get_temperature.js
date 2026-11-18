export async function getCurrentTemperature() {
  let url =
    "https://api.open-meteo.com/v1/forecast?latitude=23.1765&longitude=75.7885&current=temperature_2m&temperature_unit=celsius&timezone=Asia%2FKolkata";
  try {
    const res = await fetch(url);
    const data = await res.json();
    let tem = Math.round(data.current.temperature_2m);
    return tem;
  } catch (error) {
    console.log("temperature", error);
  }
}
