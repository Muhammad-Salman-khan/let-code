"use server";

import { auth } from "@/lib/auth";
import { returnResponse } from "@/lib/helperFunctions";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";

const getCurrentUserRole = async () => {
  const User = await auth.api.getSession({
    headers: await headers(),
  });
  if (User?.user.role !== "admin") {
    return returnResponse(
      401,
      false,
      "Unauthorized",
      "Unauthorized Access",
      null,
    );
  }
  return returnResponse(
    200,
    true,
    "Authorized Access",
    "Authorized Access",
    User,
  );
};

export default getCurrentUserRole;
