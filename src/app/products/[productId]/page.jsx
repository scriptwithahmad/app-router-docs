export default function ProdcutDetails({ params }) {
  console.log(params);
  return (
    <>
      <h1>Product No {params.productId} Details Page</h1>
    </>
  );
}
