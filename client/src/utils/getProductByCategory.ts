import getdata from "@/utils/service";

export async function getProductByCategory(category: string) {
  try {
    const { data } = await getdata(
      `/product/bycategory/${category.toLowerCase()}?page=1&limit=10`
    );

    console.log(data);

    return data;
  } catch (e: any) {
    console.log(e);
    throw new Error(e.message);
  }
}
