export const initialData = {
  tickets: {
    ticket_1: {
      id: "ticket_1",
      content: "チケットを自由に追加できます",
      consume: 4,
      estimate: 10,
    },
  ticket_2: {
      id: "ticket_2",
      content: "右の数字は見積もり時間の記録に使うと便利",
      consume: 0,
      estimate: 0,
    }
  },
  columns: {
    column_1: {
      id: "column_1",
      title: "リストも自由に追加できます",
      ticketIds: ["ticket_1", "ticket_2"],
    },
  },
  columnOrder: ["column_1"],
};
