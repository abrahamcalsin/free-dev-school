import { BsTwitch, BsYoutube } from "react-icons/bs";

export interface SocialMediaIconProps {
  type: string;
}

export function SocialMediaIcon(props: SocialMediaIconProps) {
  const { type } = props;

  switch (type) {
    case "youtube": {
      return <BsYoutube color="#C53030" size={18} />;
    }

    case "twitch": {
      return <BsTwitch color="#8b43f7" size={18} />;
    }

    default: {
      console.error(new Error(`The ${type} social media is not supported`));
    }
  }

  return null;
}
