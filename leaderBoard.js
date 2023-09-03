const scoreMainContainer = document.getElementById("containDetails");
const AddDetailsButton = document.getElementById("addBtn");
console.log(AddDetailsButton);
AddDetailsButton.addEventListener("click", () => {
    const fName = document.getElementById("fName");
    const lName = document.getElementById("lName");
    const country = document.getElementById("country");
    const score = document.getElementById("score");

    const scoreBoard = document.createElement("div");
    scoreBoard.classList.add("scoreBoard");

    scoreBoard.innerHTML = `
    <div>
    <p class="playerName">${fName.value} ${lName.value}</p>
    <p class="at_that_time">${dateAndTime()}</p>
    </div>
    <p class="country">${country.value}</p>
    <p class="score">${score.value}</p>
    <p class="deleteIcon">&#x1f5d1;</p>
  `;

    scoreMainContainer.appendChild(scoreBoard);
    fName.value = "";
    lName.value = "";
    country.value = "";
    score.value = "";
    sortBoard();
    deleteElemnt();
});

function sortBoard() {
    const ScoreBoard = document.querySelectorAll(".scoreBoard");
    const arr = [];
    ScoreBoard.forEach((ele) => arr.push(ele));
    const sortedArray = arr
        .map((ele) => {
            return ele;
        })
        .sort((a, b) => {
            let runOfManOne = parseInt(a.children[2].textContent);
            let runOfManTwo = parseInt(b.children[2].textContent);
            // B = CURRENT
            // A = PREV

            if (runOfManOne > runOfManTwo) {
                return -1;
            }

            if (runOfManOne < runOfManTwo) {
                return 1;
            }
        });

    sortedArray.forEach((ele) => {
        scoreMainContainer.append(ele);
    });
}

function dateAndTime() {
    let dateObject = new Date();
    let month = dateObject.toLocaleString("default", { month: "long" })
    day = dateObject.getDate(),
        year = dateObject.getFullYear(),
        time = dateObject.toLocaleTimeString().slice(0, 8);

    let generateResult = `${month} ${day}: ${year} ${time}`

    return generateResult;
}

function deleteElemnt() {
    const deleteIcon = document.querySelectorAll(".deleteIcon");
    deleteIcon.forEach((ele) => {
        ele.addEventListener("click", (e) => {
            return e.target.parentElement.remove()
        })
    })
}