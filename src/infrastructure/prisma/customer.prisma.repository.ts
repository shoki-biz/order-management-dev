import { Injectable } from '@nestjs/common'
import { v4 as uuid } from 'uuid'
import { Customer } from '../../domain/entities/customer.entity'
import { CustomerRepositoryInterface } from '../../domain/repositories/customer.repository.interface'
import { PrismaService } from './prisma.service'

@Injectable()
export class CustomerPrismaRepository implements CustomerRepositoryInterface {
  constructor(private prisma: PrismaService) { }

  async create(customer: Customer): Promise<Customer> {
    const createdCustomer = await this.prisma.customer.create({
      data: {
        id: uuid(),
        name: customer.name,
        billingPostalCode: customer.billingPostalCode,
        billingState: customer.billingState,
        billingCity: customer.billingCity,
        billingStreet: customer.billingStreet,
        shippingPostalCode: customer.shippingPostalCode,
        shippingState: customer.shippingState,
        shippingCity: customer.shippingCity,
        shippingStreet: customer.shippingStreet,
        phone: customer.phone,
        active: true,
        created_at: new Date(),
        created_by: customer.created_by,
        updated_at: new Date(),
        updated_by: customer.updated_by
      }
    })
    return new Customer(
      createdCustomer.id,
      createdCustomer.name,
      createdCustomer.billingPostalCode,
      createdCustomer.billingState,
      createdCustomer.billingCity,
      createdCustomer.billingStreet,
      createdCustomer.shippingPostalCode,
      createdCustomer.shippingState,
      createdCustomer.shippingCity,
      createdCustomer.shippingStreet,
      createdCustomer.phone,
      createdCustomer.active,
      createdCustomer.created_at,
      createdCustomer.created_by,
      createdCustomer.updated_at,
      createdCustomer.updated_by
    )
  }
  async findOne(userId: string): Promise<Customer> {
    console.log('customer-prisma-repository')
    const customer = await this.prisma.customer.findFirst({
      where: {
        id: userId
      }
    })

    if (!customer) return null

    return new Customer(
      customer.id,
      customer.name,
      customer.billingPostalCode,
      customer.billingState,
      customer.billingCity,
      customer.billingStreet,
      customer.shippingPostalCode,
      customer.shippingState,
      customer.shippingCity,
      customer.shippingStreet,
      customer.phone,
      customer.active,
      customer.created_at,
      customer.created_by,
      customer.updated_at,
      customer.updated_by
    )
  }
  async findAll(): Promise<Customer[]> {
    return await this.prisma.customer.findMany({})
  }
}
