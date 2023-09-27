<template>
	<div class="app">
		<div v-if="state.account.memberId">안녕하세요? {{state.account.memberName}}
		<button @click="logout()">로그아웃</button>
		</div>
		<div v-else>
			<label for="memberId">
				<span>아이디</span>
				<input type="text" id="memberId" v-model="state.form.memberId"/>
			</label>
			<label for="password">
			<span>아이디</span>
				<input type="password" id="password" v-model="state.form.password"/>
			</label>
		</div>
		<button type="button" @click="submit()">로그인</button>
	</div>
</template>

<script>
import axios from "axios"
import {reactive} from "vue"
export default {
	setup() {
		const state = reactive({
			account: {
				memberId: null,
				memberName: ""
			},
			form: {
				memberId: "",
				password: ""
			},
			loggedIn: false
		});

		const submit = () => {
			const args = {
				memberId: state.form.memberId,
				password: state.form.password
			};

			axios.post("/api/account").then((res) => {
				console.log("로그인 성공");
				state.account = res.data;
			}).catch(() => {
				console.log("로그인 실패");
			});

		}

		const logout = () => {
			axios.delete("/api/account").then((res) => {
				console.log("로그아웃");
			});
		}

		axios.get("/api/account").then((res) => {
			console.log(res);
			state.account = res.data;
		});


			return {
				state,
				submit,
				logout
			};
		},


	
}
</script>
