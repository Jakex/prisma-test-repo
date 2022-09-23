import { PrismaClient, PrismaPromise, Guild, Member, Medal } from '@prisma/client';

declare const global: any;

const prisma: PrismaClient = global.prisma || new PrismaClient();
if (process.env.NODE_ENV === 'development') global.prisma = prisma;

export const Prisma = prisma;

export type GuildModel = Guild;
export type MemberModel = Member;
export type MedalModel = Medal;