import {useDispatch} from "react-redux"
import { deleteItem } from "./cartSlice"
import Button from "../../ui/Button"

function DeleteItem({pizzaId}) {
    const dispatch = useDispatch();

    function handleDeleteItem(e) {
        e.preventDefault();
        dispatch(deleteItem(pizzaId))
    }
  return (
    <Button type="small" onClick={handleDeleteItem}>Delete</Button>
  )
}

export default DeleteItem