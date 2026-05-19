import { auth } from "~/server/auth";
import { redirect } from "next/navigation";
import HomePage from "./HomePage";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return <HomePage />;
}
