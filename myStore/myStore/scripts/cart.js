function loadCart(){
    var tBody = document.getElementsByTagName('tbody')[0];
    var prod = localStorage.getItem("products");
    var total = 0.00;
    //summary table

   
    
    if (prod ){
        var items = JSON.parse(prod);
        //add all item saved on localstorage
        for(var i = 0; i < items.length; i++){
            var value = items[i].price.split('$');
            value = value[1];
            value = parseFloat(value) * parseInt(items[i].qty);

            //row tem plate will be add
            var row = `
            <tr>
            <td><img src=${items[i].image}
                     width="100px"
                     alt=${items[i].alt}></td>
            <td>
                <p class="name">${items[i].name}</p>
                <p class="stock">In stock - few pieces</p>
                <p>Qty:<span  class="qty">${items[i].qty}</span> | <span onclick="deleteItem(event)">Delete</span></p>
            </td>
            <td>
            <p class="price">${items[i].price}</p>
            <p>Total Item: $${value}</p>
            </td>
        </tr>`

        tBody.innerHTML += row;
      
        total += parseFloat(value);

        }
        var totalRow =  `<tr>
            <td colspan="2"></td>
            <td id="orderTotal">Total: $${total.toFixed(2)} </td>
        </tr>`;
    tBody.innerHTML += totalRow;
    }

    calcHST(total);
}

function calcHST(total){
    var hstElement = document.getElementById("hst");
    var sumTotal = document.getElementById("sumTotal");
    var sumItem = document.getElementById("sumItem");
    var hst = (total * 13)/100;

   
    sumItem.innerHTML = `$${total.toFixed(2)}`
    hstElement.innerHTML = `$${hst.toFixed(2)}`;
    sumTotal.innerHTML = `$${(total + hst).toFixed(2)}` 
}

function deleteItem(e){
    var listProducts = localStorage.getItem("products");
    listProducts = JSON.parse(listProducts);
    //get elements value
    var total = document.getElementById("orderTotal");
    var price = e.target.parentElement.parentNode.parentElement.getElementsByClassName("price");
    var name = e.target.parentElement.parentNode.parentElement.getElementsByClassName("name");
    var qty = e.target.parentElement.parentNode.parentElement.getElementsByClassName("qty");

    // var newTotal = total _ 
    var totalValue = total.innerText.split('$');
    totalValue = totalValue[1];
    totalValue = parseFloat(totalValue);

    //get the price value
    var delPrice = price[0].innerText.split('$');
    delPrice = delPrice[1];
    delPrice = parseFloat(delPrice) * parseInt(qty[0].innerText);

     //get the total value
    var newTotal = totalValue - delPrice;
    total.innerText = `Total: $${newTotal.toFixed(2)}`    
    var newList = listProducts.filter(function(item){
        return item.name !== name[0].innerText;
    });
  
    
    if(newList.length === 0){
        newList = ""
    }
    //Calculate HST on summary table
    calcHST(newTotal);
    e.currentTarget.parentElement.parentNode.parentNode.remove();
    localStorage.setItem("products", JSON.stringify(newList));

}

loadCart();
