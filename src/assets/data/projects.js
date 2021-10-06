import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: '',
    desc: '',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: '',
    desc: '',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: '',
    desc: '',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: '',
    desc: '',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: '',
    desc: '',
    img: ProjectImg,
  },
];

export default projects;
