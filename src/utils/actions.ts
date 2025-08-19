'use server'

import { signIn, signOut } from "@/auth";


export async function loginWithGoogle() {
  await signIn("google", { redirectTo: "/" });
}

export async function loginWithFacebook() {
  await signIn("facebook" , { redirectTo: "/" });
}


export async function logout() {
  await signOut({ redirectTo: "/" });
}