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
    return {
      success: false,
      message: parsedData.error?.flatten().fieldErrors,
    };
  }
  const { username, email, password }: SignupInput = parsedData.data;
  const userExists = await checkUserExists(email);

  if (userExists) {
    return {
      success: false,
      message: "User already exists",
    };
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
        false,
        "Something went wrong",
        "Something went wrong",
      );
    }
    return returnResponse(true, "User Created Successfully");
  } catch (error) {
    console.error(error?.toString());
    return returnResponse(false, `something went wrong`, error?.toString());
  }
};

export const LoginWithEmail = async (formData: LoginInput) => {
  const parsedData = loginSchema.safeParse(formData);
  if (!parsedData.success) {
    return {
      success: false,
      message: parsedData.error?.flatten().fieldErrors,
    };
  }
  const { email, password } = parsedData.data;
  const exists = await checkUserExists(email);
  if (!exists) {
    return returnResponse(false, "User does not exist");
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
      return returnResponse(false, "Failed to login");
    }

    return returnResponse(true, "Logged in successfully");
  } catch (error: any) {
    console.error(error);
    return returnResponse(false, error.toString());
  }
};
