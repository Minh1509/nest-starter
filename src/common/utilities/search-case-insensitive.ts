export const searchCaseInsensitive = (searchField: string): string => {
  return `LOWER(REPLACE(${searchField}, ' ', '')) LIKE LOWER(REPLACE(:keyword, ' ', ''))`;
};

export const searchCaseInsensitiveUnaccent = (searchField: string): string => {
  return `UNACCENT(LOWER(REPLACE(${searchField}, ' ', ''))) LIKE UNACCENT(LOWER(REPLACE(:keyword, ' ', '')))`;
};

export const searchCaseInsensitiveILike = (searchField: string): string => {
  return `${searchField} ILIKE :keyword`;
};

export const searchCaseInsensitiveUnaccentILike = (searchField: string): string => {
  return `UNACCENT(${searchField}) ILIKE UNACCENT(:keyword)`;
};
