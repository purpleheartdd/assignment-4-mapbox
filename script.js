mapboxgl.accessToken = 'pk.eyJ1IjoieWw5ODUwIiwiYSI6ImNsdXZndjQ2aDAzY20ycW8zeWxla3NoNnkifQ.2i00R3I8OIwqPtyqyInH9A';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.0060, 40.7128], // starting position [lng, lat]
    zoom: 10, // starting zoom
    maxBounds: [[-74.259, 40.477], [-73.7004, 40.9176]] // Set bounds to NYC area
});

const locations = [
    {
        lng: -74.044502,
        lat: 40.689247,
        title: 'Statue of Liberty',
        description: 'The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, United States. The copper statue, a gift from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg/250px-Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg',
        address: 'Liberty Island, New York, NY 10004',
        category: ['Must Go']
    },
    {
        lng: -73.968285,
        lat: 40.785091,
        title: 'Central Park',
        description: 'Central Park is an urban park between the Upper West Side and Upper East Side neighborhoods of Manhattan in New York City that was the first landscaped park in the United States.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg/300px-Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg',
        address: 'New York, NY 10024',
        category: ['Parks']
    },
    {
        lng: -73.985428,
        lat: 40.748817,
        title: 'Empire State Building',
        description: 'The Empire State Building is a 102-story Art Deco skyscraper in the Midtown South neighborhood of Manhattan in New York City. The building was designed by Shreve, Lamb & Harmon and built from 1930 to 1931. Its name is derived from "Empire State", the nickname of the state of New York.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/250px-Empire_State_Building_%28aerial_view%29.jpg',
        address: '20 W 34th St., New York, NY 10001',
        category: ['Must Go']
    },
    {
        lng: -73.978271,
        lat: 40.761509,
        title: 'The Museum of Modern Art',
        description: 'The Museum of Modern Art is an art museum located in Midtown Manhattan, New York City, on 53rd Street between Fifth and Sixth Avenues. The institution was conceived in 1929 by Abby Aldrich Rockefeller, Lillie P. Bliss, and Mary Quinn Sullivan.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/MoMa_NY_USA_1.jpg/250px-MoMa_NY_USA_1.jpg',
        address: '11 W 53rd St, New York, NY 10019',
        category: ['Must Go']
    },
    {
        lng: -74.016678,
        lat: 40.703564,
        title: 'Battery Park',
        description: 'The Battery, formerly known as Battery Park, is a 25-acre public park located at the southern tip of Manhattan Island in New York City facing New York Harbor.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Battery_Park.JPG/300px-Battery_Park.JPG',
        address: 'New York, NY 10004',
        category: ['Parks']
    },
    {
        lng: -74.013382,
        lat: 40.712742,
        title: 'One World Trade Center',
        description: 'One World Trade Center is the tallest building in the United States, the tallest building in the Western Hemisphere, and the seventh-tallest in the world.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/One_World_Trade_Center_%28cropped_9_to_16%29.jpg/250px-One_World_Trade_Center_%28cropped_9_to_16%29.jpg',
        address: '285 Fulton St, New York, NY 10007',
        category: ['Must Go']
    },
    {
        lng: -73.985130,
        lat: 40.758896,
        title: 'Times Square',
        description: 'Times Square is a major commercial intersection, tourist destination, entertainment hub, and neighborhood in Midtown Manhattan, New York City, United States. It is formed by the junction of Broadway, Seventh Avenue, and 42nd Street.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/300px-New_york_times_square-terabass.jpg',
        address: 'Manhattan, NY 10036',
        category: ['Must Go']
    },
    {
        lng: -73.983559,
        lat: 40.753742,
        title: 'Bryant Park',
        description: 'Bryant Park is a 9.6-acre public park located in the New York City borough of Manhattan. Privately managed, it is located between Fifth Avenue and Avenue of the Americas and between 40th and 42nd Streets in Midtown Manhattan.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/New-York_-_Bryant_Park.jpg/325px-New-York_-_Bryant_Park.jpg',
        address: 'New York, NY 10018',
        category: ['Parks']
    },
    {
        lng: -73.974113,
        lat: 40.781303,
        title: 'American Museum of Natural History',
        description: 'The American Museum of Natural History is a natural history museum on the Upper West Side of Manhattan in New York City.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/USA-NYC-American_Museum_of_Natural_History.JPG/290px-USA-NYC-American_Museum_of_Natural_History.JPG',
        address: '200 Central Park W, New York, NY 10024',
        category: ['Must Go']
    },
    {
        lng:  -73.98817,
        lat: 40.72214,
        title: 'Sami & Susu',
        description: 'Sami & Sasu gained a cult following for its Mediterranean flavors and family recipe inspiration after opening in 2020 as a pickup and delivery service during the height of the pandemic. Due to major success throughout the pandemic, Sami & Sasu opened a full service restaurant in July 2021, located in the Lower East Side, which has since been featured in the Michelin Guide. Sami & Sasu is best known for its tender and plump chicken schnitzel, baguette sandwiches, beef tongue (if you are feeling adventurous), and their wine list.',
        image: 'https://images.squarespace-cdn.com/content/v1/5ece9deeb32b8a7d6b903abb/01897d40-36cb-42bb-b56e-858b18118c1d/S_S+Dec+115848.jpeg?format=1500w',
        address: '190 Orchard St, New York, NY 10002',
        category: ['Restaurants']
    },
    {
        lng: -73.99977,
        lat: 40.71679,
        title: 'Nha Trang One',
        description: 'Have you ever craved a big warm bowl of authentic pho or crispy spring rolls? Transport yourself to Vietnam by visiting this hidden gem located in New York City’s Chinatown. According to Nha Trang One’s website, it is a family-owned restaurant with friendly service and a menu that extends well beyond the most popular Vietnamese dishes. Not only is the food and service exceptional, it’s also known as one of the best affordable restaurants in NYC.',
        image: 'https://i0.wp.com/kubiti.org/wp-content/uploads/2023/03/image-16.png?resize=1024%2C576&quality=100&ssl=1',
        address: '87 Baxter St, New York, NY 10013',
        category: ['Restaurants']
    },
    {
        lng: -73.98274,
        lat: 40.74438,
        title: 'Atomix',
        description: 'Ever wondered what it would be like to dine at the best ranked restaurant in the country? Look no further than Atomix! Atomix offers high-end Korean cuisine through a unique tasting menu experience. There is no doubt that Atomix deserves a spot in the top 10 best NYC restaurants with two Michelin stars, a ranking of number eight on the list of the World’s 50 Best Restaurants in 2023 (moved up from the thirty third spot in 2022), and three stars from the New York Times. According to the World’s 50 Best Restaurants in 2023, Atomix is not only one of the best in the world, but ranked at the very top in the United States.',
        image: 'https://pyxis.nymag.com/v1/imgs/e4a/ebe/43eca43d096042466947b2378c437cf1e1-atomix-01.rsocial.w1200.jpg',
        address: '104 E 30th St, New York, NY 10016',
        category: ['Restaurants']
    }
];

