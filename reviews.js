// Games data - shared between both pages
const games = [
    {
        id: 1,
        title: "Cyberpunk 2077",
        filename:"cyberpunk-review.html",
        image: "https://cdn.wccftech.com/wp-content/uploads/2023/08/Cyberpunk-2077-2.0-patch-1456x819.jpg",
        genre: "RPG",
        platforms: ["PC", "PS5", "Xbox"],
        rating: 4.5,
        review: "A futuristic RPG set in Night City with deep character customization.",
        releaseDate: "2020-12-10"
    },
    {
        id: 2,
        title: "Elden Ring",
        filename:"EldenRing.html",
        image: "images/image.png",
        genre: "RPG",
        platforms: ["PC", "PS5", "Xbox"],
        rating: 5,
        review: "An open-world action RPG from the creators of Dark Souls.",
        releaseDate: "2022-02-25"
    },
    {
        id: 3,
        title: "God of War: Ragnarök",
        filename:"images/godofwar.jpg",
        image: "images/god of war ragnarok.jpg",
        genre: "Action",
        platforms: ["PS5"],
        rating: 5,
        review: "Kratos and Atreus return in this epic Norse adventure.",
        releaseDate: "2022-11-09"
    },
    {
        id: 4,
        title: "The Legend of Zelda: Tears of the Kingdom",
        filename:"TheLengendOfZelda.html",
        image: "images/Zelda.jpg",
        genre: "Adventure",
        platforms: ["Switch"],
        rating: 5,
        review: "Link's newest adventure in the expansive land of Hyrule.",
        releaseDate: "2023-05-12"
    },
    {
        id: 5,
        title: "Starfield",
        filename:"Starfield.html",
        image: "images/Starfield.jpeg",
        genre: "RPG",
        platforms: ["PC", "Xbox"],
        rating: 4,
        review: "Bethesda's ambitious space RPG with endless exploration.",
        releaseDate: "2023-09-06"
    },
    {
        id: 6,
        title: "Call of Duty: Modern Warfare III",
        filename:"callofdutIII.html",
        image: "images/Call of Duty Modern Warfare III.jpg",
        genre: "FPS",
        platforms: ["PC", "PS5", "Xbox"],
        rating: 3.5,
        review: "The latest installment in the popular FPS franchise.",
        releaseDate: "2023-11-10"
    },
    {
        id: 7,
        title: "Baldur's Gate 3",
        filename: "baldurs-gate-review.html",
        image: "images/baldur 3.webp",
        genre: "RPG",
        platforms: ["PC", "PS5"],
        rating: 5,
        review: "A masterpiece of CRPG design with deep storytelling and tactical combat.",
        releaseDate: "2023-08-03"
    },
    {
        id: 8,
        title: "Hogwarts Legacy",
        filename: "hogwarts-legacy.html",
        image: "images/hogwarts.jpeg",
        genre: "Adventure",
        platforms: ["PC", "PS5", "Xbox", "Switch"],
        rating: 4.5,
        review: "A magical open-world adventure set in the Wizarding World.",
        releaseDate: "2023-02-10"
    },
    {
        id: 9,
        title: "Resident Evil 4 Remake",
        filename: "re4-remake.html",
        image: "images/resident evil 4.jpeg",
        genre: "Action",
        platforms: ["PC", "PS5", "Xbox"],
        rating: 4.8,
        review: "A brilliant reimagining of the survival horror classic.",
        releaseDate: "2023-03-24"
    },
    {
        id: 10,
        title: "Diablo IV",
        filename: "diablo-iv.html",
        image: "images/diablo.jpeg",
        genre: "RPG",
        platforms: ["PC", "PS5", "Xbox"],
        rating: 4.2,
        review: "A dark and addictive return to form for the ARPG series.",
        releaseDate: "2023-06-06"
    },
    {
        id: 11,
        title: "Final Fantasy XVI",
        filename: "ffxvi.html",
        image: "images/ffxvi.jpeg",
        genre: "RPG",
        platforms: ["PS5"],
        rating: 4.7,
        review: "A stunning action-RPG with epic Eikon battles and mature storytelling.",
        releaseDate: "2023-06-22"
    },
    {
        id: 12,
        title: "Street Fighter 6",
        filename: "street-fighter-6.html",
        image: "images/street fighter 6.jpeg",
        genre: "Action",
        platforms: ["PC", "PS5", "Xbox"],
        rating: 4.5,
        review: "The best fighting game of the generation with incredible depth.",
        releaseDate: "2023-06-02"
    },
    {
        id: 13,
        title: "Marvel's Spider-Man 2",
        filename: "spiderman-2.html",
        image: "images/spider man 2.jpeg",
        genre: "Action",
        platforms: ["PS5"],
        rating: 4.9,
        review: "An amazing superhero adventure with two playable Spider-Men.",
        releaseDate: "2023-10-20"
    },
    {
        id: 14,
        title: "Alan Wake 2",
        filename: "alan-wake-2.html",
        image: "images/Alan 2.jpeg",
        genre: "Adventure",
        platforms: ["PC", "PS5", "Xbox"],
        rating: 4.6,
        review: "A mind-bending survival horror with incredible atmosphere.",
        releaseDate: "2023-10-27"
    }
];

