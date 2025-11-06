'use client';

import React from 'react';
import { StaggeredMenu } from './StaggeredMenu';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const menuItems = [
    {
      label: 'Home',
      link: '#home',
      ariaLabel: 'Navigate to Home section'
    },
    {
      label: 'Work',
      link: '#work',
      ariaLabel: 'Navigate to Work section'
    },
    {
      label: 'About',
      link: '#about',
      ariaLabel: 'Navigate to About section'
    }
  ];

  const handleItemClick = (item: { label: string; link: string }) => {
    const sectionId = item.link.replace('#', '');
    scrollToSection(sectionId);
  };

  return (
    <StaggeredMenu
      position="right"
      colors={['#f7f7f7', '#1800f4']}
      items={menuItems.map(item => ({
        ...item,
        link: '#',
        onClick: () => handleItemClick(item)
      })) as any}
      displaySocials={false}
      displayItemNumbering={false}
      logoUrl="/Kurt_Logo.svg"
      menuButtonColor="#2e2e2e"
      openMenuButtonColor="#2e2e2e"
      accentColor="#1800f4"
      changeMenuColorOnOpen={false}
      isFixed={true}
      className=""
      onMenuOpen={() => {}}
      onMenuClose={() => {
        // Optional: Add any cleanup or state updates when menu closes
      }}
    />
  );
};

export default Navbar;
