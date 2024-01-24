export default async function InfoPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return <div>{slug}</div>;
}
