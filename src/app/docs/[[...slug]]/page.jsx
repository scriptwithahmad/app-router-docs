export default function Docs({ params }) {
  return (
    <>
      <h2>Docs Slug Page Home</h2>

      <h1>
        Your Are Viewing route {params.slug[0]} , {params.slug[1]} and
        {params.slug[2]}
      </h1>
    </>
  );
}
