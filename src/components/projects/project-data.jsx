import meetAppScreenshot1 from '../../assets/images/meetappscreenshot1.png';
import pokedexScreenshot1 from '../../assets/images/pokedexscreenshot1.png';
import jabbertalkyScreenshot1 from '../../assets/images/jabbertalkyscreenshot1.png';
import myflixAngularScreenshot1 from '../../assets/images/myflixangularscreenshot1.png';
import myflixReactScreenshot1 from '../../assets/images/myflixreactscreenshot1.png';
import movieapiScreenshot1 from '../../assets/images/movieapiscreenshot1.png';
import jabbertalkyDemo from '../../assets/videos/jabbertalkydemo5.webm';

const projectData = [
  {
    id: 1,
    title: 'myFlix Angular Client',
    description:
      'A single-page, responsive movie app built using Angular. The app provides movie enthusiasts with a platform to interact with movies, offering features like user registration, detailed views of movies, directors, and genres, and a profile page.',
    technologies: ['Angular', 'Node.js', 'npm', 'Angular Material', 'Typedoc'],
    githubLink: 'https://github.com/CodyRagsdale/angularmovieproject',
    liveLink: 'https://codyragsdale.github.io/angularmovieproject/',
    imageUrl: myflixAngularScreenshot1, // Update this when you have the image in your assets folder
    videoUrl: '', // You can add a video link here if you have one
  },
  {
    id: 2,
    title: 'Jabbertalky - Mobile Chat App',
    description:
      'Please click the project card for a video demonstration if not on a mobile device. A mobile chat application built with React Native and Expo. Jabbertalky provides users with a real-time chat interface where they can share text messages, images, and their location. The app is optimized for both Android and iOS.',
    technologies: [
      'React Native',
      'Expo SDK',
      'Google Firestore Database',
      'Google Firebase Authentication',
      'Firebase Cloud Storage',
    ],
    githubLink: 'https://github.com/CodyRagsdale/jabbertalky',
    liveLink: '', // Empty since there's no live version
    imageUrl: jabbertalkyScreenshot1, // Update this when you have the image in your assets folder
    videoUrl: jabbertalkyDemo, // Update this with the actual path to your video in the assets folder
  },
  {
    id: 3,
    title: 'Meet App',
    description:
      'A Progressive Web Application (PWA) built using React and serverless architecture. The app interfaces with the Google Calendar API to display upcoming events in various cities. It offers features like event filtering, offline support, and data visualization.',
    technologies: [
      'React',
      'PWA',
      'Serverless Architecture',
      'Google Calendar API',
      'Test-Driven Development',
    ],
    githubLink: 'https://github.com/CodyRagsdale/meet',
    liveLink: 'https://codyragsdale.github.io/meet/', // Note about restricted access
    imageUrl: meetAppScreenshot1, // Update when you have the image
    videoUrl: '', // Empty if there's no video
  },
  {
    id: 4,
    title: 'myFlix React Client',
    description:
      'A front-end client for the myFlix movie app, designed to work alongside its existing server-side REST API and database. The app provides an interactive platform for users to browse, search, and discover movies. Users can also register, authenticate, and manage their list of favorite movies.',
    technologies: [
      'React',
      'React Router',
      'React Bootstrap',
      'MERN Stack',
      'Responsive Design',
    ],
    githubLink: 'https://github.com/CodyRagsdale/myFlix-client', // Replace with actual GitHub URL if different
    liveLink: 'https://myflixmovieproject.netlify.app/',
    imageUrl: myflixReactScreenshot1, // Update when you have the image
    videoUrl: '', // Empty if there's no video
  },
  {
    id: 5,
    title: 'Simple JavaScript Pokémon App',
    description:
      'A beginner-friendly application built with vanilla JavaScript, HTML, and CSS that utilizes the Pokémon API. The app displays first and second-generation Pokémon and offers features like modals for more information, navigation buttons, and a search bar.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'jQuery',
      'Bootstrap',
      'Pokémon API',
    ],
    githubLink: 'https://github.com/CodyRagsdale/simple-js-pokemon-app', // Replace with actual GitHub URL if different
    liveLink: 'https://codyragsdale.github.io/PokeDexApp/',
    imageUrl: pokedexScreenshot1, // Update when you have the image
    videoUrl: '', // Empty if there's no video
  },
  {
    id: 6,
    title: 'movie-api',
    description:
      'A server-side API built with Node.js, Express, and MongoDB. This API powers the "myFlix" web application and provides services for user authentication, CRUD operations, and secure routing. It serves as the backbone for two front-end projects—one built with Angular and the other with React.',
    technologies: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT for Authentication',
    ],
    githubLink: 'https://github.com/CodyRagsdale/movie-api', // Replace with actual GitHub URL if different
    liveLink: '', // No live link available
    imageUrl: movieapiScreenshot1, // Update when you have the image
    videoUrl: '', // Empty if there's no video
  },
];

export default projectData;
