import SwaggerDoc from "@/components/SwaggerDoc";
import { getApiDocs } from "@/lib/swagger";

export default async function IndexPage() {
  const spec = await getApiDocs();
  return (
    <section className="container">
      <SwaggerDoc spec={spec} />
    </section>
  );
}
