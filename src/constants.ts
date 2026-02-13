import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconXiaohongshu from "@/assets/icons/IconXiaohongshu.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/Ally1212",
    linkTitle: `${SITE.title} 的 GitHub`,
    icon: IconGitHub,
  },
  {
    name: "X",
    href: "https://x.com/LizerBubbles",
    linkTitle: `${SITE.title} 的 X`,
    icon: IconBrandX,
  },
  {
    name: "小红书",
    href: "https://www.xiaohongshu.com/user/profile/6180900a0000000002020305",
    linkTitle: `${SITE.title} 的小红书`,
    icon: IconXiaohongshu,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `分享到 X`,
    icon: IconBrandX,
  },
] as const;
