import {useDispatch} from 'react-redux'
import Button from "../../ui/Button";
/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";
import { addItem } from '../cart/cartSlice';

function MenuItem({ pizza }) {
  const dispatch  = useDispatch()
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  function handleAddToCart() {
    const newItem =  {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
    }

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex flex-grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex flex-grow items-center justify-between">
          {!soldOut ? (
            <p className="text-sm font-medium uppercase text-stone-500">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p>Sold out</p>
          )}
          {!soldOut && <Button type="small" onClick={handleAddToCart}>Add to Cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
