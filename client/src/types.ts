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
    images: ImageProps[]
}

type ComponentType = "blocks.hero-section" | "blocks.header" | "blocks.about-us"

interface Base<
    T extends ComponentType,
    D extends object  = Record<string, unknown>
> {
    id: number;
    __component?: T;
    documentId?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    data?: D;
}

export type Block = HeroSectionProps | HeaderProps | AboutUsProps;

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
