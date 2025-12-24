import React from 'react';
// Toaster is mounted globally in index.jsx

function LandingPage() {
  return (
    <main
      dir="ltr"
      className="floating-gradient relative flex min-h-screen items-center justify-center overflow-hidden px-6 ltr"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-1/4 h-72 w-72 rounded-full bg-pink-200/70 mix-blend-multiply blur-3xl float-slow"></div>
        <div className="absolute right-1/3 top-1/3 h-72 w-72 rounded-full bg-yellow-200/70 mix-blend-multiply blur-3xl float-slower"></div>
        <div className="absolute -right-10 bottom-1/4 h-72 w-72 rounded-full bg-rose-200/70 mix-blend-multiply blur-3xl float-slowest"></div>

        <div className="absolute top-1/4 left-1/4 h-3 w-3 rounded-full bg-rose-400 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 h-3 w-3 rounded-full bg-pink-400 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/2 h-3 w-3 rounded-full bg-yellow-400 animate-pulse"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-rose-200/20 via-transparent to-yellow-200/20 backdrop-blur-[100px]"></div>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(251, 191, 36, 0.12) 1px, transparent 1px), linear-gradient(rgba(244, 114, 182, 0.12) 1px, transparent 1px)',
            backgroundSize: '56px 56px'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-2xl rounded-3xl border border-white/60 bg-white/80 px-8 py-10 text-center shadow-xl backdrop-blur-md">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          This project is no longer supported.
        </h1>
        <p className="mt-4 text-lg text-gray-700 sm:text-xl">
          Thanks for staying with us in the past year!
        </p>
      </div>
    </main>
  );
}

function App() {
  return <LandingPage />;
}

export default App;
