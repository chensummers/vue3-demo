const OrderList = [
  {
    name: "Order",
    path: "/order",
    component: () =>
      import(/* webpackChunkName: "order" */ "@/views/order/orderHome.vue"),
    children: [
      {
        name: "OrderDetail",
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "order" */ "@/views/order/orderDetail.vue"
          ),
      },
    ],
  },
];
export default OrderList;
