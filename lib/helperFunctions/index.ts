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
  const userExists = await prisma.user.findUnique({
    where: { email: email },
  });
  if (!userExists) {
    return returnResponse(false, "User does not exists");
  }
  return returnResponse(true, "User exists", "", userExists);
};

export const returnResponse = (
  success: boolean,
  message: string,
  error?: string,
  data?: object,
) => {
  return {
    success,
    message,
    data,
    error,
  };
};
