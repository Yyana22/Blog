import AppHeader from '../AppHeader/AppHeader';
import CreateAccount from '../CreateAccount/CreateAccount';
import SingIn from '../SingIn/SingIn';
import EditLogin from '../EditLogin/EditLogin';

import classes from './App.module.scss';

const App = () => {
  return (
    <div className={classes.app}>
      <AppHeader />
      <CreateAccount />
      <SingIn />
      <EditLogin />
    </div>
  );
};

export default App;
