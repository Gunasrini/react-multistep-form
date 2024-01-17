import { FormWrapper } from "./FormWrapper"

export function AccountForm({
  email,
  password,
}) {
  return (
    <FormWrapper title="Account Creation">
      <label>Email</label>
      <input
        autoFocus
        type="email"
        value={email}
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
      />
    </FormWrapper>
  )
}
