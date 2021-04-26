import fetchRoles from '../utils/fetchRoles';

const RolesPane = () => {
  const { roles, isLoading, isError } = fetchRoles();
  
  return (
    <div className={'flex flex-col items-center w-1/2'}>
      <span className={'mx-auto'}>ROLES</span>
      {isLoading && <span>Loading...</span>}
      {isError && <span>Error: {isError} </span>}
      {roles && (
        <ul>
          {roles.map((role) => (
            <li>{role.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RolesPane;
