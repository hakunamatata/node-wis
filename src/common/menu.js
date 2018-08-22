import { isUrl } from '../utils/utils';

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
  {
    name: 'Company Manage',
    icon: 'table',
    path: 'company',
    children: [
      {
        name: 'Company',
        path: 'list',
      },
      {
        name: 'Agent Manage',
        path: 'agent',
        children:[
          {
            name: 'Agents',
            path: 'agents',
          },
          {
            name: 'Credits',
            path: 'credits',
          },
          {
            name: 'Password Requests',
            path: 'pwdreqs',
          }
        ]
      }
    ]
  },
  {
    name: 'Property Manage',
    icon: 'table',
    path: 'property',
    children: [
      {
        name: 'Property',
        path: 'list',
      },
      {
        name: 'Settings',
        path:'settings',
        children:[
          {
            name: 'Classification',
            path: 'classification',
          },
          {
            name: 'Type',
            path: 'type',
          },
          {
            name: 'Area',
            path: 'area',
          },
          {
            name: 'Tunure Type',
            path: 'tunure',
          }
        ]
      }
    ]
  },
  {
    name: 'Campaign Manage',
    icon: 'table',
    path: 'campaign',
    children: [
      {
        name: 'Campaign',
        path: 'list',
      },
      {
        name: 'Package',
        path: 'package',
      },
      {
        name: 'Invoice Manage',
        path: 'invoice',
        children:[
          {
            name: 'Package',
            path: 'package',
          },  
        ]
      }
    ]
  }, 
  {
    name: 'Translation Manage',
    icon: 'table',
    path: 'translation',
  }, 
  {
    name: 'Functions',
    icon: 'table',
    path: 'functions',
  },
  {
    name: 'Task & Service',
    icon: 'table',
    path: 'task',
  }, 
  {
    name: 'Wechat Manage',
    icon: 'table',
    path: 'wechat',
  }
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
