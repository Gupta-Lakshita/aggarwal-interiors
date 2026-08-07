"use client";

export function NewsletterForm() {
  return (
    <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="newsletter" className="text-sm font-semibold uppercase tracking-wide text-ivory-50">
        Newsletter
      </label>
      <div className="mt-3 flex gap-2">
        <input
          id="newsletter"
          type="email"
          placeholder="Your email"
          className="focus-ring w-full rounded-[10px] border border-ivory-200/20 bg-transparent px-3 py-2 text-sm text-ivory-50 placeholder:text-ivory-200/50"
        />
        <button
          type="submit"
          className="focus-ring shrink-0 rounded-[10px] bg-terracotta-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-terracotta-600"
        >
          Join
        </button>
      </div>
    </form>
  );
}
