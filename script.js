//filter

const healthy_btn = document.getElementById("healthy")
const trending_btn = document.getElementById("trending")
const supreme_btn = document.getElementById("supreme")
const all_btn = document.getElementById("all")

let card_wrap = document.querySelector('.fifth__banner__cards')
let healthy_card = document.querySelectorAll(".fifth__banner__cards__card1")
let tranding_card = document.querySelectorAll(".fifth__banner__cards__card2")
let supreme_card = document.querySelectorAll(".fifth__banner__cards__card3")

healthy_btn.onclick = function() {
    reload()
    tranding_card.forEach((card) => {
        card.style.display = 'none'
    })
    supreme_card.forEach((card) => {
        card.style.display = 'none'
    })
    card_wrap.style.justifyContent = 'flex-start'

}

trending_btn.onclick = function() {
    reload()
    healthy_card.forEach((card) => {
        card.style.display = 'none'
    })
    supreme_card.forEach((card) => {
        card.style.display = 'none'
    })
    card_wrap.style.justifyContent = 'flex-start'

}

supreme_btn.onclick = function() {
    reload()
    healthy_card.forEach((card) => {
        card.style.display = 'none'
    })
    tranding_card.forEach((card) => {
        card.style.display = 'none'
    })
    card_wrap.style.justifyContent = 'flex-start'

}

all_btn.onclick = function() {
    reload()
}

function reload(){
    healthy_card.forEach((card) => {
        card.style.display = 'flex'
    })
    tranding_card.forEach((card) => {
        card.style.display = 'flex'
    })
    supreme_card.forEach((card) => {
        card.style.display = 'flex'
    })
    card_wrap.style.justifyContent = 'space-between'
}

//acc

var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    console.log(this)
    var svg = this.children[0];
    svg.classList.toggle("svg__active");

    var panel = this.nextElementSibling;
    
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.border = "none";
    } else {
      panel.style.maxHeight = panel.scrollHeight + 130 + "px";
      panel.style.border = "1px solid #D3D3D3";
    } 
  });
}


//modal

var close_btn = document.getElementById("no_btn") 
var cross = document.getElementById("close_btn")
var modal = document.querySelector(".modal-box")

var open_btn = document.querySelectorAll(".open-btn")


close_btn.onclick = function(){
  modal.classList.remove("modal-box_active")
}

cross.onclick = function(){
  modal.classList.remove("modal-box_active")
}

open_btn.forEach((btn) => {
  btn.onclick = function(){
    modal.classList.add("modal-box_active")
  }
})

//slider 

document.addEventListener('DOMContentLoaded', function() {
  function updateSplide() {
      // Проверяем ширину экрана
      var perPageValue = window.innerWidth <= 1200 ? 1 : 2;

      // Инициализируем Splide
      var splide = new Splide('.splide', {
          perPage: perPageValue,
          omitEnd: true,
          pagination: false,
          arrows: false,
      })

      splide.mount();
  }

  // Изначально вызываем функцию для настройки Splide при загрузке
  updateSplide();

  // Обновляем настройки при изменении размера окна
  window.addEventListener('resize', function() {
      // Удаляем старый экземпляр Splide, если он существует
      if (document.querySelector('.splide').splide) {
          document.querySelector('.splide').splide.destroy(true);
      }
      // Создаем новый экземпляр Splide с обновленными параметрами
      updateSplide();
  });
});