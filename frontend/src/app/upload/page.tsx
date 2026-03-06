"use client";

import { useRef, useState } from "react";

interface UploadResponse {
  filename: string;
  content_type: string;
  size: number;
  status: string;
}

export default function UploadPage() {
  const [language, setLanguage] = useState("auto");
  const [summaryType, setSummaryType] = useState("full");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<UploadResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setResult(null);
      setError(null);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) {
      setFile(dropped);
      setResult(null);
      setError(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  const handleStartProcessing = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || data.detail || "Upload failed");
      }
      setResult(data as UploadResponse);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Upload
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Upload audio or video files to transcribe and generate summaries.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            File
          </label>
          <div
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="flex min-h-[160px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-zinc-300 bg-zinc-50 px-4 py-8 dark:border-zinc-700 dark:bg-zinc-900/50 hover:border-zinc-400 dark:hover:border-zinc-600"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".mp3,.wav,.mp4,.webm,.m4a,audio/*,video/*"
              onChange={handleFileChange}
              className="hidden"
            />
            {file ? (
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                {file.name} ({(file.size / 1024).toFixed(1)} KB)
              </p>
            ) : (
              <>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Drag and drop your file here, or click to browse
                </p>
                <p className="mt-2 text-xs text-zinc-400 dark:text-zinc-500">
                  Supported: MP3, WAV, MP4, WebM, M4A
                </p>
              </>
            )}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Language
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50 dark:focus:ring-zinc-500"
          >
            <option value="auto">Auto-detect</option>
            <option value="en">English</option>
            <option value="he">Hebrew</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Summary type
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              { value: "full", label: "Full summary" },
              { value: "brief", label: "Brief" },
              { value: "actions", label: "Action items only" },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setSummaryType(opt.value)}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                  summaryType === opt.value
                    ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-900"
                    : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-500"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <button
            type="button"
            disabled={!file || loading}
            onClick={handleStartProcessing}
            className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-60 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {loading ? "Uploading…" : "Start Processing"}
          </button>

          {error && (
            <p className="mt-3 text-sm text-red-600 dark:text-red-400">
              {error}
            </p>
          )}

          {result && (
            <div className="mt-4 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-50">
                Upload successful
              </p>
              <dl className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex justify-between gap-4">
                  <dt>Filename</dt>
                  <dd className="font-mono">{result.filename}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Content type</dt>
                  <dd className="font-mono">{result.content_type}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Size</dt>
                  <dd className="font-mono">{result.size} bytes</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Status</dt>
                  <dd className="font-mono">{result.status}</dd>
                </div>
              </dl>
            </div>
          )}

          {!result && !error && (
            <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
              Select a file and click Start Processing to upload.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
