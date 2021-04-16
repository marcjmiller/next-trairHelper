import useSWR from 'swr';
import { Developer } from '../pages/api/devs';
import fetcher from './fetcher';

const fetchDevs = () => {
  const { data, error } = useSWR(`/api/devs`, fetcher);

  return {
    devs: data as Developer[],
    isLoading: !error && !data,
    isError: error,
  };
};

export default fetchDevs;
