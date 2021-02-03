export const formatCurrency = (value: string | number) => {
  return "Rp" + new Intl.NumberFormat('id').format(Number(value));
};