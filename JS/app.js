const btnRight = document.querySelector (".container-btn .right");
const btnLeft = document.querySelector (".container-btn .left");
const allImg = document.querySelectorAll (".container-slides img");
let index = 0

function Next_IMG (list_img,class_name) {

    list_img[index].classList.remove (class_name)

    if (index < list_img.length - 1) {
        index += 1
        
    } else if (index === list_img.length - 1) {
        index = 0
    }

    list_img[index].classList.add (class_name)

}


function Prev_IMG (allImg,class_name) {
    allImg[index].classList.remove (class_name)

    if (index > 0) {
        index -= 1

    } else if (index === 0) {
        index = allImg.length - 1
    }

    allImg[index].classList.add (class_name)
}



btnRight.addEventListener ("click", () => Next_IMG (allImg,"active"))
btnLeft.addEventListener ("click", () => Prev_IMG (allImg,"active"))


setInterval (()=> {
    Next_IMG (allImg,"active")
},4000)
