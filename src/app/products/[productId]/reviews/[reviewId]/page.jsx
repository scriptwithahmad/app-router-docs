export default function page({ params }) {
  return (
    <>
      <h1>Nested dynamic Routing</h1>
      <h1>
        this is Product {params.productId} and reivews {params.reviewId}
      </h1>
    </>
  );
}
