      


let data  = [];
    const displayProduct = (data) => {
        document.getElementById("box").innerHTML = ""; 
        data.map((ele) => {
            let img = document.createElement("img");
            img.src = ele.image

            let category = document.createElement("h3");
            category.innerHTML = `Category: ${ele.category}`;

            let description = document.createElement("p");
            description.innerHTML = `Description: ${ele.description}`;


            let id = document.createElement("h3");
            id.innerHTML = `ID: ${ele.id}`;


            let price = document.createElement("h3");
            price.innerHTML = `Price: Rs. ${ele.price}`;
             let title = document.createElement("h2");
             title.innerHTML = `Title: ${ele.title}`;

            let rating = document.createElement("h3");
            rating.innerHTML = `Rating: ${ele.rating.rate}/5, ${ele.rating.count} (Reviews)`;


            let div = document.createElement("div");
            div.setAttribute("class", "product");

            div.append(title, img, category, id,  price,  description, rating,);

            document.getElementById("box").append(div);
        });
    };

const search = (val) => { 
      console.log(val);
        let item = data.filter((ele) => ele.title.toLowerCase().includes(val.toLowerCase()));
        console.log(item)
        displayProduct(item)
      
      }
      
      const handlerSearch = (e) => { 
        e.preventDefault();
        let val = document.getElementById("search-input").value
        console.log(val)
        console.log("Value:" , val)
        search(val)
      }
      const handlerFilter = (val) => { 
        console.log(val)
        let filterCategory = data.filter((ele) => ele.category === val)
        displayProduct(filterCategory)
        console.log("Filter")
        console.log(filterCategory)
        console.log(val)
       
      }
      const handlerSort = (val) => {

        let product;

        if (val == "htl") {
          product = data.sort((a, b) => b.price - a.price)
          displayProduct(data)
        }
        else {
          product = data.sort((a, b) => a.price - b.price)
          displayProduct(data)
        }
        // displayProduct(data)
      }

fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(datas =>{ displayProduct(datas)
    data = datas
})



document.getElementById("search").addEventListener("submit", handlerSearch)
document.getElementById("htl").addEventListener("click", () => handlerSort("htl"))

document.getElementById("lth").addEventListener("click", () => handlerSort("lth"))


document.getElementById("men's clothing").addEventListener("click", () => handlerFilter("men's clothing"))

document.getElementById("women's clothing").addEventListener("click", () => handlerFilter("women's clothing"))

document.getElementById("jewelery").addEventListener("click", () => handlerFilter("jewelery"))
document.getElementById("electronics").addEventListener("click", () => handlerFilter("electronics"))
document.getElementById("all").addEventListener("click", () => displayProduct(data))































  





