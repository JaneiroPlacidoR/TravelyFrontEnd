window.addEventListener("scroll",function(){

function fade(direction){
    let image = document.querySelectorAll('.fade'+direction);

    for(let i = 0;i < image.length;i++){
        let thisheight = window.innerHeight/1.3;
        let distance = image[i].getBoundingClientRect().top;

        image[i].classList.add('transform-'+direction);

        if(distance <= thisheight){
            image[i].classList.add('tofd');
        }else{
            image[i].classList.remove('tofd');
        }
    }
}

fade('up');
fade('down');
fade('right');
fade('left');


    

})