const Public = ({ client }) => {
  return (
    <div>
      <div>You're not logged in</div>
      <button onClick={() => client.login()}>Log In</button>
    </div>
  );
};

export default Public;
