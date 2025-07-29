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

type ComponentType = "block.hero-section" | "block.info-block" | "block.book-now"

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

export type Block = HeroSectionProps | InfoBlockProps | BookNowProps;

export interface HeroSectionProps extends Base<"block.hero-section"> {
    theme: "brick" | "white";
    heading: string;
    image: ImageProps;
    cta?: LinkProps;
    logo?: LogoProps;
    author?: string;
    darken?: boolean;
    Menu?: menuItemProps[];
    date?: string;
    description?: string;
}

export interface InfoBlockProps extends Base<"block.info-block"> {
    theme: "brick" | "white";
    reversed?: boolean;
    heading: string;
    content: string;
    image: ImageProps;
    cta?: LinkProps;
}

export interface BookNowProps extends Base<"block.book-now"> {
    title: string;
    description: string;
}
