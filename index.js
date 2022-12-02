let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let newGameBtn = document.getElementById("newgame-button")
let homePoints = 0
let guestPoints = 0

function renderScore(){
    homeScore.innerText = homePoints
    guestScore.innerText = guestPoints
}

function resetGame() {
    homePoints = 0
    guestPoints = 0
    guestScore.classList.remove('highlight')
    homeScore.classList.remove('highlight')
    guestScore.classList.remove('winner')
    homeScore.classList.remove('winner')
    renderScore()
}


function add(point, team) {
    if (!checkWinner(point, team)) return
    
    if (team === 'home') {
        homePoints = homePoints + point
    } else {
        guestPoints = guestPoints + point
    }
    renderScore()
    highlightLeader()
}

function highlightLeader() {
    if (homePoints>guestPoints) {
        homeScore.classList.add('highlight')
        guestScore.classList.remove('highlight')
    } else if (homePoints < guestPoints) {
        guestScore.classList.add('highlight')
        homeScore.classList.remove('highlight')
    } else {
        guestScore.classList.remove('highlight')
        homeScore.classList.remove('highlight')
    }
}

function checkWinner(point,team) {
    if(homePoints > 99 || guestPoints > 99) return
    if(isNaN(+homeScore.innerText) || homeScore.innerText === "" ) return

    if (team === 'home' && homePoints + point > 99) {
        homeScore.innerText = "W"
        guestScore.innerText = "L"
        highlightLeader()
        homeScore.classList.add("winner")
        return
    }

    if (team === 'guest' && guestPoints + point > 99) {
        guestScore.innerText = "W"
        homeScore.innerText = "L"
        highlightLeader()
        guestScore.classList.add("winner")
        return
    }
    return true
}

