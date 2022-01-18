Vue.createApp({
	data() {
		return {
			valueInput: "",
			ToDoList: [],
			DoneList: [],
		};
	},
	methods: {
		handleInput(event) {
			this.valueInput = event.target.value;
		},
		addTask() {
			if (this.valueInput === "") {
				return;
			}
			this.ToDoList.push({
				title: this.valueInput,
				id: Math.random(),
			});
			this.valueInput = "";
		},
		doCheck(index, type) {
			if (type === "need") {
				const completeMask = this.ToDoList.splice(index, 1);
				this.DoneList.push(...completeMask);
			} else {
				const noCompleteMask = this.DoneList.splice(index, 1);
				this.ToDoList.push(...noCompleteMask);
			}
		},
		removeMask(index, type) {
			const toDoList = type === "need" ? this.ToDoList : this.DoneList;
			toDoList.splice(index, 1);
		},
	},
}).mount("#app");
