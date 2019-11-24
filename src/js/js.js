function roll() {
    i = document.getElementById("1d").value;

    score = Math.ceil(Math.random() * i);
    
    console.log(score);
    document.getElementById("result").innerHTML = score;
}