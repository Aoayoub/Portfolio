const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Aoayoub.github.io/portfolio',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Alami Ouazzani Ayoub',
  role: 'Back & Front End Engineer',
  description:
    'Je suis un étudiant en 4e année cycle d’ingénieur en informatique',
  social: {
    linkedin: 'https://www.linkedin.com/in/alami-ouazzani-ayoub-066185204/',
    github: 'https://github.com/Aoayoub',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  
  {
    name: 'Project 1',
    description:
      'i realise API symfony CRUD',
    stack: ['symfony'],
    sourceCode: 'https://github.com/Aoayoub',
    livePreview: 'https://github.com/Aoayoub',
  },
  {
    name: 'Project 2',
    description:
      'i realise a mobile application',
    stack: ['JAVA', 'xml', 'Android'],
    sourceCode: 'https://github.com/Aoayoub/socialmedia.git',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'C#',
  'Cloud-Computing',
  'JAVA',
  'Git',
  'Powershell',
  'Asp.net core',

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'alamiouazzaniayoub@gmail.com',
}

export { header, about, projects, skills, contact }
