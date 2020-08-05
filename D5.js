/*

    Module 7 - D5 Team Work

    Organize with your team to have a common version of React Spotify connected to the RapidAPI endpoint.
    Once you have it, transform the application by using Redux stores in order to maintain the status of the application.

    Features:
    - Home page, Album page, artist page
    - When clicking on a song, the name and the details should appear in the "player"
    - Next to each song, you should be able to "Like" the song. From that moment on, wherever the song appears, the like "status" should be mantained
    - [EXTRA] Implement a login via username storing user data in a different reducer
    - [EXTRA] Be able to add songs to other playlists besides the playing queue
    - [EXTRA] Implement an UNDO functionality

    Hints:
    - Use the store for saving the song the user liked and check accordingly everytime you display a song
    - Use the store for keeping track of the song that is currently playing.
    - Use redux-thunk to wrap your async calls in reusable actions
    - For the undo: npm i redux-undo

*/