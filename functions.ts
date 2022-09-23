import { Prisma, MemberModel } from './Prisma';
import { Guild as GuildType, GuildMember as MemberType, APIInteractionGuildMember } from 'discord.js';

/**
 * Performs a Prisma Database Query to find a Clanning User.().
 * @param Guild - the specified server to peform query within
 * @param Query - ROBLOX Id, Discord User Object.
 */
export const getMember = async (Guild: String, Query: number | MemberType | string | APIInteractionGuildMember): Promise<MemberModel | null> => {
    if (typeof Query === 'number') {
		return await Prisma.member.findFirst({
			where: {
				guildId: Guild,
				rblxId: Query
			}
		});
	} else {
		return await Prisma.member.findFirst({
			where: {
				guildId: Guild,
				userId: Number(Query.user.id)
			}
		});
	}
};
