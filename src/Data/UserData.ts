export const users: Users = [
  {
    id: 1,
    username: '伊藤 峻平',
    profileImage:
      'https://souspeak.jp/blog/wp-content/uploads/2019/08/IMG_8917-1.jpg',
    isTraveling: true,
    place: ['ニューヨーク', 'アメリカ合衆国'],
  },
  {
    id: 2,
    username: 'Hitomi',
    profileImage:
      'https://www.colorlines.com/sites/default/files/styles/article_lead_normal/public/images/articles/2018/10/black-women-breast-cancer-awareness-10-1-18.jpg?itok=F29Mihqw',
    isTraveling: false,
    place: ['釜山', '韓国'],
  },
];

export type User = {
  id: number;
  username: string;
  profileImage: string;
  isTraveling: boolean;
  place: string[];
};

export type Users = User[];
