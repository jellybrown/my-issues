export const requestPromises = async (promises: Promise<any>[]) => {
  const results = await Promise.allSettled(promises || []);
  const data: Record<string, any>[] = [];

  results.forEach((result, idx) => {
    if (result.status === 'fulfilled') {
      data.push(...result.value);
    } else {
      console.log(`request promises error... ${idx}번째: `, result);
    }
  });
  return data;
};

export const convertDateKr = (date: string) => {
  return new Date(date).toLocaleString('KO-KR');
};
