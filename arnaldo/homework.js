let people = [{
    fName: "Arnaldo",
    lName: "Bismarques",
    age: "32",
    like: 199,
    pic: "https://cdn.pixabay.com/photo/2019/07/31/06/09/zodiac-sign-4374411__340.jpg"
}, {
    fName: "Samuel",
    lName: "Bismarques",
    age: "1",
    like: 499,
    pic: "https://cdn.pixabay.com/photo/2019/07/31/06/03/zodiac-sign-4374407__340.jpg"
}, {
    fName: "Julia",
    lName: "Bismarques",
    age: "29",
    like: 10,
    pic: "https://cdn.pixabay.com/photo/2019/07/31/06/03/zodiac-sign-4374407__340.jpg"

}, {
    fName: "Lukasz",
    lName: "Lang",
    age: "42",
    like: 55,
    pic: "https://cdn.pixabay.com/photo/2019/07/31/06/03/zodiac-sign-4374409__340.jpg"
}, {
    fName: "Dexter",
    lName: "Holland",
    age: "55",
    like: 235,
    pic: "https://cdn.pixabay.com/photo/2019/07/31/06/09/zodiac-sign-4374414__340.jpg"
}];
for (let val of people) {
    document.getElementById("result").innerHTML += `
    <div>
    <div class="card" style="width: 18rem;">
    <img src="${val.pic}" class="card-img-top" alt="${val.fName}">
    <div class="card-body">
      <h5 class="card-title">${val.fName}</h5>
      <p class="card-text"></p>
      <p class="likes">${val.like}</p>
      <a href="#" class="btn btn-success likeBtn">Like</a>
      <a href="#" class="btn btn-warning More">Show more details</a>
    </div>
    </div>
    </div>`;
}
let btns = document.getElementsByClassName("likeBtn");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        people[i].like++;
        document.getElementsByClassName("likes")[i].innerHTML = people[i].like;
    })
}
let moreinfobtns = document.getElementsByClassName("More");

for (let i = 0; i < moreinfobtns.length; i++) {
    moreinfobtns[i].addEventListener("click", function() {
        document.getElementById("info").innerHTML = `<div class="card" style="width: 100%;">
        <img src="${people[i].pic}" class="card-img-top" alt="${people[i].fName}">
        <div class="card-body">
          <h5 class="card-title">${people[i].fName} ${people[i].lName}</h5>
          <p class="card-text"> ${people[i].age} <br> ${people[i].like}</p>
        </div>
      </div>`;
    })
}