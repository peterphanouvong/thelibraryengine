import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET() {
  const { getRoles } = getKindeServerSession();
  const roles = await getRoles();

  // speak about roles checking vs permissions checking
  if (roles?.some((role) => role.key === "admin")) {
    return Response.redirect(
      process.env.NODE_ENV == "development"
        ? "http://localhost:3000/admin"
        : "https://admin.thelibraryengine.com"
    );
  }

  return Response.redirect(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/app"
      : "https://app.thelibraryengine.com"
  );
}
