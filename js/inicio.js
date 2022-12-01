
$(document).ready(function () {




  
    /*hamburger animation*/
    const hambuergerMenu = document.querySelector(".hamburger");
    const btnClose = document.querySelector(".btn-close"); 
    const tosearch = document.querySelector(".tosearchbtn"); 
    const filterLocation = document.querySelector("#filter-btn");

    //Activa y desactiva hamburger
    const menuActivate = () => {
        hambuergerMenu.classList.toggle('active');
    }

    //Boton up funcionamiento
    const toUp = () =>{
        $(".up-button").click(function(){
            $('body, html').animate({
                scrollTop:'0px'
        },0)
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $(".up-button").slideDown(300);
        }else{
            $(".up-button").slideUp(300);
        }
    })
}

    //Filtra por localiacion 
    const toFilterLocation = (e) => {
        e.preventDefault()
        const location = document.querySelector("#search_input").value
        console.log(location)


        let resorts = document.querySelector('.resorts')

        axios({
            method: "GET",
            
            url: `https://travelyapi.herokuapp.com/api/resort/search/${location}`
         }).then((res) => {

            //vaciar resorts
            resorts.innerHTML = "";
            resortsObtenidos = "";
           
            //Entrar resultados de busqueda
            res.data.resortLocalizado.forEach(element => {
               console.log(element)
               resortsObtenidos += element._id;
               $('.resorts').append(`
               <div class="resort" id='${element._id}'>
         
               <div class="information">
                <div class="preview-info">
                <img src="${element.img}" alt="principal-img" class="preview-img-resort" />
                   <div class="esencial-info row">
                    <h3 class="col-8">${element.name.toUpperCase()}</h3>
                    <h5 class="col-3 rate">${element.rate}</h5>
                    <p col-12>${element.place}</p>
                    <div class="preview-services">
                     <button class="each-preview-services" disabled >${element.allservices ? (element.allservices[0] == undefined ? "" : element.allservices[0].toUpperCase()) : ""}</button>
                     <button class="each-preview-services" disabled >${element.allservices ? (element.allservices[1] == undefined ? "" : element.allservices[1].toUpperCase()) : ""}</button>
                     <button class="each-preview-services" disabled >${element.allservices ? (element.allservices[2] == undefined ? "" : element.allservices[2].toUpperCase()) : ""}</button>
         
                    </div>
                   </div>
                </div>
         
                <div class="tabpanel">
                 <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#info${element._id}">
                             Info</a>
                    </li>
         
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#servicios${element._id}">
                            Servicios</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link active" data-bs-toggle="tab" href="#mostrar-en-mapa${element._id}">
                            Mostrar en mapa</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="green-btn" data-bs-toggle="tab" href="#ofertas${element._id}">
                             Ofertas</a>
                    </li>
                 </ul>
                 <div class="tab-content">
                    <div class="tab-pane" id="info${element._id}">
                        <div>
                            <div class="desc">
                            <h3 class="col-9">${element.name.toUpperCase()}</h3>
                            <p>${element.description}</p>
                           
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="servicios${element._id}">
                    <div>
                    <ul class="services"></ul>
                    </div>
                </div>
                    <div class="tab-pane active" id="mostrar-en-mapa${element._id}">
                        <div>
                            <div>
                            <iframe src="${element.mapLocation}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="ofertas${element._id}">
                        <div>
                            <div>
                                <h3>Ofertas</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book.
                                </p>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
               </div>
         
                <div class="gallery">
                <div class="gallery-container">
                    <div class="gallery-card">
                        <a href="${element.gallery[0]}" data-lightbox="roadtrip"><img src="${element.gallery[0]}" alt="Imagen"></a>
                    </div>
            
                    <div class="gallery-card">
                        <a href="${element.gallery[1]}" data-lightbox="roadtrip"><img src="${element.gallery[1]}" alt="Imagen"></a>
                    </div>
            
                    <div class="gallery-card">
                        <a href="${element.gallery[2]}" data-lightbox="roadtrip"><img src="${element.gallery[2]}" alt="Imagen"></a>
                    </div>
            
                    <div class="gallery-card">
                        <a href="${element.gallery[3]}" data-lightbox="roadtrip"><img src="${element.gallery[3]}" alt="Imagen"></a>
                    </div>
            
                    <div class="gallery-card">
                        <a href="${element.gallery[4]}" data-lightbox="roadtrip"><img src="${element.gallery[4]}" alt="Imagen"></a>
                    </div>
            
                    <div class="gallery-card">
                        <a href="${element.gallery[5]}" data-lightbox="roadtrip"><img src="${element.gallery[5]}" alt="Imagen"></a>
                    </div>
                </div>
            </div>
               
                </div>
         
              
               `);
               
         
         
               element.allservices.forEach(serv => {
                  $(".services").append(`<li>${serv.toUpperCase()}</li>`)
               });
         
               
            });
            if(resortsObtenidos==""){
                $('.resorts').append(`<h5 class="no-location">No hay resultados para <span class="loc">"${location}"</span>, favor intente con otra localización</h5>`);

            }
         }).catch(error => {
            console.log(error)
         })
         


    }


    //main
    hambuergerMenu.addEventListener('click', menuActivate);
    btnClose.addEventListener('click',menuActivate);
    tosearch.addEventListener('click',menuActivate);
    filterLocation.addEventListener('click',toFilterLocation);
    toUp();



// Google maps api
let searchInput = 'search_input';
 
$(document).ready(function () {
 var autocomplete;
 autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
  types: ['geocode'],
  componentRestrictions: {
   country: "DOM"
  }
 });
  
 google.maps.event.addListener(autocomplete, 'place_changed', function () {
  var near_place = autocomplete.getPlace();
 });
});

     
  });
  