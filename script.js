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
        lng: -74.044502, lat: 40.689247,
        title: 'Statue of Liberty',
        description: 'The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, United States. The copper statue, a gift from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg/250px-Lady_Liberty_under_a_blue_sky_%28cropped%29.jpg',
        address: 'Liberty Island, New York, NY 10004'
    },
    {
        lng: -73.968285, lat: 40.785091,
        title: 'Central Park',
        description: 'Central Park is an urban park between the Upper West Side and Upper East Side neighborhoods of Manhattan in New York City that was the first landscaped park in the United States.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg/300px-Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg',
        address: 'New York, NY 10024'
    },
    {
        lng: -73.985428, lat: 40.748817,
        title: 'Empire State Building',
        description: 'The Empire State Building is a 102-story Art Deco skyscraper in the Midtown South neighborhood of Manhattan in New York City. The building was designed by Shreve, Lamb & Harmon and built from 1930 to 1931. Its name is derived from "Empire State", the nickname of the state of New York.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/250px-Empire_State_Building_%28aerial_view%29.jpg',
        address: '20 W 34th St., New York, NY 10001'
    },
    {
        lng: -73.978271, lat: 40.761509,
        title: 'The Museum of Modern Art',
        description: 'The Museum of Modern Art is an art museum located in Midtown Manhattan, New York City, on 53rd Street between Fifth and Sixth Avenues. The institution was conceived in 1929 by Abby Aldrich Rockefeller, Lillie P. Bliss, and Mary Quinn Sullivan.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/MoMa_NY_USA_1.jpg/250px-MoMa_NY_USA_1.jpg',
        address: '11 W 53rd St, New York, NY 10019'
    },
    {
        lng: -74.016678, lat: 40.703564,
        title: 'Battery Park',
        description: 'The Battery, formerly known as Battery Park, is a 25-acre public park located at the southern tip of Manhattan Island in New York City facing New York Harbor.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Battery_Park.JPG/300px-Battery_Park.JPG',
        address: 'New York, NY 10004'
    },
    {
        lng: -74.013382, lat: 40.712742,
        title: 'One World Trade Center',
        description: 'One World Trade Center is the tallest building in the United States, the tallest building in the Western Hemisphere, and the seventh-tallest in the world.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/One_World_Trade_Center_%28cropped_9_to_16%29.jpg/250px-One_World_Trade_Center_%28cropped_9_to_16%29.jpg',
        address: '285 Fulton St, New York, NY 10007'
    },
    {
        lng: -73.985130, lat: 40.758896,
        title: 'Times Square',
        description: 'Times Square is a major commercial intersection, tourist destination, entertainment hub, and neighborhood in Midtown Manhattan, New York City, United States. It is formed by the junction of Broadway, Seventh Avenue, and 42nd Street.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/300px-New_york_times_square-terabass.jpg',
        address: 'Manhattan, NY 10036'
    },
    {
        lng: -73.983559, lat: 40.753742,
        title: 'Bryant Park',
        description: 'Bryant Park is a 9.6-acre public park located in the New York City borough of Manhattan. Privately managed, it is located between Fifth Avenue and Avenue of the Americas and between 40th and 42nd Streets in Midtown Manhattan.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/New-York_-_Bryant_Park.jpg/325px-New-York_-_Bryant_Park.jpg',
        address: 'New York, NY 10018'
    },
    {
        lng: -73.974113, lat: 40.781303,
        title: 'American Museum of Natural History',
        description: 'The American Museum of Natural History is a natural history museum on the Upper West Side of Manhattan in New York City.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/USA-NYC-American_Museum_of_Natural_History.JPG/290px-USA-NYC-American_Museum_of_Natural_History.JPG',
        address: '200 Central Park W, New York, NY 10024'
    },
];

// Add markers and popups to the map
locations.forEach(function (location) {
    const el = document.createElement('div');
    el.className = 'marker';

    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h3>${location.title}</h3>
         <img src="${location.image}" alt="${location.title}" style="width:100%;">
         <p>${location.description}</p>
         <p><strong>Address:</strong> ${location.address}</p>`
    );

    new mapboxgl.Marker(el)
        .setLngLat([location.lng, location.lat])
        .setPopup(popup)  // sets a popup on this marker
        .addTo(map)
        .getElement().addEventListener('click', () => {
            map.flyTo({
                center: [location.lng, location.lat],
                zoom: 15  // Zoom in to level 15 upon marker click
            });
        });

    popup.on('close', () => {
        map.flyTo({
            center: [-74.0060, 40.7128], // Return to initial center
            zoom: 10  // Zoom out to initial zoom level
        });
    });
});
