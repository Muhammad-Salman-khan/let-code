"use server";
import { auth } from "@/lib/auth";
import { checkUserExists, returnResponse } from "@/lib/helperFunctions";
import prisma from "@/lib/prisma";
import {
  LoginInput,
  loginSchema,
  SignupInput,
  signupSchema,
} from "@/lib/Validator/Form-validators";
import { headers } from "next/headers";
export const signUpwithEmail = async (formdata: SignupInput) => {
  const parsedData = signupSchema.safeParse(formdata);
  if (!parsedData.success) {
    return returnResponse(
      404,
      false,
      "Fill all the field correctly",
      "Fill all the field correctly",
      null,
    );
  }
  const { username, email, password }: SignupInput = parsedData.data;
  const userExists = await checkUserExists(email);

  if (userExists) {
    return returnResponse(
      400,
      false,
      "Fill all the fields correctly",
      null,
      null,
    );
  }
  try {
    const data = await auth.api.signUpEmail({
      body: {
        name: username,
        email: email,
        password: password,
      },
    });
    if (!data) {
      return returnResponse(
        500,
        false,
        "Something went wrong",
        "Something went wrong",
        null,
      );
    }
    return returnResponse(201, true, "User Created Successfully", null, data);
  } catch (error) {
    const cleanError = error?.toString();
    return returnResponse(
      500,
      false,
      "Internal server error",
      cleanError,
      null,
    );
  }
};

export const LoginWithEmail = async (formData: LoginInput) => {
  const parsedData = loginSchema.safeParse(formData);
  if (!parsedData.success) {
    return returnResponse(
      404,
      false,
      "Fill all the field correctly",
      parsedData.error?.flatten().fieldErrors.toString(),
      null,
    );
  }
  const { email, password } = parsedData.data;
  const exists = await checkUserExists(email);
  if (!exists) {
    return returnResponse(404, false, "User not Found", null, null);
  }
  try {
    const data = await auth.api.signInEmail({
      body: {
        email: email, // required
        password: password, // required
        rememberMe: true,
      },
      headers: await headers(),
    });

    if (!data) {
      return returnResponse(505, false, "Something went wrong", data, null);
    }
    return returnResponse(200, true, "Logged in successfully", null, null);
  } catch (error: any) {
    const cleanError = error.toString();
    return returnResponse(401, false, "Invalid email or password", null, null);
  }
};
