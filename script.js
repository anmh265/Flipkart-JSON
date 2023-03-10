"use strict";

const chevronDown = `<svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"  class="_2JzwqO"></path></svg>`;

const wishlist =
  '<svg xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"class="eX72wL" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg>';

const starImage =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==";

const flipkartAssuredImg =
  "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png";

const URL =
  "https://raw.githubusercontent.com/anmh265/Flipkart-JSON/main/jsonData.json";

async function fetchData(urlData) {
  const res = await fetch(urlData);
  const data = await res.json();

  createNavBar(data.categoryNavBarData);
  createPhoneCard(data.phoneListData);

  setUpFilter(data.phoneListData);

  // readMinValueOnChange(data.phoneListData)l
}

fetchData(URL);

function createNavBar(data) {
  const categoryNavBar = document.getElementById("category-nav");

  data.forEach((item) => {
    const spanElement = document.createElement("span");
    spanElement.innerHTML = `
            ${item.label}
            ${item.category ? chevronDown : ""}
        `;
    categoryNavBar.appendChild(spanElement);
  });
}

function sortPhoneBy() {
  const sortCategory = document.querySelectorAll(".sort");

  sortCategory.forEach((item) => {
    item.addEventListener("click", () => {
      removeActive(sortCategory);
      item.classList.add("active");
    });
  });
}
sortPhoneBy();

function removeActive(sortList) {
  sortList.forEach((item) => {
    item.classList.remove("active");
  });
}

