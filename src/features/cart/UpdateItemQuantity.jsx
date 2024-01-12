import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { increaseItemQuantity, decreaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQty }) {
  const dispatch = useDispatch();

  function handleIncreaseQty(e) {
    e.preventDefault();
    dispatch(increaseItemQuantity(pizzaId));
  }

  function handleDecreaseQty(e) {
    e.preventDefault();
    dispatch(decreaseItemQuantity(pizzaId));
  }
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={handleDecreaseQty}>
        -
      </Button>
      <span className="text-sm font-medium gap-3">{currentQty}</span>
      <Button type="round" onClick={handleIncreaseQty}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
