import reviewer1Photo from "../../images/reviewer_1_photo.png";
import reviewer2Photo from "../../images/reviewer_2_photo.png";
import reviewer3Photo from "../../images/reviewer_3_photo.png";
import starLogo from "../../images/star.svg";

export const reviews = [
  {
    id: 1,
    img: reviewer1Photo,
    reviewersName: "Viezh Robert",
    reviewresLocation: "Warsaw, Poland",
    rate: 4.5,
    star: starLogo,
    reviewText: `“Wow... I am very happy to use this VPN, it turned out to be more
       than my expectations and so far there have been no problems. LaslesVPN always the best.”`,
  },
  {
    id: 2,
    img: reviewer2Photo,
    reviewersName: "Yessica Christy",
    reviewresLocation: "Shanxi, China",
    rate: 4.5,
    star: starLogo,
    reviewText: `“I like it because I like to travel far and still can connect with high speed.”`,
  },
  {
    id: 3,
    img: reviewer3Photo,
    reviewersName: "Kim Young Jou",
    reviewresLocation: "Seoul, South Korea",
    rate: 4.5,
    star: starLogo,
    reviewText: `“This is very unusual for my business that currently requires a virtual private network that has high security.”`,
  },
];
