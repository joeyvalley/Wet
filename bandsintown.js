const wetId = "198778";
const toroId = ""
const url = `https://rest.bandsintown.com/artists/id_${wetId}/events/?app_id=fe7a10de02c1e9f60fccc48d77300b73`;

getEvents(url);

async function getEvents(url) {
  const res = await fetch(url);
  const resJSON = await res.json();
  setEvents(resJSON);
}

function setEvents(events) {
  if (events.length !== 0) {
    console.log("There are events");
    return
  }
  const container = document.getElementById("tour-column");
  const p = document.createElement("p");
  p.innerText = "No upcoming events."
  container.append(p);
}
