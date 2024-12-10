import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getOrganizationByCode } from "@/actions/kinde";
import Link from "next/link";

export default async function OrgPage(props: {
  params: {
    orgCode: string;
  };
}) {
  const org = await getOrganizationByCode(props.params.orgCode);

  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <div className="mb-4">
        <Link href="/">Home</Link>
      </div>
      <div>
        <LoginLink
          orgCode={org.code}
          className={cn({
            [buttonVariants({
              variant: "default",
            })]: true,
          })}
        >
          Log in to {org.name}
        </LoginLink>
      </div>
    </div>
  );
}
