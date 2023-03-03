const chevronDown = `<svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"  class="_2JzwqO"></path></svg>`;

const wishlist =
  '<svg xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"class="eX72wL" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg>';

const starImage =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==";

const flipkartAssuredImg =
  "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png";

const categoryNavBarData = [
  {
    label: "Electronics",
    category: true,
  },
  {
    label: "TVs & Appliances",
    category: true,
  },
  {
    label: "Men",
    category: true,
  },
  {
    label: "Women",
    category: true,
  },
  {
    label: "Baby & Kids",
    category: true,
  },
  {
    label: "Home & Furniture",
    category: true,
  },
  {
    label: "Sports, Books & More",
    category: true,
  },
  {
    label: "Flights",
    category: false,
  },
  {
    label: "Offer Zone",
    category: false,
  },
];

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

createNavBar(categoryNavBarData);

function sortPhoneBy() {
  const sortCategory = document.querySelectorAll(".sort");

  sortCategory.forEach((item) => {
    item.addEventListener("click", () => {
      removeActive(sortCategory);
      item.classList.add("active");

      sort(item);
    });
  });
}
sortPhoneBy();

function removeActive(sortList) {
  sortList.forEach((item) => {
    item.classList.remove("active");
  });
}

const phoneListData = [
  {
    brand: "APPLE",
    model: "Apple iPhone SE (White, 256 GB) (Includes EarPods, Power Adapter)",
    img_URL:
      "https://rukminim1.flixcart.com/image/312/312/k9loccw0/mobile/6/b/z/apple-iphone-se-mxd12hn-a-original-imafrcqf9nze6evk.jpeg?q=70",
    rating: 4.5,
    customer_rating: 153891,
    reviews: 12060,
    f_assured: true,
    spec: [
      {
        label: {
          RAM: "",
          ROM: "256 GB",
        },
      },
      {
        label: "11.94 cm (4.7 inch) Retina HD Display",
      },
      {
        label: "12MP Rear Camera | 7MP Front Camera",
      },
      {
        label: "A13 Bionic Chip with 3rd Gen Neural Engine Processor",
      },
      {
        label: "Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)",
      },
      {
        label: "Fast Charge Capable",
      },
      {
        label:
          "Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately",
      },
      {
        label: "Brand Warranty of 1 Year",
      },
    ],
    mrp: 54900,
    discount: 25,
    exchange_discount: 20000,
    bank_offer: true,
  },
  {
    brand: "APPLE",
    model: "APPLE iPhone SE (Red, 128 GB)",
    img_URL:
      "https://rukminim1.flixcart.com/image/312/312/k9loccw0/mobile/6/8/g/apple-iphone-se-mxvv2hn-a-original-imafrcqmfh4zznmq.jpeg?q=70",
    rating: 4.5,
    customer_rating: 153891,
    reviews: 12060,
    f_assured: true,
    spec: [
      {
        label: {
          RAM: "",
          ROM: "128",
        },
      },
      {
        label: "11.94 cm (4.7 inch) Retina HD Display",
      },
      {
        label: "12MP Rear Camera | 7MP Front Camera",
      },
      {
        label: "A13 Bionic Chip with 3rd Gen Neural Engine Processor",
      },
      {
        label: "Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)",
      },
      {
        label: "Fast Charge Capable",
      },
      {
        label:
          "Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately",
      },
      {
        label: "Brand Warranty of 1 Year",
      },
    ],
    mrp: 33000,
    discount: 26,
    exchange_discount: 20000,
    bank_offer: true,
  },
  {
    brand: "MI",
    model: "Redmi 9A Sport (Carbon Black, 32 GB)",
    img_URL:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/j/l/n/-original-imag7chjvhxdhhyh.jpeg?q=70",
    rating: 2.1,
    customer_rating: 25191,
    reviews: 1887,
    f_assured: false,
    spec: [
      {
        label: {
          RAM: "2 GB",
          ROM: "32 GB",
        },
      },
      {
        label: "16.59 cm (6.53 inch) Display",
      },
      {
        label: "13MP Rear Camera",
      },
      {
        label: "A13 Bionic Chip with 3rd Gen Neural Engine Processor",
      },
      {
        label: "5000 mAh Battery",
      },
      {
        label: "1 Year Warranty",
      },
    ],
    mrp: 8499,
    discount: 14,
    exchange_discount: 0,
    bank_offer: true,
  },
  {
    brand: "MI",
    model: "REDMI Note 11 Pro (Stealth Black, 128 GB)",
    img_URL:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/m/0/c/-original-imagcvg4ghr3ykge.jpeg?q=70",
    rating: 4.2,
    customer_rating: 1187,
    reviews: 84,
    f_assured: true,
    spec: [
      {
        label: {
          RAM: "6 GB",
          ROM: "128 GB",
        },
      },
      {
        label: "16.59 cm (6.53 inch) Display",
      },
      {
        label: "108MP Rear Camera",
      },
      {
        label: "5000 mAh Battery",
      },
      {
        label: "12 months",
      },
    ],
    mrp: 19199,
    discount: 0,
    exchange_discount: 0,
    bank_offer: true,
  },
  {
    brand: "SAMSUNG",
    model: "SAMSUNG Galaxy A03 Core (Onyx, 32 GB)",
    img_URL:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/j/7/q/galaxy-a03-core-sm-a032fck6ins-samsung-original-imagmb5kvceyb2yc.jpeg?q=70",
    rating: 2.9,
    customer_rating: 2759,
    reviews: 240,
    f_assured: true,
    spec: [
      {
        label: {
          RAM: "2 GB",
          ROM: "32 GB",
        },
      },
      {
        label: "16.51 cm (6.5 inch) Display",
      },
      {
        label: "8MP Rear Camera",
      },
      {
        label: "5000 mAh Battery",
      },
      {
        label: "12 Months brand Warranty , Domestic Only",
      },
    ],
    mrp: 10499,
    discount: 35,
    exchange_discount: 0,
    bank_offer: true,
  },
  {
    brand: "SAMSUNG",
    model: "SAMSUNG Galaxy S23 Ultra 5G (Phantom Black, 512 GB)",
    img_URL:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/m/l/o/-original-imagmg6gzjf7gggt.jpeg?q=70",
    rating: 3.5,
    customer_rating: 99,
    reviews: 13,
    f_assured: false,
    spec: [
      {
        label: {
          RAM: "12 GB",
          ROM: "512 GB",
        },
      },
      {
        label: "17.27 cm (6.8 inch) Quad HD+ Display",
      },
      {
        label: "200MP + 10MP + 12MP + 10MP | 12MP Front Camera",
      },
      {
        label: "5000 mAh Battery",
      },
      {
        label: "Qualcomm Snapdragon 8 Gen 2 Processor",
      },
    ],
    mrp: 161999,
    discount: 16,
    exchange_discount: 0,
    bank_offer: false,
  },
];

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
    ratingStarContainer.appendChild(rating);

    ratingMainContainer.appendChild(ratingStarContainer);

    const viewerRating = document.createElement("span");
    viewerRating.classList.add("viewer-rating");
    // console.log(data.customer_rating)
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
createPhoneCard(phoneListData);

