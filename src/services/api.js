// Mock API functions

export const fetchActiveSaleOrders = async () => {
  return [
    {
      id: 1,
      customerName: "Spider ap2000",
      price: 100,
      lastModified: "24/5/2024 (11:07 PM)",
    },
    {
      id: 2,
      customerName: "Spider ap2000",
      price: 210,
      lastModified: "24/5/2024 (11:30 PM)",
    },
  ];
};

export const fetchCompletedSaleOrders = async () => {
  return [
    {
      id: 1,
      customerName: "Spider ap2000",
      price: 100,
      lastModified: "24/5/2024 (11:07 PM)",
    },
    {
      id: 2,
      customerName: "Spider ap2000",
      price: 210,
      lastModified: "24/5/2024 (11:30 PM)",
    },
  ];
};
