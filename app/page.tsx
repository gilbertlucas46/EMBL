import style from "./styles/styles.module.scss";
import { getClient } from "@/lib/client";
import { LUNG_CARCINOMA_ASSOCIATED_TARGETS_QUERY } from "@/lib/graphql-query-mutation";
import Sheets from "./components/Sheets/Sheets";

export default async function Home() {
  const { data } = await getClient().query({
    query: LUNG_CARCINOMA_ASSOCIATED_TARGETS_QUERY,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return (
    <main className="container">
      <Sheets data={data.disease} />
    </main>
  );
}
