import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabens";

export function useCabin() {
    const {
        isLoading,
        data: cabins,
        error,
    } = useQuery({
        queryKey: ["Cabins"],
        queryFn: getCabins,
    });
    return { isLoading, cabins, error };

}