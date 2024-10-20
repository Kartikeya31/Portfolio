/* eslint-disable import/extensions */

// Services Img Imports
import Web from '../assets/images/Services/Web.png';
import Mobile from '../assets/images/Services/Mobile.png';
import UIUX from '../assets/images/Services/Design.png';

// Portfolio Img Imports
import Recruiting from '../assets/images/Portfolio/Recruiting.png';
import Stream from '../assets/images/Portfolio/Stream.png';
import Freelance from '../assets/images/Portfolio/Freelance.png';
import Aura from '../assets/images/Portfolio/Aura.png';
import Surtido from '../assets/images/Portfolio/Surtido.png';
import ManagementApp from '../assets/images/Portfolio/ManagementApp.png';

// Advantages
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

// TeamMembers
import CEO from '../assets/images/TeamMembers/CEO.jpg';
import HRD from '../assets/images/TeamMembers/HRD.jpeg';
import Finance from '../assets/images/TeamMembers/Finance.jpg';
import ProjectManager from '../assets/images/TeamMembers/Project-manager.jpg';
import Frontend1 from '../assets/images/TeamMembers/Frontend1.jpg';
import WNU from '../assets/images/TeamMembers/WeNeedU.jpg';
import Backend2 from '../assets/images/TeamMembers/Backend2.webp';
import Customercare from '../assets/images/TeamMembers/customercare.jpg';
import Dataanalyser from '../assets/images/TeamMembers/data_analyser.jpg';
import UIUX1 from '../assets/images/TeamMembers/UIUX1.jpeg';
import UIUX2 from '../assets/images/TeamMembers/UIUX2.jpeg';

export const Services = [
  {
    title: 'Web Development',
    imageUrl: Web,
    animation: 'left',
  },
  {
    title: 'Mobile Development',
    imageUrl: Mobile,
    animation: 'up',
  },
  {
    title: 'UI/UX Design',
    imageUrl: UIUX,
    animation: 'right',
  },
];

export const Portfolios = [
  {
    
    title: 'Recruiting App',
    imageUrl: Recruiting,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
  },
  {
    
    title: 'Stream+',
    imageUrl: Stream,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
  },
  {
    
    title: 'Freelance',
    imageUrl: Freelance,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
  },
  {
    
    title: 'Aura',
    imageUrl: Aura,
    type: 'Website',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
  },
  {
    
    title: 'Surtido Rico',
    imageUrl: Surtido,
    type: 'Website',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
  },
  {
    
    title: 'Courses Management',
    imageUrl: ManagementApp,
    type: 'Website',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
  },
];

export const Advantages = [
  [{
    title: 'Communicative',
    description: 'We communicate our project ideas and progress to make it clear.',
    imageUrl: Communicative,
  },
  {
    title: 'Management',
    description: 'We manage our project properly to make our project done well.',
    imageUrl: Management,
  }],
  [{
    title: 'Collaborative​',
    description: 'Our team are very collaborative to make our project done well.',
    imageUrl: Collaborative,
  },
  {
    title: 'Favorite',
    description: "We've did so many project and all of our client love it.",
    imageUrl: Favorite,
  }],
];

export const TeamMembers = [
  {
    name: 'Its You',
    position: 'CEO',
    imageUrl: CEO,
  },
  {
    name: 'Manav Bhai',
    position: 'HRD',
    imageUrl: HRD,
  },
  {
    name: 'Vijay Mallya',
    position: 'Finance',
    imageUrl: Finance,
  },
  {
    name: 'Mere Sath Bolo',
    position: 'Project Manager',
    imageUrl: ProjectManager,
  },
  {
    name: 'Bishnoi',
    position: 'Front-end Developer',
    imageUrl: Frontend1,
  },
  {
    name: 'Take this sit',
    position: 'Front-end Developer',
    imageUrl: WNU,
  },
  {
    name: 'Its yours',
    position: 'Back-end Developer',
    imageUrl: WNU,
  },
  {
    name: 'Sir. Amit Shah',
    position: 'Back-end Developer',
    imageUrl: Backend2,
  },
  {
    name: 'Carry Minati',
    position: 'Customer care',
    imageUrl: Customercare,
  },
  {
    name: 'Dhruv Rathee',
    position: 'Data analyser',
    imageUrl: Dataanalyser,
  },
  {
    name: 'Akira Nakai ',
    position: 'UI/UX Designer',
    imageUrl: UIUX2,
  },
  {
    name: 'Majnu Bhai',
    position: 'UI/UX Designer',
    imageUrl: UIUX1,
  },
];
