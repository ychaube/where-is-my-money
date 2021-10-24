const initState = {
  transactions: [
    {
      name: "",
      amount: "",
      account: "",
      isFuture: false,
      futureTransactionDetails: {
        dueDate: "",
      },
      isRecurring: false,
      recurringTransactionDetails: {
        recurringDate: "",
      },
      creationDate: "",
      lastModificationDate: "",
      action: [],
      notes: "",
      tags: [],
    },
  ],
};

const transactionReducer = (state = initState, action) => {
  return state;
};

export default transactionReducer;
