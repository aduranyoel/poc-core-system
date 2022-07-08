import { useState, useEffect } from 'react';
import { MenuRepositoryImpl } from '../../infrastructure';

export const useCoreAppShellData = () => {
  const menuRepository = MenuRepositoryImpl.getInstance();
  const [menuItems, setMenuItems] = useState(menuRepository.items);

  useEffect(() => {
    setMenuItems(menuRepository.items);
  }, [menuRepository.items]);

  return { menuItems };
};
