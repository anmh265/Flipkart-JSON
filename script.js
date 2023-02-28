const chevronDown = `<svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"  class="_2JzwqO"></path></svg>`

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

