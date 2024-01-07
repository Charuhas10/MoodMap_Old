import { auth } from "@clerk/nextjs";
import { prisma } from "./db";

export const getUserByClerkId = async () => {
  console.log("reached here");
  const { userId } = await auth();
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
  });
  return user;
};

// { includes = {}, select = {} } select,
// includes,
//or opts={} and then select:opts.select||{}, includes:opts.includes||{}
