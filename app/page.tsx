import { getOrganizations } from "@/actions/kinde";

export default async function Home() {
  const { organizations } = await getOrganizations();
  return (
    <div className="flex items-center justify-center mt-40">
      <ul>
        {organizations?.map((org) => (
          <li key={org.code}>
            <a href={`/${org.code}`}>{org.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
