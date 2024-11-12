// open action/fantasy/drama
document.addEventListener('DOMContentLoaded', function() {
    const actionLink = document.querySelector('.open-action');
    const fantasyLink = document.querySelector('.open-fantasy');
    const dramaLink = document.querySelector('.open-drama');

    const actionMovies = document.querySelector('.action_movies');
    const fantasyMovies = document.querySelector('.fantasy_movies');
    const dramaMovies = document.querySelector('.drama_movies');

    function hideAllMovies() {
        actionMovies.style.display = 'none';
        fantasyMovies.style.display = 'none';
        dramaMovies.style.display = 'none';
    }

    actionLink.addEventListener('click', function(event) {
        event.preventDefault();
        hideAllMovies();
        actionMovies.style.display = 'flex';
    });
    fantasyLink.addEventListener('click', function(event) {
        event.preventDefault();
        hideAllMovies();
        fantasyMovies.style.display = 'flex';
    });
    dramaLink.addEventListener('click', function(event) {
        event.preventDefault();
        hideAllMovies();
        dramaMovies.style.display = 'flex';
    });
});

// open movies
document.addEventListener('DOMContentLoaded', function() {
    const backgroundImage = document.querySelector('.row_2 img');
    const clickTheMovie1 = document.querySelector('.movie_1');
    const clickTheMovie2 = document.querySelector('.movie_2');
    const clickTheMovie3 = document.querySelector('.movie_3');
    const clickTheMovie4 = document.querySelector('.movie_4');
    const clickTheMovie5 = document.querySelector('.movie_5');
    const clickTheMovie6 = document.querySelector('.movie_6');
    const clickTheMovie7 = document.querySelector('.movie_7');
    const clickTheMovie8 = document.querySelector('.movie_8');
    const openMovie1 = document.querySelector('.movie_open_1');
    const openMovie2 = document.querySelector('.movie_open_2');
    const openMovie3 = document.querySelector('.movie_open_3');
    const openMovie4 = document.querySelector('.movie_open_4');
    const openMovie5 = document.querySelector('.movie_open_5');
    const openMovie6 = document.querySelector('.movie_open_6');
    const openMovie7 = document.querySelector('.movie_open_7');
    const openMovie8 = document.querySelector('.movie_open_8');

    function hideBgImage() {
        backgroundImage.style.display = 'none';
    }
    clickTheMovie1.addEventListener('click', function(event){
        event.preventDefault();
        hideBgImage();
        openMovie1.style.display = 'flex';
        openMovie2.style.display = 'none';
        openMovie3.style.display = 'none';
        openMovie4.style.display = 'none';
        openMovie5.style.display = 'none';
        openMovie6.style.display = 'none';
        openMovie7.style.display = 'none';
        openMovie8.style.display = 'none';
    });
    clickTheMovie2.addEventListener('click', function(event){
        event.preventDefault();
        hideBgImage();
        openMovie1.style.display = 'none';
        openMovie2.style.display = 'flex';
        openMovie3.style.display = 'none';
        openMovie4.style.display = 'none';
        openMovie5.style.display = 'none';
        openMovie6.style.display = 'none';
        openMovie7.style.display = 'none';
        openMovie8.style.display = 'none';
    });
    clickTheMovie3.addEventListener('click', function(event){
        event.preventDefault();
        hideBgImage();
        openMovie1.style.display = 'none';
        openMovie2.style.display = 'none';
        openMovie3.style.display = 'flex';
        openMovie4.style.display = 'none';
        openMovie5.style.display = 'none';
        openMovie6.style.display = 'none';
        openMovie7.style.display = 'none';
        openMovie8.style.display = 'none';
    });
    clickTheMovie4.addEventListener('click', function(event){
        event.preventDefault();
        hideBgImage();
        openMovie1.style.display = 'none';
        openMovie2.style.display = 'none';
        openMovie3.style.display = 'none';
        openMovie4.style.display = 'flex';
        openMovie5.style.display = 'none';
        openMovie6.style.display = 'none';
        openMovie7.style.display = 'none';
        openMovie8.style.display = 'none';
    });
    clickTheMovie5.addEventListener('click', function(event){
        event.preventDefault();
        hideBgImage();
        openMovie1.style.display = 'none';
        openMovie2.style.display = 'none';
        openMovie3.style.display = 'none';
        openMovie4.style.display = 'none';
        openMovie5.style.display = 'flex';
        openMovie6.style.display = 'none';
        openMovie7.style.display = 'none';
        openMovie8.style.display = 'none';
    });
    clickTheMovie6.addEventListener('click', function(event){
        event.preventDefault();
        hideBgImage();
        openMovie1.style.display = 'none';
        openMovie2.style.display = 'none';
        openMovie3.style.display = 'none';
        openMovie4.style.display = 'none';
        openMovie5.style.display = 'none';
        openMovie6.style.display = 'flex';
        openMovie7.style.display = 'none';
        openMovie8.style.display = 'none';
    });
    clickTheMovie7.addEventListener('click', function(event){
        event.preventDefault();
        hideBgImage();
        openMovie1.style.display = 'none';
        openMovie2.style.display = 'none';
        openMovie3.style.display = 'none';
        openMovie4.style.display = 'none';
        openMovie5.style.display = 'none';
        openMovie6.style.display = 'none';
        openMovie7.style.display = 'flex';
        openMovie8.style.display = 'none';
    });
    clickTheMovie8.addEventListener('click', function(event){
        event.preventDefault();
        hideBgImage();
        openMovie1.style.display = 'none';
        openMovie2.style.display = 'none';
        openMovie3.style.display = 'none';
        openMovie4.style.display = 'none';
        openMovie5.style.display = 'none';
        openMovie6.style.display = 'none';
        openMovie7.style.display = 'none';
        openMovie8.style.display = 'flex';
    });
});
