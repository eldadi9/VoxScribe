export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12">
      <main className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          VoxScribe
        </h1>
        <p className="mt-2 text-xl font-medium text-zinc-600 dark:text-zinc-400">
          AI Transcription and Meeting Summaries
        </p>
        <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Record conversations, transcribe them accurately, and get AI-powered
          summaries and action items — all in one place.
        </p>
        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:justify-center">
          <div className="rounded-lg border border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Record
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Capture meetings and conversations
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Transcribe
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Accurate speech-to-text conversion
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Summarize
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              AI-powered summaries and insights
            </p>
          </div>
        </div>
        <button
          type="button"
          className="mt-12 rounded-full bg-zinc-900 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Get Started
        </button>
      </main>
    </div>
  );
}
