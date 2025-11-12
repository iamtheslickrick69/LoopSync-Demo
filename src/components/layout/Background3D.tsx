export function Background3D() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200/10 rounded-full animate-float blur-xl" />
      <div className="absolute top-40 right-20 w-40 h-40 bg-cream-300/10 rounded-lg rotate-45 animate-float-slow blur-xl" />
      <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-primary-300/10 rounded-full animate-float-slower blur-xl" />

      {/* Speech bubble shapes */}
      <div className="absolute top-1/3 right-1/4 w-36 h-36 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary-400 animate-float">
          <rect x="10" y="10" width="70" height="50" rx="10" fill="currentColor" />
          <polygon points="30,60 25,75 40,60" fill="currentColor" />
        </svg>
      </div>

      {/* Abstract org chart nodes */}
      <div className="absolute bottom-1/4 right-1/3 w-48 h-32 opacity-10 animate-float-slow">
        <svg viewBox="0 0 200 150" className="w-full h-full text-cream-400">
          <circle cx="100" cy="30" r="20" fill="currentColor" />
          <line x1="100" y1="50" x2="100" y2="80" stroke="currentColor" strokeWidth="2" />
          <line x1="100" y1="80" x2="60" y2="80" stroke="currentColor" strokeWidth="2" />
          <line x1="100" y1="80" x2="140" y2="80" stroke="currentColor" strokeWidth="2" />
          <circle cx="60" cy="100" r="15" fill="currentColor" />
          <circle cx="140" cy="100" r="15" fill="currentColor" />
        </svg>
      </div>

      {/* Connection lines */}
      <div className="absolute top-1/2 left-1/3 w-64 h-2 bg-gradient-to-r from-transparent via-primary-200/10 to-transparent animate-pulse-slow" />
      <div className="absolute top-2/3 right-1/4 w-48 h-2 bg-gradient-to-r from-transparent via-cream-300/10 to-transparent animate-pulse-slow animation-delay-200" />

      {/* Additional floating elements */}
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-primary-100/10 rounded-full animate-float-slower blur-xl" />
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-cream-200/10 rounded-lg rotate-12 animate-float blur-xl animation-delay-300" />
    </div>
  );
}
