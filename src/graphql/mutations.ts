/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
      id
      user
      name
      lastname
      city
      state
      country
      zip
      phone
      email
      deliveryAddress {
        items {
          id
          city
          state
          country
          zip
          phone
          address
          details
          createdAt
          updatedAt
          clientDeliveryAddressId
          deliveryOrderId
          owner
        }
        nextToken
      }
      orders {
        items {
          id
          title
          date
          total
          status
          paymentStatus
          paymentType
          createdAt
          updatedAt
          clientOrdersId
          orderDeliveryId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
      id
      user
      name
      lastname
      city
      state
      country
      zip
      phone
      email
      deliveryAddress {
        items {
          id
          city
          state
          country
          zip
          phone
          address
          details
          createdAt
          updatedAt
          clientDeliveryAddressId
          deliveryOrderId
          owner
        }
        nextToken
      }
      orders {
        items {
          id
          title
          date
          total
          status
          paymentStatus
          paymentType
          createdAt
          updatedAt
          clientOrdersId
          orderDeliveryId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
      id
      user
      name
      lastname
      city
      state
      country
      zip
      phone
      email
      deliveryAddress {
        items {
          id
          city
          state
          country
          zip
          phone
          address
          details
          createdAt
          updatedAt
          clientDeliveryAddressId
          deliveryOrderId
          owner
        }
        nextToken
      }
      orders {
        items {
          id
          title
          date
          total
          status
          paymentStatus
          paymentType
          createdAt
          updatedAt
          clientOrdersId
          orderDeliveryId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createDelivery = /* GraphQL */ `
  mutation CreateDelivery(
    $input: CreateDeliveryInput!
    $condition: ModelDeliveryConditionInput
  ) {
    createDelivery(input: $input, condition: $condition) {
      id
      city
      state
      country
      zip
      phone
      address
      details
      order {
        id
        title
        date
        total
        orderDetails {
          productID
          productName
          productColor
          productThumbnail
          quantity
          total
        }
        client {
          id
          user
          name
          lastname
          city
          state
          country
          zip
          phone
          email
          createdAt
          updatedAt
          owner
        }
        delivery {
          id
          city
          state
          country
          zip
          phone
          address
          details
          createdAt
          updatedAt
          clientDeliveryAddressId
          deliveryOrderId
          owner
        }
        status
        paymentStatus
        paymentType
        products {
          nextToken
        }
        createdAt
        updatedAt
        clientOrdersId
        orderDeliveryId
        owner
      }
      client {
        id
        user
        name
        lastname
        city
        state
        country
        zip
        phone
        email
        deliveryAddress {
          nextToken
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      clientDeliveryAddressId
      deliveryOrderId
      owner
    }
  }
`;
export const updateDelivery = /* GraphQL */ `
  mutation UpdateDelivery(
    $input: UpdateDeliveryInput!
    $condition: ModelDeliveryConditionInput
  ) {
    updateDelivery(input: $input, condition: $condition) {
      id
      city
      state
      country
      zip
      phone
      address
      details
      order {
        id
        title
        date
        total
        orderDetails {
          productID
          productName
          productColor
          productThumbnail
          quantity
          total
        }
        client {
          id
          user
          name
          lastname
          city
          state
          country
          zip
          phone
          email
          createdAt
          updatedAt
          owner
        }
        delivery {
          id
          city
          state
          country
          zip
          phone
          address
          details
          createdAt
          updatedAt
          clientDeliveryAddressId
          deliveryOrderId
          owner
        }
        status
        paymentStatus
        paymentType
        products {
          nextToken
        }
        createdAt
        updatedAt
        clientOrdersId
        orderDeliveryId
        owner
      }
      client {
        id
        user
        name
        lastname
        city
        state
        country
        zip
        phone
        email
        deliveryAddress {
          nextToken
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      clientDeliveryAddressId
      deliveryOrderId
      owner
    }
  }
`;
export const deleteDelivery = /* GraphQL */ `
  mutation DeleteDelivery(
    $input: DeleteDeliveryInput!
    $condition: ModelDeliveryConditionInput
  ) {
    deleteDelivery(input: $input, condition: $condition) {
      id
      city
      state
      country
      zip
      phone
      address
      details
      order {
        id
        title
        date
        total
        orderDetails {
          productID
          productName
          productColor
          productThumbnail
          quantity
          total
        }
        client {
          id
          user
          name
          lastname
          city
          state
          country
          zip
          phone
          email
          createdAt
          updatedAt
          owner
        }
        delivery {
          id
          city
          state
          country
          zip
          phone
          address
          details
          createdAt
          updatedAt
          clientDeliveryAddressId
          deliveryOrderId
          owner
        }
        status
        paymentStatus
        paymentType
        products {
          nextToken
        }
        createdAt
        updatedAt
        clientOrdersId
        orderDeliveryId
        owner
      }
      client {
        id
        user
        name
        lastname
        city
        state
        country
        zip
        phone
        email
        deliveryAddress {
          nextToken
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      clientDeliveryAddressId
      deliveryOrderId
      owner
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      price
      weight
      options {
        name
        thumbnail
        colorCode
        stock
      }
      thumbnail
      images
      description
      avilable
      unlimited
      extraDetails
      order {
        items {
          id
          productID
          orderID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      price
      weight
      options {
        name
        thumbnail
        colorCode
        stock
      }
      thumbnail
      images
      description
      avilable
      unlimited
      extraDetails
      order {
        items {
          id
          productID
          orderID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      price
      weight
      options {
        name
        thumbnail
        colorCode
        stock
      }
      thumbnail
      images
      description
      avilable
      unlimited
      extraDetails
      order {
        items {
          id
          productID
          orderID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      title
      date
      total
      orderDetails {
        productID
        productName
        productColor
        productThumbnail
        quantity
        total
      }
      client {
        id
        user
        name
        lastname
        city
        state
        country
        zip
        phone
        email
        deliveryAddress {
          nextToken
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      delivery {
        id
        city
        state
        country
        zip
        phone
        address
        details
        order {
          id
          title
          date
          total
          status
          paymentStatus
          paymentType
          createdAt
          updatedAt
          clientOrdersId
          orderDeliveryId
          owner
        }
        client {
          id
          user
          name
          lastname
          city
          state
          country
          zip
          phone
          email
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        clientDeliveryAddressId
        deliveryOrderId
        owner
      }
      status
      paymentStatus
      paymentType
      products {
        items {
          id
          productID
          orderID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      clientOrdersId
      orderDeliveryId
      owner
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      title
      date
      total
      orderDetails {
        productID
        productName
        productColor
        productThumbnail
        quantity
        total
      }
      client {
        id
        user
        name
        lastname
        city
        state
        country
        zip
        phone
        email
        deliveryAddress {
          nextToken
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      delivery {
        id
        city
        state
        country
        zip
        phone
        address
        details
        order {
          id
          title
          date
          total
          status
          paymentStatus
          paymentType
          createdAt
          updatedAt
          clientOrdersId
          orderDeliveryId
          owner
        }
        client {
          id
          user
          name
          lastname
          city
          state
          country
          zip
          phone
          email
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        clientDeliveryAddressId
        deliveryOrderId
        owner
      }
      status
      paymentStatus
      paymentType
      products {
        items {
          id
          productID
          orderID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      clientOrdersId
      orderDeliveryId
      owner
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      title
      date
      total
      orderDetails {
        productID
        productName
        productColor
        productThumbnail
        quantity
        total
      }
      client {
        id
        user
        name
        lastname
        city
        state
        country
        zip
        phone
        email
        deliveryAddress {
          nextToken
        }
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      delivery {
        id
        city
        state
        country
        zip
        phone
        address
        details
        order {
          id
          title
          date
          total
          status
          paymentStatus
          paymentType
          createdAt
          updatedAt
          clientOrdersId
          orderDeliveryId
          owner
        }
        client {
          id
          user
          name
          lastname
          city
          state
          country
          zip
          phone
          email
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        clientDeliveryAddressId
        deliveryOrderId
        owner
      }
      status
      paymentStatus
      paymentType
      products {
        items {
          id
          productID
          orderID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      clientOrdersId
      orderDeliveryId
      owner
    }
  }
`;
export const createProductOrders = /* GraphQL */ `
  mutation CreateProductOrders(
    $input: CreateProductOrdersInput!
    $condition: ModelProductOrdersConditionInput
  ) {
    createProductOrders(input: $input, condition: $condition) {
      id
      productID
      orderID
      product {
        id
        name
        price
        weight
        options {
          name
          thumbnail
          colorCode
          stock
        }
        thumbnail
        images
        description
        avilable
        unlimited
        extraDetails
        order {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      order {
        id
        title
        date
        total
        orderDetails {
          productID
          productName
          productColor
          productThumbnail
          quantity
          total
        }
        client {
          id
          user
          name
          lastname
          city
          state
          country
          zip
          phone
          email
          createdAt
          updatedAt
          owner
        }
        delivery {
          id
          city
          state
          country
          zip
          phone
          address
          details
          createdAt
          updatedAt
          clientDeliveryAddressId
          deliveryOrderId
          owner
        }
        status
        paymentStatus
        paymentType
        products {
          nextToken
        }
        createdAt
        updatedAt
        clientOrdersId
        orderDeliveryId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateProductOrders = /* GraphQL */ `
  mutation UpdateProductOrders(
    $input: UpdateProductOrdersInput!
    $condition: ModelProductOrdersConditionInput
  ) {
    updateProductOrders(input: $input, condition: $condition) {
      id
      productID
      orderID
      product {
        id
        name
        price
        weight
        options {
          name
          thumbnail
          colorCode
          stock
        }
        thumbnail
        images
        description
        avilable
        unlimited
        extraDetails
        order {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      order {
        id
        title
        date
        total
        orderDetails {
          productID
          productName
          productColor
          productThumbnail
          quantity
          total
        }
        client {
          id
          user
          name
          lastname
          city
          state
          country
          zip
          phone
          email
          createdAt
          updatedAt
          owner
        }
        delivery {
          id
          city
          state
          country
          zip
          phone
          address
          details
          createdAt
          updatedAt
          clientDeliveryAddressId
          deliveryOrderId
          owner
        }
        status
        paymentStatus
        paymentType
        products {
          nextToken
        }
        createdAt
        updatedAt
        clientOrdersId
        orderDeliveryId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteProductOrders = /* GraphQL */ `
  mutation DeleteProductOrders(
    $input: DeleteProductOrdersInput!
    $condition: ModelProductOrdersConditionInput
  ) {
    deleteProductOrders(input: $input, condition: $condition) {
      id
      productID
      orderID
      product {
        id
        name
        price
        weight
        options {
          name
          thumbnail
          colorCode
          stock
        }
        thumbnail
        images
        description
        avilable
        unlimited
        extraDetails
        order {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      order {
        id
        title
        date
        total
        orderDetails {
          productID
          productName
          productColor
          productThumbnail
          quantity
          total
        }
        client {
          id
          user
          name
          lastname
          city
          state
          country
          zip
          phone
          email
          createdAt
          updatedAt
          owner
        }
        delivery {
          id
          city
          state
          country
          zip
          phone
          address
          details
          createdAt
          updatedAt
          clientDeliveryAddressId
          deliveryOrderId
          owner
        }
        status
        paymentStatus
        paymentType
        products {
          nextToken
        }
        createdAt
        updatedAt
        clientOrdersId
        orderDeliveryId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
