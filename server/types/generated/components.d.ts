import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_aboutuses';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksEventsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_events_sections';
  info: {
    displayName: 'Events Section';
  };
  attributes: {
    futureEvent: Schema.Attribute.Component<'elements.future-events', true>;
    pastEvents: Schema.Attribute.Component<'elements.past-event', true>;
    titleFuture: Schema.Attribute.String;
    titlePast: Schema.Attribute.String;
  };
}

export interface BlocksFooter extends Struct.ComponentSchema {
  collectionName: 'components_blocks_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    follow: Schema.Attribute.String;
    footerInfo: Schema.Attribute.Component<'elements.footer-info', false>;
    footerNavigation: Schema.Attribute.Component<
      'elements.footer-navigation',
      false
    >;
    frase: Schema.Attribute.Text;
    socials: Schema.Attribute.Component<'elements.socials', true>;
  };
}

export interface BlocksHeader extends Struct.ComponentSchema {
  collectionName: 'components_blocks_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navbarLink: Schema.Attribute.Component<'elements.navbar-item', true>;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    menu: Schema.Attribute.Component<'elements.menu-item', true>;
    price: Schema.Attribute.Decimal;
    subheading: Schema.Attribute.Text;
    theme: Schema.Attribute.Enumeration<['brick', 'white']>;
  };
}

export interface BlocksInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_blocks';
  info: {
    displayName: 'Info Block';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    cta: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    theme: Schema.Attribute.Enumeration<['brick', 'white']>;
  };
}

export interface BlocksMenuInfoSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_menu_info_sections';
  info: {
    displayName: 'Menu Info Section';
  };
  attributes: {
    MenuInfo: Schema.Attribute.Component<'elements.menu-info', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsFooterInfo extends Struct.ComponentSchema {
  collectionName: 'components_elements_footer_infos';
  info: {
    displayName: 'footerInfo';
  };
  attributes: {
    address: Schema.Attribute.Text;
    contact: Schema.Attribute.String;
    email: Schema.Attribute.String;
    logo: Schema.Attribute.Component<'elements.logo', false>;
  };
}

export interface ElementsFooterNavigation extends Struct.ComponentSchema {
  collectionName: 'components_elements_footer_navigations';
  info: {
    displayName: 'footerNavigation';
  };
  attributes: {
    footerLink: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsFutureEvents extends Struct.ComponentSchema {
  collectionName: 'components_elements_future_events';
  info: {
    displayName: 'Future Events';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logo: Schema.Attribute.String;
  };
}

export interface ElementsMenuInfo extends Struct.ComponentSchema {
  collectionName: 'components_elements_menu_infos';
  info: {
    displayName: 'MenuInfo';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    info: Schema.Attribute.Text;
  };
}

export interface ElementsMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_menu_items';
  info: {
    displayName: 'menuItem';
  };
  attributes: {
    note: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsNavbarItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_navbar_items';
  info: {
    displayName: 'navbarItem';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface ElementsPastEvent extends Struct.ComponentSchema {
  collectionName: 'components_elements_past_events';
  info: {
    displayName: 'Past Event';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    info: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsSocials extends Struct.ComponentSchema {
  collectionName: 'components_elements_socials';
  info: {
    displayName: 'socials';
  };
  attributes: {
    href: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.about-us': BlocksAboutUs;
      'blocks.events-section': BlocksEventsSection;
      'blocks.footer': BlocksFooter;
      'blocks.header': BlocksHeader;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.info-block': BlocksInfoBlock;
      'blocks.menu-info-section': BlocksMenuInfoSection;
      'elements.footer-info': ElementsFooterInfo;
      'elements.footer-navigation': ElementsFooterNavigation;
      'elements.future-events': ElementsFutureEvents;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.menu-info': ElementsMenuInfo;
      'elements.menu-item': ElementsMenuItem;
      'elements.navbar-item': ElementsNavbarItem;
      'elements.past-event': ElementsPastEvent;
      'elements.socials': ElementsSocials;
    }
  }
}
