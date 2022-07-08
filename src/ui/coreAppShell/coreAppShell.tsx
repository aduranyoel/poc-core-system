import React from 'react';
import { MenuItem } from '../../domain';
import { useCoreAppShellData } from './useCoreAppShellData';

export const CoreAppShell = () => {
  const { menuItems, activeSection } = useCoreAppShellData();

  return (
    <div className="container">
      <nav>
        <ul>
          {menuItems.map((item: MenuItem) => <li key={item.id} onClick={item.action}>{item.label}</li>)}
        </ul>
      </nav>
      <main>
        <section>{activeSection ? <activeSection.component /> : null}</section>
      </main>
    </div>
  );
};


