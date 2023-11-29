import { styled } from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import { FormRow } from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/
const Label = styled.label`
  font-weight: 500;
`;

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm();

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="fullName">Cabin name</Label>
        {/* <Input type="text" id="fullName" required="This field is required" /> */}
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "This field is required" })}
        />
        {/* Display error message */}
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </FormRow>

      <FormRow>
        <Label htmlFor="email">Email</Label>

        {/* <Input type="email" id="email" required="Enter email" />
         */}
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
        {/* Display error message */}
        {errors.email && <p>{errors.email.message}</p>}
      </FormRow>

      <FormRow>
        <Label htmlFor="password">Password(min 8 characters)</Label>
        {/* <Input type="password" id="password" required="Enter password" />
         */}
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
        {/* Display error message */}
        {errors.password && <p>{errors.password.message}</p>}
      </FormRow>
      <FormRow>
        <Label htmlFor="passwordConfirm">Confirm password</Label>
        {/* <Input type="password" id="passwordConfirm" required="Enter password" />
         */}
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
        {/* Display error message */}
        {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isLoading}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
