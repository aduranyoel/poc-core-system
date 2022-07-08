import { observer } from 'mobx-react';
import React from 'react';
import { MenuItem } from '../../domain';
import { MenuRepositoryImpl } from '../../infrastructure';

const CoreAppShellComponent = () => {
  const menuItems = MenuRepositoryImpl.getInstance().getAll();

  return (
    <nav>
      <ul>
        {menuItems.map((item: MenuItem) => <li key={item.id} onClick={item.action}>{item.label}</li>)}
      </ul>
    </nav>
  );
};

export const CoreAppShell = observer(CoreAppShellComponent);

