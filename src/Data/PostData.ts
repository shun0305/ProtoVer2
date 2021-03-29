export const posts: Posts = [
  {
    id: 1,
    username: '伊藤 峻平',
    profileImage:
      'https://souspeak.jp/blog/wp-content/uploads/2019/08/IMG_8917-1.jpg',
    place: ['ニューヨーク', 'アメリカ合衆国'],
    content: 'CD渡してくるのは詐欺だから気をつけて',
    category: 'お金',
    info: 'warn',
    time: '2020.03.03',
  },
  {
    id: 2,
    username: 'Hitomi',
    profileImage:
      'https://www.colorlines.com/sites/default/files/styles/article_lead_normal/public/images/articles/2018/10/black-women-breast-cancer-awareness-10-1-18.jpg?itok=F29Mihqw',
    place: ['釜山', '韓国'],
    content: 'こんな所に喫煙所発見！生き返る〜〜⤴︎⤴︎',
    category: 'タバコ',
    info: 'profit',
    time: '2020.04.03',
  },
];

export type Post = {
  id: number;
  username: string;
  profileImage: string;
  place: string[];
  content: string;
  category: string;
  info: string;
  time: string;
};

export type Posts = Post[];
