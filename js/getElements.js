//Llamar elementos



axios({
   method: "GET",
   
   url: "https://travelyapi-production.up.railway.app/api/resort/"
}).then((res) => {
   res.data.resorts.forEach(element => {
      console.log(element)

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
               <a class="nav-link" id="green-btn"  href="${element.oferta}" target="_blank">
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
}).catch(error => {
   console.log(error)
})



