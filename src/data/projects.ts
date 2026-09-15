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
    slug: 'nightmare',
    title: 'Nightmare',
    description: 'A game built in Unity and compiled to WebGL, playable in the browser.',
    playHref: '/unityss/index.html',
    gallery: [],
  },
];
