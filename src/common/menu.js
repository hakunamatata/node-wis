import { isUrl } from '../utils/utils';

// const menuData = [
//   {
//     name: '列表页',
//     icon: 'table',
//     path: 'list',
//     children: [
//       {
//         name: '查询表格',
//         path: 'table-list',
//       }
//     ]
//   },


// ];

const menuData = [
  {
    name: 'System',
    icon: 'table',
    path: 'system',
    children: [
      {
        name: 'Overview',
        path: 'overview',
      }
    ]
  },
  // {
  //   name: 'Company Manage',
  //   icon: 'table',
  //   path: '/company',
  //   children: [
  //     {
  //       name: 'Overview',
  //       path: '/overview',
  //     }
  //   ]
  // },
  // {
  //   name: 'Property Manage',
  //   icon: 'table',
  //   path: '/property',
  //   children: [
  //     {
  //       name: 'Overview',
  //       path: '/overview',
  //     }
  //   ]
  // },
  // {
  //   name: 'Campaign Manage',
  //   icon: 'table',
  //   path: '/campaign',
  //   children: [
  //     {
  //       name: 'Overview',
  //       path: '/overview',
  //     }
  //   ]
  // },  {
  //   name: 'Translation Manage',
  //   icon: 'table',
  //   path: '/translation',
  //   children: [
  //     {
  //       name: 'Overview',
  //       path: '/overview',
  //     }
  //   ]
  // },  {
  //   name: 'Functions',
  //   icon: 'table',
  //   path: '/functions',
  //   children: [
  //     {
  //       name: 'Overview',
  //       path: '/overview',
  //     }
  //   ]
  // },  {
  //   name: 'Task & Service',
  //   icon: 'table',
  //   path: '/task',
  //   children: [
  //     {
  //       name: 'Overview',
  //       path: '/overview',
  //     }
  //   ]
  // },  {
  //   name: 'Wechat Manage',
  //   icon: 'table',
  //   path: '/wechat',
  //   children: [
  //     {
  //       name: 'Overview',
  //       path: '/overview',
  //     }
  //   ]
  // }
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
