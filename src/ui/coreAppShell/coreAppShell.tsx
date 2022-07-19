import { LayoutComponent, NavComponent, NavMenuItem } from 'poc-ui-components';
import React from 'react';
import { Content, MenuItem } from '../../domain';
import { ServiceResolver } from '../../infrastructure';
import { useBloCState } from '../hooks';

export const CoreAppShell: React.FunctionComponent = (): JSX.Element => {

  const menuItems = useBloCState<MenuItem[]>(ServiceResolver.resolve().MenuRepository);
  const activeSection = useBloCState<Content | null>(ServiceResolver.resolve().ContentRepository);

  return (
    <LayoutComponent>
      <NavComponent>
        {menuItems.map((item: MenuItem) => <NavMenuItem key={item.id} action={item.action} label={item.label}/>)}
      </NavComponent>
      <section>{activeSection ? <activeSection.component/> : null}</section>
    </LayoutComponent>
  );
};
