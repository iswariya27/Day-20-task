async function api(){
  try{
  data = fetch("https://hp-api.onrender.com/api/characters")
    out = await data;
     prom = out.json();
     final = await prom;
     parent  = document.querySelector('.container')
    parent1 = document.querySelector('.row')
     final.forEach(element => {
        parent1.innerHTML+=`
          <div id="cardDetails" class="col-lg-4 col-sm-12">
          <div class="card h-400" style="width: 22rem;">
          <div class="card-body">  
          <img src="${element.image}" class="card-img-top"><br>
          <br>
          <div class="card-header">
          <h5 class="card-title">Name: ${element.name}</h5>
          </div>
          <br>
          <div class="card-text">
         <li class="list-group card-text"><b>Actor: ${element.actor}</li>
         <li class="list-group card-text"><b>Gender: ${element.gender}</li>
         <li class="list-group card-text"><b>Date of Birth: ${element.dateOfBirth}</li>
         <li class="list-group card-text"><b>Spices: ${element.species}</li>
          </div>
          </div>
        </div>
        </div>`
      parent.append(parent1)
      
     });
    }
     catch(error){
      console.log(error)
     }
    
}
api();