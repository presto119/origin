$(document).ready(function(){
  //#1. 배열 구성
  //2차 배열 패턴 ["이미지 파일", "타이틀", "날짜 정보", "설명"]
  var $article = [
    ["t-1-213373_640x480.jpg", "Make a Whish", "2020.08.19", "This work is about the centimental & cute baby."],
    ["t-3-325075_640x480.jpg", "Purple Haze", "2020.07.29", ""],
    ["t-21-545213_640x480.jpg", "Masked Model", "2020.04.30", ""],
    ["t-7-360109_640x480.jpg", "Birds of Beauty", "2020.05.04", ""],
    ["t-8-308603_640x480.jpg", "Summer Wheat", "2019.06.14", ""],
    ["t-9-340072_640x480.jpg", "Before the Storm", "2021.03.17", ""],
    ["t-17-247234_640x480.jpg", "Young Woman", "2019.10.07", ""],
    ["shutterstock_58264459-111274_640x480.jpg", "Before the Storm", "2020.12.24", ""],
    ["t-13-584189_640x480.jpg", "A Loving Couple", "2021.02.21", ""],
    ["shutterstock_56785618-132726_640x480.jpg", "Spiral Staircase", "2019.10.13", ""],
    ["t-5-236106_640x480.jpg", "Lonely Ladybug", "2021.01.16", ""],
    ["t3-8-321596_640x480.jpg", "Emphasis Lafuta", "2020.07.07", ""],
    ["t-19-373493_640x480.jpg", "Monk Walks", "2021.03.12", ""],
    ["t3-9-289799_640x480.jpg", "Arena Vivian", "2020.04.05", ""]
  ];

  //#2. 반복문을 적용하면서 상단의 배열 데이터를 적용시킨다. (append() 메서드를 활용하여 해당하는 위치로 넣어준다.)
  for(v of $article){
    $("#contents").append(`
    <article style="background-image:url(./img/${v[0]});">
      <div class="yellow_bg">
        <div class="txt_part">
          <h3>${v[1]}</h3>
          <p class="date">${v[2]}</p>
          <div class="bar"></div>
          <p class="txt">${v[3]}</p>
          <div class="btn">
            <a class="circle" href="#">
              <img src="./img/zoom.png" alt="">
            </a>
          </div>
        </div>
      </div>
    </article>
    `);
  }
});





