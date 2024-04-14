export interface NavItem {
  title: string;
  href: string;
  isExternal: boolean;
}

export interface NavItemFooter {
  title: string;
  items: NavItem[];

  socials: {
    title: string;
    icon: React.ReactNode;
    href: string;
  }[];
}
