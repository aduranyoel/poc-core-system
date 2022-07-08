import { useEffect, useState } from 'react';
import { ContentRepository, MenuRepository } from '../../domain';
import { ContentRepositoryImpl, MenuRepositoryImpl } from '../../infrastructure';

export const useCoreAppShellData = () => {
  const menuRepository: MenuRepository = MenuRepositoryImpl.getInstance();
  const contentRepository: ContentRepository = ContentRepositoryImpl.getInstance();

  const [menuItems, setMenuItems] = useState(menuRepository.items);
  const [activeSection, setActiveSection] = useState(contentRepository.active);

  useEffect(() => { setMenuItems(menuRepository.items); }, [menuRepository.items]);
  useEffect(() => { setActiveSection(contentRepository.active); }, [contentRepository.active]);

  return { menuItems, activeSection };
};
