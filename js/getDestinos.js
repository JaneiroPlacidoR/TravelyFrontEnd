axios({
    method: "GET",
    
    url: "https://travelyapi-production.up.railway.app/api/resort/wikidestino/all"
 }).then((res) => {
    res.data.destinos.forEach(element => {
        console.log(element)
        $('.destinos').append(`
         <div class="destino">
         <h2 class="each-destino">${element.name}</h2>
         <div class="page-info">
             <img src="${element.gallery[0]}" alt="">
             <p>${element.description[0]}</p>
         </div>
         <div class="page-info rev">
             <p>${element.description[1]}</p>
             <img src="${element.gallery[1]}" alt="">
         </div>
         <div class="page-info">
             <img src="${element.gallery[2]}" alt="">
             <p>${element.description[2]}</p>
         </div>
         <iframe src="${element.mapLocation} id="destino-frame" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
        `)
    })
}).catch(error => {
    console.log(error)
 })