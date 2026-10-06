export function Footer() {
  return (
    <footer className="py-6 border-t border-border/50 bg-muted/20">
      <div className="container px-4 mx-auto flex flex-col md:flex-row items-center justify-between text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Rayat.dev. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="https://v2.rayat.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors font-medium text-xs px-2.5 py-1 rounded-md border border-border/60"
          >
            Research / PhD Portfolio (v2) ↗
          </a>
          <a
            href="https://github.com/devrayat000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/zim-rayat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
