import { useMemo } from 'react';
import { ContentRepository, MenuRepository } from '../../domain';
import { ContentRepositoryImpl, MenuRepositoryImpl } from '../../infrastructure';

export const useCoreAppShellData = () => {
  const menuRepository: MenuRepository = MenuRepositoryImpl.getInstance();
  const contentRepository: ContentRepository = ContentRepositoryImpl.getInstance();

  const menuItems = useMemo(() => menuRepository.items, [menuRepository.items]);
  const activeSection = useMemo(() => contentRepository.active, [contentRepository.active]);

  return { menuItems, activeSection };
};
