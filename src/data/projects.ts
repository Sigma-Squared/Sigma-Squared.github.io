export interface ProjectImage {
  /** Path relative to src/images, used to look up both the asset and its LQIP. */
  path: string;
  alt: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

/**
 * An animated image served straight from public/. Astro's image pipeline drops
 * animation, so these are converted ahead of time and referenced by URL.
 */
export interface ProjectAnimation {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  /** One string per paragraph. Inline markup is limited to anchors and <code>. */
  description: string[];
  /** Set when the project is playable in the browser. */
  playHref?: string;
  links?: ProjectLink[];
  animation?: ProjectAnimation;
  cover?: ProjectImage;
  /** Short label for the placeholder cut shown when there is no cover image. */
  placeholder?: string;
  gallery: ProjectImage[];
}

/** Newest first. */
export const projects: Project[] = [
  {
    slug: 'magicmirror',
    title: 'MagicMirror',
    description: [
      'MagicMirror adds an adventure-friendly recovery mechanic to Minecraft, similar to the <a href="https://terraria.fandom.com/wiki/Magic_Mirrors">Magic Mirror</a> in Terraria. It uses the underutilized recovery compass: right click anywhere and, after a short countdown, you are teleported back to your <code>/sethome</code>, player spawn, or world spawn, whichever is available first, with particle and sound effects along the way.',
      'It is built to need zero configuration, even by players, and to stay survival-focused — the windup stops teleportation from being abused mid-fight, and the plugin checks a player’s home is clear before dropping them into it. Most features can be turned off in <code>config.yml</code>, and the <code>item-name</code> setting can restrict the effect to recovery compasses renamed in an anvil.',
      'It runs on Bukkit, Spigot, and Paper servers across Minecraft 1.21 to 1.21.5, under an MIT licence.',
    ],
    links: [
      { label: 'Modrinth', href: 'https://modrinth.com/plugin/magicmirror' },
      { label: 'Source on GitHub', href: 'https://github.com/Sigma-Squared/MagicMirror' },
    ],
    cover: { path: 'portfolio/magicmirror.jpg', alt: 'MagicMirror in Minecraft' },
    gallery: [{ path: 'portfolio/magicmirror.jpg', alt: 'MagicMirror in Minecraft' }],
  },
  {
    slug: 'miatamoto',
    title: 'miatamoto',
    description: [
      'A Bluetooth audio receiver for a Mazda Miata, built on an ESP32. It pairs as an A2DP sink so a phone can stream audio to the car, with a small display and physical buttons for control. A PlatformIO project on the Arduino framework, targeting a DOIT ESP32 DevKit V1.',
    ],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/Sigma-Squared/miatamoto' }],
    placeholder: 'ESP32',
    gallery: [],
  },
  {
    slug: 'flipdots',
    title: 'FLIPDOTS Clock',
    description: [
      'A clock built from an ESP32 and a 7×7 flipdot display by <a href="https://flipdots.com/en/home/">Alfa-Zeta</a>, synchronising time over WiFi using NTP. The display is driven over RS485 through a MAX485 transceiver, with a buck converter stepping the display’s 24V supply down to 3.3V for the logic.',
      'It is a <a href="https://platformio.org/">PlatformIO</a> project, and includes a FLIPDOTS library I wrote for graphics, fonts, and talking to the display. freeRTOS schedules the time updater and spreads work across the ESP32’s two cores, so the display keeps animating while WiFi and Bluetooth work happens.',
      'WiFi credentials, timezone, and the daylight savings offset are set over Bluetooth on each boot; once configured they are saved to flash and reused, and if nothing connects within ten seconds the device falls back to its last working configuration. The enclosure was designed in Fusion 360, laser cut from 5.33mm plywood, and stained black.',
      'A variant, FLIPDOTS-Weather, runs the same hardware but shows weather information instead of the time.',
    ],
    links: [
      { label: 'Source on GitHub', href: 'https://github.com/Sigma-Squared/FLIPDOTS' },
      {
        label: 'Weather variant',
        href: 'https://github.com/Sigma-Squared/FLIPDOTS-Weather',
      },
    ],
    animation: {
      src: '/media/flipdots-clock.webp',
      alt: 'The flipdot clock animating through a minute change',
      width: 338,
      height: 338,
    },
    cover: { path: 'portfolio/flipdots-clock.png', alt: 'The 7×7 flipdot clock' },
    gallery: [
      { path: 'portfolio/flipdots-breadboard.png', alt: 'Breadboard wiring diagram' },
      { path: 'portfolio/flipdots-enclosure.png', alt: 'Laser-cut plywood enclosure, under construction' },
      { path: 'portfolio/flipdots-setup.png', alt: 'Configuring WiFi and timezone over Bluetooth serial' },
    ],
  },
  {
    slug: 'nightmare',
    title: 'Nightmare',
    description: ['A game built in Unity and compiled to WebGL, playable in the browser.'],
    playHref: '/unityss/index.html',
    placeholder: 'Unity',
    gallery: [],
  },
  {
    slug: 'blockout',
    title: 'Blockout',
    description: [
      '<a href="http://gmc.yoyogames.com/index.php?showtopic=601376">Blockout</a> is an action-puzzle game I made for a “GameMaker Competition” that was held in my school board. It was made in about half a month using only <a href="http://www.yoyogames.com/studio">Game Maker</a> 8.0 Lite.',
    ],
    cover: { path: 'portfolio/blockout-cover-thumbnail.png', alt: 'Blockout' },
    gallery: [
      { path: 'portfolio/blockout-cover.jpg', alt: 'Blockout' },
      { path: 'portfolio/blockout1.jpg', alt: 'Blockout' },
      { path: 'portfolio/blockout2.jpg', alt: 'Blockout' },
    ],
  },
  {
    slug: 'reflex',
    title: 'Reflex',
    description: [
      'Reflex was a game I started making about 5 years ago, at the age of 14. It was an experiment to test my own programming ability and see how far I could go as a one man army. All the art and programming was done by myself, and the development progressed for about a year, ending when I started highschool. The game features state based AI, ragdoll physics, particle systems, and post-processing.',
    ],
    cover: { path: 'portfolio/reflex-thumbnail.png', alt: 'Reflex' },
    gallery: [
      { path: 'portfolio/reflex-cover.jpg', alt: 'Reflex' },
      { path: 'portfolio/reflex1.jpg', alt: 'Reflex' },
      { path: 'portfolio/reflex3.jpg', alt: 'Reflex' },
      { path: 'portfolio/reflex2.jpg', alt: 'Reflex' },
    ],
  },
];
