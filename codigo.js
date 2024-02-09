const noScrollLinks = document.querySelectorAll('.btn');

noScrollLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
  });
});



// boton 50


const btn_50 = document.querySelector('.btn-50');
const btn_50_img = document.querySelector('.btn-50-img');
const btn_50_span = document.querySelector('.btn-50-span');


btn_50.addEventListener('click', (e)=>{
    const position = btn_50.getBoundingClientRect();
    const x = e.clientX - position.left - position.width / 2;
    const y = e.clientY - position.top - position.height / 2;

    btn_50.children[0].style.transform = "translate(" + x * 0.9 + "px, " + (y - 20) + "px)";
    btn_50.children[0].style.transitionDuration = '.1s';
    btn_50.children[0].style.pointerEvents = 'none';
    
    setTimeout(() => {
        btn_50.children[0].style.transform = "translate(" + x * 0.9 + "px, " + y * 0.9 + "px)";
        btn_50.children[0].style.transitionDuration = '.3s';
    }, 100);

    setTimeout(() => {
        btn_50.children[0].style.transitionDuration = '.1s';
    }, 600);

   
    if(!btn_50_span.classList.contains('btn-50-span-disparo')){
        const x_span = e.clientX - position.left - position.width + 230;
        const y_span = e.clientY - position.top - position.height / 26;
        btn_50.children[1].style.transform = "translate(" + x_span * 0.9 + "px, " + y_span * 0.9 + "px)";
        btn_50_span.classList.add('btn-50-span-disparo');


        setTimeout(() => {
            btn_50_span.classList.remove('btn-50-span-disparo');
        }, 1000);
    }
   

});




btn_50.addEventListener("mousemove", function(e){
    const position = btn_50.getBoundingClientRect();
    const x = e.clientX - position.left - position.width / 2;
    const y = e.clientY - position.top - position.height / 2;

    btn_50.children[0].style.transform = "translate(" + x * 0.9 + "px, " + y * 0.9 + "px)";
});

btn_50.addEventListener("mouseout", function(e){
    btn_50.children[0].style.transform = "translate(0px, 0px)";
    btn_50.children[0].style.transitionDuration = '.5s';
    
    
    setTimeout(function() {
        btn_50.children[0].style.transitionDuration = '.1s';
    }, 500);  
});




// boton 51


const btn_51 = document.querySelector('.btn-51');
const btn_51_span1 = document.querySelector('.btn-51-span1');
const btn_51_span2 = document.querySelector('.btn-51-span2');

const btn_51_si_1 = document.querySelector('.btn-51-si-1');
const btn_51_si_2 = document.querySelector('.btn-51-si-2');


const btn_51_no_1 = document.querySelector('.btn-51-no-1');
const btn_51_no_2 = document.querySelector('.btn-51-no-2');


btn_51_span1.addEventListener('click', ()=>{
    if(!btn_51_span1.classList.contains('btn-51-span1-abierto')){
        btn_51_span1.classList.add('btn-51-span1-abierto');
        btn_51_span2.classList.remove('btn-51-span2-abierto')

        btn_51_span2.classList.add('btn-51-span2-cerrado')
        btn_51_span1.classList.remove('btn-51-span1-cerrado')


        btn_51_si_1.classList.add('btn-51-si-1-activado');
        btn_51_si_2.classList.add('btn-51-si-2-activado');

        btn_51_no_1.classList.remove('btn-51-no-1-activado');
        btn_51_no_2.classList.remove('btn-51-no-2-activado');
    }
});


btn_51_span2.addEventListener('click', ()=>{
    if(!btn_51_span2.classList.contains('btn-51-span2-abierto')){
        btn_51_span2.classList.add('btn-51-span2-abierto');
        btn_51_span1.classList.remove('btn-51-span1-abierto');

        btn_51_span1.classList.add('btn-51-span1-cerrado')
        btn_51_span2.classList.remove('btn-51-span2-cerrado')


        btn_51_si_1.classList.remove('btn-51-si-1-activado');
        btn_51_si_2.classList.remove('btn-51-si-2-activado');

        btn_51_no_1.classList.add('btn-51-no-1-activado');
        btn_51_no_2.classList.add('btn-51-no-2-activado');
    }
});



   
// boton 52


const btn_52 = document.querySelector('.btn-52');


btn_52.addEventListener('click', ()=>{
    if(!btn_52.classList.contains('btn-52-activado')){
        btn_52.classList.add('btn-52-activado');

    }else if(btn_52.classList.contains('btn-52-activado')){
        btn_52.classList.remove('btn-52-activado');
        
    }
});