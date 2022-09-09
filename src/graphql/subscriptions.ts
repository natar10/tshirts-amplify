/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient($owner: String) {
    onCreateClient(owner: $owner) {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient($owner: String) {
    onUpdateClient(owner: $owner) {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient($owner: String) {
    onDeleteClient(owner: $owner) {
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
export const onCreateDelivery = /* GraphQL */ `
  subscription OnCreateDelivery($owner: String) {
    onCreateDelivery(owner: $owner) {
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
export const onUpdateDelivery = /* GraphQL */ `
  subscription OnUpdateDelivery($owner: String) {
    onUpdateDelivery(owner: $owner) {
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
export const onDeleteDelivery = /* GraphQL */ `
  subscription OnDeleteDelivery($owner: String) {
    onDeleteDelivery(owner: $owner) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($owner: String) {
    onCreateOrder(owner: $owner) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($owner: String) {
    onUpdateOrder(owner: $owner) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($owner: String) {
    onDeleteOrder(owner: $owner) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($owner: String) {
    onCreateProduct(owner: $owner) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($owner: String) {
    onUpdateProduct(owner: $owner) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($owner: String) {
    onDeleteProduct(owner: $owner) {
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
export const onCreateProductOrders = /* GraphQL */ `
  subscription OnCreateProductOrders($owner: String) {
    onCreateProductOrders(owner: $owner) {
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
export const onUpdateProductOrders = /* GraphQL */ `
  subscription OnUpdateProductOrders($owner: String) {
    onUpdateProductOrders(owner: $owner) {
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
export const onDeleteProductOrders = /* GraphQL */ `
  subscription OnDeleteProductOrders($owner: String) {
    onDeleteProductOrders(owner: $owner) {
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
