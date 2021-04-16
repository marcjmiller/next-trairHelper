import useSWR from 'swr';
import { Role } from '../pages/api/roles';
import fetcher from './fetcher';

const fetchRoles = () => {
  const { data, error } = useSWR(`/api/roles`, fetcher);

  return {
    roles: data as Role[],
    isLoading: !error && !data,
    isError: error,
  };
};

export default fetchRoles;
