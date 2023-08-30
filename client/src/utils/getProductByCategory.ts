import service from "@/utils/service";

export async function getProductByCategory(category: string) {
  try {
    const { data } = await service(
      `/product/bycategory/${category.toLowerCase()}?page=1&limit=10`,
    );
    return data;
  } catch (e: any) {
    console.log(e);
    throw new Error(e.message);
  }
}
