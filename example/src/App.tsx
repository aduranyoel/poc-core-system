import React from 'react'

import { CoreAppShell, MenuItem, MenuRepositoryImpl, ContentRepositoryImpl, Content, RegisterMenu } from 'poc-core-system';
const TestContent = () => <p>TEST CONTENT</p>

const App = () => {
  const registerMenu = new RegisterMenu(MenuRepositoryImpl.getInstance());
  registerMenu.invoke(new MenuItem('menu1', 'Item test'));
  const contentRepository = ContentRepositoryImpl.getInstance();
  const content = new Content('section1', TestContent);
  contentRepository.register(content);
  contentRepository.activate(content)

  return <CoreAppShell />
}

export default App
