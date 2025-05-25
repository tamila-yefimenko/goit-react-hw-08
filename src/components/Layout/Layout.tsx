import AppBar from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';

const Layout: React.FC = () => {
  return (
    <div className={s.layout}>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