function createPhoneCard(dataList) {
  const mainContainer = document.querySelector(".display-section");
  mainContainer.innerHTML = "";

  dataList.forEach((data) => {
    const aTag = document.createElement("a");
    aTag.classList.add("phone-card");

    const phoneInfoContainer = document.createElement("div");
    phoneInfoContainer.classList.add("phone-info");

    const imageMainContainer = document.createElement("div");
    imageMainContainer.classList.add("phone-image-compare");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("phone-image");

    const imageElement = document.createElement("img");
    imageElement.src = data.img_URL;
    imageContainer.appendChild(imageElement);

    imageMainContainer.appendChild(imageContainer);

    const compareContainer = document.createElement("div");
    compareContainer.classList.add("phone-compare");

    const inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.setAttribute("id", "compare");
    compareContainer.appendChild(inputElement);
    const labelElement = document.createElement("label");
    labelElement.innerHTML = "Add to Compare";
    compareContainer.appendChild(labelElement);

    imageMainContainer.appendChild(compareContainer);

    const wishlistContainer = document.createElement("div");
    wishlistContainer.classList.add("add-wishlist");
    wishlistContainer.innerHTML = wishlist;

    imageMainContainer.appendChild(wishlistContainer);

    phoneInfoContainer.appendChild(imageMainContainer);

    const phoneSpecContainer = document.createElement("div");
    phoneSpecContainer.classList.add("phone-specs");

    const modelName = document.createElement("div");
    modelName.classList.add("phone-model-name");
    modelName.innerHTML = data.model;
    phoneSpecContainer.appendChild(modelName);

    const ratingMainContainer = document.createElement("div");
    ratingMainContainer.classList.add("phone-rating");

    const ratingStarContainer = document.createElement("span");
    ratingStarContainer.classList.add("phone-rating-star");

    const rating = document.createElement("div");
    rating.classList.add("rating");

    const starImageContainer = document.createElement("img");
    starImageContainer.src = starImage;

    rating.innerHTML = `
            ${data.rating}
            <img src = "${starImage}" alt="">
        `;

    if (data.rating >= 3.5) {
      ratingStarContainer.classList.add("green");
    } else if (data.rating >= 2) {
      ratingStarContainer.classList.add("amber");
    } else {
      ratingStarContainer.classList.add("red");
    }
    ratingStarContainer.appendChild(rating);

    ratingMainContainer.appendChild(ratingStarContainer);

    const viewerRating = document.createElement("span");
    viewerRating.classList.add("viewer-rating");
    viewerRating.innerHTML = `${data.customer_rating.toLocaleString(
      "en-IN"
    )} Ratings & ${data.reviews.toLocaleString("en-IN")} Reviews`;

    ratingMainContainer.appendChild(viewerRating);

    phoneSpecContainer.appendChild(ratingMainContainer);

    const internalSpecContainer = document.createElement("div");
    internalSpecContainer.classList.add("internal-spec");

    const specList = document.createElement("ul");
    specList.classList.add("spec-list");

    data.spec.forEach((item) => {
      const liElement = document.createElement("li");
      liElement.innerHTML = `${
        typeof item.label === "object"
          ? `${
              item.label.RAM !== ""
                ? `${item.label.RAM} RAM | ${item.label.ROM} ROM`
                : `${item.label.ROM} ROM`
            }`
          : `${item.label}`
      }`;
      specList.appendChild(liElement);
    });

    internalSpecContainer.appendChild(specList);

    phoneSpecContainer.appendChild(internalSpecContainer);

    phoneInfoContainer.appendChild(phoneSpecContainer);

    aTag.appendChild(phoneInfoContainer);

    const priceContainer = document.createElement("div");
    priceContainer.classList.add("phone-price-container");

    const phonePrice = document.createElement("div");
    phonePrice.classList.add("phone-price");

    const actualPrice = document.createElement("div");
    actualPrice.classList.add("phone-actual-price");
    const calculatedPrice = calculateActualPrice(data.mrp, data.discount);
    actualPrice.innerHTML = `₹${calculatedPrice.toLocaleString("en-IN")}`;

    phonePrice.appendChild(actualPrice);

    const mrpElement = document.createElement("div");
    mrpElement.classList.add("phone-mrp");
    mrpElement.innerHTML = `₹${data.mrp.toLocaleString("en-IN")}`;
    phonePrice.appendChild(mrpElement);

    const discountElement = document.createElement("div");
    discountElement.classList.add("phone-discount");
    discountElement.innerHTML = `${data.discount}% off`;
    phonePrice.appendChild(discountElement);

    if (calculatedPrice > 2000) {
      const freeDeliveryElement = document.createElement("div");
      freeDeliveryElement.classList.add("phone-free-delivery");
      freeDeliveryElement.innerHTML = "Free delivery";
      phonePrice.appendChild(freeDeliveryElement);
    }

    priceContainer.appendChild(phonePrice);

    const flipkartAssuredContainer = document.createElement("div");
    flipkartAssuredContainer.classList.add("flipkart-assured-phone");

    if (data.f_assured) {
      const flipkartAssuredImage = document.createElement("img");
      flipkartAssuredImage.src = flipkartAssuredImg;
      flipkartAssuredContainer.appendChild(flipkartAssuredImage);

      priceContainer.appendChild(flipkartAssuredContainer);
    }

    if (data.exchange_discount !== 0) {
      const exchangeRateElement = document.createElement("div");
      exchangeRateElement.classList.add("phone-exchange-discount");
      exchangeRateElement.innerHTML = `Upto <span>₹${data.exchange_discount.toLocaleString(
        "en-IN"
      )}</span> Off on Exchange`;

      priceContainer.appendChild(exchangeRateElement);
    }

    const bankOfferContainer = document.createElement("div");
    bankOfferContainer.classList.add("phone-bank-offer");
    if (data.bank_offer) {
      bankOfferContainer.innerHTML = `Bank Offer`;
    }

    priceContainer.appendChild(bankOfferContainer);

    aTag.appendChild(priceContainer);

    mainContainer.appendChild(aTag);
  });
}

function calculateActualPrice(mrp, discount) {
  return Math.round(mrp * (1 - discount / 100));
}

function showBrand() {
  const container = document.querySelector(".main-brand");
  const clickContainer = document.querySelector(".main-brand-text");

  clickContainer.addEventListener("click", () => {
    container.classList.toggle("show");
    // console.log('helo')
  });
}
showBrand();

