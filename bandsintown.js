const wetId = "198778";
const url = `https://rest.bandsintown.com/artists/id_${wetId}/events/?app_id=fe7a10de02c1e9f60fccc48d77300b73`;

getEvents(url);

async function getEvents(url) {
  const res = await fetch(url);
  const resJSON = await res.json();
  setEvents(resJSON);
}

function setEvents(events) {
  const container = document.getElementById("tour-column");
  const div = document.createElement("div");

  if (events.length !== 0) {
    events.forEach(event => {
      const p = document.createElement("p")
      const dateObject = new Date(event.datetime);
      const month = String(dateObject.getMonth() + 1).padStart(2, "0");
      const day = String(dateObject.getDate()).padStart(2, "0");
      const year = String(dateObject.getFullYear()).slice(-2);
      const formattedDate = month + "/" + day + "/" + year;
      p.innerHTML = '<span class="left">' + event.venue.name + '</span><span class="right">' + formattedDate + '</span><br /><span class="left">' + event.venue.location + '</span><span class="right"><a href="' + event.url + '" target ="_blank">Tickets</a></span><br />';
      div.append(p)
    });
  }
  else {
    const p = document.createElement("p")
    p.innerText = "No upcoming events."
    div.append(p);
  }
  container.append(div);
}
