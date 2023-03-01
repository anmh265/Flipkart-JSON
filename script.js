const chevronDown = `<svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"  class="_2JzwqO"></path></svg>`

const wishlist = '<svg xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"class="eX72wL" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg>'

const starImage = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=='

const flipkartAssuredImg = 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png'

const categoryNavBarData = [
    {
        label: 'Electronics',
        category: true
    },
    {
        label: 'TVs & Appliances',
        category: true
    },
    {
        label: 'Men',
        category: true
    },
    {
        label: 'Women',
        category: true
    },
    {
        label: 'Baby & Kids',
        category: true
    },
    {
        label: 'Home & Furniture',
        category: true
    },
    {
        label: 'Sports, Books & More',
        category: true
    },
    {
        label: 'Flights',
        category: false
    },
    {
        label: 'Offer Zone',
        category: false
    }
]

function createNavBar(data){
    const categoryNavBar = document.getElementById('category-nav')

    data.forEach(item => {
        const spanElement = document.createElement('span')
        spanElement.innerHTML = `
            ${item.label}
            ${item.category ? chevronDown: ''}
        `
        categoryNavBar.appendChild(spanElement)
    })   
}

createNavBar(categoryNavBarData)

function sortPhoneBy(){
    const sortCategory = document.querySelectorAll('.sort')

    sortCategory.forEach(item => {
        item.addEventListener('click', () => {
            removeActive(sortCategory)
            item.classList.add('active')
        })
    })
}
sortPhoneBy()

function removeActive(sortList){
    sortList.forEach(item => {
        item.classList.remove('active')
    })
}

const phoneData = [
    {
        brand:  'Apple',
        model: 'Apple iPhone SE (White, 256 GB) (Includes EarPods, Power Adapter)',
        img_URL: 'https://rukminim1.flixcart.com/image/312/312/k9loccw0/mobile/6/b/z/apple-iphone-se-mxd12hn-a-original-imafrcqf9nze6evk.jpeg?q=70',
        rating: 4.5,
        customer_rating: 153888,
        reviews: 12060,
        spec: [
            {
                label: '256 GB ROM'
            },
            {
                label: '11.94 cm (4.7 inch) Retina HD Display'
            },
            {
                label: '12MP Rear Camera | 7MP Front Camera'
            },
            {
                label: 'A13 Bionic Chip with 3rd Gen Neural Engine Processor'
            },
            {
                label: 'Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)'
            },
            {
                label: 'Fast Charge Capable'
            },
            {
                label: 'Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately'
            },
            {
                label: 'Brand Warranty for 1 Year'
            }
        ],
        mrp: 54900,
        discount: 25,
        exchange_discount :20000,
        bank_offer: true
    },
    {
        brand:  'Apple',
        model: 'APPLE iPhone SE (Red, 128 GB)',
        img_URL: 'https://rukminim1.flixcart.com/image/312/312/k9loccw0/mobile/6/8/g/apple-iphone-se-mxvv2hn-a-original-imafrcqmfh4zznmq.jpeg?q=70',
        rating: 4.5,
        customer_rating: 153888,
        reviews: 12060,
        spec: [
            {
                label: '128 GB ROM'
            },
            {
                label: '11.94 cm (4.7 inch) Retina HD Display'
            },
            {
                label: '12MP Rear Camera | 7MP Front Camera'
            },
            {
                label: 'A13 Bionic Chip with 3rd Gen Neural Engine Processor'
            },
            {
                label: 'Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)'
            },
            {
                label: 'Fast Charge Capable'
            },
            {
                label: 'Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately'
            },
            {
                label: 'Brand Warranty for 1 Year'
            }
        ],
        mrp: 44900,
        discount: 26,
        exchange_discount :20000,
        bank_offer: true
    }
]

