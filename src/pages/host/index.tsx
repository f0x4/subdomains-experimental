import { getSubdimain } from "@/utils/subdomain";
import type { GetServerSideProps, NextPage } from "next";

type Subdomain = { subdomain: string | undefined };

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: { subdomain: getSubdimain(context) },
});

const Page: NextPage<Subdomain> = ({ subdomain }) => (
  <>
    <p>Subdomain: {subdomain || "no subdomain"}</p>
  </>
);

export default Page;
