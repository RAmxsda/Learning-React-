import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabens";
import { toast } from "react-hot-toast";

export function useCreateCabin() {

    const queryClient = useQueryClient();

    const { mutate: CreateCabin, isLoading: isCreating } = useMutation({
        mutationFn: createEditCabin,
        onSuccess: () => {
            toast.success("Cabin created successfully");
            queryClient.invalidateQueries("Cabins");
            // reset();
        },
        onError: (error) => toast.error(error.message),
    });

    return { isCreating, CreateCabin };

}