var start = document.getElementById('btn');
var choice = document.querySelectorAll('.choice');
var score = 0;
var shareBtn = document.getElementById('end_share');

//게임 시작
function startDBD(){
    start.addEventListener('click', function(){
        score = 0;
        scoreText(score);
        changeImg(0, 0);
        start.style.display = "none";
        shareBtn.style.display = "none";
        for (var i = 0; i < 3; i++){
            choice[i].disabled = false;
        }
    });
    dibidibidib();
}

//랜덤 난수 생성
//1 - 묵, 2 - 찌, 3 - 빠
function randDBD(){
    const randNum = Math.floor(Math.random() * 3)+1;

    return randNum;
}

//이미지 교체
//n - 디노, m - 정한
function changeImg(n, m){
    var dino = document.getElementById('dino');
    var jh = document.getElementById('jeonghan');

    if (n == 1){
        dino.src = "./assets/images/디노_1.png";
    }
    else if (n == 2){
        dino.src = "./assets/images/디노_2.png";
    }
    else if (n == 3){
        dino.src = "./assets/images/디노_3.png";
    }
    else{
        dino.src = "./assets/images/디노_0.png";
    }

    if (m == 1){
        jh.src = "./assets/images/정한_1.png";
    }
    else if (m == 2){
        jh.src = "./assets/images/정한_2.png";
    }
    else if (m == 3){
        jh.src = "./assets/images/정한_3.png";
    }
    else{
        jh.src = "./assets/images/정한_0.png";
    }
}

//가위바위보 비교
//비기면 끝
function compare(comChoice, n){
    changeImg(comChoice, n);
    console.log("comChoice " + comChoice + " / 버튼 " + n);
    console.log("asis : " + score);

    if(n == comChoice){
        console.log("비김");
        endGame();
    }
    else{
        console.log("피함");
        score++;
        scoreText(score);
    }    
}

function scoreText(i){
    document.getElementById('score').innerHTML = i;
}

var rock = document.getElementById('rock');
var scissor = document.getElementById('scissor');
var paper = document.getElementById('paper');

function dibidibidib(){
    rock.addEventListener('click', function(){
        compare(randDBD(), 1);
    });
    scissor.addEventListener('click', function(){
        compare(randDBD(), 2);
    });
    paper.addEventListener('click', function(){
        compare(randDBD(), 3);
    });
}

function endGame(){
    start.style.display = "inline-block";
    start.innerText = "다시 붙기";
    shareBtn.style.display = "inline-block";
    for (var i = 0; i < 3; i++){
        choice[i].disabled = true;
    }

    endScore(score);

    shareBtn.addEventListener('click', function(){
        shareScore(score);
    });
}

function endScore(i){
    if (i == 0){
        document.getElementById('score').innerHTML = "우와~ 0점이다~";
    }
    else if(i <= 5){
        document.getElementById('score').innerHTML = "오 나름..? " + i + "점";
    }
    else if(i <= 10){
        document.getElementById('score').innerHTML = "제법인데? " + i + "점";
    }
    else{
        document.getElementById('score').innerHTML = "개고수 인정합니다. " + i + "점";
    }
}

//점수 공유하기
function shareScore(i) {
    var sendUrl = "https://hbdproject.github.io/justforfunDBD/"; // 전달할 URL
    window.open("https://twitter.com/intent/tweet?text=" + "내 점수 : " + i + "점"
        + "%0a쓸데없는 디비디비딥 당신도 해보시길%0a" + "&url=" + sendUrl);
}

startDBD();