# Phone (Chisel Mutator Addon)

Formats a phone number based on the provided country.

# Installation

Use the Chisel RESTful API, Chisel CLI, or Chisel GUI to install this mutator addon.

# Usage

After installation, this addon will be available on `api.mutators.addons.phone` as a function with the following parameters:
  - `number`: A valid phone number in any format.
  - `country`: A country code in ISO 3166 format.
  - `format`: An optional string, either `int` for International, `nat` for National, `e164` for E164, and `rfc3966` for RFC3966 formatting (defaults to `int`).

## Example

```js
api.mutators.addons.phone('1235556789', 'US');             // Returns "+1 123-555-6789"
api.mutators.addons.phone('1235556789', 'US', 'int');      // Returns "+1 123-555-6789"
api.mutators.addons.phone('1235556789', 'US', 'nat');      // Returns "(123) 555-6789"
api.mutators.addons.phone('1235556789', 'US', 'e164');     // Returns "+11235556789"
api.mutators.addons.phone('1235556789', 'US', 'rfc3966');  // Returns "tel:+1-123-555-6789"
```
