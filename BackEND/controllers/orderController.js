import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

const addOrderItems=asyncHandler(async(req,res)=>{
    const{
        orderItems,
        shippingAdress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice
    }=req.body
    if(orderItems && orderItems.length ===0){
    res.status(400)
    throw new Error('no order items')
    return
}else{
    const order =new Order({
        orderItems,
        user:req.user._id,
        shippingAdress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice
    })
    const createOrder= await order.save()
    res.status(201).json(createOrder)
}
})
export {addOrderItems}
