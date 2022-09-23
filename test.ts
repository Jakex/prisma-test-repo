import { getMember } from './functions';

async function test() {
    const guildId = "1234567890"
    const rblxId = 1234567
    return await getMember(guildId, rblxId)
}