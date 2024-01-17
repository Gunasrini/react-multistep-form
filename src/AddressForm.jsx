import { FormWrapper } from "./FormWrapper"

export function AddressForm({
  street,
  city,
  state,
  zip,
}) {
  return (
    <FormWrapper title="Address">
      <label>Street</label>
      <input
        autoFocus
        type="text"
        value={street}
      />
      <label>City</label>
      <input
        type="text"
        value={city}
      />
      <label>State</label>
      <input
        type="text"
        value={state}
      />
      <label>Zip</label>
      <input
        type="text"
        value={zip}
      />
    </FormWrapper>
  )
}
