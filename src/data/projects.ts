export interface ProjectImage {
  /** Path relative to src/images, used to look up both the asset and its LQIP. */
  path: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  /**
   * Verbatim copy from the original site. Inline markup is limited to the
   * anchors that were already present there.
   */
  description: string;
  /** Set when the project is playable in the browser. */
  playHref?: string;
  cover?: ProjectImage;
  gallery: ProjectImage[];
}

export const projects: Project[] = [
  {
    slug: 'thebackgroundfactory',
    title: 'TheBackgroundFactory',
    description:
      '<a href="http://thebackgroundfactory.github.io/thebgfactory/">TheBackgroundFactory</a> is a website made by myself and two of my colleagues as a project for Local Hack Day 2015. It showcases several dynamic javascript backgrounds that we created, for other web developers to embed into their sites. All the HTML/CSS, hosting, etc. was made by me as well as one of the backgrounds.',
    cover: { path: 'portfolio/bgfactory-thumbnail.png', alt: 'TheBackgroundFactory' },
    gallery: [{ path: 'portfolio/thebgfactory.jpg', alt: 'TheBackgroundFactory' }],
  },
  {
    slug: 'failsafe',
    title: 'FailSafe',
    description:
      "FailSafe was a project myself and two friends created for McMaster's Engineering Challenge. I created the front-end app, which used multithreading and sockets to communicate via the network to a server in a safe. This allowed you to control and view the status of your safe remotely. This project was started and completed in 12 hours, and won 2nd place.",
    cover: { path: 'portfolio/failsafe-thumbnail.png', alt: 'FailSafe' },
    gallery: [{ path: 'portfolio/failsafe-app-resized.jpg', alt: 'FailSafe' }],
  },
  {
    slug: 'reflex',
    title: 'Reflex',
    description:
      'Reflex was a game I started making about 5 years ago, at the age of 14. It was an experiment to test my own programming ability and see how far I could go as a one man army. All the art and programming was done by myself, and the development progressed for about a year, ending when I started highschool. The game features state based AI, ragdoll physics, particle systems, and post-processing.',
    cover: { path: 'portfolio/reflex-thumbnail.png', alt: 'Reflex' },
    gallery: [
      { path: 'portfolio/reflex-cover.jpg', alt: 'Reflex' },
      { path: 'portfolio/reflex1.jpg', alt: 'Reflex' },
      { path: 'portfolio/reflex3.jpg', alt: 'Reflex' },
      { path: 'portfolio/reflex2.jpg', alt: 'Reflex' },
    ],
  },
  {
    slug: 'blockout',
    title: 'Blockout',
    description:
      '<a href="http://gmc.yoyogames.com/index.php?showtopic=601376">Blockout</a> is an action-puzzle game I made for a &ldquo;GameMaker Competition&rdquo; that was held in my school board. It was made in about half a month using only <a href="http://www.yoyogames.com/studio">Game Maker</a> 8.0 Lite.',
    cover: { path: 'portfolio/blockout-cover-thumbnail.png', alt: 'Blockout' },
    gallery: [
      { path: 'portfolio/blockout-cover.jpg', alt: 'Blockout' },
      { path: 'portfolio/blockout1.jpg', alt: 'Blockout' },
      { path: 'portfolio/blockout2.jpg', alt: 'Blockout' },
    ],
  },
  {
    slug: 'inspiredby-tech',
    title: 'InspiredBy.Tech',
    description:
      '<a href="http://www.inspiredby.tech">InspiredBy.Tech</a> is a website I created with two teammates for DeltaHacks 2016. The website was created to inspire young children to go into engineering and to be excited by technology, by featuring a set of interactive javascript games that provide entertainment as well as education. It won the ThinkEngineering Sponsor Challenge, as well as the best .TECH domain. &lt;<a href="http://devpost.com/software/inspiredby">Devpost</a>&gt;',
    cover: { path: 'portfolio/inspiredby-thumbnail.png', alt: 'InspiredBy.Tech' },
    gallery: [{ path: 'portfolio/inspiredby.png', alt: 'InspiredBy.Tech' }],
  },
  {
    slug: 'nightmare',
    title: 'Nightmare',
    description: 'A game built in Unity and compiled to WebGL, playable in the browser.',
    playHref: '/unityss/index.html',
    gallery: [],
  },
];
