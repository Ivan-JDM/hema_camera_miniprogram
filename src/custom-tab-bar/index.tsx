import React from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import { PAGE } from "@/contants";
import "./index.scss";

interface TabItem {
  pagePath: string;
  text: string;
}

export default class CustomTabBar extends React.Component {
  state = {
    selected: 0,
    list: [
      {
        pagePath: PAGE.Index,
        text: "全部分类",
      },
      {
        pagePath: PAGE.Activity,
        text: "免费领胶卷",
      },
      {
        pagePath: PAGE.Record,
        text: "生成记录",
      },
    ] as TabItem[],
  };

  switchTab = (index: number, url: string) => {
    this.setSelected(index);
    Taro.switchTab({ url }).catch(() => {
      // 如果不是tabBar页面，使用navigateTo
      Taro.navigateTo({ url });
    });
  };

  setSelected = (idx: number) => {
    this.setState({
      selected: idx,
    });
  };

  render() {
    const { list, selected } = this.state;

    return (
      <View className="custom-tabbar">
        <View className="custom-tabbar-left">
          {list.slice(0, 2).map((item, index) => {
            const isActive = selected === index;
            return (
              <View
                key={index}
                className={`tab-item ${isActive ? "active" : ""}`}
                onClick={() => this.switchTab(index, item.pagePath)}
              >
                <Text className="tab-text">{item.text}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
