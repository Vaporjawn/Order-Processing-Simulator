const GetSuffix = (count: number): string => {
  if (count >= 11 && count <= 13) {
    return 'th';
  }
  switch (count % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

export default GetSuffix;
