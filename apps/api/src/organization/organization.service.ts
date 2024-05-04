import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Organization, Prisma } from '@prisma/client';

@Injectable()
export class OrganizationService {
  constructor(private prisma: PrismaService) {}

  async organization(
    organizationWhereUniqueInput: Prisma.OrganizationWhereUniqueInput,
  ): Promise<Organization | null> {
    return this.prisma.organization.findUnique({
      where: organizationWhereUniqueInput,
    });
  }

  async organizations(): Promise<Organization[]> {
    return this.prisma.organization.findMany({});
  }

  async createOrganization(
    data: Prisma.OrganizationCreateInput,
  ): Promise<Organization> {
    return this.prisma.organization.create({
      data,
    });
  }

  async updateOrganization(params: {
    where: Prisma.OrganizationWhereUniqueInput;
    data: Prisma.OrganizationUpdateInput;
  }): Promise<Organization> {
    const { where, data } = params;
    return this.prisma.organization.update({
      data,
      where,
    });
  }

  async deleteOrganization(
    where: Prisma.OrganizationWhereUniqueInput,
  ): Promise<Organization> {
    return this.prisma.organization.delete({
      where,
    });
  }
}
