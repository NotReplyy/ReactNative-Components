import { MenuItem } from '../interfaces/menuInterfaces';

const menuItems:MenuItem[] = [
    {
      name: 'Animation 101',
      icon: 'view-in-ar',
      component: 'Animation101',
    },
    {
      name: 'Animation 102',
      icon: 'animation',
      component: 'Animation102',
    },
    {
      name: 'Switch',
      icon: 'toggle-on',
      component: 'Switch',
    },
    {
      name: 'Alert',
      icon: 'error-outline',
      component: 'Alert',
    },
    {
      name: 'TextInput',
      icon: 'description',
      component: 'TextInput',
    },
    {
      name: 'Pull to refresh',
      icon: 'refresh',
      component: 'PullToRefresh',
    },
    {
      name: 'Section List',
      icon: 'list',
      component: 'SectionList',
    },
    {
      name: 'Modal',
      icon: 'add-to-queue',
      component: 'Modal',
    },
    {
      name: 'Infinite Scroll',
      icon: 'file-download',
      component: 'InfiniteScroll',
    },
    {
      name: 'Slides',
      icon: 'slideshow',
      component: 'Slides',
    },
    {
      name: 'Change Theme',
      icon: 'palette',
      component: 'Theme',
    },
  ];

export default menuItems;
