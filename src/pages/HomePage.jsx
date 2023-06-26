const styles = {
  container: {
    minHeight: 'calc(100vh - 91px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to PHONEBOOK!</h1>
    </div>
  );
};

export default HomePage;
