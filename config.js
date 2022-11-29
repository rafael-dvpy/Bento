// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Rafael",
  openInNewTab: true,
  twelveHourFormat: false,
  title: "Bento",

  // Theme
  theme: "latte-mocha",
  imageBackground: false,
  imageUrl: "./assets/background.jpg", // Set custom background image URL. If the page is served insecurely, you may have issues loading images from pages over https.

  // Greetings
  greetingMorning: "Good morning!",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Go to Sleep!",

  // Layout
  bentoLayout: "bento", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "aeb88f0248aafff809a3b3876482d28a", // Write here your API Key
  weatherIcons: "OneDark", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "37.775",
  defaultLongitude: "-122.419",

  // Autochange
  autoChangeTheme: true,

  // Autochange by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",

  // Autochange automatically based on location (sunrise/sunset). Openweathermap API key required.
  changeThemeByLocation: false,

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1",
      name: "Github",
      icon: "github",
      link: "https://github.com/",
    },
    {
      id: "2",
      name: "Mail",
      icon: "mail",
      link: "https://outlook.com",
    },
    {
      id: "3",
      name: "Todoist",
      icon: "trello",
      link: "https://trello.com",
    },
    {
      id: "4",
      name: "Calendar",
      icon: "calendar",
      link: "https://outlook.live.com/calendar",
    },
    {
      id: "5",
      name: "Reddit",
      icon: "glasses",
      link: "https://reddit.com",
    },
    {
      id: "6",
      name: "Odysee",
      icon: "youtube",
      link: "https://youtube.com/",
    },
  ],

  secondButtonsContainer: [
    {
      id: "1",
      name: "Music",
      icon: "headphones",
      link: "https://open.spotify.com",
    },
    {
      id: "2",
      name: "twitter",
      icon: "twitter",
      link: "https://twitter.com/",
    },
    {
      id: "3",
      name: "bot",
      icon: "bot",
      link: "https://discord.com/app",
    },
    {
      id: "4",
      name: "Amazon",
      icon: "shopping-bag",
      link: "https://amazon.com/",
    },
    {
      id: "5",
      name: "Hashnode",
      icon: "pen-tool",
      link: "https://hashnode.com/",
    },
    {
      id: "6",
      name: "Figma",
      icon: "figma",
      link: "https://figma.com/",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: "music",
      id: "1",
      links: [
        {
          name: "Inspirational",
          link: "https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl",
        },
        {
          name: "Classic",
          link: "https://www.youtube.com/watch?v=-gDinVAmtA0&list=RD-gDinVAmtA0&start_radio=1&ab_channel=WondersOfClassicalMusic",
        },
        {
          name: "Oldies",
          link: "https://www.youtube.com/watch?v=BDToc5jPR88&list=PLgIPE05YdY3O7JGVtv-rODZ5gYMdaN7CX&ab_channel=celinamonteiro",
        },
        {
          name: "Rock",
          link: "https://www.youtube.com/watch?v=1w7OgIMMRc4&list=PLGBuKfnErZlDbjq8T1TA4mHjIaLf77iBO&ab_channel=GunsNRosesVEVO",
        },
      ],
    },
    {
      icon: "coffee",
      id: "2",
      links: [
        {
          name: "Linkedin",
          link: "https://www.linkedin.com",
        },
        {
          name: "Dribbble",
          link: "https://www.dribbble.com",
        },
        {
          name: "Trello",
          link: "https://www.trello.com",
        },
        {
          name: "Slack",
          link: "https://www.slack.com",
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: "binary",
      id: "1",
      links: [
        {
          name: "Spotify",
          link: "https://www.spotify.com",
        },
        {
          name: "Reddit",
          link: "https://www.reddit.com",
        },
        {
          name: "Hashnode",
          link: "https://www.hashnode.com",
        },
        {
          name: "Pocket",
          link: "https://www.pocket.com",
        },
      ],
    },
    {
      icon: "github",
      id: "2",
      links: [
        {
          name: "Front",
          link: "https://www.reddit.com/r/Frontend/",
        },
        {
          name: "Rust",
          link: "https://www.reddit.com/r/rust/",
        },
        {
          name: "Go",
          link: "https://www.reddit.com/r/golang/",
        },
        {
          name: "Repos",
          link: "https://github.com/migueravila",
        },
      ],
    },
  ],
};
