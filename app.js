var herp = document.getElementById("hero");
var ship = document.getElementById("ship");
var containerHero = document.getElementById("containerHero");
var containerShip = document.getElementById("containerShip");

const starwars_url = "https://swapi.dev/api/";

var currentPeoplePage = 1;

function fetchcharacters(category) {
    fetch(starwars_url + category)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            renderContainerList(data.results);
        });
}

herp.addEventListener("click", function () {
    fetchcharacters("people/?page=" + currentPeoplePage);
    document.getElementById("nextPeople").style.display = 'block';
});

ship.addEventListener("click", function () {
    fetchcharacters("starships/?page=", "1");
});

function renderContainerList(data) {
    containerHero.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>Gender</th>
                    <th>Birth Year </th>
                    <th>Appearances</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${data[0].name}</td>
                    <td>${data[0].height}</td>
                    <td>${data[0].mass}</td>
                    <td>${data[0].gender}</td>
                    <td>${data[0].birth_year}</td>
                    <td>${data[0].films.length}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>${data[1].name}</td>
                    <td>${data[1].height}</td>
                    <td>${data[1].mass}</td>
                    <td>${data[1].gender}</td>
                    <td>${data[1].birth_year}</td>
                    <td>${data[1].films.length}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>${data[2].name}</td>
                    <td>${data[2].height}</td>
                    <td>${data[2].mass}</td>
                    <td>${data[2].gender}</td>
                    <td>${data[2].birth_year}</td>
                    <td>${data[2].films.length}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>${data[3].name}</td>
                    <td>${data[3].height}</td>
                    <td>${data[3].mass}</td>
                    <td>${data[3].gender}</td>
                    <td>${data[3].birth_year}</td>
                    <td>${data[3].films.length}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>${data[4].name}</td>
                    <td>${data[4].height}</td>
                    <td>${data[4].mass}</td>
                    <td>${data[4].gender}</td>
                    <td>${data[4].birth_year}</td>
                    <td>${data[4].films.length}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>${data[5].name}</td>
                    <td>${data[5].height}</td>
                    <td>${data[5].mass}</td>
                    <td>${data[5].gender}</td>
                    <td>${data[5].birth_year}</td>
                    <td>${data[5].films.length}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>${data[6].name}</td>
                    <td>${data[6].height}</td>
                    <td>${data[6].mass}</td>
                    <td>${data[6].gender}</td>
                    <td>${data[6].birth_year}</td>
                    <td>${data[6].films.length}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>${data[7].name}</td>
                    <td>${data[7].height}</td>
                    <td>${data[7].mass}</td>
                    <td>${data[7].gender}</td>
                    <td>${data[7].birth_year}</td>
                    <td>${data[7].films.length}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>${data[8].name}</td>
                    <td>${data[8].height}</td>
                    <td>${data[8].mass}</td>
                    <td>${data[8].gender}</td>
                    <td>${data[8].birth_year}</td>
                    <td>${data[8].films.length}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>${data[9].name}</td>
                    <td>${data[9].height}</td>
                    <td>${data[9].mass}</td>
                    <td>${data[9].gender}</td>
                    <td>${data[9].birth_year}</td>
                    <td>${data[9].films.length}</td>
                </tr>
            </tbody>
        </table>
        `;
}

document.getElementById("nextPeople").addEventListener("click", function () {
    currentPeoplePage++;
    if (currentPeoplePage < 9) {
        fetchcharacters("people/?page=" + currentPeoplePage);
        if (currentPeoplePage == 8) {
            document.getElementById("nextPeople").style.display = 'none';
        }
        if (currentPeoplePage == 2) {
            document.getElementById("previousPeople").style.display = 'block';
        }
    }
});

document.getElementById("previousPeople").addEventListener("click", function () {
    currentPeoplePage--;
    if (currentPeoplePage < 9) {
        fetchcharacters("people/?page=" + currentPeoplePage);
        if (currentPeoplePage == 1) {
            document.getElementById("previousPeople").style.display = 'none';
        }
        if (currentPeoplePage == 7) {
            document.getElementById("nextPeople").style.display = 'block';
        }
    }
});