function calculateActualPrice(mrp, discount) {
  return Math.round(mrp * (1 - discount / 100));
}


let dataArr = [];

//////Filter by brand/////

function brandSelection() {
  const inputBoxes = document.querySelectorAll(
    ".brand-checkbox input[type=checkbox"
  );
  inputBoxes.forEach((input) => {
    input.addEventListener("click", function (e) {
      if (e.target.checked) {
        const data = phoneListData.filter(
          (item) => item.brand === e.target.value
        );
        // console.log(data)
        dataArr.push(...data);
      } else {
        dataArr = dataArr.filter((item) => e.target.value !== item.brand);
      }

      createPhoneCard(dataArr);
    });
  });
}
brandSelection();


//////Filter by Flipkart Assured///////

function flipkartAssuredSort() {
  const checkbox = document.getElementById("f-assured");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      if (dataArr.length) {
        dataArr = dataArr.filter((item) => item.f_assured);
        // console.log(dataArr)
      } else {
        dataArr = phoneListData.filter((item) => item.f_assured);
        // console.log(dataArr)
      }
    }

    createPhoneCard(dataArr);
  });
}
flipkartAssuredSort();


///////Filter by price///////

function priceSort() {
  let minVal = 0;
  let maxVal = 0;
  let data;
  const minPrice = document.querySelector(".price-min");
  const maxPrice = document.querySelector(".price-max");

  if (minPrice.value === "Min" && maxPrice.value === "Max") {
    createPhoneCard(phoneListData);
  }

  minPrice.addEventListener("change", () => {
    minVal = minPrice.value !== "Min" ? minPrice.value : 0;
    data = phoneListData.filter((item) => {
      return calculateActualPrice(item.mrp, item.discount) >= minVal;
    });
    createPhoneCard(data);
  });

  maxPrice.addEventListener("change", () => {
    maxVal = maxPrice.value;
    // maxVal = maxPrice.value !== 'Max' ? maxPrice.value :
    data = phoneListData.filter((item) => {
      return calculateActualPrice(item.mrp, item.discount) <= maxVal;
    });
    createPhoneCard(data);
  });
}
priceSort();