// Store all markers by category for easy access
const markersByCategory = {
    'Must Go': [],
    'Parks': [],
    'Restaurants': [],
    'Airbnbs': []
};

locations.forEach(location => {
    const el = document.createElement('div');
    el.className = 'marker ' + location.category.join(" "); // Join categories with space if multiple

    const popup = new mapboxgl.Popup({
        offset: 25, // Helps position the popup away from the marker
        className: 'my-popup',
        maxWidth: "200px" // Ensures popup does not get too wide
    }).setHTML(
        `<div class="popup-content">
            <h3>${location.title}</h3>
            <img src="${location.image}" alt="${location.title}">
            <p>${location.description}</p>
            <p><strong>Address:</strong> ${location.address}</p>
        </div>`
    );

    const marker = new mapboxgl.Marker(el)
        .setLngLat([location.lng, location.lat])
        .setPopup(popup)
        .addTo(map);

    markersByCategory[location.category].push(marker);
});


function changeCategory(selectedCategory) {
    Object.keys(markersByCategory).forEach(category => {
        markersByCategory[category].forEach(marker => {
            const element = marker.getElement();
            if (selectedCategory === category) {
                element.style.visibility = 'visible'; // Show marker
            } else {
                element.style.visibility = 'hidden'; // Hide marker
                marker.getPopup().remove(); // Close the popup if it's open
            }
        });
    });
}


// Initially show 'Must Go' category
changeCategory('Must Go');

map.on('popupopen', function(e) {
    var popup = e.popup;
    map.panTo(popup.getLngLat(), {
        duration: 500  // Smooth pan to the popup location
    });
});

function showAll() {
    Object.keys(markersByCategory).forEach(category => {
        markersByCategory[category].forEach(marker => {
            marker.getElement().style.visibility = 'visible'; // Show the marker
        });
    });
}
