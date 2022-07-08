import React from 'react';
import { MenuItem } from '../../domain';
import { useCoreAppShellData } from './useCoreAppShellData';

export const CoreAppShell = () => {
  const { menuItems } = useCoreAppShellData();

  return (
    <nav>
      <ul>
        {menuItems.map((item: MenuItem) => <li key={item.id} onClick={item.action}>{item.label}</li>)}
      </ul>
    </nav>
  );
};


