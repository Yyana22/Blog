import classes from './EditLogin.module.scss';

const EditLogin = () => {
  const changeInput = (e) => {
    console.log(e);
  };
  const onSubmit = (e) => {
    //  e.preventDefault();
    console.log(e);
  };
  return (
    <div className={classes['wrap-edit-login']}>
      <p className={classes['title-edit-login']}>Edit Profile</p>
      <form className={classes['form-edit-login']} onSubmit={onSubmit()}>
        <div className={classes['wrap-user-name']}>
          <label htmlFor="Username">Username</label>
          <input
            required
            id="Username"
            className={classes['input-user-name']}
            placeholder="Username"
            onChange={changeInput()}
          ></input>
        </div>
        <div className={classes['wrap-email-address']}>
          <label htmlFor="EmailAddress">Email address</label>
          <input
            required
            id="EmailAddress"
            className={classes['input-email-address']}
            placeholder="Email address"
            onChange={changeInput()}
          ></input>
        </div>
        <div className={classes['wrap-new-password']}>
          <label htmlFor="NewPassword">New password</label>
          <input
            required
            id="NewPassword"
            className={classes['input-new-password']}
            placeholder="New password"
            onChange={changeInput()}
          ></input>
        </div>
        <div className={classes['wrap-avatar']}>
          <label htmlFor="Avatar">Avatar image (url)</label>
          <input
            required
            id="Avatar"
            className={classes['input-avatar']}
            placeholder="Avatar image"
            onChange={changeInput()}
          ></input>
        </div>
        <button type="submit" className={classes['btn-save']}>
          Save
        </button>
      </form>
    </div>
  );
};

export default EditLogin;
