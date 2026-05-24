import prisma from "../prisma";

export const checkUserExists = async (email: string) => {
  const userExists = await prisma.user.findFirst({
    where: { email: email },
    select: {
      id: true,
    },
  });
  return !!userExists;
};
export const checkUserForData = async (email: string) => {
  const userData = await prisma.user.findUnique({
    where: { email: email },
  });
  if (!userData) {
    return returnResponse(401, false, "User does not exists", null, null);
  }
  return returnResponse(200, true, "User exists", null, userData);
};

export const returnResponse = (
  status: Number,
  success: Boolean,
  message: String | null,
  error?: String | null,
  data?: Object | null,
) => {
  return {
    status,
    success,
    message,
    data,
    error,
  };
};
