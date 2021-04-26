import fetchDevs from '../utils/fetchDevs';

const DevsPane = () => {
  const { devs, isLoading, isError } = fetchDevs();

  return (
    <div className={'flex flex-col items-center w-1/2'}>
      <span className={'mx-auto'}>DEVS</span>
      {isLoading && <span>Loading...</span>}
      {isError && <span>Error: {isError} </span>}
      {devs && (
        <ul>
          {devs.map((dev) => (
            <li>{dev.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DevsPane;
