import { withAuth } from "next-auth/middleware";
import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { locales } from "./i18n/i18n";

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: "en",
});

const publicPages = ["/login"];

const authMiddleware = withAuth((req) => intlMiddleware(req), {
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    authorized: async ({ token }) => !!token,
  },
  pages: {
    signIn: "/login",
  },
});

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i",
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
