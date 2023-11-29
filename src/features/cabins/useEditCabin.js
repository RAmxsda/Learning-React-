import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabens";

export function UserEditCabin() {
    const queryClient = useQueryClient();

    const { mutate: EditCabin, isLoading: isEditing } = useMutation({
        mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
        onSuccess: () => {
            toast.success("Cabin edited successfully");
            queryClient.invalidateQueries("Cabins");
            // reset();
        },
        onError: (error) => toast.error(error.message),
    });
    return { isEditing, EditCabin }
}