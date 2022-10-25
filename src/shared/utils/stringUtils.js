const getSourceSetFromArray = imgArray => {
  const sources = Object.values(imgArray)
    .map(img => `${img.image} ${img.size}`)
    .join(", ");

  return sources;
};

export default getSourceSetFromArray;
