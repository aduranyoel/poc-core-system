import React from 'react';
import { Content, MenuItem } from '../../domain';
import { ContentRepositoryImpl, MenuRepositoryImpl } from '../../infrastructure';
import { useBloCState } from '../hooks';
import { LayoutComponent } from '../layout/layoutComponent';
import { NavComponent } from '../nav/navComponent';

export const CoreAppShell = (): JSX.Element => {

  const menuItems = useBloCState<MenuItem[]>(MenuRepositoryImpl.getInstance());
  const activeSection = useBloCState<Content | null>(ContentRepositoryImpl.getInstance());

  return (
    <LayoutComponent>
      <NavComponent menuItems={menuItems}/>
      <section>{activeSection ? <activeSection.component/> : null}</section>
    </LayoutComponent>
  );
};
