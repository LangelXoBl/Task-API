export const getPagination = (page, size, title) => {
  const limit = size ? +size : 2; //#cuantos docuementos devolvera mongo
  const offset = page ? page * limit : 0; //#en que pagina se encontrara el ususario
  const condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};
  return { limit, offset, condition };
};
