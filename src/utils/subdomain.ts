import type { GetServerSidePropsContext } from "next";

const parseSubdomain = (host: string | undefined) => {
  if (!host) return null;

  const hostSplit = host.split(".");

  if (hostSplit.length < 3) return null;

  return hostSplit[0];
};

export const getSubdimain = (context: GetServerSidePropsContext) => {
  return parseSubdomain(context.req.headers.host);
};
