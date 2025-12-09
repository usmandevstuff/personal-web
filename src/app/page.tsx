import Link from 'next/link';
import {
  Github,
  Linkedin,
  Twitter, Mail,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';


export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex-1">
        <section
          id="hero"
          className="flex min-h-screen items-center justify-center"
        >
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-8 text-center px-4 relative z-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
             Muhammad Usman 
              </h1>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                <Badge variant="secondary">Developer</Badge>
                <Badge variant="secondary">Tech Enthusiast</Badge>
                <Badge variant="secondary">Gamer</Badge>
              </div>
              <div className="mt-4 flex items-center justify-center gap-4">
                <Button
                  variant="link"
                  asChild
                  className="p-0 text-muted-foreground hover:text-primary"
                >
                  <Link href="https://github.com/usmandevstuff" target="_blank">
                    <Github className="mr-2" /> GitHub
                  </Link>
                </Button>
                <Button
                  variant="link"
                  asChild
                  className="p-0 text-muted-foreground hover:text-primary"
                >
                  <Link href="#" target="_blank">
                    <Linkedin className="mr-2" /> LinkedIn
                  </Link>
                </Button>
                <Button
                  variant="link"
                  asChild
                  className="p-0 text-muted-foreground hover:text-primary"
                >
                  <Link href="https://x.com/usmandevstuff" target="_blank">
                    <Twitter className="mr-2" /> Twitter
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full justify-center bg-muted/50 py-8 md:py-12">
          <div className="flex flex-col items-center gap-4 px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Get in Touch
            </h2>
            <p className=" text-muted-foreground md:text-xl/relaxed">
              Have a project in mind or just want to say hi? Send me a message.
            </p>
            <Button asChild>
              <Link href="mailto:hello@usmn.dev">
                <Mail className="mr-2" /> Get in Touch
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="flex h-20 items-center justify-between px-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Muhammad Usman. All rights reserved.</p>
            <ThemeToggle />
        </div>
      </footer>
    </div>
  );
}
