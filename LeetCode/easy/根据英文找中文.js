/**
 * 根据英文标题获取中文标题
 */
const data = {
  en: 'harry potter',
  cn: '哈利波特',
  extra: [
    {
      en: 'chapter 1',
      cn: '第一章',
      extra: [
        {
          en: 'node 1',
          cn: '第一节',
        },
        {
          en: 'node 2',
          cn: '第二节',
        },
        {
          en: 'node 3',
          cn: '第三节',
        },
      ],
    },
    {
      en: 'chapter 2',
      cn: '第二章',
      extra: [
        {
          en: 'node 1',
          cn: '第一节',
          extra: [
            {
              en: 'paragraph 1',
              cn: '第一段',
            },
            {
              en: 'paragraph 2',
              cn: '第二段',
            },
          ],
        },
        {
          en: 'node 2',
          cn: '第二节',
        },
        {
          en: 'node 3',
          cn: '第三节',
        },
      ],
    },
  ],
};
const getCNTitle = (data, title) => {
  let result = '';
  if (data.length === undefined) {
    data = [data];
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i].en === title) {
      result = data[i].cn;
      break;
    } else if (data[i].extra) {
      result = getCNTitle(data[i].extra, title);
    }
  }
  return result || -1;
};
console.log(getCNTitle(data, 'node 1'));
