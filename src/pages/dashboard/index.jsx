import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import { Chart } from '@common/Chart';

const PRODUCT_LIMIT = 30;
const PRODUCT_OFFSET = 0;

export default function Dashboard() {
  const products = useFetch(endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET));
  console.log(products);

  const categoryNames = products?.map((product) => product.category);
  const categoryCount = categoryNames?.map((category) => category.name);
  console.log(categoryCount)
  console.log(categoryNames)

  const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {})

  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOccurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#707B7C', '#DAF7A6', '#5B2C6F', '#3B124D', '#a80130'],
      },
    ],
  };

  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data} />
    </>
  );
}
