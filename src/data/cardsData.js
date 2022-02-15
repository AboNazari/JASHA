import { ReactComponent as Like } from "../icons/like.svg";
import { ReactComponent as TV } from "../icons/tv.svg";
import { ReactComponent as Plus } from "../icons/plus.svg";
import { ReactComponent as Team } from "../icons/team.svg";

const cardList = [
  {
    id: 1,
    icon: <Team width="40px" height="40px" />,
    title: "A Movement not just an App",
    text: "Towards sustainable and a better world for everyone, where the knowledge will be free and open source.",
  },
  {
    id: 2,
    icon: <TV width="40px" height="40px" />,
    title: "Nothing fake, Real Life Social Media",
    text: "Stories you share will come from real life, no filter, no pulish, no edite. Reality is beautiful.",
  },
  {
    id: 3,
    icon: <Like width="40px" height="40px" />,
    title: "Dont feel bad being online",
    text: "Your time is the most valuebale resource of humanity. It should be used to create something better for future generations.",
  },
  {
    id: 4,
    icon: <Plus width="40px" height="40px" />,
    title: "You are bringing Change by joining us",
    text: "We are you and toghether we can empower thousands of real life heros who fights for environemnt, health and life.",
  },
];

export default cardList;
