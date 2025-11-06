// document.querySelector("#hotspot-1").addEventListener("click", updateInfobox1);

const hotspots = document.querySelectorAll(".hotspot");
const title = document.querySelector(".info-text .title");
const placeholder = document.querySelector(".info-text .placeholder");
const efficiency = document.querySelector("#efficiency");
const requirement = document.querySelector("#requirement");

let activeHotspot = null;

hotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", () => {
    if (activeHotspot === hotspot) {
      resetInfo();
      hotspot.classList.remove("active");
      activeHotspot = null;
      return;
    }

    activeHotspot = hotspot;

    hotspots.forEach((h) => h.classList.remove("active"));
    hotspot.classList.add("active");

    if (hotspot.id === "circle-hotspot1") {
      updateInfoboxOre();
    } else if (hotspot.id === "circle-hotspot2") {
      updateInfoboxOje();
    } else if (hotspot.id === "circle-hotspot3") {
      updateInfoboxBen();
    }
  });
});

function resetInfo() {
  title.textContent = "Hjælp til få de ældre ud";
  placeholder.innerHTML = "<p>Du kan gøre forskellen – sådan hjælper du ældre, når flammerne breder sig.</p>";
  efficiency.innerHTML = "<h2>Godt at vide</h2>";
  requirement.innerHTML = "<h2>Tryk her</h2>";
}

// function updateInfoboxOre() {
//   title.textContent = "Dårligt gående – Langsom evakuering";
//   placeholder.innerHTML = "<p>En stor del af ældre beboere har nedsat mobilitet. Det betyder, at de bevæger sig langsomt, har brug for hjælpemidler eller helt afhænger af personale for at komme ud.</p>";
//   efficiency.innerHTML =
//     "<h2>Mulige løsninger:</h2> <li> Brug særlige evakueringsstole ved trapper.</li>  <li>Tilknyt personale til bestemte beboere ved evakuering.</li> <li>Planlæg realistiske evakueringsøvelser med fokus på langsom mobilitet.</li>";
//   requirement.innerHTML = "<h2>Tryk her</h2>";
// }

function updateInfoboxOre() {
  title.textContent = "Dårligt hørende – Manglende reaktion på alarm";
  placeholder.innerHTML = "Ældre med hørenedsættelse reagerer ofte ikke på brandalarmer, råb eller evakueringsbeskeder. Det øger risikoen for, at nogle ikke kommer ud i tide.";
  efficiency.innerHTML = "Fakta / Statistik: <li>70% af personer over 70 år har en form for høretab.</li><li> I flere brande på plejehjem er beboere ikke blevet vækket af sirener.</li>";
  requirement.innerHTML = "Mulige løsninger: <li> Kombinér lydalarmer med blinkende lys eller vibrationspuder.</li>  <li>Brug tydelige håndbevægelser og visuelle instruktioner.</li>";
}

function updateInfoboxOje() {
  title.textContent = "Dårligt seende / desorienteret – Risiko for fald og panik";
  placeholder.innerHTML = "<p>Nedsat syn, forvirring eller balanceproblemer gør, at ældre kan blive desorienterede under evakuering. Nogle mister retningen, snubler eller falder i panik.</p>";
  efficiency.innerHTML = "<p>Fakta / Statistik: <li>Hver tredje over 75 år har problemer med synet, selv med briller.</li><li> 40% af faldulykker på plejehjem sker under stressede situationer.</li> </p>";
  requirement.innerHTML =
    "Mulige løsninger: <li> Brug lysende gulvmarkeringer og tydelig belysning mod udgange.</li> <li> Fjern løse tæpper og forhindringer i flugtveje.</li>  <li>Sørg for, at personalet ledsager de mest udsatte beboere fysisk.</li>";
}

function updateInfoboxBen() {
  title.textContent = "Dårligt gående – Langsom evakuering";
  placeholder.innerHTML = "<p>En stor del af ældre beboere har nedsat mobilitet. Det betyder, at de bevæger sig langsomt, har brug for hjælpemidler eller helt afhænger af personale for at komme ud.</p>";
  efficiency.innerHTML = "<p>Fakta / Statistik:<li>6 ud af 10 plejehjemsbeboere har brug for hjælp til at bevæge sig fra seng til stol</li><li>Evakuering kan tage op til 3 gange længere tid end hos raske voksne.</li></p>";
  requirement.innerHTML = "Mulige løsninger:<li> Brug særlige evakueringsstole ved trapper.</li>  <li>Tilknyt personale til bestemte beboere ved evakuering.</li> <li>Planlæg realistiske evakueringsøvelser med fokus på langsom mobilitet.</li>";
}