function showRating() {
  const container = document.querySelector(".customer-rating");
  const clickRatingContainer = document.querySelector(".customer-rating-text");

  clickRatingContainer.addEventListener("click", () => {
    container.classList.toggle("show");
  });
}
showRating();

//setting up filter function

function setUpFilter(data) {
  const checkBoxes = document.querySelectorAll(
    ".brand-checkbox input[type=checkbox]"
  );
  const fourStar = document.querySelector(".four-star input");
  const threeStar = document.querySelector(".three-star input");

  const minPrice = document.getElementById("price-min");
  const maxPrice = document.getElementById("price-max");

  const ascContainer = document.getElementById("asc");
  const descContainer = document.getElementById('desc')
  const popularityContainer = document.getElementById('popularity')

  const fassuredInput = document.getElementById('f-assured')

  checkBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      applyFilter(data);
    });
  });

  //event listener for star rating
  fourStar.addEventListener("click", () => {
    applyFilter(data);
  });
  threeStar.addEventListener("click", () => {
    applyFilter(data);
  });

  //event listener for price range
  minPrice.addEventListener("change", () => {
    applyFilter(data);
  });
  maxPrice.addEventListener("change", () => {
    applyFilter(data);
  });

  //event listener for sorting in ascending order
  ascContainer.addEventListener('click', () => {
    applyFilter(data)
  })
  //event listener for sorting in descending order
  descContainer.addEventListener('click', () => {
    applyFilter(data)
  })
  //event listener for sorting as per popularity
  popularityContainer.addEventListener('click', () => {
    applyFilter(data)
  })

  //event listener for f-assured filter
  fassuredInput.addEventListener('click', () => {
    applyFilter(data)
  })

    // getPriceRange(data)
}

//function to read all function values
function applyFilter(data) {
  let brandList = [];
  let ratingList = [];

  const checkBoxes = document.querySelectorAll(
    ".brand-checkbox input[type=checkbox]"
  );
  const fourStar = document.querySelector(".four-star input");
  const threeStar = document.querySelector(".three-star input");

  const minPrice = document.getElementById("price-min");
  const maxPrice = document.getElementById("price-max");

  const ascContainer = document.getElementById("asc");
  const descContainer = document.getElementById('desc')
  const popularityContainer = document.getElementById('popularity')

  const fassuredInput = document.getElementById('f-assured')


  //get brand list

  checkBoxes.forEach((box) => {
    if (box.checked) {
      brandList.push(box.value);
    }
  });

  //get star rating list

  if (fourStar.checked) {
    ratingList.push(+fourStar.value);
  }
  if (threeStar.checked) {
    ratingList.push(+threeStar.value);
  }

  //get min and max values

  let minVal = +minPrice.value;
  let maxVal = maxPrice.value !== "Max" ? +maxPrice.value : "Max";

  //modify data as per filter data

  //filter as per brand
  if (brandList.length) {
    data = brandFilter(data, brandList);
  }
  if (ratingList.length) {
    data = ratingFilter(data, ratingList);
  }

  //filter as per min and max price
  if (minVal) {
    data = priceFilter(data, minVal, maxVal);
  }
  if (maxVal) {
    data = priceFilter(data, minVal, maxVal);
  }

  //filter f-assured items

  if(fassuredInput.checked){
    data = fassuredFilter(data)
  }

  //filter price ascending
  if(ascContainer.classList.contains('active')){
    data = sortAsc(data)
  }
  //filter price descending
  if(descContainer.classList.contains('active')){
    data = sortDesc(data)
  }
  //filter price popularity
  if(popularityContainer.classList.contains('active')){
    data = sortPopularity(data)
  }

  //render the filter data
  createPhoneCard(data);
}


//function to filter data from list of brands
function brandFilter(data, brands) {
  return data.filter((item) => {
    return brands.includes(item.brand);
  });
}

//function to filter data from list of ratings
function ratingFilter(data, ratings) {
  return data.filter((item) => {
    let match = false;
    for (let i = 0; i < ratings.length; i++) {
      if (item.rating >= ratings[i]) {
        match = true;
        break;
      }
    }
    return match;
  });
}

