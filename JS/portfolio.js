const close_Modal = document.querySelector (".close-slider");
const btn_left = document.querySelector (".btn-left");
const btn_right = document.querySelector (".btn-right");
const current_Img_visible = document.querySelector (".img-visible-slider");
const box_slider = document.querySelector (".slider-portfolio");
const all_IMG = Array.from(document.querySelectorAll (".item-grid img")); // create a list array
let current_photos;
let current_index;


function  Next_IMG (list_img,visible_img) {
    
    if (current_index === list_img.length - 1) {
        current_index = 0
        visible_img.src = list_img[current_index].src 
        return
    }
    
    visible_img.src = list_img[current_index + 1].src 
    current_index += 1
}


function Prev_IMG (list_img,visible_img) {
    if (current_index > 0) {
        visible_img.src = list_img[current_index - 1].src 
        current_index -= 1

    } else if (current_index === 0) {
        current_index = list_img.length - 1
        visible_img.src = list_img[current_index].src
        return
    }
}



close_Modal.addEventListener ("click", function (e) {
    box_slider.style.display = "none";
});



all_IMG.forEach (img => {
    img.addEventListener("click",function (e) {
        box_slider.style.display = "block";
        current_Img_visible.src = this.src;
        current_photos = this;
        current_index = all_IMG.indexOf(current_photos);
    }); 
});


btn_right.addEventListener ("click",function (e) {
    Next_IMG (all_IMG,current_Img_visible)

});


btn_left.addEventListener ("click",function (e) {
    Prev_IMG (all_IMG,current_Img_visible)
});


document.addEventListener("keydown",function (e) {
    btn_left.style.boxShadow = "0px 3px 5px transparent"

    if (e.key === "ArrowLeft") {
        Prev_IMG (all_IMG,current_Img_visible)
    } else if (e.key === "ArrowRight") {
        Next_IMG (all_IMG,current_Img_visible)
    }
})



// CORRIGE By ENZO USTARIZ

// if (current_index === all_IMG.length - 1) {
//     current_index = 0;
//     current_Img_visible.src = all_IMG[current_index].src;
//     current_photos = all_IMG[current_index];
//     current_index = all_IMG.indexOf (current_photos);
//     console.log();
//     return;
// }

// current_Img_visible.src = all_IMG[current_index + 1].src;
// current_photos = all_IMG[current_index + 1];
// current_index = all_IMG.indexOf (current_photos);