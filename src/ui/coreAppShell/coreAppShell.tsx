import React from 'react';
import { Content, MenuItem } from '../../domain';
import { ServiceResolver } from '../../infrastructure';
import { useBloCState } from '../hooks';
import { LayoutComponent } from '../layout/layoutComponent';
import { NavComponent } from '../nav/navComponent';

export const CoreAppShell: React.FunctionComponent = (): JSX.Element => {

  const menuItems = useBloCState<MenuItem[]>(ServiceResolver.resolve().MenuRepository);
  const activeSection = useBloCState<Content | null>(ServiceResolver.resolve().ContentRepository);

  return (
    <LayoutComponent>
      <NavComponent menuItems={menuItems}/>
      <section>{activeSection ? <activeSection.component/> : null}</section>
    </LayoutComponent>
  );
};
