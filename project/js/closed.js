const date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;

if (month < 6 || month > 8) {
    document.getElementById("closed").innerHTML = "We are currently closed for the season, come back between June 5th and August 20th!";
    document.getElementById("closed").style.color='red';
} else if (month === 6 && day < 5) {
    document.getElementById("closed").innerHTML = "We are currently closed for the season, come back between June 5th and August 20th!";
    document.getElementById("closed").style.color='red';
} else if (month === 8 && day > 20) {
    document.getElementById("closed").innerHTML = "We are currently closed for the season, come back between June 5th and August 20th!";
    document.getElementById("closed").style.color='red';
}
else {
    document.getElementById("closed").innerhtml = "We are currently open for the season, come by for a snowcone during our open hours!";
    document.getElementById("closed").style.color='dark green';
}
