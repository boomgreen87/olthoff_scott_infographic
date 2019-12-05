const myVM = (() => {
    let logoLink = document.querySelectorAll(".teamLogo"),
        info = document.querySelector("#info"),
        teamName = document.querySelector("#teamName"),
        yearsActive = document.querySelector("#yearsActive"),
        labelsLeft = document.querySelector("#labelsLeft"),
        valuesLeft = document.querySelector("#valuesLeft"),
        labelsRight = document.querySelector("#labelsRight"),
        valuesRight = document.querySelector("#valuesRight"),
        teams = document.querySelector("#teams"),
        teamsBorder = document.querySelector("#teamsBorder"),
        prevClassInner,
        prevClassOuter;

    // Checks if a logo is currently selected
    function checkSelected(link) {
        if (link.classList.contains('selected')) {
            link.classList.toggle('selected')
        }
    }

    // Removes selected class from current logo and adds it to the newly selected logo
    function addSelected(logo) {
        logoLink.forEach(link => checkSelected(link));
        logo.classList.toggle("selected");
    }

    // Animates the info in
    function addInfo(data) {
        info.classList.add("animate");
        teamName.innerHTML = `${data.team}`;
        yearsActive.innerHTML = `(${data.years_active})`;

        labelsLeft.innerHTML = `
        <p>Games:</p>
        <p>Goals:</p>
        <p>Assists:</p>
        `;

        valuesLeft.innerHTML = `
        <p>${data.games}</p>
        <p>${data.goals}</p>
        <p>${data.assists}</p>
        `;

        labelsRight.innerHTML = `
        <p>Points:</p>
        <p>+/-:</p>
        <p>PIM:</p>
        `;

        valuesRight.innerHTML = `
        <p>${data.points}</p>
        <p>${data.plus_minus}</p>
        <p>${data.pim}</p>
        `;

        setTimeout(function(){ info.classList.remove("animate") }, 500)
    }

    // Colours the lines around the logos
    function colourLines(data) {
        if(teams.classList.contains(prevClassInner)) {
            teams.classList.remove(prevClassInner);
            teamsBorder.classList.remove(prevClassOuter);
        }
        teams.classList.add(`team${data.ID}Inner`);
        teamsBorder.classList.add(`team${data.ID}Outer`);
        prevClassInner = `team${data.ID}Inner`;
        prevClassOuter = `team${data.ID}Outer`;
    }

    // Fetches the stats from the database
    function getStats(event) {
        event.preventDefault();

        let url = `/team/${this.getAttribute('href')}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                addSelected(this);
                colourLines(data);
                addInfo(data);
            })
            .catch((err) => console.log(err));
    }

    logoLink.forEach(logoLink=> logoLink.addEventListener('click', getStats));
})();