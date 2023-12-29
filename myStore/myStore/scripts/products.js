

function addItemCart(e){
    var prodName = e.currentTarget.parentElement.parentElement.parentElement.getElementsByTagName("h4")[0].innerText;
    var prodQty = e.currentTarget.parentElement.parentElement.parentElement.getElementsByTagName("input")[0].value;
    var prodPrice = e.currentTarget.parentElement.parentElement.parentElement.getElementsByTagName("p")[0].innerText;
    var prodImg =  e.currentTarget.parentElement.parentElement.parentElement.getElementsByTagName("img")[0].currentSrc;
    var prodImgAlt =  e.currentTarget.parentElement.parentElement.parentElement.getElementsByTagName("img")[0].alt;
    var globalList = ""
    var prod = localStorage.getItem("products")
    if (prod !== ''){
        globalList = JSON.parse(prod);
    }


    if(prodQty === '' || prodQty === ''){
        alert("Please add a quantity first.");
        return;
    }

    //create obj
    var obj = {
        name: prodName,
        price: prodPrice,
        qty: prodQty,
        image: prodImg,
        alt: prodImgAlt
    }
    //add in localStorage for cart page to be able to get th data
    if (globalList){
        globalList.push(obj);
    
        localStorage.setItem("products", JSON.stringify(globalList) );
        alert("Item added to cart.")
    }
    else{
        localStorage.setItem("products", JSON.stringify([obj]));
        alert("Item added to cart.")
    }

}

function addItemDetailsCart(e){
    var prodName = document.getElementsByClassName("title");
    var prodQty = 1;
    var prodPrice = document.getElementsByClassName("det-price");
    var prodImg =  document.getElementsByClassName("main-img");
    var prodImgAlt = prodImg[0].alt;
    var globalList = "";
    var prod = localStorage.getItem("products");

    if (prod !== ''){
        globalList = JSON.parse(prod);
    }

    var obj = {
        name: prodName[0].innerText,
        price: `Price: $${prodPrice[0].innerText}`,
        qty: prodQty,
        image: prodImg[0].src,
        alt: prodImgAlt
    }
      //add in localStorage for cart page to be able to get th data
      if (globalList){
        globalList.push(obj);
    
        localStorage.setItem("products", JSON.stringify(globalList) );
        alert("Item added to cart.")
    }
    else{
        localStorage.setItem("products", JSON.stringify([obj]));
        alert("Item added to cart.")
    }
}