function createPhoneCard(dataList){
    const mainContainer = document.querySelector('.display-section')

    dataList.forEach(data => {
        const aTag = document.createElement('a')
        aTag.classList.add('phone-card')

        const phoneInfoContainer = document.createElement('div')
        phoneInfoContainer.classList.add('phone-info')

        const imageMainContainer = document.createElement('div')
        imageMainContainer.classList.add('phone-image-compare')

        const imageContainer = document.createElement('div')
        imageContainer.classList.add('phone-image')

        const imageElement = document.createElement('img')
        imageElement.src = data.img_URL
        imageContainer.appendChild(imageElement)

        imageMainContainer.appendChild(imageContainer)

        const compareContainer = document.createElement('div')
        compareContainer.classList.add('phone-compare')

        const inputElement = document.createElement('input')
        inputElement.type = 'checkbox'
        inputElement.setAttribute('id', 'compare')
        compareContainer.appendChild(inputElement)
        const labelElement = document.createElement('label')
        labelElement.innerHTML = 'Add to Compare'
        compareContainer.appendChild(labelElement)

        imageMainContainer.appendChild(compareContainer)

        const wishlistContainer = document.createElement('div')
        wishlistContainer.classList.add('add-wishlist')
        wishlistContainer.innerHTML = wishlist

        imageMainContainer.appendChild(wishlistContainer)

        phoneInfoContainer.appendChild(imageMainContainer)

        const phoneSpecContainer = document.createElement('div')
        phoneSpecContainer.classList.add('phone-specs')

        const modelName = document.createElement('div')
        modelName.classList.add('phone-model-name')
        modelName.innerHTML = data.model
        phoneSpecContainer.appendChild(modelName)

        const ratingMainContainer = document.createElement('div')
        ratingMainContainer.classList.add('phone-rating')

        const ratingStarContainer = document.createElement('span')
        ratingStarContainer.classList.add('phone-rating-star')

        const rating = document.createElement('div')
        rating.classList.add('rating')

        const starImageContainer = document.createElement('img')
        starImageContainer.src = starImage

        rating.innerHTML = `
            ${data.rating}
            <img src = "${starImage}" alt="">
        `
        ratingStarContainer.appendChild(rating)

        ratingMainContainer.appendChild(ratingStarContainer)

        const viewerRating = document.createElement('span')
        viewerRating.classList.add('viewer-rating')
        viewerRating.innerHTML = `${data.customer_rating.toLocaleString("en-IN")} Ratings & ${data.reviews.toLocaleString("en-IN")} Reviews`

        ratingMainContainer.appendChild(viewerRating)

        phoneSpecContainer.appendChild(ratingMainContainer)

        const internalSpecContainer = document.createElement('div')
        internalSpecContainer.classList.add('internal-spec')

        const specList = document.createElement('ul')
        specList.classList.add('spec-list')

        data.spec.forEach(item => {
            const liElement = document.createElement('li')
            liElement.innerHTML = item.label
            specList.appendChild(liElement)
        })

        internalSpecContainer.appendChild(specList)

        phoneSpecContainer.appendChild(internalSpecContainer)

        phoneInfoContainer.appendChild(phoneSpecContainer)

        aTag.appendChild(phoneInfoContainer)

        const priceContainer = document.createElement('div')
        priceContainer.classList.add('phone-price-container')

        const phonePrice = document.createElement('div')
        phonePrice.classList.add('phone-price')

        const actualPrice = document.createElement('div')
        actualPrice.classList.add('phone-actual-price')
        const calculatedPrice = calculateActualPrice(data.mrp, data.discount)
        actualPrice.innerHTML = `₹${calculatedPrice.toLocaleString("en-IN")}`

        phonePrice.appendChild(actualPrice)

        const mrpElement = document.createElement('div')
        mrpElement.classList.add('phone-mrp')
        mrpElement.innerHTML = `₹${data.mrp.toLocaleString("en-IN")}`
        phonePrice.appendChild(mrpElement)

        const discountElement = document.createElement('div')
        discountElement.classList.add('phone-discount')
        discountElement.innerHTML = `${data.discount}% off`
        phonePrice.appendChild(discountElement)

        if(calculatedPrice > 2000){
            const freeDeliveryElement = document.createElement('div')
            freeDeliveryElement.classList.add('phone-free-delivery')
            freeDeliveryElement.innerHTML = 'Free delivery'
            phonePrice.appendChild(freeDeliveryElement)
        }

        priceContainer.appendChild(phonePrice)

        const flipkartAssuredContainer = document.createElement('div')
        flipkartAssuredContainer.classList.add('flipkart-assured-phone')

        const flipkartAssuredImage = document.createElement('img')
        flipkartAssuredImage.src = flipkartAssuredImg
        flipkartAssuredContainer.appendChild(flipkartAssuredImage)

        priceContainer.appendChild(flipkartAssuredContainer)

        const exchangeRateElement = document.createElement('div')
        exchangeRateElement.classList.add('phone-exchange-discount')
        exchangeRateElement.innerHTML = `Upto <span>₹${data.exchange_discount.toLocaleString("en-IN")}</span> Off on Exchange`

        priceContainer.appendChild(exchangeRateElement)

        const bankOfferContainer = document.createElement('div')
        bankOfferContainer.classList.add('phone-bank-offer')
        if(data.bank_offer){

        }
        bankOfferContainer.innerHTML = `Bank Offer`

        priceContainer.appendChild(bankOfferContainer)

        aTag.appendChild(priceContainer)

        mainContainer.appendChild(aTag)
        
    })
}

createPhoneCard(phoneData)

function calculateActualPrice(mrp, discount){
    return mrp * (1 - discount/100)
}
