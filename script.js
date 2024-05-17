// document.getElementById("cities").addEventListener("change", function() {
//     var selectedCity = this.value;
//     // Здесь можно добавить код для выполнения действий при выборе определенного города
//     console.log("Выбран город: " + selectedCity);
//   });


document.querySelectorAll('.card_image_2_1, .card_image_2_2, .card_image_3_1, .card_image_3_2, .card_image_1').forEach(function(container){
    container.addEventListener('mouseover', function(){zoomIn(container)})
    container.addEventListener('mouseout', function(){zoomOut(container)})
})
function zoomIn (container){
    container.querySelector('img').style.transform = 'scale(1.1)'
    container.style.backgroundColor = 'rgba(230, 230, 230, 0.2)';
}
function zoomOut (container){
    container.querySelector('img').style.transform = 'scale(1)'
    container.style.backgroundColor = 'white';
}