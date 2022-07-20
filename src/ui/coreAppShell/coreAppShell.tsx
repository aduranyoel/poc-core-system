import { LayoutComponent, NavComponent, NavMenuItem } from 'poc-ui-components';
import React from 'react';
import { Content, MenuItem } from '../../entities';
import { SystemProvider } from '../../infrastructure/systemProvider';
import { useBloCState } from '../hooks';

export const CoreAppShell: React.FunctionComponent = (): JSX.Element => {

  const menuItems = useBloCState<MenuItem[]>(SystemProvider.provide().MenuService);
  const activeSection = useBloCState<Content | null>(SystemProvider.provide().ContentService);

  return (
    <LayoutComponent>
      <NavComponent>
        {menuItems.map((item: MenuItem) => <NavMenuItem key={item.id} action={item.action} label={item.label}/>)}
      </NavComponent>
      <section>{activeSection ? <activeSection.component/> : null}</section>
    </LayoutComponent>
  );
};
