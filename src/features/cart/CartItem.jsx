import { formatCurrency } from '../../utils/helpers'
import UpdateItemQuantity from './UpdateItemQuantity'
import DeleteItem from './DeleteItem'
import { useSelector } from 'react-redux'
import { getQuantituByID } from './cartSlice'
function CartItem({ item }) {
    const { pizzaId, name, quantity, totalPrice } = item
    const getQuantity = useSelector(getQuantituByID(pizzaId))
    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p
                className="mb-1 
      sm:mb-0"
            >
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">
                    {formatCurrency(totalPrice)}
                </p>
                <UpdateItemQuantity
                    pizzaId={pizzaId}
                    getQuantity={getQuantity}
                />
                <DeleteItem pizzaId={pizzaId} />
            </div>
        </li>
    )
}

export default CartItem
