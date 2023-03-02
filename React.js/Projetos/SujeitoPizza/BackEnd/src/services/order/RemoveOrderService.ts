import prismaClient from "../../prisma";

interface Orderrequest{
    order_id: string
}

class RemoveOrderService{
    async execute({order_id}: Orderrequest){

        const order = await prismaClient.order.delete({
            where:{
                id: order_id,
            }
        })
        return order
    }
}

export { RemoveOrderService }