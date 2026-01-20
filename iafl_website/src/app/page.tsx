import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Layout, Palette, Code, Smartphone, Zap, Users, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Master Modern Web Design
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Learn to create stunning, responsive websites with our comprehensive web design course. From fundamentals to advanced techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8">
              Start Learning
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              View Curriculum
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What You'll Learn
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Master the essential skills and tools used by professional web designers
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Layout className="w-12 h-12 mb-4" />
                <CardTitle>Responsive Design</CardTitle>
                <CardDescription>
                  Create websites that look great on all devices, from mobile to desktop
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Palette className="w-12 h-12 mb-4" />
                <CardTitle>Color Theory</CardTitle>
                <CardDescription>
                  Understand how to use color effectively to create visually appealing designs
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Code className="w-12 h-12 mb-4" />
                <CardTitle>HTML & CSS</CardTitle>
                <CardDescription>
                  Build a solid foundation with modern HTML5 and CSS3 techniques
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Smartphone className="w-12 h-12 mb-4" />
                <CardTitle>Mobile First</CardTitle>
                <CardDescription>
                  Learn to design for mobile devices first, then scale up
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="w-12 h-12 mb-4" />
                <CardTitle>Performance</CardTitle>
                <CardDescription>
                  Optimize your websites for speed and better user experience
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-12 h-12 mb-4" />
                <CardTitle>UX Principles</CardTitle>
                <CardDescription>
                  Apply user experience best practices to create intuitive interfaces
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Course Curriculum
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            A structured learning path from basics to mastery
          </p>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <CardTitle>Introduction to Web Design</CardTitle>
                    <CardDescription className="mt-2">
                      Understanding the web, design principles, and getting started with tools
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <CardTitle>HTML Fundamentals</CardTitle>
                    <CardDescription className="mt-2">
                      Master semantic HTML5, document structure, and accessibility
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <CardTitle>CSS Styling & Layout</CardTitle>
                    <CardDescription className="mt-2">
                      Learn Flexbox, Grid, typography, colors, and modern CSS techniques
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <CardTitle>Responsive Design</CardTitle>
                    <CardDescription className="mt-2">
                      Build fluid layouts that adapt to any screen size
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <CardTitle>Advanced Techniques</CardTitle>
                    <CardDescription className="mt-2">
                      Animations, transitions, and modern design patterns
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose This Course?
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Everything you need to become a professional web designer
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Hands-on Projects</h3>
                  <p className="text-muted-foreground">
                    Build real websites as you learn, with practical exercises
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Expert Instruction</h3>
                  <p className="text-muted-foreground">
                    Learn from industry professionals with years of experience
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Lifetime Access</h3>
                  <p className="text-muted-foreground">
                    Learn at your own pace with unlimited access to course materials
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Community Support</h3>
                  <p className="text-muted-foreground">
                    Join a community of learners and get help when you need it
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Updated Content</h3>
                  <p className="text-muted-foreground">
                    Stay current with the latest web design trends and technologies
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Certificate</h3>
                  <p className="text-muted-foreground">
                    Earn a certificate upon completion to showcase your skills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of students who have transformed their careers with our web design course
          </p>
          <Button size="lg" className="text-lg px-12 py-6">
            Enroll Now
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            30-day money-back guarantee • No questions asked
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Web Design Course. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
