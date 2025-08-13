import logo from "./AppLogo.png";
import logo_icon from "./logo_icon.svg";
import facebook_icon from "./facebook_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import star_icon from "./star_icon.svg";
import rating_star from "./rating_star.svg";
import sample_img_1 from "./sample_img_1.png";
import sample_img_2 from "./sample_img_2.png";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import step_icon_1 from "./step_icon_1.svg";
import step_icon_2 from "./step_icon_2.svg";
import step_icon_3 from "./step_icon_3.svg";
import email_icon from "./email_icon.svg";
import lock_icon from "./lock_icon.svg";
import cross_icon from "./cross_icon.svg";
import star_group from "./star_group.png";
import credit_star from "./credit_star.svg";
import profile_icon from "./profile_icon.png";
import ritik from "./ritik.jpg";
import vipul from "./vipul.jpg";
import vipin from "./vipin.jpg";
import krishna from "./KrishnaImage.jpg";

export const assets = {
  logo,
  logo_icon,
  facebook_icon,
  instagram_icon,
  twitter_icon,
  star_icon,
  rating_star,
  sample_img_1,
  sample_img_2,
  email_icon,
  lock_icon,
  cross_icon,
  star_group,
  credit_star,
  profile_icon,
  krishna,
};

export const stepsData = [
  {
    title: "Describe Your Vision",
    description:
      "Type a phrase, sentence, or paragraph that describes the image you want to create.",
    icon: step_icon_1,
  },
  {
    title: "Watch the Magic",
    description:
      "Our AI-powered engine will transform your text into a high-quality, unique image in seconds.",
    icon: step_icon_2,
  },
  {
    title: "Download & Share",
    description:
      "Instantly download your creation or share it with the world directly from our platform.",
    icon: step_icon_3,
  },
];

export const testimonialsData = [
  {
    image: ritik,
    name: "Ritik Kumar",
    role: "Full-stack Developer",
    stars: 5,
    text: `I’ve been using Promptify for the past few months, mainly for generating AI art, and it has been incredibly smooth and beginner-friendly, making my creative process much easier.`,
  },
  {
    image: vipul,
    name: "Vipul Sharma",
    role: "Front-end Developer",
    stars: 5,
    text: `Promptify has helped me design unique images for my work, and the results are always impressive. It’s simple to use, fast, and saves me a lot of time while keeping quality high.`,
  },
  {
    image: vipin,
    name: "Vipin Choudhary",
    role: " Graphic Designer",
    stars: 5,
    text: `I use Promptify almost every day for my projects, and it never disappoints. The interface is clean, the results are accurate, and it’s one of the best AI tools I’ve tried.`,
  },
];

export const plans = [
  {
    id: "Basic",
    price: 10,
    credits: 100,
    desc: "Best for personal use.",
  },
  {
    id: "Advanced",
    price: 50,
    credits: 500,
    desc: "Best for business use.",
  },
  {
    id: "Business",
    price: 100,
    credits: 5000,
    desc: "Best for enterprise use.",
  },
];
