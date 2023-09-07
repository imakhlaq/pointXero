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
  categories: Category[];
  image: Image[];
  versions: Version[];
}

export interface Category {
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

export interface Version {
  id: string;
  version: string;
  currentPrice: string;
  marketPrice: string;
  quantity: number;
  productId: string;
  createdAt: Date;
  updatedAt: Date;
}
//auth response
export interface AuthResponse {
  token: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
}

//cart update response
export interface CartProduct {
  id: string;
  cartPrice: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  CartItem: CartItem[];
}

export type Product = Omit<CategoryProduct, "categories", "versions">;

export interface CartItem {
  id: string;
  price: string;
  quantity: number;
  cartId: string;
  productId: string;
  versionId: string;
  createdAt: string;
  updatedAt: string;
  product: Product;
  version: Version;
}
