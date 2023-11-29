import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";


export function UseUpdateSetting() {
    const queryClient = useQueryClient();

    const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
        mutationFn: updateSettingApi,
        onSuccess: () => {
            toast.success("settings edited successfully");
            queryClient.invalidateQueries("settings");
            // reset();
        },
        onError: (error) => toast.error(error.message),
    });
    return { isUpdating, updateSetting }
}