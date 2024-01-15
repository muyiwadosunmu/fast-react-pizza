import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    // The normal Form in react-router-dom creates a navigation while the one below doesn't
    // It basically sub,its the form and re-validate the page
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary"></Button>
    </fetcher.Form>
  );
}

// We don't need the request for this one
export async function action({ request, params }) {
  const data = { priority: true }; //we are working to change the priority here
  await updateOrder(params.orderId, data);
  return null;
}

export default UpdateOrder;
