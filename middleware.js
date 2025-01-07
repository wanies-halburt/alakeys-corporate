import { NextRequest, NextResponse } from "next/server";

// the list of all allowed origins
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://alakeys.com", "https://alakeys-corporate.vercel.app"]
    : ["http://localhost:3000", "http://localhost:3001"];

export function middleware(req) {
  // retrieve the current response
  const res = NextResponse.next();

  // retrieve the HTTP "Origin" header
  // from the incoming request
  const origin = req.headers.get("origin");

  // if the origin isn't an allowed one,
  // return error
  if ((origin && !allowedOrigins.includes(origin)) || !origin) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: { "Content-type": "text/plain" },
    });
  }

  // add the remaining CORS headers to the response
  res.headers.append("Access-Control-Allow-Origin", origin);
  res.headers.append("Access-Control-Allow-Credentials", "true");
  res.headers.append(
    "Access-Control-Allow-Methods",
    "GET,DELETE,PATCH,POST,PUT,OPTIONS"
  );
  res.headers.append(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  return res;
}

// specify the path regex to apply the middleware to
export const config = {
  matcher: "/api/:path*",
};
