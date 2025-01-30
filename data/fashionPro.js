const fashionPro =[{
    
  id: "bc2847e9-5323-403f-b7cf-57fde044a955A",
  image: "images/fashion/b.jpg",
  Name: "Men's Fleece Shoes",
  rating: {
    stars: 4.5,
    count: 3157
  },
  priceCents: 2400,
keywords: [
  "sweaters",
  "hoodies",
  "apparel",
  "mens"
]
},
{
  id: "15b6fc6f-327a-4ec4-896f-486349e85a3dB",
  image: "images/fashion/c.jpg",
  Name: "Men hoodie",
  rating:{
    stars:4.5,
    count:4556
  },
  priceCents: 7400,
  keywords: [
    "socks",
    "sports",
    "apparel"
  ]

  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3dC",
    image: "images/fashion/d.jpg",
    Name: "Xoodie",
    rating:{
      stars:4.5,
      count:6556
    },
    priceCents: 740,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  
    }
];


let proHtml ='';
fashionPro.forEach((product) =>{
  proHtml +=`
   <div class="product-container">
            <div class="product-image-container">
              <img class="product-image"
                src="${product.image}">
            </div>
  
            <div class="product-name limit-text-to-2-lines">
              ${product.Name}
            </div>
  
            <div class="product-rating-container">
              <img class="product-rating-stars"
                src="images/New/images/ratings/rating-${product.rating.stars*10}.png">
              <div class="product-rating-count link-primary">
                ${product.rating.count}
              </div>
            </div>
  
            <div class="product-price">
              ${((product.priceCents/100)).toFixed(2)}
            </div>
  
            <div class="product-quantity-container">
              <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
  
            <div class="product-spacer"></div>
  
            <div class="added-to-cart">
              <img src="images/New/images/icons/checkmark.png">
              Added
            </div>
  
            <button class="add-to-cart-button button-primary js-add-cart-btn"
             data-product-id ="${product.id}">
              Add to Cart
            </button>
          </div>
  `;
});


document.querySelector('.js-product-grid').
innerHTML = proHtml;