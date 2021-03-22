import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList, UserEdit, UserCreate } from './users';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import Dashboard from './Dashboard';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
<Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
  <Resource name='users' list={UserList} edit={UserEdit} create={UserCreate} />
</Admin>
);

export default App;
