import useSWR from "swr";

const ARCADIANS_API = process.env.NEXT_PUBLIC_ARCADIANS_API

const fetchTokenMetadata = async(uri) : Promise<any> => {

    const uriWithId = `${ARCADIANS_API}${uri}`; // ?refreshMetadata=true`;

    const response = await fetch(uriWithId);
    const data = await response.json();
    return data;
};

export const useArcadiansApi = (uri) => {
  const { data, error, mutate, isLoading } = useSWR(
    uri,
    fetchTokenMetadata
  );

  return {
    data,
    error,
    isLoading,
    mutate,
    contracts: data || [],
    isError: !!error,
  };

  


};


