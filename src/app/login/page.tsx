import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] items-center justify-center md:flex">
      {/*box*/}
      <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/*image*/}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt="" fill className="object-cover" />
        </div>
        {/*form*/}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-2xl xl:text-3xl">Welcome</h1>
          <p>Log in to your account</p>
          <button className="flex gap-4 ring-1 ring-orange-100 rounded-md">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with google</span>
          </button>
          <button className="flex gap-4 ring-1 ring-blue-100 rounded-md">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with facebook</span>
          </button>
          <p className="text-sm">
            Have a problem?<Link className="underline" href="/">  Contact Us</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
