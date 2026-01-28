
export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <form className="w-80 space-y-4">
        <h1 className="text-xl font-semibold">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2"
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-2"
        >
          Sign in
        </button>
      </form>
    </main>
  );
}
