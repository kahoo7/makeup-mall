<template>
  <div class="comment-wrapper">
    <div class="comment" v-if="Object.keys(commentInfo).length !== 0">
      <div class="comment-top">
        <span class="top-left">用户评价</span>
        <span class="top-right">更多</span>
      </div>
      <div class="comment-middle">
        <div class="user-info">
          <img :src="commentInfo.user.avatar" alt="">
          <span class="uname">{{commentInfo.user.uname}}</span>
        </div>
        <p class="comment-text">{{commentInfo.content}}</p>
      </div>
      <div class="comment-bottom">
        <span class="date">{{commentInfo.created | showFormatTime}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="comment-images" v-if="commentInfo.images">
        <img v-for="(item, index) in commentInfo.images" :key="index" :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  // 1.公共组件导入
  // 2.子组件导入
  // 3.功能函数导入
  import {formatTime} from '@/common/util'
  // 4.本组件对象
  export default {
    name: 'DetailCommentInfo',
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showFormatTime: function(value) {
        let fmt = formatTime(value*1000);
        return fmt;
      }
    }
  }
</script>

<style scoped>
  .comment-wrapper {
    border-bottom: 5px solid #f2f6f8;
  }
  .comment {
    margin: auto;
    margin-top: 20px;
    padding-bottom: 20px;
    width: 90%;
  }
  .comment-top {
    display: flex;
    padding-bottom: 5px;
    border-bottom: 1px solid #cccccc;
    justify-content: space-between;
  }
  .user-info {
    margin: 10px;
    display: flex;
    align-items: center;
    line-height: 45px;
  }
  .user-info img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .comment-middle p {
    margin: 20px 0;
    color: #777;
    font-size: 14px;
    line-height: var(--line-height);
  }
  .comment-bottom {
    font-size: 10px;
  }
  .comment-bottom .date {
    padding: 0 5px;
  }
  .comment-images {
    margin-left: 20px;
  }
  .comment-images img {
    margin: 10px;
    width: 50px;
  }
</style>