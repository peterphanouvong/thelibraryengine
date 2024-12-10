import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Bell, Calendar, Home, Search, User, Users } from "lucide-react";
import { permanentRedirect } from "next/navigation";

export default async function App() {
  const { getUser, getOrganization } = getKindeServerSession();
  const user = await getUser();
  const org = await getOrganization();

  if (!user) {
    permanentRedirect("/api/auth/login?post_login_redirect_ul=/app");
  }

  const events = [
    {
      id: 1,
      date: "Tomorrow",
      title: "Design thinking in business",
      time: "5:00 PM",
      description:
        "Fireside chat on how to use design thinking in design. Design leaders from F500 companies will share their insights.",
      participants: [
        "/api/placeholder/32/32",
        "/api/placeholder/32/32",
        "/api/placeholder/32/32",
        "/api/placeholder/32/32",
        "/api/placeholder/32/32",
      ],
    },
    {
      id: 2,
      date: "Wed, Dec 21",
      title: "Plan for retirement with ChatGPT",
      time: "2:00 PM",
      description:
        "Discuss having ChatGPT as your financial planner. Can an AI plan your 401k? Let's chat.",
      participants: [
        "/api/placeholder/32/32",
        "/api/placeholder/32/32",
        "/api/placeholder/32/32",
      ],
    },
    {
      id: 3,
      date: "",
      title: "How to start a newsletter in 2023",
      time: "8:00 AM",
      description:
        "We bring experts in content writing to explore the newsletter business.",
      participants: [
        "/api/placeholder/32/32",
        "/api/placeholder/32/32",
        "/api/placeholder/32/32",
        "/api/placeholder/32/32",
        "/api/placeholder/32/32",
      ],
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="px-4 py-6">
        <h1 className="text-lg font-bold text-center">{org?.orgName}</h1>
        <Calendar className="w-6 h-6 absolute right-6 top-6" />
      </div>

      {/* Events List */}
      <div className="px-4 space-y-8">
        {events.map((event) => (
          <div key={event.id} className="space-y-2">
            {event.date && <h2 className="text-lg font-bold">{event.date}</h2>}

            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text font-semibold">{event.title}</h3>
                  <p className="text-gray-500 text-sm">{event.time}</p>
                </div>
                <Bell className="w-6 h-6" />
              </div>
              <div className="flex">
                {event.participants.map((participant, i) => (
                  <Avatar key={i} className="w-8 h-8 border-2 border-white">
                    <AvatarFallback className="bg-gray-200" />
                    <AvatarImage
                      src={participant}
                      alt={`Participant ${i + 1}`}
                    />
                  </Avatar>
                ))}
              </div>

              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Home className="w-6 h-6 text-gray-500" />
            <Users className="w-6 h-6 text-gray-500" />
            <Search className="w-6 h-6 text-gray-500" />
            <Calendar className="w-6 h-6 text-blue-500" />
            <LogoutLink>
              <User className="w-6 h-6 text-gray-500" />
            </LogoutLink>
          </div>
        </div>
      </div>
    </div>
  );
}
