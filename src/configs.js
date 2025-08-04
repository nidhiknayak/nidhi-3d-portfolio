import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'Nidhi Nayak',
  subTitle: 'Dev portfolio.',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: 'Nidhi Nayak portfolio.',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'Who Am I?',
      infos: [
  "* I’m a Computer Science graduate with a strong interest in full-stack development, AI, and automation. I love building smart, useful tools that solve real-world problems.",
  "* My coding journey began in high school, sparked by curiosity about how software worked—and since then, I've built everything from gesture-controlled apps to real-time platforms.",
  "* I’ve interned across multiple tech domains—from AI research to web hosting—and contributed to live production apps and AI tools during college.",
  "* I bring a solid mix of backend and frontend skills, and I’m constantly upskilling—whether it’s through hands-on projects, internships, or certifications in GenAI, cloud, and NLP.",
]

    },
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience',
      imageList: EXPERIENCE,
      footer: 'You can click the icons to find out more.',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Here is my CV!',
      footer: 'Click the icon above to view!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL:
              'https://drive.google.com/file/d/1dXflwIEaxkiVeU3xIccDHwvy_pVjWW-0/view?usp=sharing',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Personal Projects'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Personal Projects',
      footer: '(And also this web-app)',
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'websites-preview/trading bot.png',
            websiteURL: 'https://github.com/nidhiknayak/binance-trading-bot',
          },
          {
            url: 'websites-preview/document.png',
            websiteURL: 'https://github.com/nidhiknayak/Kaleido-document-workflow-tool',
          },
          {
            url: 'websites-preview/meetspace.png',
            websiteURL:
              'https://github.com/nidhiknayak/MeetSpace',
          },
          {
            url: 'websites-preview/saas.png',
            websiteURL: 'https://github.com/nidhiknayak/optima',
          },
          {
            url: 'websites-preview/digit.png',
            websiteURL: 'https://github.com/nidhiknayak/Handwritten-Digit-Recognition',
          },
          {
            url: 'websites-preview/code.png',
            websiteURL: 'https://github.com/nidhiknayak/Online-Code-Editor',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find me in:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
         
          {
    url: 'icons/linkedin.png',
    websiteURL: 'https://in.linkedin.com/in/nidhinayak-8570842a1',
  },
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/nidhiknayak',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:nidhinayak1877@gmail.com',
          },
        ],
      },
    },
  ],
};

export default configs;
