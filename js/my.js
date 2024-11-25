
var productNameInput = document.getElementById("pName");

var productCategoryInput = document.getElementById("pCategory");


var allProducts = [];

var regexName = /^[a-z]{3,}$/i
var regexWebsite = /^www./i

function showMessage() {
    const element = document.getElementById("collapseExample");  
    element.classList.remove("collapse"); 
    element.classList.add("collapse.show"); 
}


function deleteMessage() {
    const element = document.getElementById("collapseExample");  
    element.classList.remove("collapse.show"); 
    element.classList.add("collapse"); 
}

  
function addProduct(){

    
    
    var product = {
        name: productNameInput.value,
       
        category: productCategoryInput.value,
       
    };

   
    if( regexName.test(productNameInput.value) != false &&
    regexWebsite.test(productCategoryInput.value) != false ){
        
    allProducts.push(product);  
    deleteMessage()
} else {
    showMessage()
}
    displayAllProducts();

    storeSites()

    resetInputs()  
    
}


function displayAllProducts(){
    var cartoona = ""
    for (var i = 0; i < allProducts.length; i++) {
        cartoona = cartoona + `
         <div class="col-3  mt-3 text-center">
            <h2>${i+1}</h2>
          </div>
          <div class="col-3  mt-3 text-center">
            <h2>${allProducts[i].name}</h2>
          </div>
          <div class="col-3  mt-3 text-center">
            <a href="https://${allProducts[i].category}">
              <button>
                <i class="fa-solid fa-eye"></i> Visit
              </button>
            </a>
          </div>
          <div class="col-3  mt-3 text-center">
            <h2><button onclick="deleteElement(${i})">
                <i class="fa-solid fa-trash"></i> Delete
              </button></h2>
          </div>`
    }

    document.getElementById('data-row').innerHTML = cartoona;
}


function resetInputs(){
    productNameInput.value = '';
    
    productCategoryInput.value = '';
    
}

function deleteElement(idx){
    allProducts.splice( idx  ,   1)
    displayAllProducts();
}

function storeSites (){
    localStorage.setItem('Website', JSON.stringify(allProducts));
}

