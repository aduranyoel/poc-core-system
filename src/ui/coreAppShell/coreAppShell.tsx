import React from 'react';
import { MenuItem } from '../../domain';
import { ContentRepositoryImpl, MenuRepositoryImpl } from '../../infrastructure';
import { useBloCState } from '../hooks';

export const CoreAppShell = () => {

  const menuItems = useBloCState(MenuRepositoryImpl.getInstance());
  const activeSection = useBloCState(ContentRepositoryImpl.getInstance());

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
