
const loadData = async() =>{
  const url = 'https://openapi.programming-hero.com/api/ai/tools'
  const fetchData=await fetch(url);
  const data = await  fetchData.json();

  // console.log(data.data.tools)//getting 12 object in a array

  display(data.data.tools);
}



// displaying data 

function display(data){

  // snipper/loader 

  snipper()




  // console.log(data.length)

  // showAll btn
const showAll = document.getElementById("showAll");
// console.log(showAll)


if(data.length>6){

showAll.classList.remove("d-none")
}
else{showAll.classList.add("d-none")}


// its for only 6 item
data = data.slice(0,6);







  // getting and appending data in card 

  const section1 = document.getElementById("section1");
  

  
  // forEach for getting all data separately 
  data.forEach(elemenst => {
      // console.log(elemenst)

    



 
  const crtDiv =document.createElement("div");
  crtDiv.classList.add("col");

  

  crtDiv.innerHTML =`
  <div class="col">
  <div class="card h-100">
    <img  src="${elemenst.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Features</h5>
      <p>1.${elemenst.features[0]}</p>
      <p>2.${elemenst.features[1]}</p>
      <p>3.${elemenst.features[2]}</p>
      <p>
    </div>
    <div class="card-footer" >
    <h1>${elemenst.name}</h1>
    <div style="display:flex; justify-content:space-between">
      <div>
    <i class= "p-2 fa fa-calendar" style="font-size:24px"></i>
      <small class="text-muted" >${elemenst.published_in}</small>
      </div>

      <button onclick="loadBtn('${elemenst.id}')" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Details
    </button>
      
    </div>
    </div>
  </div>
</div>
  `
  section1.appendChild(crtDiv)

  })
}


snipper(false)



// modal 
const    loadBtn=async(id)=>{
const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`

const fetchData = await fetch(url);
const data =await fetchData.json();

console.log(data.data)
console.log(data.data.image_link[0])

const element = data.data;
// console.log(id)// getting id  by arguments


// looping for featutres data

const featuresData = Object.values(element.features)

// console.log(featuresData[0].feature_name)






// modal-header


const target = document.getElementById("target");

const crtDiv =document.createElement("div");

target.innerHTML=""

crtDiv.innerHTML =`

<div class="row">
<div class="col-sm-6">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">${element.description}</h5>

     <div class="pricing row row-cols-md-1"> 
  
     <p class="text-danger col pricing-p">${element.pricing[0].price? element.pricing[0].price : "Free of cost" }</p>
     <p class="text-primary col pricing-p">${element.pricing[1].price? element.pricing[1].price : "Free of cost" }</p>
     <p class="text-warning col pricing-p">${element.pricing[2].price? element.pricing[2].price : "Free of cost" }</p>

</div> 


<div class="row">
<div class="col-sm-6">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Integrations</h5>

      <li>${element.integrations[0]}</li>
      <li>${element.integrations[1]}</li>
      <li>${element.integrations[2]}</li>
     
     
    </div>
  </div>
</div>


<div class="col-sm-6">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Features</h5>
<li>${featuresData[0].feature_name}</li>
<li>${featuresData[1].feature_name}</li>
<li>${featuresData[2].feature_name}</li>

   
    </div>
  </div>
</div>
</div>



      
    </div>
  </div>
</div>


<!--its for img-->

<div class="col-sm-6">
  <div class="card">
    <div class="card-body card-body-accuracy">

      
      <img class="img-fluid" src="${element.image_link[0]}">
      
     <p class="accuracy w-25 bg-danger  rounded text-white p-1">${element.accuracy.score*100? element.accuracy.score*100:"0"}% accuracy</p>
      
    </div>
  </div>
</div>
</div>



`
crtDiv.classList.add("modal-css")
target.appendChild(crtDiv)


}

snipper("false")



// its for showMore data



const loadData2 = async() =>{
const url = 'https://openapi.programming-hero.com/api/ai/tools'
const fetchData=await fetch(url);
const data = await  fetchData.json();

// console.log(data.data.tools)//getting 12 object in a array

display2(data.data.tools);
}



// displaying data 

function display2(data){


document.getElementById("showAll").classList.add("d-none")


// here i pass data after 6 items
data = data.slice(6,999);







// getting and appending data in card 

const section1 = document.getElementById("section1");



// forEach for getting all data separately 
data.forEach(elemenst => {
    // console.log(elemenst)

  




const crtDiv =document.createElement("div");
crtDiv.classList.add("col");



crtDiv.innerHTML =`
<div class="col">
<div class="card h-100">
  <img  src="${elemenst.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Features</h5>
    <p>1.${elemenst.features[0]}</p>
    <p>2.${elemenst.features[1]}</p>
    <p>3.${elemenst.features[2]}</p>
    <p>
  </div>
  <div class="card-footer" >
  <h1>${elemenst.name}</h1>
  <div style="display:flex; justify-content:space-between">
    <div>
  <i class= "p-2 fa fa-calendar" style="font-size:24px"></i>
    <small class="text-muted" >${elemenst.published_in}</small>
    </div>

    <button onclick="loadBtn('${elemenst.id}')" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Details
  </button>
    
  </div>
  </div>
</div>
</div>
`
section1.appendChild(crtDiv)

})
}











// snipper 

function snipper(get){

  const target = document.getElementById("snipper");
  
  if(get){
    
    target.classList.remove("d-none")
  }
  else{target.classList.add("d-none")}

}



loadData()


