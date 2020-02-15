module.exports = {
  siteTitle: 'Dritan Harizaj | Software Engineer',
  siteDescription:
    'Dritan Harizaj is a software engineer based in Ottawa, Canada who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications.',
  siteKeywords:
    'Dritan Harizaj, Harizaj, Dritan, dritani, software engineer, front-end engineer, web developer, mobile developer, ios developer, javascript, mcgill',
  siteUrl: 'https://dritan.me',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Dritan Harizaj',
  location: 'Ottawa, Canada',
  email: 'dritan.work@gmail.com',
  github: 'https://github.com/dritani',
  twitterHandle: '@dritani',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/dritani',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/dritani',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/dritani',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dritani',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/dritani',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
