'use server'

import { signIn } from "@/auth";

export async function loginWithGoogle() {
  await signIn("google");
}

export async function loginWithFacebook() {
  await signIn("facebook");
}