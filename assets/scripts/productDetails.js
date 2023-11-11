const data = {
    "id": "2",
    "productName": "Sansevieria Superba ",
    "productDescription": "The Sansevieria Superba Green, also known as the Snake Plant, is a popular indoor plant known for its hardiness and unique look. Native to West Africa, it's an excellent choice for indoor spaces because it tolerates low light and dry air. The Snake Plant has stiff, upright leaves that range from one to eight feet tall, depending on the variety. Its architectural nature makes it a natural choice for modern and contemporary interior designs.",
    "productImage": [
        "https://www.ugaoo.com/cdn/shop/files/DSC_6288.jpg",
        "https://www.ugaoo.com/cdn/shop/files/DSC_6567.jpg",
        "https://www.ugaoo.com/cdn/shop/files/SansieveriaSuperbaGreenMed.jpg",
        "https://www.ugaoo.com/cdn/shop/files/DSC_6663.jpg",
        "https://www.ugaoo.com/cdn/shop/files/DSC_6488.jpg"
    ],
    "price": 40,
    "stock": 30,
    "category": [
        "Indoor",
        "Tropical",
        "Houseplants"
    ],
    "dimensions": {
        "diameter": "35 cm",
        "height": "70 cm"
    },
    "advantages": [
        "Air purifying",
        "Low maintenance",
        "Drought tolerant"
    ],
    "sunlightPreference": "Low to bright indirect light",
    "careInstructions": {
        "tips": "The Snake Plant is very forgiving and can survive in low light and drought conditions. It prefers dry soil, so it's important not to overwater it. Allow the soil to dry out completely between waterings, and reduce watering in the winter months. The Snake Plant can tolerate a wide range of temperatures, but prefers temperatures between 70-90°F. It's also resistant to pests."
    },
    "userReviews": [
        {
            "userName": "Alice Johnson",
            "rating": 5,
            "review": "The Snake Plant is a great addition to my home. It's easy to care for and looks great in my living room."
        },
        {
            "userName": "Bob Williams",
            "rating": 4,
            "review": "I love my Snake Plant! It's very hardy and doesn't require much care."
        },
        {
            "userName": "Charlie Brown",
            "rating": 5,
            "review": "This plant is perfect for beginners like me. It's very forgiving and adds a nice touch of green to my home."
        },
        {
            "userName": "Diana Prince",
            "rating": 4,
            "review": "'m really happy with my Snake Plant. It's grown quite a bit since I got it and it's very easy to care for."
        },
        {
            "userName": "Eddie Brock",
            "rating": 5,
            "review": "'ve had my Snake Plant for over a year now and it's still going strong. I highly recommend this plant."
        }
    ]
}
const renderImages = (images) => {
    console.log(images);
    const mainDiv = document.getElementById('leftImages');
    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'imgWrper';
    const topImgDiv = document.createElement('div');
    topImgDiv.className = 'topImg';
    const topImg = document.createElement('img');
    topImg.src = images[0]
    topImgDiv.appendChild(topImg);
    const bottomImgsDiv = document.createElement('div');
    bottomImgsDiv.className = 'bottomImgs';
    const bottomImgsLeftDiv = document.createElement('div');
    bottomImgsLeftDiv.className = 'bottomImgs-left';
    const bottomImgLeft = document.createElement('img');
    bottomImgLeft.src = images[1]
    bottomImgsLeftDiv.appendChild(bottomImgLeft);
    const bottomImgsRightDiv = document.createElement('div');
    bottomImgsRightDiv.className = 'bottomImgs-right';
    const bottomImgRight = document.createElement('img');
    bottomImgRight.src = images[2]
    bottomImgsRightDiv.appendChild(bottomImgRight);
    bottomImgsDiv.appendChild(bottomImgsLeftDiv);
    bottomImgsDiv.appendChild(bottomImgsRightDiv);
    imgWrapper.appendChild(topImgDiv);
    imgWrapper.appendChild(bottomImgsDiv);
    mainDiv.appendChild(imgWrapper);
}

const renderDetails = (data) => {
    document.getElementById("productName").innerHTML = data.productName
    const stock = document.getElementById("stock")
    stock.innerHTML = data.stock > 10 ? 'In Stock' : `Only ${data.stock} items left`;

    if (data.stock <= 10) {
        stock.style.color = 'red';
    }
    const descriptionWrapper = document.getElementById("description")
    const description = document.createElement("p")
    description.innerHTML = data.productDescription
    descriptionWrapper.appendChild(description)

    const careTipsWrapper = document.getElementById("careTips")
    const caretips = document.createElement("p")
    caretips.innerHTML = data.careInstructions.tips
    careTipsWrapper.appendChild(caretips)


    // care images

    document.getElementById("diameter-details").innerHTML = data.dimensions.diameter
    document.getElementById("height-details").innerHTML = data.dimensions.height
    document.getElementById("shade-details").innerHTML = data.sunlightPreference
    document.getElementById("advantages-details").innerHTML = data.advantages[0]
}

const renderAllDetails = (data) => {
    renderImages(data.productImage)
    renderDetails(data)
}
renderAllDetails(data)