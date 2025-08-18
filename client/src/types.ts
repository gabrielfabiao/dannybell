export interface LinkProps {
    id: number;
    text: string;
    href: string;
    isExternal: boolean;
}

export interface ImageProps {
    id: number;
    documentId: string;
    url: string;
    alternativeText: string;
}

export interface LogoProps {
    logoText: string;
    image: ImageProps;
    url: string;
    alternativeText: string;
}

export interface menuItemProps {
    title: string;
    note: string;
}

export interface navbarItemProps {
    title: string;
    href: string;
    isExternal: boolean;
}

export interface carouselProps {
    images: ImageProps[],
    width: string,
    height: string,
}

export interface pastEventsProps {
    id: number;
    title: string;
    images: ImageProps[];
    info: string;
    description: string;
    date: string
}

export interface futureEventsProps {
  id: number;
  title: string;
  description: string;
  date: string;
}

export interface menuInfoProps {
    id: number;
    info: string;
    icon: ImageProps;
}

export interface FooterNavigationProps {
  id: number;
  title: string;
  footerLink: LinkProps[];
}

export interface FooterInfoProps {
  id: number;
  address?: string;
  contact?: string;
  email?: string;
  logo: LogoProps;
}

export interface LogoProps {
  id: number;
  image: ImageProps;
}

export interface SocialLinkProps {
  id: number;
  platform?: string;
  url: string;
  logo: ImageProps;
}


type ComponentType = "blocks.hero-section" | "blocks.header" | "blocks.about-us" | "blocks.info-block" | "blocks.events-section" | "blocks.menu-info-section" | "blocks.footer"

interface Base<
  T extends ComponentType,
  D extends object = Record<string, unknown>
> {
  id: number;
  __component: T;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  data?: D;
}


export type Block = HeroSectionProps | HeaderProps | AboutUsProps | InfoBlockProps | EventsSectionProps | MenuInfoSectionProps | FooterProps;

export interface HeroSectionProps extends Base<"blocks.hero-section"> {
    theme: "brick" | "white";
    heading: string;
    image: ImageProps;
    cta?: LinkProps;
    logo?: LogoProps;
    author?: string;
    darken?: boolean;
    menu?: menuItemProps[];
    date?: string;
    description?: string;
    price: number;
}

export interface HeaderProps extends Base<"blocks.header"> {
    logo: LogoProps;
    navbarLink: navbarItemProps[];
}

export interface AboutUsProps extends Base<"blocks.about-us"> {
    title: string;
    description: string;
    image: ImageProps[];
    subtitle: string;
}

export interface InfoBlockProps extends Base<"blocks.info-block"> {
    reversed?: boolean;
    image?: ImageProps;
    content?: string;
    cta?: LinkProps;
    heading?: string;
}

export interface EventsSectionProps extends Base<"blocks.events-section"> {
    pastEvents: pastEventsProps[];
    futureEvent: futureEventsProps[];
    titlePast: string;
    titleFuture: string;
}

export interface MenuInfoSectionProps extends Base<"blocks.menu-info-section"> {
    title: string;
    subtitle: string;
    MenuInfo: menuInfoProps[];
}

export interface FooterProps extends Base<"blocks.footer"> {
  footerNavigation?: FooterNavigationProps  ;
  footerInfo?: FooterInfoProps;
  socials?: SocialLinkProps[];
  frase: string;
  follow: string;
}