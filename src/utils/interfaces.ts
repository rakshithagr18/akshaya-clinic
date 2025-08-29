// export interface IBlog {
//   id: number;
//   title: string;
//   description: string;
//   tags: string[];
//   link: string;
//   image: string;
//   date: string;
//   blog_details_banner?: string;
//   content: string;
// }

export interface IBannerProps {
  title: string;
  titleColor?: string;
  tag?: React.ElementType; // instead of keyof JSX.IntrinsicElements
  para?: string;
  img?: string;
  noBG?: boolean;
}

export interface IBlog {
  id: number;
  title: string;
  desc: string; // short description for listing
  link: string;
  image: string; // thumbnail
  btn1: string;
  btn2: string;
  tags: string[];
  bannerImage: string;
  content: string[]; // main intro paragraphs
  subTitle: string;
  paragraphs: string[]; // detailed content paragraphs
  author: {
    name: string;
    image: string;
    description: string;
    social: {
      twitter: string;
      linkedin: string;
    };
  };
}
