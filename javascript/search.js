const product = [
    {
        id: 0,
        image: '../image/airpods1.jpg',
        title: 'boat',
        price: 1200
    },
    {
        id: 1,
        image: '../image/airpods2.jpg',
        title: 'A connect Z',
        price: 587
    },
    {
        id: 2,
        image: '../image/airpods3.jpg',
        title: 'noise',
        price: 1935
    },
    {
        id: 3,
        image: '../image/asus.jpg',
        title: 'Asus Aspire Laptop',
        price: 25000
    },
    {
        id: 4,
        image: '../image/dell1.jpg',
        title: 'Dell inspiron',
        price: 40000
    },
    {
        id: 5,
        image: '../image/dell2.jpg',
        title: 'Dell Aspiron',
        price: 35000
    },
    {
        id: 6,
        image: '../image/hp.jpg',
        title: 'HP laptop',
        price: 20000
    },
    {
        id: 7,
        image: '../image/huawei.jpg',
        title: 'Huawei',
        price: 15000
    },
    {
        id: 8,
        image: '../image/iphone.jpg',
        title: 'Iphone 60 pro',
        price: 65000
    },
    {
        id: 9,
        image: '../image/iphone_32.jpg',
        title: 'Iphone 60',
        price: 55000
    },
    {
        id: 10,
        image: '../image/realme.jpg',
        title: 'Realme',
        price: 12000
    },
    {
        id: 11,
        image: '../image/realme_un.jpg',
        title: 'Redmi 5G pro',
        price: 16000
    },
    {
        id: 12,
        image: '../image/redmi1.jpg',
        title: 'Redmi 4G',
        price: 10000
    },
    {
        id: 13,
        image: '../image/flip_mobile.jpg',
        title: 'Samsung Flip Z',
        price: 35000
    }
]

const categories = [...new Set(product.map((item)=>{
    return item
}))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase()
    const filterData = categories.filter((item)=>{
        return(
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
})

const displayItem = (items) =>{
    document.getElementById('root').innerHTML = items.map((item)=>{
        var {image, title, price} = item;
        return(
            `
            <div class="box">
                <div class="img-box">
                    <img class="images" src=${image}></img>
                </div>
                <div class="bottom">
                    <p>${title}</p>
                    <h2>${price}.00</h2>
                    <button>Add to cart</button>
                </div>
            </div>
            `
        )
    }).join('')
};

displayItem(categories)
