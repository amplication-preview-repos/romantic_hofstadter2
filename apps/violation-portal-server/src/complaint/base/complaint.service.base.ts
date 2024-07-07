/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Complaint as PrismaComplaint,
  User as PrismaUser,
} from "@prisma/client";

export class ComplaintServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ComplaintCountArgs, "select">
  ): Promise<number> {
    return this.prisma.complaint.count(args);
  }

  async complaints(
    args: Prisma.ComplaintFindManyArgs
  ): Promise<PrismaComplaint[]> {
    return this.prisma.complaint.findMany(args);
  }
  async complaint(
    args: Prisma.ComplaintFindUniqueArgs
  ): Promise<PrismaComplaint | null> {
    return this.prisma.complaint.findUnique(args);
  }
  async createComplaint(
    args: Prisma.ComplaintCreateArgs
  ): Promise<PrismaComplaint> {
    return this.prisma.complaint.create(args);
  }
  async updateComplaint(
    args: Prisma.ComplaintUpdateArgs
  ): Promise<PrismaComplaint> {
    return this.prisma.complaint.update(args);
  }
  async deleteComplaint(
    args: Prisma.ComplaintDeleteArgs
  ): Promise<PrismaComplaint> {
    return this.prisma.complaint.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.complaint
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
