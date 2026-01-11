import { PAGE } from "./contants";

export default defineAppConfig({
  pages: [PAGE.Index, PAGE.Activity, PAGE.Record].map((e) => e.slice(1)),
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: PAGE.Index.slice(1),
        text: "全部分类",
      },
      {
        pagePath: PAGE.Activity.slice(1),
        text: "免费领胶卷",
      },
      {
        pagePath: PAGE.Record.slice(1),
        text: "生成记录",
      },
    ],
  },
});
