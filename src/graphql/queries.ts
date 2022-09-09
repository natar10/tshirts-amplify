/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
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
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDelivery = /* GraphQL */ `
  query GetDelivery($id: ID!) {
    getDelivery(id: $id) {
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
export const listDeliveries = /* GraphQL */ `
  query ListDeliveries(
    $filter: ModelDeliveryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeliveries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProductOrders = /* GraphQL */ `
  query GetProductOrders($id: ID!) {
    getProductOrders(id: $id) {
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
export const listProductOrders = /* GraphQL */ `
  query ListProductOrders(
    $filter: ModelProductOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productID
        orderID
        product {
          id
          name
          price
          weight
          thumbnail
          images
          description
          avilable
          unlimited
          extraDetails
          createdAt
          updatedAt
          owner
        }
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
