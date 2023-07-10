type CartProduct = {
  id: string;
};

export interface CategoryProduct {
  id: string;
  title: string;
  description: string;
  public: boolean;
  adminApprove: boolean;
  rating: null;
  brand: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  categories: CategoryElement[];
  image: Image[];
  versions: VersionElement[];
}

export interface CategoryElement {
  id: string;
  category: string;
}

export interface Image {
  id: string;
  url: string;
  productId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface VersionElement {
  id: string;
  version: string;
  currentPrice: string;
  marketPrice: string;
  quantity: number;
  productId: string;
  createdAt: Date;
  updatedAt: Date;
}