//function to filter data within a range of price
function priceFilter(data, min, max) {
  if (max === "Max") {
    return data.filter((item) => {
      return calculateActualPrice(item.mrp, item.discount) >= min;
    });
  }
  if (min < max) {
    return data.filter((item) => {
      return (
        calculateActualPrice(item.mrp, item.discount) >= min &&
        calculateActualPrice(item.mrp, item.discount) <= max
      );
    });
  }
}

//function to return f-assured items
function fassuredFilter(data){
  return data.filter(item => {
    return item.f_assured
  })
}

//function to sort data - price ascending
function sortAsc(data) {
  return data.sort((a, b) => {
    return (
      calculateActualPrice(a.mrp, a.discount) -
      calculateActualPrice(b.mrp, b.discount)
    );
  });
}

//function to sort data in ascending
function sortDesc(data){
  return data.sort((a, b) => {
    return (calculateActualPrice(b.mrp, b.discount) - calculateActualPrice(a.mrp, a.discount))
  })
}

//function to sort data in descending
function sortPopularity(data){
  return data.sort((a, b) => {
    return b.customer_rating - a.customer_rating
  })
}

function getPriceRange(data, min = 0){
  let minPrice = getMinPrice(data)
  let maxPrice = getMaxPrice(data)

  let stepSize = 4
  let minValues = []
  let maxValues = []

  let stepValue = (maxPrice - minPrice)/ stepSize

  for(let i = 0; i < stepSize; i++){
    minValues[i] = Math.floor(min + i * stepValue)
  }

  for(let i = 0; i < stepSize; i++){
    maxValues[i] = Math.floor(minValues[i] + stepValue)
  }

  const price = {
    min: minValues,
    max: maxValues
  }

  console.log(price)
}

// getPriceRange()

function getMinPrice(data){
  let min = calculateActualPrice(data[0].mrp, data[0].discount)
  for(let i = 1; i < data.length; i++){
    if(min > calculateActualPrice(data[i].mrp, data[i].discount)){
      min = calculateActualPrice(data[i].mrp, data[i].discount)
    }
  }
  return min
}

function getMaxPrice(data){
  let max = calculateActualPrice(data[data.length - 1].mrp, data[data.length - 1].discount)
  for(let i = 1; i < data.length; i++){
    if(max < calculateActualPrice(data[i].mrp, data[i].discount)){
      max = calculateActualPrice(data[i].mrp, data[i].discount)
    }
  }
  return max
}

function readMinValueOnChange(data){
  const minContainer = document.getElementById('price-min')
  let min = 0
  minContainer.addEventListener('change', () => {
    min = minContainer.value
    getPriceRange(data, min)
  })
}








// let obj = [
//   {
//     mrp: 100,
//     discount: 20,
//   },
//   {
//     mrp: 68,
//     discount: 15,
//   },
//   {
//     mrp: 65,
//     discount: 30,
//   },
//   {
//     mrp: 76,
//     discount: 10,
//   },
// ];

// console.log(sortAsc(obj));

// const p = priceFilter(obj, 65, 80)
// console.log(p)

// obj.forEach(item => console.log(calculateActualPrice(item.mrp, item.discount)))

/////////////FILTERING SECTION////////////////////

// let dataArr = [];

// ///////Price sort////////
// function priceSort(dataList) {
//   let minVal = 0;
//   let maxVal = 0;
//   const minPrice = document.querySelector(".price-min");
//   const maxPrice = document.querySelector(".price-max");

//   minPrice.addEventListener("change", () => {
//     getWithinRange(maxPrice, minPrice, dataList);
//   });

//   maxPrice.addEventListener("change", () => {
//     getWithinRange(maxPrice, minPrice, dataList);
//   });
// }

// function getWithinRange(max, min, data) {
//   let minVal = +min.value;
//   let maxVal = max.value !== "Max" ? +max.value : "Max";

