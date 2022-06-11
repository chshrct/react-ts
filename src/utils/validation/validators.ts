export const textAreasValidation =
  (length: number) =>
  (value: string): string => {
    if (!value) return 'field required';
    if (value.length > length) return `length should be less then ${length}`;
    return '';
  };
