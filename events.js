const URL = "https://rest.bandsintown.com/artists/wet/events/?app_id=fe7a10de02c1e9f60fccc48d77300b73"

async function fetchData(URL) {
  try {
    const res = await fetch(URL);
    const jsonRes = await res.json();
    console.log(jsonRes);
  } catch (error) {
    console.log(error);
  }
}