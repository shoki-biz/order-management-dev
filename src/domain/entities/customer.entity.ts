export interface CustomerCreateArgs {
  name: string
  billingPostalCode: string
  billingState: string
  billingCity: string
  billingStreet: string
  shippingPostalCode: string
  shippingState: string
  shippingCity: string
  shippingStreet: string
  phone: string
  created_by: string
  updated_by: string
}

export class Customer {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly billingPostalCode: string,
    public readonly billingState: string,
    public readonly billingCity: string,
    public readonly billingStreet: string,
    public readonly shippingPostalCode: string,
    public readonly shippingState: string,
    public readonly shippingCity: string,
    public readonly shippingStreet: string,
    public readonly phone: string,
    public readonly active: boolean,
    public readonly created_at: Date,
    public readonly created_by: string,
    public readonly updated_at: Date,
    public readonly updated_by: string,
  ) { }
}
