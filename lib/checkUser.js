import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export const checkUser = async () => {
  try {
    const user = await currentUser();

    if (!user || !user.id) {
      return null;
    }

    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const emailObj = user.emailAddresses?.[0];
    const email = emailObj?.emailAddress || "";

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
        imageUrl: user.imageUrl,
        email,
      },
    });

    return newUser;
  } catch (error) {
    console.error("Error in checkUser:", error);
    return null;
  }
};
