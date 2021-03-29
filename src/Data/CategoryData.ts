export const categories: Categories = [
  {
    id: 1,
    category: '食べ物',
    icon: 'fastfood',
  },
  {
    id: 2,
    category: '交通',
    icon: 'directions-car',
  },
  {
    id: 3,
    category: 'お金',
    icon: 'attach-money',
  },
  {
    id: 4,
    category: 'タバコ',
    icon: 'smoking-rooms',
  },
];

export type Category = {
  id: number;
  category: string;
  icon: string;
};

export type Categories = Category[];
