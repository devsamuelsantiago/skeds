import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Get('all')
  getOrganization() {
    return this.organizationService.organizations();
  }

  @Get(':id')
  getOrganizationById(@Param('id') id: string) {
    return this.organizationService.organization({ id: id });
  }

  @Post('')
  createOrganization(@Body() createOrganization: CreateOrganizationDto) {
    return this.organizationService.createOrganization(createOrganization);
  }

  @Delete(':id')
  deleteOrganization(@Param('id') id: string) {
    return this.organizationService.deleteOrganization({ id: id });
  }
}
