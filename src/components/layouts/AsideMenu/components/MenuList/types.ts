export type MenuItem = {
  iconSrc: string;
  label: string;
};

export type MenuListProps = {
  items: MenuItem[];
  isOpen: boolean;
  activeTab: string;
  onTabChange: (label: string) => void;
};