// Display games on page load with pagination
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    
    // Check which page we're on
    if (currentPage === 'reviewsPage1.html') {
        // Display first half of games on page 1
        const page1Games = games.slice(0, Math.ceil(games.length / 2));
        displayGames(page1Games);
        
        // Update pagination links
        document.querySelector('.pagination').innerHTML = `
            <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item active"><a class="page-link" href="reviewsPage1.html">1</a></li>
            <li class="page-item"><a class="page-link" href="reviewsPage2.html">2</a></li>
            <li class="page-item">
                <a class="page-link" href="reviewsPage2.html">Next</a>
            </li>
        `;
    } 
    else if (currentPage === 'reviewsPage2.html') {
        // Display second half of games on page 2
        const page2Games = games.slice(Math.ceil(games.length / 2));
        displayGames(page2Games);
        
        //  pagination links
        document.querySelector('.pagination').innerHTML = `
            <li class="page-item">
                <a class="page-link" href="reviewsPage1.html">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="reviewsPage1.html">1</a></li>
            <li class="page-item active"><a class="page-link" href="reviewsPage2.html">2</a></li>
            <li class="page-item disabled">
                <a class="page-link" href="#">Next</a>
            </li>
        `;
    }
    
    // Search functionality (works on both pages)
    document.getElementById('searchButton').addEventListener('click', searchGames);
    document.getElementById('searchInput').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            searchGames();
        }
    });
});

// displayGames(), 
function displayGames(gamesToDisplay) {
    const container = document.getElementById('gameContainer');
    container.innerHTML = '';
    
    if (gamesToDisplay.length === 0) {
        container.innerHTML = '<div class="col-12 text-center py-5"><h3>No games found</h3></div>';
        return;
    }
    
    gamesToDisplay.forEach(game => {
        const stars = getStarRating(game.rating);
        
        const platformBadges = game.platforms.map(platform => 
            `<span class="badge bg-secondary me-1">${platform}</span>`
        ).join('');
        
        const gameCard = `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card h-100">
                    <img src="${game.image}" class="card-img-top" alt="${game.title} cover art" onerror="this.onerror=null; this.src='images/placeholder.jpg'; this.alt='${game.title} cover image not available'">
                    <div class="card-body">
                        <h5 class="card-title">${game.title}</h5>
                        <div class="mb-2">
                            <span class="badge bg-primary">${game.genre}</span>
                            ${platformBadges}
                        </div>
                        <div class="text-warning mb-2">
                            ${stars}
                            <span class="text-dark ms-1">${game.rating}/5</span>
                        </div>
                        <p class="card-text">${game.review}</p>
                        <a href="${game.filename}" class="btn btn-outline-primary">Read Review</a>
                    </div>
                    <div class="card-footer bg-transparent">
                        <small class="text-muted">Released: ${new Date(game.releaseDate).toLocaleDateString()}</small>
                    </div>
                </div>
            </div>
        `;
        
        container.innerHTML += gameCard;
    });
}

function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

function searchGames() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (!searchTerm) {
        displayGames(games);
        return;
    }
    
    const filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(searchTerm) || 
        game.genre.toLowerCase().includes(searchTerm) || 
        game.review.toLowerCase().includes(searchTerm) ||
        game.platforms.some(platform => platform.toLowerCase().includes(searchTerm))
    );
    
    displayGames(filteredGames);
}