import App from './App.html';

const app = new App({
	target: document.body,
	data: {
		name: 'That Docker Registry',
		subtitle: '',
		item: null,
		isList: true,
		app_title: "That Docker Registry",
		repository_name: null,
		version: "0.0"
	}
});

export default app;