//   if (maxVal === "Max") {
//     dataArr = data.filter((item) => {
//       return calculateActualPrice(item.mrp, item.discount) >= minVal;
//     });
//   } else {
//     dataArr = data.filter((item) => {
//       return (
//         calculateActualPrice(item.mrp, item.discount) >= minVal &&
//         calculateActualPrice(item.mrp, item.discount) <= maxVal
//       );
//     });
//   }
//   createPhoneCard(dataArr);
// }

// //////Filter by brand/////
// function brandSelection(dataList) {
//   const inputBoxes = document.querySelectorAll(
//     ".brand-checkbox input[type=checkbox]"
//   );
//   inputBoxes.forEach((input) => {
//     input.addEventListener("change", function (e) {
//       if (e.target.checked) {
//         const data = dataList.filter((item) => {
//           return item.brand === e.target.value;
//         });
//         dataArr.push(...data);
//       } else {
//         const checkedBox = document.querySelectorAll(
//           ".brand-checkbox input[type=checkbox]:checked"
//         );
//         if (checkedBox.length) {
//           dataArr = dataArr.filter((item) => item.brand !== e.target.value);
//         } else {
//           dataArr = dataList;
//         }
//       }

//       createPhoneCard(dataArr);
//     });
//   });
// }

// //////Filter by Flipkart Assured///////
// function flipkartAssuredSort(dataList) {
//   const checkbox = document.getElementById("f-assured");

//   checkbox.addEventListener("change", () => {
//     if (checkbox.checked) {
//       if (dataArr.length) {
//         dataArr = dataArr.filter((item) => item.f_assured);
//         // console.log(dataArr)
//       } else {
//         dataArr = dataList.filter((item) => item.f_assured);
//         // console.log(dataArr)
//       }
//     }
//     createPhoneCard(dataArr);
//   });
// }

// ///////Filter by rating///////
// function sortByRating(dataList) {
//   const fourStar = document.getElementById("four-star");
//   const threeStar = document.getElementById("three-star");

//   fourStar.addEventListener("change", () => {
//     if (fourStar.checked) {
//       if (dataArr.length) {
//         dataArr = dataArr.filter((item) => {
//           return item.rating >= +fourStar.value;
//         });
//       } else {
//         dataArr = dataList.filter((item) => {
//           return item.rating >= +fourStar.value;
//         });
//       }
//       createPhoneCard(dataArr);
//     }
//   });

//   threeStar.addEventListener("change", () => {
//     if (threeStar.checked) {
//       dataArr = dataList.filter((item) => {
//         return item.rating >= +threeStar.value;
//       });
//     }
//     createPhoneCard(dataArr);
//   });
// }

// function sorting(data) {
//   const container = document.querySelectorAll(".sort");

//   container.forEach((item) => {
//     item.addEventListener("click", (e) => {
//       const val = e.target.dataset.sort;
//       if (val === "asc") {
//         dataArr = data.sort((a, b) => {
//           return (
//             calculateActualPrice(a.mrp, a.discount) -
//             calculateActualPrice(b.mrp, b.discount)
//           );
//         });
//       }
//       if (val === "desc") {
//         dataArr = data.sort((a, b) => {
//           return (
//             calculateActualPrice(b.mrp, b.discount) -
//             calculateActualPrice(a.mrp, a.discount)
//           );
//         });
//       }
//       if (val === "popularity") {
//         dataArr = data.sort((a, b) => {
//           return b.customer_rating - a.customer_rating;
//         });
//       }
//       createPhoneCard(dataArr);
//     });
//   });
// }

// let a = 2600

// console.log(10000 + Math.round(a/5000) * 5000)



let obj = [
  {
    mrp: 100,
    discount: 20,
  },
  {
    mrp: 68,
    discount: 15,
  },
  {
    mrp: 65,
    discount: 30,
  },
  {
    mrp: 76,
    discount: 10,
  },
];

// console.log(getMinPrice(obj))
// console.log('****')
// obj.forEach(item => {
//   console.log(calculateActualPrice(item.mrp, item.discount))
// })