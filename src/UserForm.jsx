import { FormWrapper } from "./FormWrapper"

export function UserForm({
  firstName,
  lastName,
  age,
}) {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        autoFocus
        type="text"
        value={firstName}
      />
      <label>Last Name</label>
      <input
        type="text"
        value={lastName}
      />
      <label>Age</label>
      <input
        min={1}
        type="number"
        value={age}
      />
    </FormWrapper>
  )
}
