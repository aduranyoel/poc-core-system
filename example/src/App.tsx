import React from 'react'

import { CoreAppShell, MenuItem, MenuRepositoryImpl} from 'poc-core-system'

const App = () => {
  const repository = MenuRepositoryImpl.getInstance();
  repository.register(new MenuItem('menu1', 'Item test', () => null));
  return <CoreAppShell />
}

export default App
