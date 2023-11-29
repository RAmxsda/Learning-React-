import { styled } from "styled-components";
import Form from "../../ui/Form";
import { FormRow } from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";

import Spinner from "../../ui/Spinner";
import { UseUpdateSetting } from "./useUpdateSetting";

const Label = styled.label`
  font-weight: 500;
`;

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestPerBooking,
      breakFastPrice,
    } = {},
  } = useSettings();

  const { isUpdating, updateSetting } = UseUpdateSetting();
  if (isLoading) return <Spinner />;

  function handleUpdate(e, setting) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [setting]: value });
  }
  return (
    <Form>
      <FormRow>
        <Label htmlFor="min-nights">Cabin name</Label>
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Label htmlFor="max-nights">Maximum nights/booking</Label>
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Label htmlFor="max-guests">Maximum guests/booking</Label>

        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestPerBooking}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxGuestPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Label htmlFor="breakfast-price">Breakfast price</Label>

        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakFastPrice}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "breakFastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
