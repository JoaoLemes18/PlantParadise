import { FavoriteItems } from "../screens/Favorites/FavoriteScreen";
import { createContext, useContext, useState } from "react";

interface favoriteProps {
  favoriteItems: FavoriteItems[];
  addFavorite: (item: any) => void;
  deletefavorite: (itemId: string) => void;
}

const FavoriteContext = createContext<favoriteProps>({} as favoriteProps);

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um favoriteProvider");
  }
  return context;
};

const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItems[]>([]);

  const addFavorite = (item: any) => {
    setFavoriteItems([...favoriteItems, item]);
  };

  const deletefavorite = (itemId: string) => {
    setFavoriteItems(favoriteItems.filter((item) => item.id !== itemId));
  };

  return (
    <FavoriteContext.Provider
      value={{ favoriteItems, addFavorite, deletefavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
