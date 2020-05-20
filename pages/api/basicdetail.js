export default (req, res) => {
  res.status(200)
  res.setPreviewData({})
  res.json({
    refund: {
      pickUpOrderId: '1000000',
      state: '已取货',
      saleOrderId: '1112223330',
      subOrderId: '2221110009'
    },
    user: {
      name: '小可',
      tel: '18100000000',
      express: 'SF Express',
      address: '上海市金沙江路1006号3楼',
      remarks: '让世界变得更美丽'
    },
    refundList: [
      {
        goodsId: '1234560',
        goodsName: '魅-粉',
        goodsBarCode: '12345000',
        price: 2.0,
        count: 1,
        amount: 2.0
      },
      {
        goodsId: '1234561',
        goodsName: '魅-红',
        goodsBarCode: '12345001',
        price: 3.0,
        count: 2,
        amount: 6.0
      },
      {
        goodsId: '1234562',
        goodsName: '魅-紫',
        goodsBarCode: '12345002',
        price: 2.0,
        count: 5,
        amount: 10.0
      }
    ]
  })
}
