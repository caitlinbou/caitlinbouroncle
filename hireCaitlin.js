

let yourTeam = ["some poeple I look forward to meeting"];

company.addEventListener("onHire", (event)=>{
    event.preventDefault();
    const caitlinBouroncle = document.querySelector("#CaitlinBouroncle").value.trim();
    console.log(`you need ${caitlinBouroncle}`)
    const teamUpgrade = {
        teamLead: caitlinBouroncle,
        teamMood: productive
    }
    yourTeam.push(teamUpgrade)
})