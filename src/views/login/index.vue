<script setup>
import { ref } from "vue";
import { Toast } from "vant";
import { Form, Field, CellGroup } from "vant";
const username = ref("");
const password = ref("");
const onSubmit = (values) => {
  console.log("submit", values);
};
</script>
<template>
  <Form @submit="onSubmit">
    <CellGroup inset>
      <Field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <Field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </CellGroup>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </Form>
</template>
