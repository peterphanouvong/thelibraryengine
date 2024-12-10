import { Button } from "@/components/ui/button";

export default function AdminPage() {
  return (
    <div className="max-w-6xl">
      <h2 className="text-4xl font-semibold mb-8">Dashboard</h2>

      <div className="grid grid-cols-4 gap-4 w-full">
        <div className="rounded-lg bg-stone-100 p-6">
          <p className="font-medium mb-2">Total members</p>
          <p className="font-semibold text-3xl">1,200</p>
        </div>

        <div className="rounded-lg bg-stone-100 p-6">
          <p className="font-medium mb-2">Books in stock</p>
          <p className="font-semibold text-3xl">3,541</p>
        </div>

        <div className="rounded-lg bg-stone-100 p-6">
          <p className="font-medium mb-2">Books borrowed</p>
          <p className="font-semibold text-3xl">2,382</p>
        </div>

        <div className="rounded-lg bg-stone-100 p-6">
          <p className="font-medium mb-2">Latest activities</p>
          <p className="font-semibold text-3xl">100</p>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="font-semibold mb-4">Quick actions</h3>
        <div className="flex gap-3">
          <Button>Add member</Button>
          <Button variant={"secondary"}>Add book</Button>
          <Button variant={"secondary"}>View report</Button>
        </div>
      </div>
    </div>
  );
}
