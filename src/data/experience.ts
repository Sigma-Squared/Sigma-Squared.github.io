export interface Role {
  title: string;
  org: string;
  period: string;
  location: string;
  note?: string;
  href?: string;
}

/** Current first. */
export const roles: Role[] = [
  {
    title: 'Senior Software Engineer',
    org: 'Microsoft',
    period: 'Dec 2021–Present',
    location: 'Redmond, Washington',
    note: 'Designing the future of Power Apps and its integrated Power Fx language.',
    href: 'https://github.com/microsoft/Power-Fx',
  },
  {
    title: 'Software Engineer',
    org: 'Microsoft',
    period: 'Aug 2019–Nov 2021',
    location: 'Redmond, Washington',
    note: 'Power Apps developer in the Business Applications Group.',
  },
  {
    title: 'Software Engineer Intern',
    org: 'Microsoft',
    period: 'Jun 2018–Aug 2018',
    location: 'Redmond, Washington',
    note: 'Developed a brand new feature for Power Apps over the course of three months.',
  },
  {
    title: 'Software Engineer Intern',
    org: 'Intel Corporation',
    period: 'Jul 2016–Aug 2017',
    location: 'San Jose, California',
    note: 'Physical Synthesis division of the Software department at Intel PSG, working on optimization and verification, then the Infrastructure & Build team, working on web development, large systems design, and statistics.',
  },
  {
    title: 'Web Developer',
    org: 'McMaster University',
    period: 'Mar 2016–May 2016',
    location: 'Hamilton, Ontario',
    note: 'Built a set of interactive JavaScript games as a teaching aid, along with a site teaching students in grades 4–12 to hack, modify, and extend them.',
  },
];

export const education = {
  school: 'McMaster University',
  programme: 'Software Engineering & Game Design',
  period: '2014–2019',
  note: "Graduated on the Dean's Honour List, 3.9/4.0.",
};
