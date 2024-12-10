import { getOrganizations } from "@/actions/kinde";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { BarChart3, Clock, LibraryBig, Users } from "lucide-react";

export default async function Home() {
  const { organizations } = await getOrganizations();
  const testimonials = [
    {
      type: "Public Library",
      quote:
        "The app has streamlined our checkout process and made patron management effortless.",
      author: "Sarah Johnson, Head Librarian",
    },
    {
      type: "University Library",
      quote:
        "We've reduced administrative overhead by 40% since implementing this solution.",
      author: "Dr. Michael Chen, Library Director",
    },
    {
      type: "School Library",
      quote:
        "The analytics tools have revolutionized how we track and grow our collection.",
      author: "Emma Thompson, Media Specialist",
    },
  ];

  const features = [
    {
      icon: <LibraryBig className="w-10 h-10 text-blue-600" />,
      title: "Collection Management",
      description:
        "Efficiently organize and track your entire library inventory",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Patron Services",
      description: "Streamline checkout processes and manage member accounts",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
      title: "Analytics & Reports",
      description: "Make data-driven decisions with comprehensive insights",
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-600" />,
      title: "Time-Saving Automation",
      description: "Automate routine tasks and focus on what matters most",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <LibraryBig className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold">TheLibraryEngine</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Pricing</Button>
          <Button variant="ghost">Resources</Button>
          <Button variant="outline">Sign in</Button>
          <Button asChild>
            <RegisterLink>Get started</RegisterLink>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Library management <br /> made super simple
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              Join over 1000+ libraries using TheLibraryEngine to streamline
              their operations and better serve their communities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg">Start free trial</Button>
              <Button variant="outline" size="lg">
                Schedule demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-center mb-12">
            Trusted by Leading Libraries
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {organizations?.map((partner, index) => (
              <a
                href={`/${partner.code}`}
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-sm font-medium text-gray-600 text-center">
                  {partner.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted by Libraries Worldwide
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold text-gray-600 mb-2">
                    {testimonial.type}
                  </p>
                  <p className="text-lg mb-4">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to transform your library?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your 14-day free trial. No credit card required.
          </p>
          <Button size="lg" variant="secondary">
            Get started now
          </Button>
        </div>
      </div>
    </div>
  );
}
